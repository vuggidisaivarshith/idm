import { NextRequest, NextResponse } from 'next/server';
import { SYSTEM_PROMPT, processConsultantMessage } from '@/lib/chatbotKnowledge';

export const runtime = 'nodejs';

// Simple in-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 25; // 25 messages per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'anonymous';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          reply:
            'You are sending messages too quickly. Please pause for a moment and try again, or connect with our team directly on WhatsApp (+91 85198 37818).',
          suggestedActions: [{ label: '💬 WhatsApp Direct', prompt: 'Talk to human on WhatsApp' }],
        },
        { status: 429 }
      );
    }

    // 2. Body parsing and payload validation
    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request: messages must be a non-empty array' },
        { status: 400 }
      );
    }

    const latestMessageObj = messages[messages.length - 1];
    const userMessage = latestMessageObj?.text?.trim() || '';

    if (!userMessage) {
      return NextResponse.json(
        { error: 'User message cannot be empty' },
        { status: 400 }
      );
    }

    // Input sanitization / length limit
    const sanitizedUserMessage = userMessage.slice(0, 1500);

    // 3. Optional LLM Integration via Server-Side API Key (Gemini or OpenAI)
    // If external AI key is configured in process.env, use it with RAG system prompt
    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (geminiApiKey) {
      try {
        const contents = [
          { role: 'user', parts: [{ text: `SYSTEM INSTRUCTIONS:\n${SYSTEM_PROMPT}` }] },
          { role: 'model', parts: [{ text: 'Understood. I am IDM Smart Assistant, the official AI business consultant for IDM Smart Tech. I will strictly follow all instructions and company pricing policies.' }] },
          ...messages.slice(-6).map((m: any) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }],
          })),
        ];

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents,
              generationConfig: {
                temperature: 0.35,
                maxOutputTokens: 650,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const generatedText =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (generatedText) {
            return NextResponse.json({
              reply: generatedText,
              suggestedActions: [
                { label: '💰 Retainer Pricing', prompt: 'What are your monthly package prices?' },
                { label: '💬 Talk to Team on WhatsApp', prompt: 'I want to speak with an IDM team member.' },
              ],
              whatsappHandoff: {
                label: '💬 Discuss on WhatsApp',
                prefilledText: `Hello IDM Smart Tech, I am inquiring regarding: "${sanitizedUserMessage.slice(0, 100)}"`,
              },
              source: 'gemini-live',
            });
          }
        }
      } catch (externalError) {
        // Fall through gracefully to deterministic expert consultant engine
        console.warn('External AI call failed, falling back to local consultant engine:', externalError);
      }
    }

    // 4. In-House Consultant Engine (Deterministic, Grounded, Zero-Hallucination)
    const result = processConsultantMessage(sanitizedUserMessage, messages);

    return NextResponse.json({
      ...result,
      source: 'idm-smart-assistant-engine',
    });
  } catch (error: any) {
    console.error('Chatbot API route error:', error);
    return NextResponse.json(
      {
        reply:
          'I apologize, but I encountered a momentary processing error. You can ask again, or connect directly with our growth team on WhatsApp at +91 85198 37818.',
        suggestedActions: [
          { label: '💰 Package Pricing', prompt: 'What are your package prices?' },
          { label: '💬 WhatsApp Support', prompt: 'Connect with IDM on WhatsApp' },
        ],
      },
      { status: 200 }
    );
  }
}
