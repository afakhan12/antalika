'use client'

import Link from 'next/link';
import React from 'react';

const TurkeyRegion: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-20 max-w-4xl mx-auto">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Regional Expertise</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tight">Industrial Trading & Engineering Services in Turkey</h1>
          <p className="text-slate-600 text-lg">
            Antalika is Turkey's leading bridge to international industrial procurement and multidisciplinary engineering support, serving clients across MENA with world-class solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Turkey for Industrial Trading?</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Turkey's strategic location at the crossroads of Europe and Asia, combined with its robust manufacturing sector, makes it an ideal hub for industrial trading and engineering services. As a Turkish-based company, Antalika leverages deep local expertise and international networks to deliver exceptional value to clients across the Middle East and North Africa.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our position in Istanbul provides us with unparalleled access to Turkish engineering talent, manufacturing capabilities, and logistics infrastructure. This enables us to offer competitive pricing, high-quality standards, and efficient delivery timelines that are essential for complex industrial projects.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Turkish engineering outsourcing has gained global recognition for its technical excellence, cost-effectiveness, and adherence to international standards. Antalika connects international clients with certified Turkish engineers specializing in structural, mechanical, electrical, and architectural disciplines.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services in Turkey</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Engineering Outsourcing:</strong> Access to certified Turkish engineers for structural, mechanical, electrical, and architectural design projects.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Industrial Procurement:</strong> Sourcing and supply of industrial equipment, filtration systems, and oil & gas components from Turkish manufacturers.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">International Trading:</strong> Facilitating cross-border trade between Turkey and MENA markets with comprehensive logistics support.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Quality Assurance:</strong> Rigorous quality control processes ensuring all products and services meet international standards.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Turkish Engineering Excellence</h2>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Turkey has emerged as a global leader in engineering services, with Turkish engineers working on major infrastructure projects worldwide. Antalika connects you with this pool of talent, offering flexible engagement models that suit your project needs—whether you require full-time support, project-based assistance, or part-time expertise.
          </p>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Our Turkish engineering team specializes in oil & gas equipment design, industrial filtration systems, structural engineering, and mechanical systems. With over 15 years of experience serving MENA markets, we understand the unique requirements of projects in Saudi Arabia, Iraq, Syria, and beyond.
          </p>
          <div className="text-center">
            <Link href="/contact-us" className="inline-block bg-red-600 text-white px-12 py-4 rounded-full font-bold shadow-xl shadow-red-600/20 hover:scale-105 transition-transform">
              Get Started with Turkish Engineering Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurkeyRegion;

