'use client'

import React from 'react';

const Supplements: React.FC = () => {
  return (
    <div className="bg-white">
      {/* BigJoy Section */}
      <section className="bg-red-600 py-40 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h1 className="text-8xl md:text-[10rem] font-black italic tracking-tighter leading-none mb-6">BIGJOY</h1>
            <p className="text-2xl font-black uppercase tracking-widest mb-8">Exclusive MENA Distribution Partner</p>
            <p className="text-red-100 text-lg font-light leading-relaxed max-w-xl">
              Antalika is proud to represent Turkey's leading sports nutrition brand. From professional athletes to fitness enthusiasts, BIGJOY provides science-backed performance formulas.
            </p>
          </div>
          <div className="flex-shrink-0">
             <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl transform rotate-12">
                <span className="text-red-600 text-6xl font-black italic">B!G</span>
             </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {[
            { title: 'Protein Range', desc: 'Isolate, Hydrolyzed, and Whey concentrates with maximum bio-availability.' },
            { title: 'Muscle Growth', desc: 'High-calorie gainers and creatine formulas for professional volume management.' },
            { title: 'Endurance', desc: 'Pre-workout and Amino acid profiles designed for high-intensity output.' },
            { title: 'Weight Control', desc: 'L-Carnitine and CLA supplements focusing on efficient metabolic support.' }
          ].map(item => (
            <div key={item.title} className="bg-slate-50 p-12 border border-white hover:bg-slate-100 transition-colors">
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-4">{item.title}</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Züber Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">ZÜBER</h2>
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Züber is a well-known Turkish brand specializing in healthy snacks and functional food products, produced with a strong focus on natural ingredients and clean-label formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-red-600"></span>
                Product Categories
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-600 font-light">Healthy snack bars</li>
                <li className="text-slate-600 font-light">Nut- and fruit-based products</li>
                <li className="text-slate-600 font-light">Sugar-free and additive-free snacks</li>
                <li className="text-slate-600 font-light">Functional food alternatives</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-red-600"></span>
                Key Strengths
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-600 font-light">No added sugar</li>
                <li className="text-slate-600 font-light">No preservatives or artificial additives</li>
                <li className="text-slate-600 font-light">Strong brand recognition in retail markets</li>
                <li className="text-slate-600 font-light">Suitable for health-conscious consumers</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 border-l-4 border-red-600">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Supply Capabilities</h3>
            <p className="text-slate-600 font-light">Bulk and distribution supply • Export-oriented packaging options • Compliance with international food standards</p>
          </div>
        </div>
      </section>

      {/* Voonka Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">VOONKA</h2>
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Voonka is a leading Turkish brand in dietary supplements, offering a wide portfolio developed according to modern nutritional science and regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-red-600"></span>
                Product Categories
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-600 font-light">Vitamins & minerals</li>
                <li className="text-slate-600 font-light">Herbal supplements</li>
                <li className="text-slate-600 font-light">Sports nutrition products</li>
                <li className="text-slate-600 font-light">Immunity and wellness formulas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-red-600"></span>
                Key Strengths
              </h3>
              <ul className="space-y-3">
                <li className="text-slate-600 font-light">Scientifically formulated products</li>
                <li className="text-slate-600 font-light">GMP-compliant production</li>
                <li className="text-slate-600 font-light">Wide SKU range for different market needs</li>
                <li className="text-slate-600 font-light">Strong presence in pharmacies and retail chains</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-8 border-l-4 border-red-600">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Supply Capabilities</h3>
            <p className="text-slate-600 font-light">Private labeling and bulk supply options • Export-ready documentation • Suitable for retail and institutional distribution</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Supplements & Food</h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Antalika supplies a selected range of nutritional supplements and functional food products from established international brands. Our focus is on quality, compliance, and reliable sourcing, serving distributors, retailers, and institutional partners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Supplements;
