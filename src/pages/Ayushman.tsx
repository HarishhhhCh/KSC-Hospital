/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Info, CheckCircle2, Phone, ArrowRight, UserPlus, CreditCard } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants/hospitalData';

export default function Ayushman() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-1" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-md">
                <ShieldCheck className="h-4 w-4" />
                <span>Empanelled with Govt. of India</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black">Ayushman Bharat (PM-JAY)</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                KSC General & Dental Hospital is proud to be a part of the world's largest health assurance scheme. We provide cashless treatment to all eligible cardholders.
              </p>
              <div className="pt-4">
                <a 
                  href={`tel:${HOSPITAL_INFO.phone}`} 
                  className="bg-white text-primary px-8 py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-transform flex items-center gap-2 inline-flex"
                >
                   Verify Your Eligibility <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white rounded-3xl p-8 text-charcoal border shadow-2xl">
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">At Our Hospital</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-accent p-3 rounded-xl"><CreditCard className="h-6 w-6 text-primary" /></div>
                    <div>
                      <p className="font-black">100% Cashless</p>
                      <p className="text-xs text-charcoal/60">No payment required for covered treatments.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-accent p-3 rounded-xl"><UserPlus className="h-6 w-6 text-primary" /></div>
                    <div>
                      <p className="font-black">Fast Admission</p>
                      <p className="text-xs text-charcoal/60">Dedicated counter for Ayushman patients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-charcoal">What is PM-JAY?</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the flagship scheme of the Government of India that provides a health cover of ₹5 Lakhs per family per year for secondary and tertiary care hospitalization across public and private empanelled hospitals in India.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-black text-charcoal">How to avail Cashless Treatment?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Valid ID Check", desc: "Bring your Ayushman Card or eligible family ID card (Aadhar/Ration card)." },
                  { step: "02", title: "Registration", desc: "Visit our dedicated Ayushman counter for verification." },
                  { step: "03", title: "Diagnosis", desc: "Consult our doctors for diagnosis and recommended procedure." },
                  { step: "04", title: "Pre-Auth", desc: "We handle all the paperwork and authentication with the portal." },
                ].map((s, i) => (
                  <div key={i} className="bg-accent p-6 rounded-2xl relative overflow-hidden group">
                    <span className="absolute top-[-10px] right-[-10px] text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">{s.step}</span>
                    <p className="font-black text-lg mb-2 relative z-10">{s.title}</p>
                    <p className="text-sm text-charcoal/60 relative z-10">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="bg-white border-2 border-primary/10 rounded-3xl p-8 h-fit sticky top-24">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Info className="h-6 w-6 text-primary" />
              Quick Eligibility
            </h3>
            <ul className="space-y-4">
              {[
                "SECC 2011 Beneficiaries",
                "PM-JAY Golden Card Holders",
                "Eligible Ration Card Holders",
                "Registered families under the scheme"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-100 space-y-4">
              <p className="text-sm text-charcoal/60">Not sure if you are eligible? Call us now for verification.</p>
              <a 
                href={`tel:${HOSPITAL_INFO.phone}`} 
                className="flex items-center justify-center gap-2 w-full bg-charcoal text-white py-3 rounded-xl font-bold"
              >
                <Phone className="h-4 w-4" /> Verify Now
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
