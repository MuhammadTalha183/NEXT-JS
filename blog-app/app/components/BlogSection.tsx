import React, { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  coverImage: string;
}

const categories: string[] = ['All', 'Web Dev', 'TypeScript', 'Firebase', 'React', 'UI/UX'];

const dummyPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Full-Stack Apps with React & Firebase',
    excerpt: 'Learn how to structure your Firestore database and set up real-time authentication cleanly in TypeScript.',
    category: 'Firebase',
    author: {
      name: 'Sarah Connor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    },
    date: 'Oct 18, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Mastering TypeScript Generics and Utility Types',
    excerpt: 'Deep dive into advanced TypeScript patterns to write maintainable and type-safe frontend code.',
    category: 'TypeScript',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    },
    date: 'Oct 15, 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Designing Modern Micro-Interactions with Tailwind CSS',
    excerpt: 'Create sleek hover effects, glassmorphic cards, and responsive layouts effortlessly using utility classes.',
    category: 'UI/UX',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    },
    date: 'Oct 12, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
  },
];

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPosts =
    activeCategory === 'All'
      ? dummyPosts
      : dummyPosts.filter((post) => post.category === activeCategory);

  return (
    <section id="blogs" className="py-20 bg-[#fbfafd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-x-2 bg-indigo-50 border border-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              🔥 Trending Articles
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Latest from the Community
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-indigo-600 text-xs font-bold px-3 py-1 rounded-full border border-white/50">
                  {post.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author & Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-50"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-800">{post.author.name}</p>
                      <p className="text-[10px] text-gray-400">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner Section */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black">
              Ready to Share Your Own Knowledge?
            </h3>
            <p className="text-white/90 text-sm sm:text-base">
              Create an account now to draft, edit, and publish your blogs directly with our dynamic Firebase backend.
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="inline-block bg-white text-gray-900 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-md text-sm"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;