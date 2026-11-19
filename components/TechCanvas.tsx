'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function IridescentGlassOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const coreOrbRef = useRef<THREE.Mesh>(null);
  const innerGlowRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse parallax and rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    const targetY = state.pointer.x * 0.35 + state.clock.elapsedTime * 0.12;
    const targetX = -state.pointer.y * 0.2;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04);

    if (coreOrbRef.current) {
      coreOrbRef.current.rotation.y += 0.005;
      coreOrbRef.current.rotation.z += 0.003;
    }
    if (innerGlowRef.current) {
      innerGlowRef.current.rotation.x -= 0.008;
      innerGlowRef.current.rotation.y -= 0.006;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.008;
      ring1Ref.current.rotation.x += 0.004;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += 0.006;
      ring2Ref.current.rotation.z -= 0.005;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= 0.007;
    }
  });

  // Precompute small floating satellites
  const satellites = useMemo(() => {
    return [
      { pos: [2.2, 1.4, -0.5] as [number, number, number], size: 0.14, color: '#39BBD5' },
      { pos: [-2.1, -1.2, 0.8] as [number, number, number], size: 0.18, color: '#6957F5' },
      { pos: [1.8, -1.8, -1.0] as [number, number, number], size: 0.12, color: '#F18BB5' },
      { pos: [-1.6, 2.0, 0.5] as [number, number, number], size: 0.15, color: '#4385F4' },
    ];
  }, []);

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        {/* Main Floating Glass Orb with Iridescent Refraction */}
        <mesh
          ref={coreOrbRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <sphereGeometry args={[1.7, 48, 48]} />
          <meshPhysicalMaterial
            color={hovered ? '#4385F4' : '#6957F5'}
            emissive={hovered ? '#39BBD5' : '#4385F4'}
            emissiveIntensity={hovered ? 0.35 : 0.22}
            roughness={0.12}
            metalness={0.15}
            transmission={0.6}
            thickness={1.5}
            transparent
            opacity={0.88}
          />
        </mesh>

        {/* Inner Glowing Core - Pulsing energy */}
        <mesh ref={innerGlowRef} scale={[0.85, 0.85, 0.85]}>
          <icosahedronGeometry args={[1.4, 2]} />
          <meshStandardMaterial
            color="#39BBD5"
            emissive="#6957F5"
            emissiveIntensity={0.5}
            roughness={0.2}
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Iridescent Orbital Ring 1: Purple to Blue */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3.5, 0, 0]}>
          <torusGeometry args={[2.55, 0.035, 16, 80]} />
          <meshStandardMaterial
            color="#6957F5"
            emissive="#4385F4"
            emissiveIntensity={0.25}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>

        {/* Iridescent Orbital Ring 2: Cyan */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
          <torusGeometry args={[2.95, 0.028, 16, 80]} />
          <meshStandardMaterial
            color="#39BBD5"
            emissive="#39BBD5"
            emissiveIntensity={0.3}
            roughness={0.15}
            metalness={0.5}
          />
        </mesh>

        {/* Delicate Lavender Outer Ring */}
        <mesh ref={ring3Ref} rotation={[0, -Math.PI / 3, Math.PI / 6]}>
          <torusGeometry args={[3.3, 0.02, 16, 80]} />
          <meshStandardMaterial
            color="#F18BB5"
            emissive="#EEEAFE"
            emissiveIntensity={0.2}
            roughness={0.3}
            metalness={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Floating Intelligent Satellite Nodes */}
        {satellites.map((s, idx) => (
          <mesh key={idx} position={s.pos}>
            <sphereGeometry args={[s.size, 16, 16]} />
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.6}
              roughness={0.2}
            />
          </mesh>
        ))}

        {/* Horizon Disc Accent */}
        <mesh position={[0, -2.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.6, 3.4, 32]} />
          <meshBasicMaterial color="#6957F5" wireframe transparent opacity={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function TechCanvas() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[460px] relative pointer-events-auto">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8.2]} fov={44} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[8, 12, 10]} intensity={2.0} color="#FFFFFF" />
        <directionalLight position={[-8, -6, -6]} intensity={0.9} color="#EEEAFE" />
        <pointLight position={[3, 4, 3]} intensity={1.4} color="#6957F5" />
        <pointLight position={[-4, -3, 2]} intensity={1.2} color="#39BBD5" />
        <pointLight position={[0, -4, 4]} intensity={0.8} color="#F18BB5" />

        {/* Soft Ambient Floating Particle Dust */}
        <Sparkles
          count={35}
          scale={7.5}
          size={2.2}
          speed={0.35}
          opacity={0.55}
          color="#6957F5"
        />
        <Sparkles
          count={25}
          scale={8}
          size={2.0}
          speed={0.25}
          opacity={0.45}
          color="#39BBD5"
        />

        <IridescentGlassOrb />
      </Canvas>
    </div>
  );
}
