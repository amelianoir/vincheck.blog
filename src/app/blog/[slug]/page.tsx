import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { BannerSquare } from "@/components/AdBanners";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | VinCheck.blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
        <div className="mb-4">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
            <span>←</span> Back to Blog
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Article Content */}
          <article className="w-full lg:w-2/3">
             {/* Article Header */}
             <div className="mb-8">
               <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs font-bold uppercase">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
               </div>
               <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
               <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-blue-500 pl-4">{post.excerpt}</p>
             </div>

             {/* Ad between header and content */}
             <div className="my-8 flex justify-center bg-zinc-900/50 p-4 rounded-xl">
                <BannerSquare />
             </div>

             {/* Main Content */}
             <div 
               className="prose prose-invert prose-lg max-w-none
                 prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-zinc-800
                 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                 prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
                 prose-strong:text-white prose-strong:font-bold
                 prose-ul:text-gray-300 prose-ul:list-disc prose-ul:ml-6
                 prose-li:mb-2
                 prose-table:text-gray-300 prose-table:border-collapse prose-table:w-full
                 prose-th:text-white prose-th:bg-zinc-800 prose-th:p-3 prose-th:text-left
                 prose-td:border-b prose-td:border-zinc-800 prose-td:p-3
                 prose-img:rounded-xl prose-img:shadow-lg"
               dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
             />

             {/* CTA Box */}
             <div className="mt-12 p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-2xl shadow-xl overflow-hidden relative">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4 text-white">Don't buy a car without checking its history!</h3>
                 <p className="text-gray-300 mb-6">
                   Get instant access to accident history, theft records, mileage verification, and hidden damages.
                 </p>
                 <a 
                   href="https://epicvin.com?a_aid=0xhataau2iwvr" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
                 >
                   Get Your Full VIN Report Now →
                 </a>
               </div>
               <div className="absolute top-0 right-0 -m-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
             </div>

             {/* Related Posts */}
             <div className="mt-16 pt-8 border-t border-zinc-800">
               <h3 className="text-2xl font-bold mb-6">Read Next</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {blogPosts
                   .filter((p) => p.slug !== slug)
                   .slice(0, 2)
                   .map((relatedPost) => (
                     <Link
                       key={relatedPost.slug}
                       href={`/blog/${relatedPost.slug}`}
                       className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition flex flex-col h-full"
                     >
                       <h4 className="font-bold mb-2 text-lg group-hover:text-blue-400">{relatedPost.title}</h4>
                       <p className="text-sm text-gray-400 line-clamp-2">{relatedPost.excerpt}</p>
                     </Link>
                   ))}
               </div>
             </div>
          </article>

          {/* Sidebar */}
          <Sidebar />
          
        </div>
      </main>
    </div>
  );
}
