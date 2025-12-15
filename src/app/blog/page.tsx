import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "VIN Check Blog | Car Buying Tips & Guides",
  description: "Expert advice on buying used cars, VIN checks, and avoiding scams. Learn how to protect yourself when purchasing a pre-owned vehicle.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 py-4 flex justify-between items-center border-b border-zinc-900 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          VINCheck<span className="text-blue-500">.blog</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/blog" className="text-white">Blog</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center relative rounded-3xl overflow-hidden bg-zinc-900 aspect-[21/9] flex items-center justify-center">
            {/* Background Image Overlay */}
             <div className="absolute inset-0 z-0">
               <img src="/images/blog-hero.png" alt="Car Mechanic" className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
             </div>
             
             <div className="relative z-10 p-6 max-w-2xl">
                <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2 block">The Ultimate Guide</span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Expert Car Advice for Smart Buyers</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">Don't buy a lemon. Learn how to inspect, check VINs, and negotiate like a pro.</p>
             </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Latest Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="h-48 bg-zinc-800 relative overflow-hidden">
                     {/* Placeholder gradient for now, can replace with specific images later */}
                     <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(post.category)} opacity-80 group-hover:scale-105 transition-transform duration-500`}></div>
                     <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white border border-white/20 text-xs font-bold rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                     </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-500 text-sm font-bold mt-auto group-hover:translate-x-2 transition-transform">
                      Read Article <span className="ml-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
          
        </div>
      </main>
    </div>
  );
}

// Helper to assign random colorful gradients based on category
function getGradient(category: string) {
  switch(category) {
    case 'Money': return 'from-green-600 to-emerald-900';
    case 'Safety': return 'from-red-600 to-rose-900';
    case 'DIY': return 'from-orange-500 to-amber-900';
    case 'Lifestyle': return 'from-purple-600 to-indigo-900';
    default: return 'from-blue-600 to-slate-900';
  }
}
