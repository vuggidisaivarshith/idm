'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-white border border-bordercolor text-textprimary text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with Growth Expert
      </span>
      <a
        href={getWhatsAppUrl('Hello IDM Smart Tech, I would like to enquire about your digital marketing and technology services.')}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-brandmint to-royalblue hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-lg shadow-royalblue/20 transition-transform"
        aria-label="Chat with IDM Smart Tech on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.847-.433-1.442-.602-2.38-2.072-2.452-2.169-.072-.097-.58-0.771-.58-1.47 0-.698.366-1.042.497-1.185.131-.143.286-.179.382-.179.095 0 .191.002.274.006.088.005.205-.033.322.247.118.286.405.992.441 1.063.036.072.06.155.012.25-.048.096-.072.155-.143.239-.072.083-.151.186-.216.25-.072.071-.147.148-.063.292.083.143.37.61.794.987.545.485 1.005.636 1.148.707.143.072.227.06.311-.036.084-.095.358-.417.454-.56.096-.143.191-.119.322-.072.131.048.835.394.978.465.143.072.239.107.274.167.036.06.036.346-.108.751z" />
        </svg>
      </a>
    </aside>
  );
}
