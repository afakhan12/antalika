'use client'

import React from 'react';

const SERVICES = [
  {
    title: 'International Trading',
    subtitle: 'Importing & Exporting',
    content: 'As ANTALIKA based on Turkey which has been a member of the World Trade Organization (WTO) since 1995. The country’s commitment to integrating regional and international trade norms can be seen in its participation in and membership of various organizations including ECO, UNCTAD, and BSEC.'
  },
  {
    title: 'Foreign Representation',
    subtitle: 'Companies Representation',
    content: 'Ideal for companies outsourcing sales and marketing. We act as an outsourced Sales & Marketing Representative and reliable manufacturer contact in the region, establishing marketing plans, handling orders, and creating measurable goals.'
  },
  {
    title: 'Strategy Consulting',
    subtitle: 'Business Strategy',
    content: 'Highly experienced in planning and leading strategic programs for overseas expansion. We define business partner roles, negotiate deal structures, prepare business models, and develop full-scale business plans.'
  },
  {
    title: 'Development Partnerships',
    subtitle: 'Business Growth',
    content: 'Foundation of long-lasting partnerships across technological fields. We provide expert business development partners to charge sustainable business models and profitable ventures.'
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Core Services</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">We provide specialized industrial solutions and strategic consulting to help your business thrive in the global market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, i) => (
            <div key={i} className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                0{i + 1}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-6">{service.subtitle}</p>
              <p className="text-slate-600 leading-relaxed">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
