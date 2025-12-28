import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tighter">ANTALIKA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading the field of engineering, procurement, and after-sales services of fluid transfer equipment through expertise and know-how.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">in</a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">International Trading</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Company Representation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Business Strategy</Link></li>
              <li><Link href="/outsourcing" className="hover:text-white transition-colors">Engineering Support</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                <span className="text-white">📍</span>
                Istanbul, Turkey
              </li>
              <li className="flex gap-3">
                <span className="text-white">✉️</span>
                info@antalika.com.tr
              </li>
              <li className="flex gap-3">
                <span className="text-white">📞</span>
                +90 532 236 70 80
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs uppercase tracking-widest">
          <p>© 2024 Antalika. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-conditions" className="hover:text-white">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
