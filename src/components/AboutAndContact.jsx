import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageCircle, HelpCircle } from 'lucide-react';

export default function AboutAndContact({ shopInfo }) {
  const whatsappUrl = `https://wa.me/91${shopInfo.whatsapp}?text=${encodeURIComponent(
    'Hello Rajahmundry Fancy Numbers, I would like more information about your shop and available fancy numbers.'
  )}`;

  return (
    <div className="space-y-16 py-12">
      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>About The Shop</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Rajahmundry Fancy Numbers
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              We provide customers in Rajahmundry and Andhra Pradesh with authentic, legal, and unique mobile SIM phone numbers across major telecom operators including Jio, Airtel, Vodafone Idea (Vi), and BSNL.
            </p>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Customers can explore real-time inventory on this website and contact the shop directly via WhatsApp or phone call to verify instant availability and finalize the transfer process.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80 pt-6">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <span className="text-xs text-amber-400 font-bold block">100% Genuine Numbers</span>
              <p className="text-xs text-slate-400 mt-1">Official telecom operator ownership transfer.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <span className="text-xs text-amber-400 font-bold block">Rajahmundry Local Service</span>
              <p className="text-xs text-slate-400 mt-1">Fast, reliable local customer assistance.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <span className="text-xs text-amber-400 font-bold block">Transparent Pricing</span>
              <p className="text-xs text-slate-400 mt-1">Live prices synced directly with our inventory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight">
            Ready to Get Your Fancy Number?
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Contact us today to inquire about any listed number or discuss custom pattern requests.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:+91${shopInfo.phone}`}
              className="w-full sm:w-1/2 flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {shopInfo.phone}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{shopInfo.location}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact: {shopInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span>Email: {shopInfo.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 pt-8 pb-12 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Rajahmundry Fancy Numbers. All rights reserved.</p>
        <p className="mt-1 text-slate-600">
          Mobile SIM & VIP Phone Number Services • Rajahmundry, Andhra Pradesh, India
        </p>
      </footer>
    </div>
  );
}
