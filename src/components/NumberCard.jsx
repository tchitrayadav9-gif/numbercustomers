import React from 'react';
import { Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function NumberCard({ number, shopInfo }) {
  const whatsappText = `Hello Rajahmundry Fancy Numbers, I am interested in the fancy number ${number.phoneNumber} on ${
    number.simType || 'Jio'
  } listed at ₹${number.price?.toLocaleString('en-IN')}. Please confirm its current availability and price.`;

  const whatsappUrl = `https://wa.me/91${shopInfo.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
  const callUrl = `tel:+91${shopInfo.phone}`;

  // Provider styles
  const providerBadges = {
    Airtel: 'bg-red-500/10 text-red-400 border-red-500/30',
    Vi: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    BSNL: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    Jio: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  };

  const providerStyle = providerBadges[number.simType] || providerBadges.Jio;

  return (
    <div className="group bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl hover:shadow-amber-500/5 transition-all flex flex-col justify-between relative overflow-hidden">
      {/* Top Tag & Badges */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {/* SIM Type Badge */}
            <span
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${providerStyle}`}
            >
              {number.simType || 'Jio'}
            </span>

            {/* Category Badge */}
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                number.category === 'VIP'
                  ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                  : number.category === 'Premium'
                  ? 'bg-purple-400/10 text-purple-300 border border-purple-400/20'
                  : 'bg-slate-800 text-slate-300'
              }`}
            >
              {number.category}
            </span>
          </div>

          {/* Availability Indicator */}
          <span className="flex items-center space-x-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3" />
            <span>Available</span>
          </span>
        </div>

        {/* SIM Label Name */}
        <p className="text-xs text-slate-400 font-medium tracking-wide">
          {number.simName || 'Primary SIM'}
        </p>

        {/* Large Prominent Phone Number */}
        <div className="my-3">
          <h3 className="font-mono text-2xl sm:text-3xl font-black tracking-wider text-white group-hover:text-amber-300 transition-colors">
            {number.phoneNumber}
          </h3>
          {number.description && (
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
              {number.description}
            </p>
          )}
        </div>

        {/* Pattern tags if present */}
        {number.tags && number.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {number.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-1.5 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Pricing & Contact Actions */}
      <div className="pt-4 border-t border-slate-800/80 mt-2">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
              Price
            </span>
            <span className="text-2xl font-black text-amber-400">
              ₹{number.price?.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">All Taxes Included</span>
        </div>

        {/* 2 Contact Buttons: WhatsApp Enquiry + Call Shop */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-950/50 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>

          <a
            href={callUrl}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
