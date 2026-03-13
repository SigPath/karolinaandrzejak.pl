import Link from "next/link";
import { getPosts } from "@/lib/blog";
import BackgroundStars from "@/components/BackgroundStars";

export const metadata = {
  title: "Blog - Księga Wiedzy | Karolina Andrzejak",
  description: "Zbiór artykułów z dziedziny tarota, numerologii, astrologii i rozwoju duchowego od Wróżki Karoliny Andrzejak, Poznań.",
};

export default async function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <BackgroundStars />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <Link href="/" className="inline-block mb-8 text-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-sans border border-gold/30 hover:border-gold px-6 py-2 rounded-full">
            ← Powrót do Wyroczni
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Księga <span className="text-gold">Wiedzy</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Poradniki, analizy i przemyślenia z perspektywy Wróżki z miasta Poznań. Poznaj tajemnice Tarota, Numerologii i ukrytej energii Wszechświata.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-black-matte/60 backdrop-blur-md border border-purple-luxury rounded-xl p-8 hover:border-ectoplasmic/50 transition-all group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <p className="text-gold/80 font-sans text-sm mb-2">{post.date}</p>
                <h2 className="text-2xl font-serif text-white group-hover:text-gold transition-colors mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-400 leading-relaxed font-light mb-6">
                  {post.summary}
                </p>
                <span className="text-ectoplasmic font-sans text-sm font-medium uppercase tracking-wider group-hover:underline underline-offset-4 pointer-events-none">
                  Czytaj dalej →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
