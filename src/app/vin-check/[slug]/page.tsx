import { carBrands } from "@/lib/brands";
import VinInput from "@/components/VinInput";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Next.js 15: params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// This function generates the metadata (Title, Description) for SEO automatically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = carBrands.find((b) => b.slug === slug);
  if (!brand) return { title: "VIN Check" };

  return {
    title: `Free ${brand.name} VIN Check & Decoder | Vehicle History Report`,
    description: `Get a full vehicle history report for any ${brand.name}. Check for accidents, theft, mileage, and recalls. ${brand.description}`,
  };
}

// This function tells Next.js which pages to build (BMW, Ford, Toyota...)
export async function generateStaticParams() {
  return carBrands.map((brand) => ({
    slug: brand.slug,
  }));
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = carBrands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="flex-grow w-full max-w-5xl px-6 py-20">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-blue-400">Home</a> &gt; <span className="text-gray-300">{brand.name} VIN Check</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              <span className="text-blue-500">{brand.name}</span> VIN Check
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Verify the history of any used {brand.name} before you buy. 
              Our decoder reveals accident history, title branding, mileage rollbacks, and more for models like the {brand.popularModels.join(", ")}.
            </p>
            
            <div className="mb-8">
               <h3 className="text-white font-semibold mb-2">Why check a {brand.name} VIN?</h3>
               <ul className="list-disc list-inside text-gray-400 space-y-1">
                 <li>Confirm the "M" package authenticity</li>
                 <li>Check for expensive hidden engine repairs</li>
                 <li>Verify mileage consistency</li>
                 <li>Ensure no salvage title history</li>
               </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4 text-center">Enter {brand.name} VIN</h2>
            <VinInput />
            <p className="text-xs text-center text-gray-500 mt-4">
              Instant redirection to official data partners.
            </p>
          </div>
        </div>

        {/* Affiliate Banner 2 - VinCheckUp Widget */}
        <div className="mt-20 w-full p-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
           <div className="bg-black rounded-lg p-8 flex flex-col items-center justify-center">
               <h2 className="text-2xl font-bold text-white mb-6">Official Mechanic Data (VinCheckUp)</h2>
               <div className="overflow-hidden rounded-md border border-gray-700 bg-white">
                 <iframe 
                   style={{overflow: 'hidden'}} 
                   width="480" 
                   height="320" 
                   frameBorder="0" // Note: React uses frameBorder, HTML uses frameborder. React 19 might be different but frameBorder safe.
                   src="https://www.vincheckup.com/affiliateNew/banners/search-box-480x320.php?aid=almanova&item=1&landing=loading&exitValue=ON&network=cb"
                   title="VinCheckUp Search"
                 />
               </div>
           </div>
        </div>

      </main>

      <footer className="w-full p-6 text-center text-gray-600 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Vincheck.blog. {brand.name} Data. All rights reserved.
      </footer>
    </div>
  );
}
