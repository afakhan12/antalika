

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

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-24">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" alt="Team meeting" className="w-full h-[400px] object-cover" />
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-24 pb-20 bg-slate-50">
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
    </div>
  );
};

export default About;
