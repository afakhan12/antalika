'use client'

import Link from 'next/link';
import React from 'react';

const SyriaRegion: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-20 max-w-4xl mx-auto">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Regional Expertise</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tight">Industrial Trading & Engineering Support in Syria</h1>
          <p className="text-slate-600 text-lg">
            Antalika delivers industrial equipment, engineering services, and oil & gas solutions to Syria, supporting reconstruction efforts and industrial development across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Supporting Syria's Industrial Recovery</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Syria's industrial sector requires reliable partners who can provide quality equipment, engineering expertise, and comprehensive procurement services. Antalika serves as a trusted industrial supplier in Syria, delivering essential solutions for reconstruction projects, manufacturing facilities, and infrastructure development.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our services in Syria focus on providing critical industrial equipment, oil & gas solutions, and engineering support that meet international quality standards. We understand the unique challenges of operating in the Syrian market and have developed efficient logistics and quality assurance processes to ensure reliable delivery of essential equipment and services.
            </p>
            <p className="text-slate-700 leading-relaxed">
              As an industrial supplier in Syria, we work with local businesses, international organizations, and reconstruction entities to provide solutions that support sustainable development. Our engineering outsourcing services connect Syrian projects with certified professionals, ensuring access to world-class technical expertise.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services in Syria</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Industrial Equipment:</strong> Comprehensive supply of machinery, filtration systems, and industrial components for manufacturing and infrastructure projects.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Oil & Gas Solutions:</strong> Filtration systems, pump equipment, and process solutions for energy sector operations and facilities.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Engineering Services:</strong> Multidisciplinary engineering support including structural, mechanical, and electrical design for reconstruction and development projects.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Procurement Support:</strong> End-to-end procurement services with quality control, logistics management, and compliance support.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Committed to Syria's Development</h2>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Antalika is committed to supporting Syria's industrial recovery and development through reliable supply chains, quality engineering services, and comprehensive project support. We understand the importance of building sustainable partnerships that contribute to long-term growth and stability.
          </p>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Our team brings extensive experience in serving complex markets, with a focus on delivering solutions that meet both technical requirements and operational realities. We work closely with our Syrian partners to ensure that every project receives the support it needs, from initial planning through final delivery. Whether you're involved in infrastructure reconstruction, industrial manufacturing, or energy sector development, Antalika provides the expertise and resources to help you succeed.
          </p>
          <div className="text-center">
            <Link href="/contact-us" className="inline-block bg-red-600 text-white px-12 py-4 rounded-full font-bold shadow-xl shadow-red-600/20 hover:scale-105 transition-transform">
              Connect with Our Syria Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyriaRegion;

