import { countries } from "@/lib/countries";
import VinInput from "@/components/VinInput";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return { title: "International VIN Check" };

  return {
    title: `VIN Check ${country.name} (${country.code}) | Vehicle History Report`,
    description: `Free VIN Check for used cars in ${country.name}. ${country.description} Instant report for imports and local vehicles.`,
  };
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Dynamic Background Effect */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="flex-grow w-full max-w-5xl px-6 py-20">
        <div className="text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-blue-400">Home</a> &gt; <span className="text-gray-300">VIN Check {country.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block text-4xl mb-4 p-4 bg-gray-900 rounded-2xl border border-gray-800">
                {country.flag}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              VIN Check <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{country.name}</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Buying a car in <strong>{country.name}</strong>? Don't take risks. 
              {country.description}
            </p>
            <p className="text-gray-500 mb-8">
                Our global database helps you uncover hidden history, regardless of where the vehicle was manufactured or registered.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md bg-gray-900/80 p-8 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md">
            <h2 className="text-xl font-bold text-white mb-6 text-center">Check {country.name} Vehicle</h2>
            <VinInput />
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-800 rounded">Accidents</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Theft</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Odometer</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Photos</span>
            </div>
          </div>
        </div>

        <div className="mt-24">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Supported Regions in {country.name}</h3>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
                Our reports cover all major cities and provinces. Whether you are buying from a dealer or a private seller, 
                ensure the VIN matches the registration documents in {country.name}.
            </p>
            
             {/* Affiliate External Link - Contextual */}
            <div className="mt-12 w-full p-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl max-w-3xl mx-auto">
               <div className="bg-black rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                   <div className="text-left">
                       <h4 className="text-lg font-bold text-white">Importing from USA to {country.name}?</h4>
                       <p className="text-sm text-gray-400">Detailed export/import records available.</p>
                   </div>
                   <a 
                     href="https://hop.clickbank.net/?affiliate=almanova&vendor=vincheckup&item=1&exitValue=ON"
                     className="whitespace-nowrap bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition"
                     target="_blank" 
                     rel="noopener noreferrer"
                   >
                     Check US History
                   </a>
               </div>
           </div>
        </div>
      </main>

      <footer className="w-full p-6 text-center text-gray-600 text-sm border-t border-gray-800">
        &copy; {new Date().getFullYear()} Vincheck.blog. {country.name} Region. All rights reserved.
      </footer>
    </div>
  );
}
