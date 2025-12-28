'use client'

import React from 'react';
import Link from 'next/link';
import { SECTORS } from '@/constants';

const Home: React.FC = () => {
  return (
    <div className="-mt-[80px]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start px-8 md:px-24 overflow-hidden hero-bg">
        <div className="relative z-10 max-w-4xl">
          <div className="w-12 h-1 bg-red-600 mb-8 animate-in slide-in-from-left duration-700"></div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 animate-in slide-in-from-bottom duration-700">
            ENGINEERING <br />
            <span className="text-red-600">WITHOUT</span> LIMITS.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed animate-in fade-in duration-1000 delay-300">
            Turkey's leading bridge to international industrial procurement and multidisciplinary engineering support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in duration-1000 delay-500">
            <Link href="/services" className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 font-black uppercase tracking-widest transition-all">
              Our Capabilities
            </Link>
            <Link href="/contact-us" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-12 py-5 font-black uppercase tracking-widest transition-all border border-white/30">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <span className="block text-5xl font-black text-slate-900 mb-2">15+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Years of Experience</span>
          </div>
          <div>
            <span className="block text-5xl font-black text-slate-900 mb-2">100+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Global Partners</span>
          </div>
          <div>
            <span className="block text-5xl font-black text-slate-900 mb-2">MENA</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Core Market Focus</span>
          </div>
          <div>
            <span className="block text-5xl font-black text-slate-900 mb-2">TOP</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Turkish Supplier</span>
          </div>
        </div>
      </section>

      {/* Industrial Sectors */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-red-600 text-xs font-black uppercase tracking-widest mb-4 block">Core Competencies</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">Industrial Sectors</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {SECTORS.map((sector) => (
              <Link href={sector.href} key={sector.title} className="group relative h-[400px] overflow-hidden block">
                <img src={sector.image} alt={sector.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-red-600/60 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 p-12">
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">{sector.title}</h3>
                  <p className="text-white/70 text-sm font-medium tracking-wide translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">Explore specialized solutions &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-8">
              Reliability as a <br /><span className="text-red-600">Standard.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
              ANTALIKA has managed and promoted significant projects in Turkey and the Middle East for over a decade. We believe in true partnership, establishing deep-rooted relationships with global manufacturers to deliver world-class excellence.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs mb-3">Vision</h4>
                <p className="text-sm text-slate-500 font-light">Leading the digitalization of industrial procurement in the MENA market.</p>
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-xs mb-3">Expertise</h4>
                <p className="text-sm text-slate-500 font-light">Multidisciplinary engineering support from certified global professionals.</p>
              </div>
            </div>
            <Link href="/about-us" className="bg-slate-900 text-white px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-red-600 transition-colors">
              Our Journey
            </Link>
          </div>
          <div className="relative">
            <img src="enginner.jpg" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" alt="Engineering" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
