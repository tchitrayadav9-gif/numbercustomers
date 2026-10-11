import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';

export default function Header({ shopInfo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/91${shopInfo.whatsapp}?text=${encodeURIComponent(
    'Hello Rajahmundry Fancy Numbers, I am interested in exploring available VIP phone numbers.'
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wider text-white block">
                RAJAHMUNDRY
              </span>
              <span className="text-xs font-semibold tracking-widest text-amber-400 block -mt-1">
                FANCY NUMBERS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#inventory"
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              Browse Numbers
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              About Shop
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:+91${shopInfo.phone}`}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:border-slate-700 text-xs font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{shopInfo.phone}</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wide shadow-md shadow-emerald-900/40 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Home
          </a>
          <a
            href="#inventory"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Browse Numbers
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            About Shop
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            Contact
          </a>

          <div className="pt-2 border-t border-slate-900 flex flex-col space-y-2">
            <a
              href={`tel:+91${shopInfo.phone}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: {shopInfo.phone}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
