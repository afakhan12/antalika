'use client'

import Link from 'next/link';
import React from 'react';

const IraqRegion: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-20 max-w-4xl mx-auto">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Regional Expertise</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tight">Industrial Supplier & Engineering Services in Iraq</h1>
          <p className="text-slate-600 text-lg">
            Antalika provides industrial equipment, engineering outsourcing, and oil & gas solutions to Iraq, supporting the country's infrastructure development and industrial growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Supporting Iraq's Industrial Development</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Iraq's reconstruction and industrial development require reliable partners who can deliver quality equipment, engineering expertise, and comprehensive procurement services. Antalika has established itself as a trusted industrial supplier in Iraq, providing essential solutions for oil & gas operations, manufacturing facilities, and infrastructure projects.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our services in Iraq encompass the full spectrum of industrial needs—from critical oil and gas equipment to engineering support for construction and infrastructure projects. We understand the challenges of operating in the Iraqi market and have developed robust logistics and quality assurance processes to ensure reliable delivery.
            </p>
            <p className="text-slate-700 leading-relaxed">
              As an industrial supplier in Iraq, we work closely with local businesses, international contractors, and government entities to provide solutions that meet both international quality standards and local requirements. Our engineering outsourcing services connect Iraqi projects with certified professionals from Turkey and the broader MENA region.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services in Iraq</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Oil & Gas Equipment:</strong> Filtration systems, pumps, valves, and process equipment for Iraq's critical energy sector operations.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Industrial Procurement:</strong> Comprehensive sourcing and supply of industrial equipment, machinery, and components for manufacturing and infrastructure.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Engineering Outsourcing:</strong> Access to certified engineers for structural, mechanical, and electrical design projects across Iraq.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Project Support:</strong> End-to-end project management support from design through procurement to installation and commissioning.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Reliable Partner for Iraq's Growth</h2>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Antalika recognizes the importance of reliable industrial supply chains for Iraq's continued development. Our commitment goes beyond transactions—we build long-term partnerships with Iraqi businesses, providing consistent support, technical expertise, and access to international markets.
          </p>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Our team has extensive experience navigating the complexities of the Iraqi market, including customs procedures, quality certifications, and logistics coordination. We ensure that every project receives the attention it deserves, with dedicated support throughout the procurement and delivery process. Whether you're working on oil field operations, infrastructure development, or industrial manufacturing, Antalika delivers solutions that drive success.
          </p>
          <div className="text-center">
            <Link href="/contact-us" className="inline-block bg-red-600 text-white px-12 py-4 rounded-full font-bold shadow-xl shadow-red-600/20 hover:scale-105 transition-transform">
              Partner with Us for Iraq Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IraqRegion;

