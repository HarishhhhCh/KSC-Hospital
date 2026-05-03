/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, UserCheck, Microscope, BadgeCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants/hospitalData';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">Our Story</h2>
            <h1 className="text-4xl lg:text-5xl font-black text-charcoal">9+ Years of Trusted Healthcare in Jodhpur</h1>
            <p className="text-xl text-charcoal/70 leading-relaxed">
              Founded with the vision of providing high-quality, ethical, and advanced medical care to the people of Mandore, KSC General & Dental Hospital has evolved into a premier healthcare destination.
            </p>
            <p className="text-lg text-charcoal/60 leading-relaxed">
              We specialize in painless dental surgery and general medicine, combining modern technology with the personal touch of compassionate care. Our 4.9★ rating is a testament to our commitment to patient satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <p className="text-4xl font-black text-primary">1500+</p>
                <p className="text-sm font-bold text-charcoal/60 uppercase">Verified Reviews</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary">9+</p>
                <p className="text-sm font-bold text-charcoal/60 uppercase">Years Experience</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" 
              alt="Hospital Interior" 
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl max-w-xs border border-gray-100 hidden sm:block">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <p className="font-bold text-lg text-charcoal">Ayushman Bharat Empanelled</p>
              <p className="text-sm text-charcoal/60">Cashless treatments for all eligible citizens.</p>
            </div>
          </div>
        </div>

        {/* Doctor Profile */}
        <div className="bg-accent rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop" 
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover" 
                alt="Lead Doctor" 
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Lead Doctor</h2>
              <h3 className="text-4xl font-black text-charcoal">Dr. Sushil Choudhary</h3>
              <p className="text-lg font-bold text-primary">General & Dental Surgeon | Certified Implantologist</p>
              <p className="text-lg text-charcoal/70">
                Dr. Sushil Choudhary is a renowned specialist known for his expertise in digital dental technology. He is a Certified Osstem Implantologist (2021) and has pioneered painless root canal techniques in Jodhpur.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                  <span className="font-bold text-charcoal">Certified Osstem Implantologist (2021)</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                  <span className="font-bold text-charcoal">Expert in Digital Impression Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-secondary" />
                  <span className="font-bold text-charcoal">9+ Years of Surgical Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="py-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm">Our Facilities</h2>
            <h3 className="text-4xl font-black text-charcoal">World-Class Infrastructure</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Microscope, title: "Modern Technology", desc: "Digital Impression & Rotary Endodontics for precise treatment." },
              { icon: UserCheck, title: "Patient Accessibility", desc: "Wheelchair accessible entrance and comfortable waiting areas." },
              { icon: Award, title: "Warranty Assured", desc: "10-Year Warranty on Zirconia crowns and high-quality dental work." },
            ].map((f, i) => (
              <div key={i} className="text-center p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all">
                <div className="bg-accent h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <f.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-charcoal/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
