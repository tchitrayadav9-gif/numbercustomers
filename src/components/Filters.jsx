import React from 'react';
import { Search, RotateCcw, Filter, IndianRupee } from 'lucide-react';

const NETWORKS = ['All Networks', 'Jio', 'Airtel', 'Vi', 'BSNL'];
const CATEGORIES = ['All Categories', 'VIP', 'Premium', 'Fancy', 'Regular'];

export default function Filters({
  search,
  setSearch,
  simType,
  setSimType,
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  priceBounds,
  onReset,
}) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md mb-8">
      {/* Search Input */}
      <div className="relative mb-5">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search number (e.g. 9999, 8888, 777), pattern or SIM..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {/* Network / SIM Type Filter */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Network Provider
          </label>
          <div className="flex flex-wrap gap-1.5">
            {NETWORKS.map((net) => (
              <button
                key={net}
                type="button"
                onClick={() => setSimType(net)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  simType === net
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {net}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Max Price Range Slider */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Max Price
            </label>
            <span className="text-xs font-extrabold text-amber-400">
              ₹{Number(maxPrice).toLocaleString('en-IN')}
            </span>
          </div>
          <input
            type="range"
            min={priceBounds.min || 0}
            max={priceBounds.max || 100000}
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        {/* Clear Filters Button */}
        <div>
          <button
            type="button"
            onClick={onReset}
            className="w-full py-2.5 px-3 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
