/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { HOSPITAL_INFO } from '../constants/hospitalData';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=Hi, I would like to book an appointment.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
      title="WhatsApp Us"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-12 right-0 bg-white text-charcoal px-3 py-1 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp Us
      </span>
    </motion.a>
  );
}
