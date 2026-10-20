import React from 'react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  iconBg: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: 1,
      title: 'For Developers, By Developers',
      description:
        'A dedicated space created to share real-world code, technical tutorials, and practical insights without unnecessary noise.',
      iconBg: 'bg-pink-50 text-pink-500',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Community Driven',
      description:
        'Connect with writers, share feedback on posts, and collaborate on trending technologies across the global developer ecosystem.',
      iconBg: 'bg-indigo-50 text-indigo-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197m0 0A9.093 9.093 0 012.25 18.24a3 3 0 013.743-2.72m0 0a5.986 5.986 0 013.069-2.77" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Modern Tech Stack',
      description:
        'Built with high-performance technologies like React, TypeScript, Tailwind CSS, and powered by Firebase for secure authentication and real-time data.',
      iconBg: 'bg-purple-50 text-purple-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-x-2 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 border border-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
            💡 About DevBlog
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Empowering developers to{' '}
            <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">
              learn, build, and share.
            </span>
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            DevBlog is an open platform where developers, software engineers, and tech enthusiasts publish high-quality articles, stay updated with emerging technologies, and build their online presence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#fcfbfd] p-8 rounded-3xl border border-gray-100/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>

              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Banner Card */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl text-white">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-pink-400 font-bold text-xs uppercase tracking-wider">Our Core Mission</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to publish your first developer story?
              </h3>
              <p className="text-indigo-100/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                Join our growing community of writers today. Whether you are documenting a bug fix, explaining a design pattern, or introducing a new framework, your voice matters here.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#blogs"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg text-sm shrink-0"
              >
                Start Writing Today
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;