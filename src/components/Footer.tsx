/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, Facebook, Instagram, Twitter } from 'lucide-react';
import { HOSPITAL_INFO, NAV_LINKS } from '../constants/hospitalData';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">KSC Hospital</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading the way in advanced dental and general healthcare for over 9 years in Jodhpur. Your trusted partner for painless dental treatments and general medicine.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">{HOSPITAL_INFO.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-sm hover:text-white">{HOSPITAL_INFO.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-sm hover:text-white">{HOSPITAL_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-white">Mon - Sat</p>
                  <p>{HOSPITAL_INFO.hours.weekdays}</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Sunday</p>
                  <p>{HOSPITAL_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-xs space-y-2">
          <p>&copy; {new Date().getFullYear()} KSC General & Dental Hospital. All Rights Reserved.</p>
          <p>Designed for excellence in healthcare.</p>
        </div>
      </div>
    </footer>
  );
}
