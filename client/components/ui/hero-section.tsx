import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-10">
      <div className="flex items-center">
        <div className="w-[500px]">
          <h1 className="text-[56px] leading-[1.1] font-semibold mb-4">
            Discover artists on{' '}
            <span className="text-[#7C3AED]">SUKRIYA</span>
          </h1>
          <p className="text-[20px] text-gray-500">
            Explore 1,420,069 creative talents worldwide
          </p>
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] transition-colors">
              Sign up
            </button>
            <button className="px-6 py-3 border border-gray-200 rounded-lg hover:border-[#7C3AED] transition-colors">
              Log in
            </button>
          </div>
        </div>
        <div className="ml-auto -mr-32">
          <div className="relative w-[800px] h-[800px] bg-gray-50 rounded-2xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/7Ca0X3xcBpa5VjfvoMT5xob2vc.jpg?scale-down-to=2048"
              alt="Creative artists showcase"
              className="object-cover"
              priority
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};
