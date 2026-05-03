/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Camera, Eye } from 'lucide-react';

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop", category: "Clinic Interior" },
    { url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop", category: "Modern Equipment" },
    { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2069&auto=format&fit=crop", category: "Dental Setup" },
    { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop", category: "Reception" },
    { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop", category: "Lab Tech" },
    { url: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=2070&auto=format&fit=crop", category: "Consultation" },
    { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop", category: "Ward Area" },
    { url: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1887&auto=format&fit=crop", category: "Surgery Prep" },
    { url: "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=2070&auto=format&fit=crop", category: "Patient Comfort" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Visual Tour</h2>
          <h1 className="text-4xl lg:text-6xl font-black text-charcoal">Clinic & Facilities</h1>
          <p className="text-xl text-charcoal/60">A glimpse into our world-class medical infrastructure and commitment to patient care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.category} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Category</p>
                  <p className="text-lg font-black">{img.category}</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                <Eye className="h-6 w-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Results Info */}
        <section className="mt-24 p-12 lg:p-20 bg-accent rounded-[3rem] text-center space-y-8">
          <Camera className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-3xl font-black text-charcoal">Real Smiles, Real Results</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Due to medical confidentiality, we display before/after dental transformations only within the clinic. Visit us to see our portfolio of successful treatments.
          </p>
        </section>
      </div>
    </div>
  );
}
