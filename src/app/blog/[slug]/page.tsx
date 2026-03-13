import { getPostBySlug, getPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import BackgroundStars from "@/components/BackgroundStars";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  // @ts-ignore
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Karolina Andrzejak Wróżka Poznań`,
    description: post.summary,
  };
}

export default async function BlogPost(
  // @ts-ignore
  { params }: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <BackgroundStars />
      
      <article className="max-w-3xl mx-auto relative z-10 bg-black-matte/80 backdrop-blur-md border border-purple-luxury/50 rounded-2xl p-8 sm:p-12 shadow-[0_0_50px_-15px_rgba(26,11,46,1)]">
        <Link href="/blog" className="inline-block mb-12 text-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-sans border-b border-gold/30 hover:border-gold pb-1">
          ← Powrót do Bloga
        </Link>
        
        <header className="mb-12">
          <time dateTime={post.date} className="block text-ectoplasmic font-sans text-sm tracking-widest mb-4">
            {post.date}
          </time>
          <h1 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="w-20 h-1 bg-gold rounded-full"></div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-gold prose-p:text-gray-300 prose-a:text-ectoplasmic hover:prose-a:text-white prose-strong:text-white font-light">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-purple-luxury/50 text-center">
          <p className="text-gray-500 font-serif italic">
            "Przyszłość zależy od decyzji, które podejmiesz dzisiaj."
          </p>
          <Link href="/" className="mt-8 inline-block px-8 py-3 bg-purple-luxury text-gold hover:bg-gold hover:text-black-matte transition-all rounded-lg font-sans uppercase tracking-widest text-sm">
            Skonsultuj się z Wyrocznią
          </Link>
        </footer>
      </article>
    </main>
  );
}
