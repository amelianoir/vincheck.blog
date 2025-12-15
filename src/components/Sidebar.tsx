import React from 'react';
import { 
  BannerSquare, 
  BannerWideSkyscraper, 
  BannerSamsung, 
  BannerVerticalLarge, 
  BannerMechanic,
  RentalLink 
} from './AdBanners';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-1/3 flex flex-col gap-8">
      
      {/* Search Widget - Placeholder logic for now */}
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700">
        <h3 className="text-xl font-bold mb-4">Search</h3>
        <input 
          type="text" 
          placeholder="Search articles..." 
          className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Featured Ad - Square */}
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex justify-center">
        <BannerSquare />
      </div>

      {/* Mechanic Offer */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 text-center">
        <h3 className="text-lg font-bold mb-2 text-blue-900 dark:text-blue-100">Have Car Problems?</h3>
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">Chat with a certified mechanic online right now.</p>
        <div className="flex justify-center">
           <BannerMechanic />
        </div>
      </div>

      {/* Tall Ad */}
      <div className="hidden lg:flex justify-center">
        <BannerWideSkyscraper />
      </div>

       {/* Rental Link */}
       <RentalLink />

       {/* Long Ad */}
       <div className="flex justify-center">
        <BannerVerticalLarge />
      </div>
      
      {/* Samsung Ad fallback */}
      <div className="flex justify-center">
        <BannerSamsung />
      </div>

    </aside>
  );
}
