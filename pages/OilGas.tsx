'use client'

import React from 'react';
import { BRANDS } from '@/constants';

const CATEGORIES = [
  { 
    title: 'General Equipment', 
    items: [
      'Valves, Actuators, Regulators',
      'Pumps',
      'Mechanical seals',
      'Process Control Instrumentation',
      'Hoses and Fluid Handling',
      'Hose Fittings',
      'Pipe Fittings and Flanges',
      'Pipe and Tubular Products',
      'Separators and Filters',
      'Gauges and Meters',
      'Pipeline accessories',
      'Generators',
      'Cranes and lifting equipment',
      'Marine Services',
      'Steelworks',
      'Safety Equipment',
      'Personal Safety Equipment',
      'Coatings, resins, paints',
      'Compressors',
      'Lighting and Electrical Products',
      'HVAC Equipment and Supplies',
      'Subsea Pipes & Fittings',
      'Non-Corrosive Fittings',
      'Stainless Steel Fittings',
      'Stainless Steel Pipe',
      'Hazardous Area Electrical Equipment',
      'ATEX Equipment',
      'Non-Sparking Tools',
      'Inverter Welding Machines',
      'Mastics',
      'Sealants',
      'Pipeline Adhesives',
      'Welding inspection tools',
      'Welding supplies',
      'Bearings',
      'Seals',
      'Fiberglass piping (flanges, pipes)',
      'Maintenance Workshop Equipment',
      'Lathes',
      'Mills',
      'Drills',
      'Shaping machines',
      'Tools'
    ]
  },
  { 
    title: 'Well Head Equipment', 
    items: [
      'Well Heads',
      'Pack-off Flanges',
      'Slips & Secondary Seals',
      'Casing Spools',
      'Casing Head Housings',
      'Tubing Heads',
      'Well Head Christmas Trees',
      'All types of valves'
    ]
  },
  { 
    title: 'Drilling Equipment', 
    items: [
      'Desanders',
      'Shale Shakers',
      'Mud Pumps & Systems',
      'Rotary Drilling and Vibrator Hoses',
      'Unions, including: Non-Aligned Screwed Unions (RON), Quick Unions, Swivel Unions',
      'Blowout Preventer\'s and Manifolds of all types',
      'Hydraulic Control Units',
      'Cementing and Fracturing Units'
    ]
  },
  { 
    title: 'Additional Equipment & Services', 
    items: [
      'Control and measurement instrumentation',
      'Valves',
      'Electrotechnical equipment',
      'Pumps & Compressor plants',
      'Maintenance spare parts',
      'Laboratory equipment',
      'Personal protective equipment',
      'Heating and thermal insulation systems'
    ]
  }
];

const OilGas: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-red-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Specialized Procurement</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">Oil & Gas <br /><span className="text-red-600">Range</span></h1>
          <p className="text-slate-400 max-w-2xl text-xl font-light leading-relaxed">Supplying critical materials and multidisciplinary technical support for exploration and production disciplines.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        {CATEGORIES.map((cat) => (
          <div key={cat.title} className="mb-20 last:mb-0">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-10 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-red-600"></span>
              {cat.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.items.map(item => (
                <div key={item} className="text-slate-500 font-light text-sm hover:text-red-600 transition-colors cursor-default">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Certified Brand Ecosystem</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {BRANDS.map(brand => (
              <span key={brand} className="px-8 py-3 bg-white text-[10px] font-black tracking-widest text-slate-400 border border-slate-200 hover:border-red-600 hover:text-red-600 transition-all">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilGas;
