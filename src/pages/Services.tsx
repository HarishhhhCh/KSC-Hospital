/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smile, 
  Stethoscope, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  Heart, 
  Baby, 
  Plus, 
  FileText,
  Zap,
  Star
} from 'lucide-react';
import { SERVICES } from '../constants/hospitalData';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'dental' | 'general'>('dental');

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Comprehensive Healthcare</h2>
          <h1 className="text-4xl lg:text-6xl font-black text-charcoal">Advanced Solutions for Your Health</h1>
          <p className="text-xl text-charcoal/60">Explore our wide range of dental and general medical services designed for your well-being.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-accent p-1.5 rounded-2xl flex gap-1">
            <button
              onClick={() => setActiveTab('dental')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'dental' ? 'bg-primary text-white shadow-lg' : 'text-charcoal/60 hover:text-charcoal'}`}
            >
              Dental Care
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'general' ? 'bg-primary text-white shadow-lg' : 'text-charcoal/60 hover:text-charcoal'}`}
            >
              General & OB-GYN
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {(activeTab === 'dental' ? SERVICES.dental : SERVICES.general).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
              >
                <div className="bg-accent h-16 w-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {service.id === 'rct' && <Zap className="h-8 w-8" />}
                  {service.id === 'zirconia' && <ShieldCheck className="h-8 w-8" />}
                  {service.id === 'implants' && <Stethoscope className="h-8 w-8" />}
                  {service.id === 'orthodontics' && <Plus className="h-8 w-8" />}
                  {service.id === 'pediatric' && <Baby className="h-8 w-8" />}
                  {service.id === 'obgyn' && <Heart className="h-8 w-8" />}
                  {service.id === 'ayushman' && <FileText className="h-8 w-8" />}
                  {!['rct', 'zirconia', 'implants', 'orthodontics', 'pediatric', 'obgyn', 'ayushman'].includes(service.id) && <Plus className="h-8 w-8" />}
                </div>
                
                <h3 className="text-xl font-black mb-4 text-charcoal">{service.title}</h3>
                <p className="text-charcoal/60 leading-relaxed grow">
                  {service.description}
                </p>
                
                {service.id === 'zirconia' && (
                  <div className="mt-4 inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    <Star className="h-3 w-3 fill-secondary" />
                    10-Year Warranty
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-primary font-bold text-sm">Consult Specialist</span>
                  <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Feature Banner */}
        <section className="mt-24 bg-charcoal rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black">Modern Technology, Painless Care</h2>
              <p className="text-xl text-white/70">
                We use the latest digital impression technology and rotary endodontics to ensure your treatments are fast, accurate, and completely painless.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="font-medium">Digital Impression (No Messy Moulds)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="font-medium">Rotary Endodontics (Painless RCT)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="font-medium">Sterilization Protocols (High Safety)</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop" alt="Advanced Tech" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
