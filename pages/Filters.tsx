'use client'

import React from 'react';

const Filters: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
          <div className="lg:w-1/2">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Filtration Solutions</span>
            <h1 className="text-5xl font-extrabold text-slate-900 mt-4 mb-8">Premium Filter Bags & Cartridges</h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              ANTALIKA bag filter systems are the most popular filtration methods for liquid process applications. 
              We provide versatile, cost-effective, and consistent systems suitable for broad applications from 
              small batch operations to bulk processing.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Micron Range</h4>
                <p className="text-sm text-slate-500">1 to 200 microns high-precision filtration.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Capacity</h4>
                <p className="text-sm text-slate-500">Handles flow rates up to 300m³/hr.</p>
              </div>
            </div>
            <a 
              href="/ANTALIKA-FILTER-BAGS-GENERAL.pdf" 
              download="ANTALIKA-FILTER-BAGS-GENERAL.pdf"
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-600 transition-colors"
            >
              Download Selection Guide
            </a>
          </div>
          <div className="lg:w-1/2">
            <img src="../cartridge_filters.jpg" alt="Industrial Filter" className="rounded-3xl shadow-2xl" />
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-12">Stainless Steel Filter Housings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Quality', desc: 'Designed to deliver peak functionality and reliability.' },
              { title: 'Standards', desc: 'Produced to rigorous ASME industry standards.' },
              { title: 'Custom', desc: 'Bespoke designs to meet unique project challenges.' },
            ].map(f => (
              <div key={f.title}>
                <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-6"></div>
                <h4 className="text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
