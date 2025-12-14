import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
      <header className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          VINCheck<span className="text-blue-500">.blog</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Blog
          </Link>
        </div>

        <article>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded">{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          <h1 className="text-5xl font-extrabold mb-6">{post.title}</h1>
          <p className="text-xl text-gray-400 mb-12">{post.excerpt}</p>

          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
              prose-strong:text-white
              prose-ul:text-gray-300
              prose-table:text-gray-300
              prose-th:text-white prose-th:bg-gray-800
              prose-td:border-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
          />

          {/* CTA Box */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Check a VIN?</h3>
            <p className="text-gray-300 mb-6">
              Get instant access to accident history, theft records, mileage verification, and more. Protect yourself from scams and hidden problems.
            </p>
            <a 
              href="https://epicvin.com?a_aid=0xhataau2iwvr" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg"
            >
              Get Your VIN Report Now →
            </a>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">More Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 transition"
                >
                  <h4 className="font-bold mb-2">{relatedPost.title}</h4>
                  <p className="text-sm text-gray-400">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
