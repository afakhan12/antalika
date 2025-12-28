'use client'

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-slate-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white tracking-tighter mb-4">About Antalika</h1>
          <p className="text-slate-400 text-lg">Your bridge to international excellence in Turkey and MENA.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase tracking-tight">Our Story</h2>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>
                ANTALIKA is a leading company in the field of engineering, procurement, and after-sales services of fluid transfer equipment. We are agents and distributors for world-renowned European, U.S., and Overseas manufacturers.
              </p>
              <p>
                In the last decade, we have managed and promoted significant projects across Turkey and the Middle East. Our network of professional affiliates distributed globally allows us to offer a unique value proposition for clients seeking reliability and innovation.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-wider text-center">Our Core Pillars</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Vision', content: 'To be the best innovative supplier and partner of international pioneers in the MENA market.' },
                { title: 'Partnership', content: 'We believe in true partnership, building long-term relationships based on trust.' },
                { title: 'Value', content: 'Professionalism, mutual benefit, and synergy define every interaction.' },
                { title: 'Reach', content: 'A vast international presence coupled with local inter-disciplinary background.' },
              ].map(pillar => (
                <div key={pillar.title}>
                  <h4 className="font-bold text-slate-900 mb-2">{pillar.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{pillar.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" alt="Team meeting" className="w-full h-[400px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
