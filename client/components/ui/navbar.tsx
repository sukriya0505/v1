import React from 'react';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* <Image 
            src="" 
            alt="SUKRIYA" 
            width={24} 
            height={24}
          /> */}
          <span className="text-xl font-bold">SUKRIYA</span>
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <a href="#" className="text-[15px] text-gray-600 hover:text-purple-600">Home</a>
            <a href="#" className="text-[15px] text-gray-600 hover:text-purple-600">Artists</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-[#7C3AED] text-white text-[15px] rounded-lg hover:bg-[#6D28D9] transition-colors">
              Sign up
            </button>
            <button className="px-6 py-2 border border-gray-200 text-[15px] rounded-lg hover:border-[#7C3AED] transition-colors">
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
