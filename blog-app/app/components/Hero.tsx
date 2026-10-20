// import React, { useState } from 'react';

// Interfaces for our component safety
interface Stat {
  id: number;
  label: string;
  value: string;
  iconBg: string;
  icon: React.ReactNode;
}

const Hero: React.FC = () => {
  const stats: Stat[] = [
    {
      id: 1,
      label: 'Active Readers',
      value: '10K+',
      iconBg: 'bg-rose-50 text-rose-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07" />
        </svg>
      )
    },
    {
      id: 2,
      label: 'Articles Published',
      value: '500+',
      iconBg: 'bg-indigo-50 text-indigo-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5" />
        </svg>
      )
    },
    {
      id: 3,
      label: 'Community Writers',
      value: '120+',
      iconBg: 'bg-blue-50 text-blue-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6" />
        </svg>
      )
    },
    {
      id: 4,
      label: 'Tech Solutions',
      value: '50+',
      iconBg: 'bg-purple-50 text-purple-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5.438-2.56a9.49 9.49 0 003.541-4.004M15 11h.008v.008H15V11zm0 3h.008v.008H15V14zm-3-3h.008v.008H12V11zm0 3h.008v.008H12V14z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#f6f5fc] pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden min-h-screen">
      
      {/* Dynamic Background spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/20 to-purple-400/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero info Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Pill badging */}
            <div className="inline-flex items-center gap-x-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-100 text-pink-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-xs">
              <span>✨ Welcome to DevBlog</span>
            </div>

            {/* Typography headlines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Explore stories, insights, and{' '}
              <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">
                developer ideas.
              </span>
            </h1>

            {/* Body Description */}
            <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover in-depth tutorials, tech trends, and thought-provoking articles written by passionate creators around the world.
            </p>

            {/* Main Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#blogs"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-pink-200 text-base flex justify-center items-center"
              >
                Explore Blogs
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-full transition-all duration-200 text-base shadow-xs hover:border-gray-300 flex justify-center items-center"
              >
                Learn More
              </a>
            </div>

          </div>

          {/* 3D-Style Illustration and Cards Column */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* Floating backdrop effect */}
              <div className="absolute inset-0 bg-indigo-200/30 rounded-full blur-3xl filter -z-10 scale-95 translate-y-6"></div>

              {/* Character mockup art resembling image_2 */}
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
                alt="3D developer working illustration" 
                className="w-full h-auto object-contain rounded-3xl drop-shadow-2xl"
              />

              {/* Floating bubble "Post Draft" */}
              <div className="absolute top-12 -left-8 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="text-xs font-semibold text-gray-700">Post draft</span>
              </div>

              {/* Floating "Ready to Explore ✨" chip */}
              <div className="absolute bottom-12 -left-2 sm:-left-12 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2">
                <span className="text-sm">✨</span>
                <span className="text-sm font-bold text-gray-800">Ready to Explore</span>
              </div>

              {/* Floating card UI metrics */}
              <div className="absolute top-4 right-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2">
                <span className="p-1.5 bg-blue-50 text-blue-500 rounded-lg text-xs font-bold">New</span>
                <div>
                  <p className="text-[10px] text-gray-400">Chat</p>
                  <p className="text-xs font-bold text-gray-800">Active team member</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Custom statistics row built to mimic bottom overlay bar */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-sm border border-white/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center gap-4 px-4 pt-4 md:pt-0">
                <div className={`p-3 rounded-2xl ${stat.iconBg} shrink-0 shadow-xs`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-none">{stat.value}</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//     </>
//   );
// }