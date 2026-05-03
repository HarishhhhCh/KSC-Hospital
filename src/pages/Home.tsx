/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Award,
  CircleCheck,
  Stethoscope,
  Smile,
  Activity
} from 'lucide-react';
import { HOSPITAL_INFO, SERVICES, TESTIMONIALS } from '../constants/hospitalData';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full text-primary text-xs font-bold uppercase tracking-widest border border-primary/10 mb-4">
                <ShieldCheck className="h-4 w-4" />
                <span>9+ Years of Trusted Care</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
                Advanced Dental & <br/><span className="text-primary">General Healthcare.</span>
              </h1>
              
              <p className="text-lg text-charcoal/60 leading-relaxed max-w-lg mb-8">
                Your smile is our priority. Experience painless dental treatments with modern Digital Impression Technology under Dr. Sushil Choudhary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="sleek-button-dark"
                >
                  Our Services
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/gallery"
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  Virtual Tour
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=avatar${i}`} alt="Patient" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold">
                    1.5k+
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm text-charcoal/60">4.9/5 from verified patients</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Floating Cards */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass p-6 rounded-2xl shadow-xl space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-charcoal font-bold">9+ Years Experience</p>
                        <p className="text-xs text-charcoal/60">Trusted Healthcare in Mandore</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Star className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-charcoal font-bold">4.9 ★ Rating</p>
                        <p className="text-xs text-charcoal/60">1500+ Happy Patients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -top-6 -right-6 h-32 w-32 bg-white rounded-full p-2 shadow-2xl flex items-center justify-center border border-gray-100 rotate-12">
                <div className="text-center">
                  <span className="block text-2xl font-black text-primary leading-none">10yr</span>
                  <span className="block text-[10px] font-bold text-charcoal/60 uppercase tracking-tighter">Warranty</span>
                  <span className="block text-[8px] font-medium text-charcoal/40">on Zirconia Tips</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Service Grid */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">🦷</div>
              <h3 className="font-bold text-base">Root Canal (RCT)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Advanced painless procedure with precision rotary tools and digital mapping.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">💎</div>
              <h3 className="font-bold text-base">Zirconia Crowns</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Premium quality biocompatible caps with an industry-leading 10-year warranty.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">🏥</div>
              <h3 className="font-bold text-base">General Medicine</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Comprehensive OPD consultations for general wellness and health management.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 border-dashed flex flex-col justify-center items-center gap-2 text-center group cursor-pointer hover:bg-gray-50 transition-colors">
              <Link to="/services" className="space-y-2">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold text-gray-500">View All Services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor & Ayushman Section - 2 Column Split */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Doctor Card */}
            <div className="bg-charcoal text-white p-10 rounded-[2.5rem] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex gap-6 mb-8">
                  <div className="w-24 h-24 bg-gray-700 rounded-2xl overflow-hidden grayscale contrast-125 border border-white/10 shrink-0">
                    <div className="w-full h-full bg-primary flex items-center justify-center text-3xl font-bold">SC</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Dr. Sushil Choudhary</h4>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2 mt-1">Lead Surgeon</p>
                    <p className="text-sm text-gray-400">Certified Implantologist (Osstem, 2021)</p>
                    <p className="text-sm text-gray-400 italic">General & Dental Surgeon</p>
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl text-sm leading-relaxed italic border border-white/5">
                   "Fully impressed by all doctors and staff behavior. Digital impression technique is unique and the Zirconia cap quality is top notch."
                  <span className="block mt-3 text-primary font-bold not-italic">— Pankaj Jain</span>
                </div>
              </div>
            </div>

            {/* Ayushman Card */}
            <div className="bg-white p-10 rounded-[2.5rem] border-2 border-orange-50 flex flex-col shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-ayushman" />
                </div>
                <div className="px-3 py-1 bg-orange-100 text-ayushman text-[10px] font-black rounded-lg uppercase tracking-tighter">Empanelled</div>
              </div>
              <h3 className="text-2xl font-black text-ayushman mb-3 italic">AYUSHMAN BHARAT</h3>
              <p className="text-gray-600 mb-6 font-medium">
                Eligible patients can avail 100% cashless treatment under the PMJAY scheme for general and dental surgery procedures.
              </p>
              <ul className="text-sm space-y-4 mb-8">
                <li className="flex items-center gap-3 font-bold text-gray-700">
                  <div className="w-1.5 h-1.5 bg-ayushman rounded-full" />
                  Bring PMJAY / Golden Card
                </li>
                <li className="flex items-center gap-3 font-bold text-gray-700">
                  <div className="w-1.5 h-1.5 bg-ayushman rounded-full" />
                  Free Consultation for card holders
                </li>
                <li className="flex items-center gap-3 font-bold text-gray-700">
                  <div className="w-1.5 h-1.5 bg-ayushman rounded-full" />
                  Cashless IPD / Surgical services
                </li>
              </ul>
              <Link to="/ayushman" className="mt-auto w-full py-4 bg-orange-50 text-ayushman font-black rounded-2xl text-base border border-orange-200 text-center hover:bg-orange-100 transition-colors">
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Testimonials</h2>
          <p className="text-4xl font-black text-charcoal">What Our Patients Say</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent p-8 rounded-3xl relative"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-lg italic text-charcoal/80 mb-6 font-medium">"{t.text}"</p>
              <p className="font-bold text-charcoal">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="grid grid-cols-10 h-full w-full">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} className="border border-white" />
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-black">Experience Exceptional Care Today</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to transform your smile or need expert medical consultation? Our team is standing by to provide you with the best healthcare in Jodhpur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform">
                  Book Your Visit
                </Link>
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="bg-primary-dark border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                  Contact Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
