/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const HOSPITAL_INFO = {
  name: "KSC General & Dental Hospital",
  tagline: "Your Smile, Our Priority — Advanced Dental & General Care",
  address: "10, Adarsh Nagar, Near ICICI Bank, Lal Sagar Road, Mandore, Jodhpur, Rajasthan – 342304",
  phone: "+91 94628 44444",
  email: "info@kscdentalclinic.com",
  website: "kscdentalclinic.com",
  rating: "4.9",
  reviewsCount: "1,500+",
  experience: "9+",
  whatsapp: "919462844444",
  mapCoordinates: {
    lat: 26.3339995,
    lng: 73.0527151,
    placeId: "ChIJzczyh59YO4AR5SIdMiEGiEI"
  },
  hours: {
    weekdays: "4:00 PM – 8:00 PM",
    sunday: "10:00 AM – 1:00 PM"
  }
};

export const SERVICES = {
  dental: [
    {
      id: "rct",
      title: "Root Canal Treatment (RCT)",
      description: "Advanced painless RCT procedure using modern rotary endodontics.",
      longDescription: "Our painless Root Canal Treatment ensures you preserve your natural teeth with minimal discomfort.",
      icon: "Tooth"
    },
    {
      id: "zirconia",
      title: "Zirconia Crowns & Bridges",
      description: "Highest quality crowns with 10-Year Warranty for lasting smiles.",
      longDescription: "Durable and aesthetic Zirconia crowns that look and feel naturally beautiful.",
      icon: "Shield"
    },
    {
      id: "implants",
      title: "Dental Implants",
      description: "Certified Osstem Implantologist providing permanent tooth replacement.",
      longDescription: "Restore your confidence with permanent, high-strength dental implants.",
      icon: "Stethoscope"
    },
    {
      id: "orthodontics",
      title: "Orthodontic Treatment",
      description: "Braces & Clear Aligners for perfect teeth alignment.",
      longDescription: "Choose from traditional braces or invisible aligners for a straighter smile.",
      icon: "Smile"
    },
    {
      id: "whitening",
      title: "Teeth Whitening",
      description: "Professional grade whitening for a brighter, radiant smile.",
      longDescription: "Safe and effective whitening treatments to remove stains and discoloration.",
      icon: "Sparkles"
    },
    {
      id: "cleaning",
      title: "Cleaning & Scaling",
      description: "Professional dental hygiene and tartar removal.",
      longDescription: "Regular cleaning to prevent gum disease and maintain oral health.",
      icon: "Droplets"
    },
    {
      id: "extraction",
      title: "Tooth Extraction",
      description: "Gentle and surgical tooth removal when necessary.",
      longDescription: "Expert extraction with focus on patient comfort and fast healing.",
      icon: "Scissors"
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      description: "Specialized gentle dental care for our little patients.",
      longDescription: "Fun and friendly dental environment to keep your child's teeth healthy.",
      icon: "Baby"
    }
  ],
  general: [
    {
      id: "general-medicine",
      title: "General Medicine & OPD",
      description: "Comprehensive care for general health and daily medical needs.",
      icon: "Activity"
    },
    {
      id: "obgyn",
      title: "OB-GYN / Maternity",
      description: "Expert maternity and women's health services.",
      icon: "Heart"
    },
    {
      id: "ayushman",
      title: "Ayushman Bharat (PMJAY)",
      description: "Cashless treatments for eligible patients under PMJAY.",
      icon: "CreditCard"
    }
  ]
};

export const TESTIMONIALS = [
  {
    name: "Ravindra Singh",
    text: "Root Canal treatment done here... Digital impression technique is unique. Very good service and highly professional doctors.",
    rating: 5
  },
  {
    name: "Pinkal Gehlot",
    text: "Zirconia cap with 10 year warranty. Treatment went so smoothly. Highly recommend for all dental treatments.",
    rating: 5
  },
  {
    name: "Pankaj Jain",
    text: "Fully impressed by all doctors and staff behavior. Zirconia cap quality very nice.",
    rating: 5
  }
];

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Ayushman Bharat", path: "/ayushman" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" }
];
