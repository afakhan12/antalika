'use client'

import Link from 'next/link';
import React from 'react';

const SaudiArabiaRegion: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-20 max-w-4xl mx-auto">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Regional Expertise</span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tight">Oil & Gas Trading & Industrial Supply in Saudi Arabia</h1>
          <p className="text-slate-600 text-lg">
            Antalika delivers premium oil and gas equipment, industrial filtration systems, and engineering services to Saudi Arabia, supporting the Kingdom's industrial growth and energy sector development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Serving Saudi Arabia's Industrial Sector</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Saudi Arabia's Vision 2030 has accelerated demand for high-quality industrial equipment, engineering services, and oil & gas solutions. Antalika has been a trusted partner to Saudi businesses, providing reliable access to international suppliers and engineering expertise.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Our oil and gas trading services in Saudi Arabia encompass everything from filtration systems and pump equipment to complete engineering solutions for refineries, petrochemical plants, and energy infrastructure projects. We understand the stringent quality requirements and regulatory standards that govern the Saudi market.
            </p>
            <p className="text-slate-700 leading-relaxed">
              As an industrial supplier in Saudi Arabia, we bridge the gap between international manufacturers and local businesses, ensuring seamless procurement processes, compliance with Saudi standards, and timely delivery of critical equipment.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions for Saudi Arabia</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Oil & Gas Equipment:</strong> Premium filtration systems, pump equipment, valves, and process equipment for refineries and petrochemical facilities.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Industrial Filtration:</strong> High-performance filter bags, cartridges, and housings for process industries, water treatment, and manufacturing.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Engineering Services:</strong> Multidisciplinary engineering support from certified professionals for infrastructure and industrial projects.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Procurement Support:</strong> End-to-end procurement services with quality assurance, logistics coordination, and compliance management.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Trusted Industrial Partner for Saudi Arabia</h2>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Antalika's commitment to Saudi Arabia extends beyond simple trading. We provide comprehensive support throughout the entire project lifecycle—from initial design and engineering to procurement, quality control, and after-sales service. Our team understands the local business culture, regulatory environment, and technical requirements unique to the Saudi market.
          </p>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you're developing new energy infrastructure, upgrading existing facilities, or sourcing specialized industrial equipment, Antalika delivers solutions that meet the highest standards of quality, reliability, and performance. Our extensive network of international suppliers and engineering partners ensures you have access to the best solutions available globally.
          </p>
          <div className="text-center">
            <Link href="/contact-us" className="inline-block bg-red-600 text-white px-12 py-4 rounded-full font-bold shadow-xl shadow-red-600/20 hover:scale-105 transition-transform">
              Connect with Our Saudi Arabia Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaudiArabiaRegion;

