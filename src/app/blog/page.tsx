import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIN Check Blog | Car Buying Tips & Guides",
  description: "Expert advice on buying used cars, VIN checks, and avoiding scams. Learn how to protect yourself when purchasing a pre-owned vehicle.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          VINCheck<span className="text-blue-500">.blog</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/blog" className="text-white">Blog</Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4">VIN Check Blog</h1>
        <p className="text-xl text-gray-400 mb-12">Expert tips on buying used cars and avoiding scams</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">{post.title}</h2>
              <p className="text-gray-400">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
