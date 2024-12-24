import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="w-full bg-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <div className="text-2xl font-bold mb-4">SUKRIYA</div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">
              <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Support</h3>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Artist support</a>
          <a href="#" className="hover:underline">Get in touch</a>
        </div>
      </div>
    </footer>
  );
};
