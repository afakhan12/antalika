'use client'

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Get In <br /><span className="text-red-600">Touch</span></h1>
            <p className="text-slate-600 text-lg mb-12">Have a project in mind? Our team is ready to provide you with the technical and commercial support you need.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                  <p className="text-blue-600 font-medium">info@antalika.com.tr</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Call Us</h4>
                  <p className="text-blue-600 font-medium">+90 532 236 70 80</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">HQ Location</h4>
                  <p className="text-slate-500">Istanbul, Turkey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Location</h3>
            <p className="text-slate-600 mb-4"> Şişli/İstanbul</p>
            <div className="w-full h-[500px] rounded-xl overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent('H. Rıfat Paşa, Yüzer Havuz Sk. No:1/1 PERPA Kat: 5 No:463, 34384 Şişli/İstanbul')}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ANTALIKA Trading & Consulting Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
