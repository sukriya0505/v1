import React from 'react';
import Image from 'next/image';
import profiles from '@/data/profiles.json';
import { Profile } from '@/types/profile';

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-[15px] text-gray-600">{rating}</span>
    </div>
  );
};

export const TopProfiles = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Top rated profiles</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          "Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.profiles.map((profile: Profile) => (
          <div key={profile.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] group">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
              />
              <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-white/90 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 relative overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[15px]">{profile.name}</h3>
                  <p className="text-[13px] text-gray-500">{profile.title}, {profile.location}</p>
                </div>
              </div>

              <RatingStars rating={profile.rating} />

              <div className="mt-4 flex items-center justify-between">
                <p className="text-[13px] text-gray-600">
                  from <span className="text-[#7C3AED] font-medium">${profile.price}</span> {profile.priceUnit}
                </p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-[#7C3AED] text-white text-[13px] rounded hover:bg-[#6D28D9] transition-colors">
                    Follow
                  </button>
                  <button className="px-4 py-2 border border-gray-200 text-[13px] rounded hover:border-[#7C3AED] transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
