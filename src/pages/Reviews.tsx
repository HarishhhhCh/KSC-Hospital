/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, ExternalLink, Calendar, User, Quote } from 'lucide-react';
import { HOSPITAL_INFO, TESTIMONIALS } from '../constants/hospitalData';

export default function Reviews() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Patient Satisfaction</h2>
            <h1 className="text-4xl lg:text-6xl font-black text-charcoal">Trusted by Thousands</h1>
            <p className="text-xl text-charcoal/60 leading-relaxed">
              We take pride in our 4.9★ rating. Your feedback drives us to maintain the highest standards of healthcare excellence in Jodhpur.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#" 
                className="bg-white border-2 border-gray-100 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm hover:shadow-lg transition-all"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" className="h-5 w-5" alt="Google" />
                <div className="text-left">
                  <p className="font-bold text-sm">Google Reviews</p>
                  <p className="text-xs text-charcoal/60">4.9 ★ (1,500+)</p>
                </div>
              </a>
              <a 
                href="#" 
                className="bg-white border-2 border-gray-100 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="bg-blue-600 rounded p-1 text-[8px] font-black text-white">JD</div>
                <div className="text-left">
                  <p className="font-bold text-sm">Justdial Rating</p>
                  <p className="text-xs text-charcoal/60">4.8 ★ (800+)</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-primary rounded-[3rem] p-12 text-white text-center space-y-4">
             <Star className="h-16 w-16 mx-auto fill-secondary text-secondary" />
             <p className="text-6xl font-black">{HOSPITAL_INFO.rating}</p>
             <div className="flex justify-center gap-1">
               {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />)}
             </div>
             <p className="text-white/60 font-medium uppercase tracking-widest text-sm">Average Patient Score</p>
             <p className="font-bold text-xl">1,500+ Verified Patient Reviews</p>
          </div>
        </div>

        {/* Detailed Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 relative"
            >
              <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/5" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-lg font-medium text-charcoal/80 mb-8 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="bg-accent h-12 w-12 rounded-full flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-charcoal">{review.name}</p>
                  <p className="text-xs text-charcoal/40 font-bold uppercase tracking-widest">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Mock additional reviews to fill grid */}
          {[
            { name: "Suresh Meena", text: "Best dental clinic in Mandore. Very reasonable charges and excellent treatment quality." },
            { name: "Anita Sharma", text: "I came for general medicine. Doctors are very cooperative and explained everything clearly." },
            { name: "Vinod Kumar", text: "Ayushman Bharat card accepted here without any problem. Very helpful staff." }
          ].map((review, i) => (
            <motion.div
              key={i+3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 relative"
            >
              <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/5" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-lg font-medium text-charcoal/80 mb-8 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="bg-accent h-12 w-12 rounded-full flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-charcoal">{review.name}</p>
                  <p className="text-xs text-charcoal/40 font-bold uppercase tracking-widest">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-accent rounded-[3rem] p-12 text-center space-y-8">
          <MessageSquare className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-3xl font-black text-charcoal">Shared your experience yet?</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Your reviews help other patients find the best care. Share your story on Google to support healthcare excellence.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-black hover:scale-105 transition-transform shadow-xl">
             Leave us a Google Review <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
