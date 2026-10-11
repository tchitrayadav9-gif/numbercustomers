import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

export default function Hero({ totalAvailable, shopInfo }) {
  const whatsappHero = `https://wa.me/91${shopInfo.whatsapp}?text=${encodeURIComponent(
    'Hello Rajahmundry Fancy Numbers, I want to inquire about purchasing a VIP fancy phone number.'
  )}`;

  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[250px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* City & Reliability Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-6 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Rajahmundry • Andhra Pradesh</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-normal">Authentic SIM Ownership</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Find Your Perfect <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            Fancy & VIP Mobile Number
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Explore curated VIP mobile numbers, repeated digit combinations, and premium patterns on Jio, Airtel, Vi, and BSNL. Contact our shop directly to verify availability and secure your number.
        </p>

        {/* Statistics Pill */}
        <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-slate-400">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold text-white">{totalAvailable}</span>
            <span>Numbers Live in Stock</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Fast & Legal SIM Transfer</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inventory"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore Numbers</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={whatsappHero}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
