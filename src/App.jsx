import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import NumberCard from './components/NumberCard';
import AboutAndContact from './components/AboutAndContact';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function App() {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [priceBounds, setPriceBounds] = useState({ min: 0, max: 50000 });

  // Filter States
  const [search, setSearch] = useState('');
  const [simType, setSimType] = useState('All Networks');
  const [category, setCategory] = useState('All Categories');
  const [maxPrice, setMaxPrice] = useState(50000);

  // Shop Info State (Loaded dynamically from shared backend)
  const [shopInfo, setShopInfo] = useState({
    shopName: import.meta.env.VITE_SHOP_NAME || 'Rajahmundry Fancy Numbers',
    phone: import.meta.env.VITE_SHOP_PHONE || '8499955543',
    whatsapp: import.meta.env.VITE_SHOP_WHATSAPP || '8499955543',
    email: import.meta.env.VITE_SHOP_EMAIL || 'satyadevatravellss@gmail.com',
    location: import.meta.env.VITE_SHOP_LOCATION || 'Rajahmundry, Andhra Pradesh, India',
  });

  // Fetch shop information
  const fetchShopInfo = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/public/shop-info`);
      if (res.data.success && res.data.data) {
        setShopInfo((prev) => ({ ...prev, ...res.data.data }));
      }
    } catch (err) {
      // Fallback to env values
    }
  };

  // Fetch numbers from public API
  const fetchNumbers = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    else setLoading(true);
    setError('');

    try {
      const params = {};
      if (category !== 'All Categories') params.category = category;
      if (simType !== 'All Networks') params.simType = simType;
      if (search.trim()) params.search = search.trim();
      if (maxPrice) params.maxPrice = maxPrice;

      const res = await axios.get(`${API_BASE_URL}/public/numbers`, { params });

      if (res.data.success) {
        setNumbers(res.data.data);
        if (res.data.availableSummary) {
          const max = res.data.availableSummary.maxPrice || 50000;
          setPriceBounds({
            min: res.data.availableSummary.minPrice || 0,
            max: max,
          });
        }
      }
    } catch (err) {
      setError(
        'Unable to load live inventory. Please check your internet connection or try again.'
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchShopInfo();
  }, []);

  // Fetch numbers whenever filter criteria changes
  useEffect(() => {
    fetchNumbers();
  }, [category, simType, maxPrice]);

  // Debounced search query
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchNumbers();
    }, 350);
    return () => clearTimeout(timer);
  }, [search]);

  // Periodic lightweight refresh every 30 seconds to fetch live inventory updates made by admin
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNumbers(true);
    }, 30000);
    return () => clearInterval(interval);
  }, [category, simType, search, maxPrice]);

  const handleResetFilters = () => {
    setSearch('');
    setSimType('All Networks');
    setCategory('All Categories');
    setMaxPrice(priceBounds.max || 50000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <Header shopInfo={shopInfo} />

      {/* Main Single-Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero totalAvailable={numbers.length} shopInfo={shopInfo} />

        {/* Inventory Section */}
        <section id="inventory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Available Fancy Numbers
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Displaying genuine numbers currently in stock. Contact us directly to claim your number.
              </p>
            </div>

            {/* Live Sync Status & Manual Refresh Button */}
            <div className="flex items-center space-x-3 self-start sm:self-auto">
              <span className="text-[11px] text-slate-500 font-medium">
                Live sync active
              </span>
              <button
                type="button"
                onClick={() => fetchNumbers(true)}
                disabled={refreshing}
                title="Refresh Inventory"
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-xs font-semibold transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-amber-400' : ''}`} />
                <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
              </button>
            </div>
          </div>

          {/* Search & Filters */}
          <Filters
            search={search}
            setSearch={setSearch}
            simType={simType}
            setSimType={setSimType}
            category={category}
            setCategory={setCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            priceBounds={priceBounds}
            onReset={handleResetFilters}
          />

          {/* Loading State */}
          {loading && !refreshing && (
            <div className="py-24 flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-xs text-slate-400 font-medium">Connecting to live inventory database...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="py-16 text-center max-w-md mx-auto p-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
              <AlertCircle className="w-8 h-8 text-rose-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-white">Connection Error</h3>
              <p className="text-xs text-slate-400 mt-1">{error}</p>
              <button
                onClick={() => fetchNumbers()}
                className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg hover:bg-amber-400"
              >
                Retry Loading
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && numbers.length === 0 && (
            <div className="py-20 text-center max-w-md mx-auto p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">No Matching Numbers Found</h3>
              <p className="text-xs text-slate-400 mt-1">
                No available phone numbers match your search filter. Try clearing the filter or contact our shop on WhatsApp for custom VIP numbers.
              </p>
              <div className="mt-5 flex justify-center space-x-3">
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-slate-800 text-slate-200 hover:text-white rounded-lg text-xs font-semibold"
                >
                  Clear Filters
                </button>
                <a
                  href={`https://wa.me/91${shopInfo.whatsapp}?text=${encodeURIComponent(
                    'Hello Rajahmundry Fancy Numbers, I am looking for a specific VIP number pattern not listed on the website.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold"
                >
                  Request on WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Cards Grid */}
          {!loading && !error && numbers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {numbers.map((item) => (
                <NumberCard key={item._id} number={item} shopInfo={shopInfo} />
              ))}
            </div>
          )}
        </section>

        {/* About & Contact Section */}
        <AboutAndContact shopInfo={shopInfo} />
      </main>
    </div>
  );
}
