import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types/category';
import categories from '@/data/categories.json';

export const FeaturedCategories = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold mb-12">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.categories.map((category: Category) => (
          <Link 
            href={`/categories/${category.slug}`} 
            key={category.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
