'use client'

import Link from 'next/link';
import React from 'react';

const Outsourcing: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-20 max-w-4xl mx-auto">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Engineering Support</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tight">Multidisciplinary Engineering Support</h1>
          <p className="text-slate-600 text-lg">
            High-quality design and technical support for developers, contractors, and consulting firms without expanding internal teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Structural Engineering', desc: 'Design and analysis of reinforced concrete and steel structures, from foundations to roof systems.' },
            { title: 'Architectural Design', desc: 'Floor plans, facade design, interior layouts, and 3D modeling.' },
            { title: 'Mechanical Engineering', desc: 'MEP, HVAC systems, plumbing, drainage, and mechanical ventilation.' },
            { title: 'Electrical Engineering', desc: 'Lighting, power distribution, low-current networks, and solar solutions.' },
            { title: 'Structural Strengthening', desc: 'Assessment and reinforcement of aging buildings using advanced materials like carbon fiber.' },
            { title: 'Digital & Software Solutions', desc: 'Support internal operations, improve efficiency, and enable scalable decision-making across engineering and trading environments.' }
          ].map((svc, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-10 h-10 bg-slate-900 text-white rounded flex items-center justify-center font-bold mb-6 group-hover:bg-red-600 transition-colors">{i+1}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{svc.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-12 rounded-[2rem] border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Antalika?</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
                Access to certified engineers from Saudi Arabia, Turkey, and Syria.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
                Flexible engagement models: Monthly, Per-project, or Part-time.
              </li>
              <li className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
                Competitive pricing with high technical standards and on-time delivery.
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-slate-500 mb-6 font-medium">Need Reliable Engineering Support?</p>
            <button className="bg-red-600 text-white px-12 py-4 rounded-full font-bold shadow-xl shadow-red-600/20 hover:scale-105 transition-transform"><Link href="/contact-us">Get a Proposal</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;
