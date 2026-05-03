/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Calendar,
  MessageCircle,
  HelpCircle,
  CheckCircle,
  Map as MapIcon
} from 'lucide-react';
import { HOSPITAL_INFO, SERVICES } from '../constants/hospitalData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API
    setFormState(prev => ({ ...prev, submitted: true }));
  };

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.405367683416!2d73.05052643265355!3d26.33399947844033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941d89f87f2cccd%3A0x42880621321d22e5!2sKSC%20General%20%26%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1714660000000!5m2!1sen!2sin`;

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Get In Touch</h2>
          <h1 className="text-4xl lg:text-6xl font-black text-charcoal">Book Your Visit</h1>
          <p className="text-xl text-charcoal/60">Have questions? Ready to book an appointment? Our team is here to help you every step of the way.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-gray-100"
          >
            {formState.submitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-charcoal">Request Received!</h3>
                <p className="text-charcoal/60">Thank you for choosing KSC Hospital. Our team will contact you shortly to confirm your slot.</p>
                <button 
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                  className="text-primary font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest block">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-accent border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl outline-none transition-all font-medium"
                    value={formState.name}
                    onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest block">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-accent border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl outline-none transition-all font-medium"
                    value={formState.phone}
                    onChange={e => setFormState(p => ({ ...p, phone: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest block">Service Needed</label>
                    <select 
                      required
                      className="w-full bg-accent border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl outline-none transition-all font-medium appearance-none"
                      value={formState.service}
                      onChange={e => setFormState(p => ({ ...p, service: e.target.value }))}
                    >
                      <option value="">Select Service</option>
                      {[...SERVICES.dental, ...SERVICES.general].map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-charcoal/60 uppercase tracking-widest block">Preferred Date</label>
                    <input 
                      required
                      type="date"
                      className="w-full bg-accent border-2 border-transparent focus:border-primary/20 focus:bg-white p-4 rounded-xl outline-none transition-all font-medium"
                      value={formState.date}
                      onChange={e => setFormState(p => ({ ...p, date: e.target.value }))}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <Send className="h-5 w-5" /> Book Appointment
                </button>
                <p className="text-xs text-center text-charcoal/40 font-medium">By submitting, you agree to our privacy policy and terms of service.</p>
              </form>
            )}
          </motion.div>

          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-black text-lg">Our Address</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{HOSPITAL_INFO.address}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center text-secondary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-black text-lg">Clinic Hours</h3>
                <div className="text-sm text-charcoal/60">
                  <p>Mon - Sat: {HOSPITAL_INFO.hours.weekdays}</p>
                  <p>Sunday: {HOSPITAL_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={`tel:${HOSPITAL_INFO.phone}`} 
                className="flex-1 bg-charcoal text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-bold justify-center min-w-[200px]"
              >
                <Phone className="h-5 w-5" /> Call: {HOSPITAL_INFO.phone}
              </a>
              <a 
                href={`https://wa.me/${HOSPITAL_INFO.whatsapp}`} 
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#25D366] text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-bold justify-center min-w-[200px]"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative h-80 border-8 border-white">
              <iframe
                title="Google Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                 <MapIcon className="h-4 w-4 text-primary" />
                 <span className="text-xs font-black uppercase tracking-widest">Get Directions</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-black text-charcoal">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { q: "Is Ayushman Bharat accepted for dental procedures?", a: "Ayushman Bharat primarily covers surgical and general medical procedures. Please contact our Ayushman desk for specific dental procedure coverage." },
              { q: "Do you offer emergency dental care?", a: "Yes, we provide emergency dental care during our working hours. For urgent trauma, please call us directly." },
              { q: "How long is the wait time for appointments?", a: "We strive to minimize wait times. Pre-booked appointments usually have a wait time of less than 15-20 minutes." },
              { q: "Is there parking available at the hospital?", a: "Yes, we have dedicated patient parking available right in front of the clinic." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h4 className="font-black text-lg mb-4 text-primary">Q: {faq.q}</h4>
                <p className="text-charcoal/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
