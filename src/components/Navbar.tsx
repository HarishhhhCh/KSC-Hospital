/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS, HOSPITAL_INFO } from '../constants/hospitalData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar - Only visible on desktop or when not scrolled */}
      <div className={`transition-all duration-300 overflow-hidden hidden md:block ${scrolled ? 'h-0' : 'h-10'}`}>
        <div className="utility-bar">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">📞 {HOSPITAL_INFO.phone}</span>
            <span className="flex items-center gap-2">📍 {HOSPITAL_INFO.address.split(',').slice(0, 3).join(',')}</span>
          </div>
          <div className="flex gap-4">
            <span>Ayushman Bharat (PMJAY) Cashless Available</span>
            <span className="bg-yellow-400 text-teal-900 px-2 rounded font-bold">{HOSPITAL_INFO.rating} ★ {HOSPITAL_INFO.reviewsCount} Reviews</span>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3' : 'bg-white border-gray-200 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary leading-none uppercase tracking-tight">KSC Hospital</h1>
                <p className="text-[10px] text-gray-500 font-semibold">GENERAL & DENTAL CARE</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary border-b-2 border-primary' : 'text-gray-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="sleek-button-primary">
                Book Appointment
              </Link>
            </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <a href={`tel:${HOSPITAL_INFO.phone}`} className="p-2 text-primary">
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-4 text-base font-medium border-b border-gray-50 last:border-0 ${
                    location.pathname === link.path ? 'text-primary' : 'text-charcoal/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  className="block w-full bg-primary text-white text-center px-4 py-3 rounded-xl font-bold shadow-lg"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </div>
  );
}
