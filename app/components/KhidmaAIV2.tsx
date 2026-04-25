"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { MESSAGES, CONTACT_INFO } from '../constants/contact';
import { FaInstagram, FaChrome, FaTiktok } from "react-icons/fa";
import { Search, MapPin, Star, MessageSquare, Navigation, CheckCircle2, Building2, Zap, Sparkles, Users, ChevronDown, Send, ArrowRight, Shield, Calendar, Clock, BarChart3, Lock, Verified, Bot, Globe, UserCheck, FileCheck, Bell, TrendingUp, Award, Headphones, Rocket, Languages, Menu, X, Play, Heart, Share2, Smartphone, Apple, CheckCircle, ArrowUpRight, Quote, Mail, ExternalLink, Flame, Trophy, Target, Zap as ZapIcon, Crown, Gift, Phone, AlertCircle, XCircle, Loader2, Sparkle } from 'lucide-react';



// --- مكون محاكي الهاتف (Phone Mockup) ---
const PhoneMockup = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);






  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
      {/* سبيكر الهاتف (Notch) */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      
      {/* الشاشة الداخلية */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#f8f9fa] relative">
        
        {/* شريط الحالة الوهمي (Status Bar) */}
        <div className="absolute top-0 w-full h-6 px-6 flex justify-between items-center z-10 text-[10px] text-black font-bold">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* محاكاة لواجهة تطبيقك (Flutter UI Simulation) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-4 pt-10 h-full flex flex-col gap-4 overflow-y-auto no-scrollbar"
          >
            {currentScreen === 0 && (
              <>
                {/* Header */}
                <div className="h-10 w-full bg-purple-600 rounded-xl flex items-center justify-between px-3 text-white text-[10px] font-bold">
                    <span>Khidma AI</span>
                    <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-hidden">
                    {['الكل', 'مطاعم', 'عيادات'].map(c => (
                        <div key={c} className="px-3 py-1.5 bg-gray-200 rounded-full text-[8px] font-bold text-gray-600 shrink-0">{c}</div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="h-10 w-full border border-gray-200 rounded-xl bg-white flex items-center px-3 gap-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
                </div>

                {/* Cards */}
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-3 flex-row-reverse">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 w-2/3 bg-gray-300 rounded-full"></div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                            <div className="flex gap-1 justify-end">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                ))}
              </>
            )}
            
            {currentScreen === 1 && (
              <div className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-purple-600" />
                </div>
                <div className="text-center px-4">
                  <div className="h-2 w-32 bg-gray-300 rounded-full mb-2 mx-auto"></div>
                  <div className="h-1.5 w-40 bg-gray-100 rounded-full mx-auto"></div>
                </div>
                <div className="w-full px-4">
                  <div className="h-12 bg-purple-600 rounded-xl"></div>
                </div>
              </div>
            )}
            
            {currentScreen === 2 && (
              <div className="flex flex-col gap-3 pt-20">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-2xl text-white">
                  <div className="h-2 w-24 bg-white/40 rounded-full mb-2"></div>
                  <div className="h-6 w-16 bg-white/60 rounded-lg mb-2"></div>
                  <div className="h-1.5 w-32 bg-white/30 rounded-full"></div>
                </div>
                {[1, 2].map(i => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-gray-200 flex gap-2 items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-1.5 w-20 bg-gray-300 rounded-full"></div>
                      <div className="h-1 w-full bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- مكون الأكورديون للأسئلة الشائعة ---
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-right hover:text-purple-400 transition-colors group"
        aria-expanded={isOpen}
        aria-label={question}
      >
        <span className="text-lg font-bold group-hover:pr-2 transition-all">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-500' : 'text-gray-600'}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-300 leading-relaxed text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- مكون بطاقة الميزة ---
const FeatureCard = ({ icon, title, description, gradient }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className={`relative group overflow-hidden bg-gradient-to-br ${gradient} rounded-3xl p-8 border border-white/10`}
  >
    <div className="relative z-10">
      <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-3 text-right">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-right font-medium">{description}</p>
    </div>
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
  </motion.div>
);

// --- مكون شهادة عميل ---
const TestimonialCard = ({ name, role, content, rating, image }: any) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative group"
  >
    <div className="absolute top-6 right-6 text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
      <Quote className="w-12 h-12" aria-hidden="true" />
    </div>
    <div className="relative z-10">
      <div className="flex gap-1 mb-4" role="img" aria-label={`تقييم ${rating} من 5 نجوم`}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" aria-hidden="true" />
        ))}
      </div>
      <p className="text-gray-300 text-base leading-relaxed mb-6 italic text-right">
        &quot;{content}&quot;
      </p>
      <div className="flex items-center gap-3 flex-row-reverse">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold" aria-hidden="true">
          {image}
        </div>
        <div className="text-right">
          <div className="font-bold text-white">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- مكون عداد الأرقام المتحركة ---
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: any) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          const increment = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return <div ref={elementRef}>{count}{suffix}</div>;
};

// --- مكون البحث التفاعلي الحي (DEMO) ---
const LiveSearchDemo = ({ lang }: { lang: 'ar' | 'en' }) => {
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  type ServiceKey = 'dental' | 'burger' | 'gym';
  type LangKey = 'ar' | 'en';

  const services: Record<LangKey, { value: ServiceKey; label: string }[]> = {
    ar: [
      { value: 'dental', label: 'تنظيف أسنان' },
      { value: 'burger', label: 'برجر' },
      { value: 'gym', label: 'اشتراك شهري نادي' },
    ],
    en: [
      { value: 'dental', label: 'Dental Cleaning' },
      { value: 'burger', label: 'Burger' },
      { value: 'gym', label: 'Monthly Gym Subscription' },
    ],
  };

  const demoData: Record<LangKey, Record<ServiceKey, any[]>> = {
    ar: {
      dental: [
        { name: 'عيادة النور لطب الأسنان', rating: 4.8, distance: '1.2 كم', price: 150 },
        { name: 'مركز الشفاء الطبي',        rating: 4.9, distance: '2.5 كم', price: 200 },
        { name: 'عيادة الحياة للأسرة',       rating: 4.7, distance: '3.1 كم', price: 120 },
      ],
      burger: [
        { name: 'بيت البرجر',    rating: 4.8, distance: '800 م',  price: 45 },
        { name: 'مطعم الذواقة', rating: 4.6, distance: '1.5 كم', price: 60 },
        { name: 'مطعم الأصالة', rating: 4.9, distance: '2.2 كم', price: 35 },
      ],
      gym: [
        { name: 'نادي اللياقة الذهبي',  rating: 4.7, distance: '1.8 كم', price: 180 },
        { name: 'فيتنس بلس',             rating: 4.8, distance: '2.3 كم', price: 220 },
        { name: 'نادي القوة الرياضي', rating: 4.6, distance: '3.5 كم', price: 150 },
      ],
    },
    en: {
      dental: [
        { name: 'Al-Noor Dental Clinic',  rating: 4.8, distance: '1.2 km', price: 150 },
        { name: 'Al-Shifa Medical Center', rating: 4.9, distance: '2.5 km', price: 200 },
        { name: 'Life Family Clinic',      rating: 4.7, distance: '3.1 km', price: 120 },
      ],
      burger: [
        { name: 'Burger House',        rating: 4.8, distance: '800 m',  price: 45 },
        { name: 'Gourmet Restaurant',  rating: 4.6, distance: '1.5 km', price: 60 },
        { name: 'Heritage Restaurant', rating: 4.9, distance: '2.2 km', price: 35 },
      ],
      gym: [
        { name: 'Golden Fitness Club',   rating: 4.7, distance: '1.8 km', price: 180 },
        { name: 'Fitness Plus',          rating: 4.8, distance: '2.3 km', price: 220 },
        { name: 'Power Sports Club',     rating: 4.6, distance: '3.5 km', price: 150 },
      ],
    },
  };

  const t = {
    ar: {
      city: 'المدينة المتاحة',
      riyadh: 'الرس',
      riyadhNote: 'المدينة الوحيدة متاحة حالياً',
      selectService: 'اختر الخدمة',
      budgetLabel: 'ميزانيتك (ريال)',
      button: 'ابحث الآن',
      searching: 'جاري البحث...',
      noResults: 'لا توجد نتائج',
      withinBudget: 'ضمن ميزانيتك',
      overBudget: 'يتجاوز الميزانية',
      sar: 'ر.س',
      price: 'السعر',
      demo: 'تجربة توضيحية',
    },
    en: {
      city: 'Available City',
      riyadh: 'AR rass',
      riyadhNote: 'Only city available now',
      selectService: 'Select Service',
      budgetLabel: 'Your Budget (SAR)',
      button: 'Search Now',
      searching: 'Searching...',
      noResults: 'No results found',
      withinBudget: 'Within budget',
      overBudget: 'Over budget',
      sar: 'SAR',
      price: 'Price',
      demo: 'Demo',
    },
  };

  const tx = t[lang];

  const handleSearch = () => {
    if (!service || !budget) return;

    setIsSearching(true);
    setHasSearched(true);
    setResults([]);

    setTimeout(() => {
      const key = service as ServiceKey;
      const budgetNum = parseFloat(budget);
      const list = (demoData[lang][key] || [])
        .sort((a: any, b: any) => a.price - b.price);
      setResults(list.map((r: any) => ({ ...r, fits: r.price <= budgetNum })));
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-bold mb-4">
          <Sparkle className="w-4 h-4" aria-hidden="true" />
          {tx.demo}
        </div>
      </motion.div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

        <div className="flex items-center gap-3 mb-6 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-2xl">
          <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
          <span className="text-sm text-gray-300 font-medium">{tx.city}:</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-bold">
            {tx.riyadh}
          </span>
          <span className="text-xs text-gray-400 mr-auto">{tx.riyadhNote}</span>
        </div>

        <div className="flex gap-3 mb-4 flex-wrap">
          <label htmlFor="service-select" className="sr-only">{tx.selectService}</label>
          <select
            id="service-select"
            value={service}
            onChange={(e) => { setService(e.target.value); setHasSearched(false); }}
            className="flex-1 min-w-[160px] bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-right"
            aria-label={tx.selectService}
          >
            <option value="" disabled className="bg-gray-900">{tx.selectService}</option>
            {services[lang].map((s) => (
              <option key={s.value} value={s.value} className="bg-gray-900">{s.label}</option>
            ))}
          </select>

          <label htmlFor="budget-input" className="sr-only">{tx.budgetLabel}</label>
          <input
            id="budget-input"
            type="number"
            value={budget}
            onChange={(e) => { setBudget(e.target.value); setHasSearched(false); }}
            placeholder={tx.budgetLabel}
            min={1}
            className="flex-1 min-w-[160px] bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-right"
            aria-label={tx.budgetLabel}
          />
        </div>

        <button
          onClick={handleSearch}
          disabled={isSearching || !service || !budget}
          className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-6"
          aria-label={tx.button}
        >
          {isSearching ? (
            <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />{tx.searching}</>
          ) : (
            <><Search className="w-5 h-5" aria-hidden="true" />{tx.button}</>
          )}
        </button>

        <AnimatePresence mode="wait">
          {isSearching && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex items-center justify-center py-12" role="status" aria-live="polite">
              <Loader2 className="w-8 h-8 animate-spin text-purple-500" aria-hidden="true" />
              <span className="sr-only">{tx.searching}</span>
            </motion.div>
          )}

          {!isSearching && hasSearched && results.length === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="text-center py-12" role="status" aria-live="polite">
              <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
              <p className="text-gray-400">{tx.noResults}</p>
            </motion.div>
          )}

          {!isSearching && results.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3" role="region" aria-live="polite" aria-label="نتائج البحث">
              {results.map((result, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center justify-between gap-4 flex-row-reverse">
                    <div className="flex-1 text-right">
                      <h3 className="font-bold text-lg mb-1">{result.name}</h3>
                      <div className="flex items-center gap-4 justify-end text-sm text-gray-400 flex-wrap">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" aria-hidden="true" />{result.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" aria-hidden="true" />{result.rating}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          result.fits
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}>
                          {result.fits ? tx.withinBudget : tx.overBudget}
                        </span>
                      </div>
                    </div>
                    <div className="text-center flex-shrink-0">
                      <div className={`text-2xl font-black ${result.fits ? 'text-green-400' : 'text-red-400'}`}>
                        {result.price} {tx.sar}
                      </div>
                      <div className="text-xs text-gray-500">{tx.price}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SaudiMapSection = ({ lang }: { lang: 'ar' | 'en' }) => {
  const t = {
    ar: {
      title: 'نبدأ من مدينة واحدة... ونصل لكل المملكة',
      subtitle: 'خطتنا للتوسع عبر المدن السعودية',
      current: 'متاح الآن',
      soon: 'قريباً',
      riyadh: 'الرس',
      jeddah: 'جدة',
      dammam: 'الدمام',
      makkah: 'مكة',
      madinah: 'المدينة',
      cities: 'مدينة قريباً'
    },
    en: {
      title: 'Starting from One City... Reaching All of Saudi',
      subtitle: 'Our expansion plan across Saudi cities',
      current: 'Available Now',
      soon: 'Coming Soon',
      riyadh: 'Ar rass',
      jeddah: 'Jeddah',
      dammam: 'Dammam',
      makkah: 'Makkah',
      madinah: 'Madinah',
      cities: 'cities coming soon'
    }
  };

  return (
    <section className="py-24 px-6 bg-[#030014] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-white">
            {t[lang].title}
          </h2>
          <p className="text-gray-400 font-medium text-xl">{t[lang].subtitle}</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <svg viewBox="0 0 400 300" className="w-full h-auto" aria-label="خريطة السعودية" role="img">
              <path
                d="M 50 150 L 100 100 L 150 80 L 200 70 L 250 80 L 300 100 L 350 120 L 370 150 L 360 180 L 340 210 L 300 240 L 250 260 L 200 270 L 150 260 L 100 240 L 60 210 L 50 180 Z"
                fill="url(#mapGradient)"
                stroke="rgba(139, 92, 246, 0.5)"
                strokeWidth="2"
                className="drop-shadow-2xl"
              />
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>
              </defs>

              <g>
                <motion.circle
                  cx="200"
                  cy="150"
                  r="8"
                  fill="#10b981"
                  className="drop-shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx="200"
                  cy="150"
                  r="15"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  opacity="0.5"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </g>

              <motion.circle
                cx="120"
                cy="180"
                r="6"
                fill="#8b5cf6"
                opacity="0.6"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              <motion.circle
                cx="320"
                cy="170"
                r="6"
                fill="#8b5cf6"
                opacity="0.6"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />

              <motion.circle
                cx="100"
                cy="200"
                r="6"
                fill="#8b5cf6"
                opacity="0.6"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />

              <motion.circle
                cx="150"
                cy="120"
                r="6"
                fill="#8b5cf6"
                opacity="0.6"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
              />
            </svg>

            <div className="absolute top-[45%] left-[46%] transform -translate-x-1/2 -translate-y-full mb-4">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                {t[lang].riyadh} ✓
              </div>
            </div>
          </motion.div>

          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full" aria-hidden="true"></div>
              <span className="text-sm font-bold text-gray-400">{t[lang].current}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full" aria-hidden="true"></div>
              <span className="text-sm font-bold text-gray-400">5+ {t[lang].cities}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BeforeAfterSection = ({ lang }: { lang: 'ar' | 'en' }) => {
  const t = {
    ar: {
      title: 'من التعب... للراحة',
      before: 'قبل Khidma AI',
      after: 'مع Khidma AI',
      problems: [
        'تضيع وقت تسأل هنا وهناك',
        'ما تعرف إذا المكان موثوق',
        'صعوبة المقارنة بين الخيارات',
        'معلومات ناقصة أو قديمة'
      ],
      solutions: [
        'كل شي في مكان واحد بثواني',
        'تقييمات حقيقية من مستخدمين',
        'مقارنة سهلة وواضحة',
        'معلومات محدثة باستمرار'
      ]
    },
    en: {
      title: 'From Struggle... To Ease',
      before: 'Before Khidma AI',
      after: 'With Khidma AI',
      problems: [
        'Waste time asking around',
        'Don\'t know if place is trusted',
        'Hard to compare options',
        'Incomplete or outdated info'
      ],
      solutions: [
        'Everything in one place instantly',
        'Real reviews from users',
        'Easy and clear comparison',
        'Always updated information'
      ]
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">{t[lang].title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/10 border border-red-500/20 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <XCircle className="w-8 h-8 text-red-500" aria-hidden="true" />
              <h3 className="text-2xl font-black text-red-400">{t[lang].before}</h3>
            </div>
            <div className="space-y-4">
              {t[lang].problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-right"
                >
                  <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <p className="text-gray-300 font-medium">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
              <h3 className="text-2xl font-black text-green-400">{t[lang].after}</h3>
            </div>
            <div className="space-y-4">
              {t[lang].solutions.map((solution, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-right"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <p className="text-gray-300 font-medium">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const SuggestCenterSection = ({ lang }: { lang: 'ar' | 'en' }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = "https://khidma-ai.vercel.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: lang === 'ar' ? 'Khidma AI - انضم معنا' : 'Khidma AI - Join Us',
        text: lang === 'ar'
          ? 'سجّل مركزك على Khidma AI وخل عملاءك يلقونك بسهولة!'
          : 'Register your center on Khidma AI and let your customers find you easily!',
        url: shareUrl,
      });
    } else {
      handleCopy();
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-[40px] p-10 md:p-16 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[40px]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[40px]" />

          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-6xl mb-6 inline-block"
            aria-hidden="true"
          >
            🔍
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            {lang === 'ar' ? (
              <>
                ما لقيت مركزك المفضل؟{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  رشّحه لنا! 🎯
                </span>
              </>
            ) : (
              <>
  Didn&apos;t find your favorite place?{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Refer them! 🎯
                </span>
              </>
            )}
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
            {lang === 'ar'
              ? 'شارك رابط Khidma AI مع مطعمك المفضل أو عيادتك أو أي مركز تحبه — وقولهم يسجلون عندنا مجاناً عشان تلقاهم هنا قريباً! 🚀'
              : 'Share Khidma AI with your favorite restaurant, clinic, or any place you love — tell them to register for free so you can find them here soon! 🚀'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 mt-8">
            {(lang === 'ar'
              ? [
                  { emoji: '📲', text: 'شارك الرابط مع المركز' },
                  { emoji: '✨', text: 'يسجلون مجاناً عندنا' },
                  { emoji: '🎉', text: 'تلقاهم هنا قريباً!' },
                ]
              : [
                  { emoji: '📲', text: 'Share the link with them' },
                  { emoji: '✨', text: 'They register for free' },
                  { emoji: '🎉', text: 'Find them here soon!' },
                ]
            ).map((step, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-white/10 transition-all" aria-hidden="true">
                    {step.emoji}
                  </div>
                  <span className="text-xs text-gray-500 font-bold">{step.text}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden sm:block text-gray-700 text-xl mb-5" aria-hidden="true">
                    {lang === 'ar' ? '←' : '→'}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleShare}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all group"
              aria-label={lang === 'ar' ? 'شارك مع مركزك الآن' : 'Share with your center now'}
            >
              <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
              {lang === 'ar' ? 'شارك مع مركزك الآن' : 'Share with your center now'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopy}
              className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
              aria-label={copied ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'انسخ الرابط' : 'Copy link')}
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                  <span className="text-green-400">{lang === 'ar' ? 'تم النسخ! ✅' : 'Copied! ✅'}</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  {lang === 'ar' ? 'انسخ الرابط' : 'Copy link'}
                </>
              )}
            </motion.button>
          </div>

          <p className="mt-8 text-gray-600 text-sm font-bold">
            {lang === 'ar'
              ? '💜 كل مركز تضيفه يساعد مجتمعك بأكمله'
              : '💜 Every center you add helps your whole community'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};




export default function KhidmaAIV2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true); 
  const [cookieVisible, setCookieVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const accepted = localStorage.getItem('cookies_accepted');
    if (!accepted) setCookieVisible(true);
  }, []);

  const t = {
    ar: {
      nav: {
        features: 'المميزات',
        business: 'للأعمال',
        demo: 'جرّب الآن',
        testimonials: 'آراء العملاء',
        faq: 'الأسئلة الشائعة',
        login: 'دخول المنصة'
      },
      hero: {
        badge: 'قريباً في كافة أنحاء المملكة 🇸🇦',
        greeting: 'هلا والله 👋🏻',
        title: 'دليلك الذكي لكل الخدمات حولك',
        titleHighlight: 'يوصلك خلال ثواني...',
        subtitle: 'بدل ما تسأل فلان وعلان،',
        subtitleBold: 'Khidma AI',
        subtitleEnd: 'يجمع لك أفضل العيادات والمطاعم والمعاهد في مكان واحد. بضغطة زر يوصلك للي تبي.',
        cta1: 'ابدأ البحث الآن',
        ctaSub: 'بدون تسجيل – مجاني 100%',
        cta2: 'أضف مركزك مجاناً',
        webNotice: '🌐 متاح حالياً كموقع إلكتروني - التطبيق قريباً!',
        proof: {
          rating: 'تقييم ممتاز',
          users: 'مستخدم منتظر',
          centers: 'مركز مسجل'
        }
      },
      stats: {
        centers: 'مركز مسجل',
        users: 'مستخدم ينتظرنا',
        city: 'مدينة (البداية)',
        support: 'دعم ذكي',
        reviews: 'تقييم حقيقي',
        satisfaction: 'رضا العملاء'
      },
      business: {
        title: 'نظام متكامل لأصحاب الأعمال',
        subtitle: 'ادر مركزك باحترافية مع حلول ذكية ومؤمنة',
        verification: {
          title: 'تحقق ذكي بالذكاء الاصطناعي',
          desc: 'نظام AI متقدم يراجع بياناتك تلقائياً ويتأكد من صحتها قبل النشر - صفر احتيال، صفر سبام'
        },
        booking: {
          title: 'حجز سريع ومباشر',
          desc: 'نظام حجز متطور يربطك بعملائك بلمح البصر - إشعارات فورية وإدارة سهلة'
        },
        security: {
          title: 'حماية من الدرجة الأولى',
          desc: 'أنظمة تحقق متعددة المستويات تمنع الاختراقات والانتحال - مركزك في أيدٍ أمينة'
        },
        manage: {
          title: 'تعديل وإدارة لحظية',
          desc: 'حدّث بيانات مركزك، الأسعار، والعروض في أي وقت من لوحة تحكم بسيطة وقوية'
        },
        invite: {
          title: 'كود الدعوة الحصري',
          desc: 'تواصل معنا بحساب مركزك الرسمي على مواقع التواصل لتحصل على كود التفعيل - نضمن مصداقية كل مركز'
        },
        analytics: {
          title: 'تحليلات وإحصائيات',
          desc: 'تابع أداء مركزك، عدد المشاهدات، والحجوزات بتقارير ذكية تساعدك على النمو'
        }
      },
      features: {
        title: 'ليش تختار Khidma AI؟',
        subtitle: 'كل ما تحتاجه في مكان واحد',
        search: {
          title: 'بحث ذكي بلمح البصر',
          desc: 'تبي عيادة أسنان؟ أو نادي رياضي؟ اكتب بس وش بخاطرك وخلي الباقي علينا. نطلع لك الأقرب والأفضل تقييماً.'
        },
        ratings: {
          title: 'تقييمات حقيقية ⭐',
          desc: 'لا تشيل هم المصداقية، كل التقييمات من ناس جربوا الخدمة فعلاً.'
        },
        location: 'دقة المواقع',
        maps: 'خرائط تفاعلية',
        local: 'دعم محلي',
        localDesc: 'صُنع لخدمة أهلنا'
      },
      testimonials: {
        title: 'وش يقولون عنا؟',
        subtitle: 'آراء حقيقية من مستخدمين ينتظرون الإطلاق',
        items: [
          {
            name: 'أحمد',
            role: 'صاحب مطعم',
            content: 'أخيراً منصة تفهم احتياجاتنا كأصحاب أعمال! نظام الحجز والتحليلات راح يسهل علي إدارة المطعم بشكل كبير.',
            rating: 5,
            image: 'أ'
          },
          {
            name: 'نورة',
            role: 'مستخدمة',
            content: 'دايماً أتعب وأنا أدور عيادات موثوقة. Khidma AI راح يوفر علي وقت ومجهود كبير. ما أطيق الانتظار!',
            rating: 5,
            image: 'ن'
          },
          {
            name: 'خالد',
            role: 'صاحب نادي رياضي',
            content: 'نظام التحقق الذكي والحماية من الاحتيال ميزة رهيبة! حاسس إن مركزي راح يكون في أيدٍ أمينة.',
            rating: 5,
            image: 'خ'
          }
        ]
      },
      ai: {
        badge: 'مساعد Khidma AI جاهز لخدمتك',
        title: 'عندك سؤال؟ حنا نجاوبك',
        desc: 'مساعدنا الذكي مو بس يلقى لك أماكن، هو يشرح لك كيف تستخدم الموقع وكيف توصل لأفضل العروض.',
        q1: 'كيف أضيف مركزي؟',
        q2: 'أبي أشوف التقييمات',
        q3: 'نظام الحجز كيف يشتغل؟',
        chatTitle: 'المساعد الذكي',
        userMsg: 'يا هلا! كيف أقدر أضيف مطعمي في المنصة؟',
        aiMsg: 'يا هلا بك! الموضوع بسيط جداً.. تواصل معنا بحساب المطعم الرسمي وراح نعطيك كود دعوة خاص. بعدها تقدر تسجل وتضيف كل التفاصيل!'
      },
      trust: {
        title: 'ليش تثق فينا؟',
        subtitle: 'التزامنا الكامل بالشفافية والجودة',
        items: [
          { icon: <Shield className="w-6 h-6" />, title: 'حماية البيانات', desc: 'تشفير من الدرجة الأولى' },
          { icon: <Verified className="w-6 h-6" />, title: 'تحقق موثوق', desc: 'كل المراكز مراجعة' },
          { icon: <Award className="w-6 h-6" />, title: 'جودة مضمونة', desc: 'معايير صارمة للقبول' },
          { icon: <Headphones className="w-6 h-6" />, title: 'دعم دائم', desc: 'فريق جاهز 24/7' }
        ]
      },
      platforms: {
        title: 'قريباً على جميع المنصات',
        subtitle: 'ابدأ من المتصفح، واستمر على هاتفك',
        web: 'موقع إلكتروني',
        webDesc: 'متاح الآن',
        ios: 'تطبيق iOS',
        iosDesc: 'قريباً جداً',
        android: 'تطبيق Android',
        androidDesc: 'قريباً جداً'
      },
      faq: {
        title: 'الأسئلة الشائعة 💬',
        subtitle: 'كل ما تود معرفته عن Khidma AI',
        q1: 'المنصة بفلوس؟',
        a1: 'أبد، المنصة مجانية بالكامل للمستخدمين. هدفنا نسهل عليك الوصول لكل الخدمات في مدينتك بدون أي رسوم.',
        q2: 'ليش بس مدينة واحدة حالياً؟',
        a2: 'لأننا نبي نضمن جودة البيانات ونعطيك أدق النتائج قبل ما نتوسع لكل المملكة قريباً بإذن الله.',
        q3: 'كيف أحصل على كود الدعوة لمركزي؟',
        a3: 'تواصل معنا عبر حساب مركزك الرسمي على التيك توك أو انستقرام، وفريقنا راح يتحقق من هوية المركز ويرسل لك الكود الخاص بك.',
        q4: 'هل الموقع آمن لبيانات مركزي؟',
        a4: 'طبعاً! نستخدم أنظمة تحقق متقدمة وتشفير من الدرجة الأولى لحماية كل البيانات. كل مركز محمي من الاختراقات والانتحال.',
        q5: 'متى راح يكون التطبيق جاهز؟',
        a5: 'حالياً نركز على الموقع الإلكتروني لضمان جودة الخدمة. التطبيق راح يكون جاهز خلال الأشهر القادمة بإذن الله!',
        q6: 'كيف أتابع أخبار المنصة؟',
        a6: 'تابعنا على التيك توك وانستقرام، أو سجل معنا وراح نرسل لك كل جديد!'
      },
      waitlist: {
        title: 'كن أول من يجرب المنصة! 🚀',
        desc: 'سجل الآن واحصل على وصول مبكر + مزايا حصرية عند الإطلاق',
        placeholder: 'حط إيميلك هنا..',
        button: 'سجلني الآن',
        benefits: [
          '✨ وصول مبكر للمنصة',
          '🎁 عروض حصرية',
          '⚡ أولوية في الدعم'
        ],
        counter: '+50,000 شخص ينتظرون الإطلاق'
      },
      footer: {
        desc: 'المنصة الأولى والذكية لدليل الخدمات في المملكة. نبدأ من موقع إلكتروني، والهدف تطبيق يخدم كل المدن.',
        links: 'روابط سريعة',
        about: 'عن المنصة',
        add: 'إضافة مركز',
        contact: 'تواصل معنا',
        social: 'تابعنا',
        twitter: 'تيك توك',
        instagram: 'انستقرام',
        email: 'إيميل',
        copyright: '© 2026 KHIDMA AI - صنع بكل حب في السعودية 🇸🇦',
        privacy: 'سياسة الخصوصية',
        terms: 'الشروط والأحكام'
      }
    },
    en: {
      nav: {
        features: 'Features',
        business: 'For Business',
        demo: 'Try Now',
        testimonials: 'Testimonials',
        faq: 'FAQ',
        login: 'Sign In'
      },
      hero: {
        badge: 'Coming Soon Across Saudi Arabia 🇸🇦',
        greeting: 'Hey there 👋🏻',
        title: 'Your Smart Guide to All Services Around You',
        titleHighlight: 'It connects you in seconds...',
        subtitle: 'Instead of asking around,',
        subtitleBold: 'Khidma AI',
        subtitleEnd: 'brings you the best clinics, restaurants, and institutes in one place. One tap away from what you need.',
        cta1: 'Start Searching Now',
        ctaSub: 'No signup – 100% Free',
        cta2: 'Add Your Center Free',
        webNotice: '🌐 Currently Available as Website - App Coming Soon!',
        proof: {
          rating: 'Excellent Rating',
          users: 'Users Waiting',
          centers: 'Registered Centers'
        }
      },
      stats: {
        centers: 'Registered Centers',
        users: 'Users Waiting',
        city: 'City (Starting Point)',
        support: 'Smart Support',
        reviews: 'Real Reviews',
        satisfaction: 'Customer Satisfaction'
      },
      business: {
        title: 'Complete System for Business Owners',
        subtitle: 'Manage your center professionally with smart and secure solutions',
        verification: {
          title: 'AI-Powered Smart Verification',
          desc: 'Advanced AI system automatically reviews your data and verifies accuracy before publishing - zero fraud, zero spam'
        },
        booking: {
          title: 'Fast & Direct Booking',
          desc: 'Advanced booking system connects you with customers instantly - real-time notifications and easy management'
        },
        security: {
          title: 'First-Class Protection',
          desc: 'Multi-level verification systems prevent breaches and impersonation - your center is in safe hands'
        },
        manage: {
          title: 'Instant Update & Management',
          desc: 'Update your center data, prices, and offers anytime from a simple yet powerful dashboard'
        },
        invite: {
          title: 'Exclusive Invitation Code',
          desc: 'Contact us via your center\'s official social media account to get your activation code - we ensure every center\'s credibility'
        },
        analytics: {
          title: 'Analytics & Insights',
          desc: 'Track your center\'s performance, views, and bookings with smart reports that help you grow'
        }
      },
      features: {
        title: 'Why Choose Khidma AI?',
        subtitle: 'Everything you need in one place',
        search: {
          title: 'Smart Search in a Flash',
          desc: 'Need a dental clinic? Or a gym? Just type what you need and leave the rest to us. We find the nearest and best-rated.'
        },
        ratings: {
          title: 'Real Reviews ⭐',
          desc: 'No worries about credibility, all reviews are from people who actually tried the service.'
        },
        location: 'Location Accuracy',
        maps: 'Interactive Maps',
        local: 'Local Support',
        localDesc: 'Made to Serve Our People'
      },
      testimonials: {
        title: 'What They Say About Us?',
        subtitle: 'Real opinions from users waiting for launch',
        items: [
          {
            name: 'Ahmed',
            role: 'Restaurant Owner',
            content: 'Finally a platform that understands our needs as business owners! The booking system and analytics will make managing my restaurant so much easier.',
            rating: 5,
            image: 'A'
          },
          {
            name: 'Noura',
            role: 'User',
            content: 'I always struggle finding reliable clinics. Khidma AI will save me so much time and effort. Can\'t wait!',
            rating: 5,
            image: 'N'
          },
          {
            name: 'Khalid',
            role: 'Gym Owner',
            content: 'The smart verification system and fraud protection is amazing! I feel my center will be in safe hands.',
            rating: 5,
            image: 'K'
          }
        ]
      },
      ai: {
        badge: 'Khidma AI Assistant Ready to Help',
        title: 'Got a Question? We Got Answers',
        desc: 'Our smart assistant doesn\'t just find you places, it explains how to use the platform and reach the best deals.',
        q1: 'How do I add my center?',
        q2: 'I want to see reviews',
        q3: 'How does booking work?',
        chatTitle: 'Smart Assistant',
        userMsg: 'Hey! How can I add my restaurant to the platform?',
        aiMsg: 'Hey there! It\'s super simple.. Contact us via your restaurant\'s official account and we\'ll give you a special invite code. Then you can register and add all the details!'
      },
      trust: {
        title: 'Why Trust Us?',
        subtitle: 'Our complete commitment to transparency and quality',
        items: [
          { icon: <Shield className="w-6 h-6" />, title: 'Data Protection', desc: 'First-class encryption' },
          { icon: <Verified className="w-6 h-6" />, title: 'Trusted Verification', desc: 'All centers reviewed' },
          { icon: <Award className="w-6 h-6" />, title: 'Guaranteed Quality', desc: 'Strict acceptance standards' },
          { icon: <Headphones className="w-6 h-6" />, title: 'Always Here', desc: '24/7 support team' }
        ]
      },
      platforms: {
        title: 'Coming Soon on All Platforms',
        subtitle: 'Start on browser, continue on your phone',
        web: 'Web Platform',
        webDesc: 'Available Now',
        ios: 'iOS App',
        iosDesc: 'Very Soon',
        android: 'Android App',
        androidDesc: 'Very Soon'
      },
      faq: {
        title: 'Frequently Asked Questions 💬',
        subtitle: 'Everything you need to know about Khidma AI',
        q1: 'Is the platform paid?',
        a1: 'Not at all, the platform is completely free for users. Our goal is to make it easy for you to access all services in your city without any fees.',
        q2: 'Why only one city currently?',
        a2: 'Because we want to ensure data quality and give you the most accurate results before expanding across the Kingdom soon, God willing.',
        q3: 'How do I get an invite code for my center?',
        a3: 'Contact us via your center\'s official TikTok or Instagram account, and our team will verify the center\'s identity and send you your unique code.',
        q4: 'Is the platform secure for my center\'s data?',
        a4: 'Absolutely! We use advanced verification systems and top-tier encryption to protect all data. Every center is protected from breaches and impersonation.',
        q5: 'When will the app be ready?',
        a5: 'Currently we\'re focusing on the website to ensure service quality. The app will be ready in the coming months, God willing!',
        q6: 'How do I follow platform news?',
        a6: 'Follow us on TikTok and Instagram, or join us and we\'ll send you all updates!'
      },
      waitlist: {
        title: 'Be First to Try the Platform! 🚀',
        desc: 'Sign up now and get early access + exclusive perks at launch',
        placeholder: 'Enter your email here..',
        button: 'Sign Me Up Now',
        benefits: [
          '✨ Early platform access',
          '🎁 Exclusive offers',
          '⚡ Priority support'
        ],
        counter: '+50,000 people waiting for launch'
      },
      footer: {
        desc: 'The first smart platform for service directory in the Kingdom. Starting as a website, aiming for an app serving all cities.',
        links: 'Quick Links',
        about: 'About Platform',
        add: 'Add Center',
        contact: 'Contact Us',
        social: 'Follow Us',
        twitter: 'TikTok',
        instagram: 'Instagram',
        email: 'Email',
        copyright: '© 2026 KHIDMA AI - Made with Love in Saudi Arabia 🇸🇦',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions'
      }
    }
  };

  const content = t[lang];
  const isRTL = lang === 'ar';



  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#02000f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
            <Zap className="w-10 h-10 fill-white text-white" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-black text-white mb-4">
            Khidma<span className="text-purple-500">AI</span>
          </h1>
          <div className="flex gap-2 justify-center" role="status" aria-live="polite">
            <span className="sr-only">جاري التحميل...</span>
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
    );
  }


  const handleContact = () => {
    const message = lang === 'ar'
      ? MESSAGES.defaultMessage.ar
      : MESSAGES.defaultMessage.en;
  
    navigator.clipboard.writeText(message);
    window.open('https://instagram.com/khidmaai', '_blank');
  
    alert(lang === 'ar'
      ? 'تم نسخ الرسالة ✨ الصقها في الانستقرام'
      : 'Message copied ✨ paste it on Instagram'
    );
  };
  

  return (
    <div ref={containerRef} className={`min-h-screen bg-[#02000f] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: '"Tajawal", "Cairo", sans-serif' }} lang={lang}>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
      `}</style>

      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`
        }}
        aria-hidden="true"
      />

      <nav className={`fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${scrolled ? 'bg-[#02000f]/95 backdrop-blur-2xl shadow-lg shadow-purple-500/5' : 'bg-[#02000f]/80 backdrop-blur-xl'}`} role="navigation" aria-label="القائمة الرئيسية">
        <div className={`max-w-7xl mx-auto px-6 h-20 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-3 group cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform" aria-hidden="true">
              <Zap className="w-6 h-6 fill-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">Khidma<span className="text-purple-500 italic">AI</span></span>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="#features" className="hover:text-white transition-colors">{content.nav.features}</a>
            <a href="#business" className="hover:text-white transition-colors">{content.nav.business}</a>
            <a href="#demo" className="hover:text-white transition-colors flex items-center gap-1">
              {content.nav.demo}
              <Sparkle className="w-3 h-3 text-yellow-500" aria-hidden="true" />
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">{content.nav.testimonials}</a>
            <a href="#faq" className="hover:text-white transition-colors">{content.nav.faq}</a>
            
            <button 
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              aria-label={lang === 'ar' ? 'تغيير اللغة إلى الإنجليزية' : 'Switch language to Arabic'}
            >
              <Languages className="w-4 h-4" aria-hidden="true" />
              <span className="text-xs font-bold">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            <button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all font-bold border border-white/10"
              onClick={() => window.location.href = 'https://khidma-ai.web.app/#/login'}
              aria-label={content.nav.login}
            >
              {content.nav.login}
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#02000f]/98 backdrop-blur-2xl"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#features" className="block py-2 hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>{content.nav.features}</a>
                <a href="#business" className="block py-2 hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>{content.nav.business}</a>
                <a href="#demo" className="block py-2 hover:text-purple-400 transition-colors flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
                  {content.nav.demo}
                  <Sparkle className="w-3 h-3 text-yellow-500" aria-hidden="true" />
                </a>
                <a href="#testimonials" className="block py-2 hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>{content.nav.testimonials}</a>
                <a href="#faq" className="block py-2 hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>{content.nav.faq}</a>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <button 
                    onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
                  >
                    <Languages className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm font-bold">{lang === 'ar' ? 'English' : 'العربية'}</span>
                  </button>
                  <button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold"
                    onClick={() => window.location.href = 'https://khidma-ai.web.app/#/login'}
                  >
                    {content.nav.login}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <section className="relative pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className={`${isRTL ? 'text-right' : 'text-left'} z-10`}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6`}>
                <Sparkles className="w-3 h-3" aria-hidden="true" /> {content.hero.badge}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6"
              >
                <Globe className="w-3 h-3" aria-hidden="true" /> {content.hero.webNotice}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6"
              >
                {content.hero.greeting} <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                  {content.hero.title}
                </span>
                <br />
                <span className="text-purple-500">{content.hero.titleHighlight}</span>
              </motion.h1>
              
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-medium">
                {content.hero.subtitle} <span className="text-white font-bold">{content.hero.subtitleBold}</span> {content.hero.subtitleEnd}
              </p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 flex-wrap mb-8"
              >
                <div className="flex items-center gap-2 text-sm" role="img" aria-label="تقييم 4.9 من 5">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-400">4.9</span>
                </div>
                <div className="text-sm text-gray-400 font-bold">
                  👥 <AnimatedCounter end={50} suffix="k+" /> {content.hero.proof.users}
                </div>
                <div className="text-sm text-gray-400 font-bold">
                  🏢 <AnimatedCounter end={120} suffix="+" /> {content.hero.proof.centers}
                </div>
              </motion.div>

              <div className={`flex flex-col sm:flex-row items-center ${isRTL ? 'justify-start' : 'justify-start'} gap-5`}>
                <div className="flex flex-col gap-2">
                  <button 
                    className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1 group flex items-center justify-center gap-2"
                    onClick={() => window.location.href = "https://khidma-ai.web.app"}
                    aria-label={content.hero.cta1}
                  >
                    {content.hero.cta1}
                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ?'rotate-180':''}`} aria-hidden="true" />
                  </button>
                  <span className="text-xs text-gray-500 text-center font-bold">{content.hero.ctaSub}</span>
                </div>
                <button 
                  className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all"
                  onClick={() => window.location.href = 'https://khidma-ai.web.app/#/register'}
                  aria-label={content.hero.cta2}
                >
                  {content.hero.cta2}
                </button>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center gap-6 flex-wrap"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                  <span className="font-bold">{lang === 'ar' ? 'مجاني 100%' : '100% Free'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Shield className="w-5 h-5 text-blue-500" aria-hidden="true" />
                  <span className="font-bold">{lang === 'ar' ? 'آمن ومحمي' : 'Safe & Secure'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Verified className="w-5 h-5 text-purple-500" aria-hidden="true" />
                  <span className="font-bold">{lang === 'ar' ? 'موثوق' : 'Verified'}</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur opacity-20 animate-pulse" aria-hidden="true"></div>
              <PhoneMockup />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl"
                aria-hidden="true"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 text-xs">✓</div>
                  <span className="text-xs font-bold">{lang === 'ar' ? 'تم العثور على 5 عيادات' : 'Found 5 clinics'}</span>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-5 -left-10 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl"
                aria-hidden="true"
              >
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                  <span className="text-xs font-bold">4.9 ⭐</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/20 blur-[140px] -z-10 rounded-full" aria-hidden="true" />
        </section>

        <div className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden group" aria-hidden="true">
          <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap opacity-20 group-hover:opacity-40 transition-opacity">
            {[1, 2].map((n) => (
              <div key={n} className="flex gap-16 items-center text-xl font-black">
                <span>{lang === 'ar' ? 'مطاعم' : 'Restaurants'} </span> <Star className="w-4 h-4 fill-current" />
                <span>{lang === 'ar' ? 'عيادات' : 'Clinics'}</span> <Star className="w-4 h-4 fill-current" />
                <span>{lang === 'ar' ? 'نوادي' : 'Gyms'}</span> <Star className="w-4 h-4 fill-current" />
                <span>{lang === 'ar' ? 'فنادق' : 'Hotels'} </span> <Star className="w-4 h-4 fill-current" />
                <span>{lang === 'ar' ? 'شاليهات' : 'Chalets'}</span> <Star className="w-4 h-4 fill-current" />
              </div>
            ))}
          </div>
        </div>

        <section id="demo" className="py-24 px-6 border-b border-white/5">
          <LiveSearchDemo lang={lang} />
        </section>

        <BeforeAfterSection lang={lang} />

        <section id="stats" className="py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 text-center">
              {[
                { num: 120, suffix: "+", label: content.stats.centers, icon: <Building2 className="w-4 h-4" /> },
                { num: 50, suffix: "k+", label: content.stats.users, icon: <Users className="w-4 h-4" /> },
                { num: 1, suffix: "", label: content.stats.city, icon: <MapPin className="w-4 h-4" /> },
                { num: 24, suffix: "/7", label: content.stats.support, icon: <MessageSquare className="w-4 h-4" /> },
                { num: 500, suffix: "+", label: content.stats.reviews, icon: <Star className="w-4 h-4" /> },
                { num: 98, suffix: "%", label: content.stats.satisfaction, icon: <Trophy className="w-4 h-4" /> },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-center gap-2 text-purple-500 mb-2 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black mb-1">
                    <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-500 text-sm font-bold tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SaudiMapSection lang={lang} />
        <SuggestCenterSection lang={lang} />

        <section id="business" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-blue-600/5" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`text-center mb-20`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-bold mb-8"
              >
                <Rocket className="w-4 h-4" aria-hidden="true" /> {lang === 'ar' ? 'حلول احترافية لأصحاب الأعمال' : 'Professional Solutions for Business Owners'}
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
              >
                {content.business.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-xl max-w-3xl mx-auto font-medium"
              >
                {content.business.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Bot className="w-8 h-8 text-purple-400" />}
                title={content.business.verification.title}
                description={content.business.verification.desc}
                gradient="from-purple-600/20 to-purple-900/20"
              />
              
              <FeatureCard 
                icon={<Calendar className="w-8 h-8 text-blue-400" />}
                title={content.business.booking.title}
                description={content.business.booking.desc}
                gradient="from-blue-600/20 to-blue-900/20"
              />
              
              <FeatureCard 
                icon={<Shield className="w-8 h-8 text-green-400" />}
                title={content.business.security.title}
                description={content.business.security.desc}
                gradient="from-green-600/20 to-emerald-900/20"
              />
              
              <FeatureCard 
                icon={<FileCheck className="w-8 h-8 text-orange-400" />}
                title={content.business.manage.title}
                description={content.business.manage.desc}
                gradient="from-orange-600/20 to-red-900/20"
              />
              
              <FeatureCard 
                icon={<Verified className="w-8 h-8 text-cyan-400" />}
                title={content.business.invite.title}
                description={content.business.invite.desc}
                gradient="from-cyan-600/20 to-teal-900/20"
              />
              
              <FeatureCard 
                icon={<TrendingUp className="w-8 h-8 text-pink-400" />}
                title={content.business.analytics.title}
                description={content.business.analytics.desc}
                gradient="from-pink-600/20 to-rose-900/20"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-black mb-2 flex items-center gap-3 justify-center sm:justify-start">
                    <Award className="w-6 h-6 text-yellow-500" aria-hidden="true" />
                    {lang === 'ar' ? 'جاهز تنضم لنا؟' : 'Ready to Join Us?'}
                  </h3>
                  <p className="text-gray-400 font-medium">
                    {lang === 'ar' ? 'تواصل معنا عبر حسابات مركزك الرسمية واحصل على كود الدعوة الحصري' : 'Contact us via your official accounts and get your exclusive invite code'}
                  </p>
                </div>
                <button 
                  onClick={handleContact} 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center gap-2 group"
                  aria-label={lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                >
                  {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <p className="text-sm text-gray-400 mt-3">
                   {lang === 'ar'
                    ? CONTACT_INFO.supportHours.ar
                    : CONTACT_INFO.supportHours.en}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {content.features.title}
              </h2>
              <p className="text-gray-400 font-medium text-xl">{content.features.subtitle}</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-600/20 to-blue-900/20 rounded-[32px] border border-white/10 p-10 flex flex-col justify-between group overflow-hidden relative`}
              >
                <div className={`relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 transition-transform" aria-hidden="true">
                    <Search className="text-purple-400 w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">{content.features.search.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {content.features.search.desc}
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`md:col-span-2 bg-white/5 rounded-[32px] border border-white/10 p-8 hover:bg-white/10 transition-all flex items-center gap-8 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}
              >
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2`}>{content.features.ratings.title}</h3>
                  <p className={`text-gray-400 font-medium`}>{content.features.ratings.desc}</p>
                </div>
                <div className="hidden sm:flex w-32 h-32 bg-yellow-500/10 rounded-full border border-yellow-500/20 items-center justify-center text-4xl" aria-hidden="true">
                  👌
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-1 bg-[#0a0a1a] rounded-[32px] border border-white/10 p-8 flex flex-col justify-center items-center text-center group hover:border-blue-500/30 transition-all"
              >
                <Navigation className="w-12 h-12 text-blue-400 mb-4 group-hover:animate-bounce" aria-hidden="true" />
                <h3 className="font-bold">{content.features.location}</h3>
                <p className="text-xs text-gray-500 mt-2 font-bold">{content.features.maps}</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-1 bg-gradient-to-t from-blue-600/20 to-purple-600/20 rounded-[32px] border border-white/10 p-8 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-4" aria-hidden="true">🇸🇦</div>
                <h3 className="font-bold uppercase tracking-widest text-xs">{content.features.local}</h3>
                <p className="text-xs text-gray-400 mt-2 font-bold">{content.features.localDesc}</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#030014] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">{content.trust.title}</h2>
              <p className="text-gray-400 font-medium text-lg">{content.trust.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.trust.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                {content.testimonials.title}
              </h2>
              <p className="text-gray-400 font-medium text-xl">{content.testimonials.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.testimonials.items.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#030014] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">{content.platforms.title}</h2>
              <p className="text-gray-400 font-medium text-lg">{content.platforms.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <FaChrome className="w-12 h-12" />, title: content.platforms.web, desc: content.platforms.webDesc, available: true, color: 'from-green-600 to-emerald-600' },
                { icon: <Apple className="w-12 h-12" />, title: content.platforms.ios, desc: content.platforms.iosDesc, available: false, color: 'from-gray-600 to-gray-700' },
                { icon: <Smartphone className="w-12 h-12" />, title: content.platforms.android, desc: content.platforms.androidDesc, available: false, color: 'from-gray-600 to-gray-700' },
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative group overflow-hidden bg-gradient-to-br ${platform.color} rounded-3xl p-8 border border-white/10 text-center ${platform.available ? 'hover:scale-105' : ''} transition-all`}
                >
                  <div className="text-white mb-4 flex justify-center" aria-hidden="true">
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-2 text-white">{platform.title}</h3>
                  <p className="text-white/80 font-medium mb-4">{platform.desc}</p>
                  {platform.available && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold">
                      <CheckCircle className="w-4 h-4" aria-hidden="true" />
                      {lang === 'ar' ? 'متاح الآن' : 'Available Now'}
                    </div>
                  )}
                  {!platform.available && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/60 text-sm font-bold">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {lang === 'ar' ? 'قريباً' : 'Coming Soon'}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" aria-hidden="true" />
              <div className="relative bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden">
                <div className={`flex flex-col md:flex-row items-center gap-12 ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                      </span>
                      {content.ai.badge}
                    </div>
                    <h2 className="text-4xl font-black mb-6">{content.ai.title}</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {content.ai.desc}
                    </p>
                    <div className="space-y-3">
                      {[content.ai.q1, content.ai.q2, content.ai.q3].map((t, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex items-center gap-3 text-sm font-bold text-white/70 ${isRTL ? 'justify-end' : 'justify-start'}`}
                        >
                          {isRTL && t}
                          <CheckCircle2 className="w-5 h-5 text-purple-500" aria-hidden="true" />
                          {!isRTL && t}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-sm bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl"
                  >
                    <div className={`flex items-center justify-between mb-6 border-b border-white/5 pb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold relative" aria-hidden="true">
                          AI
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
                        </div>
                        <span className="text-sm font-bold">{content.ai.chatTitle}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`bg-white/5 p-3 rounded-2xl ${isRTL ? 'rounded-tr-none text-right mr-4' : 'rounded-tl-none text-left ml-4'} text-xs leading-relaxed font-medium`}
                      >
                        {content.ai.userMsg}
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`bg-purple-600/30 p-3 rounded-2xl ${isRTL ? 'rounded-tl-none mr-0 ml-4 text-right' : 'rounded-tr-none ml-0 mr-4 text-left'} text-xs border border-purple-500/20 leading-relaxed font-bold italic`}
                      >
                        {content.ai.aiMsg}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className={`py-24 px-6 max-w-4xl mx-auto`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${isRTL ? 'text-right' : 'text-left'} mb-16`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
              {content.faq.title}
            </h2>
            <p className="text-gray-400 font-medium text-xl">{content.faq.subtitle}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12"
          >
            <FAQItem question={content.faq.q1} answer={content.faq.a1} />
            <FAQItem question={content.faq.q2} answer={content.faq.a2} />
            <FAQItem question={content.faq.q3} answer={content.faq.a3} />
            <FAQItem question={content.faq.q4} answer={content.faq.a4} />
            <FAQItem question={content.faq.q5} answer={content.faq.a5} />
            <FAQItem question={content.faq.q6} answer={content.faq.a6} />
          </motion.div>
        </section>

        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 to-blue-700 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" aria-hidden="true" />
            <motion.div animate={{ scale: [1,1.2,1], opacity: [0.3,0.5,0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl" aria-hidden="true" />
            <motion.div animate={{ scale: [1.2,1,1.2], opacity: [0.3,0.5,0.3] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                {lang === 'ar' ? '🚀 متاح الآن - انضم مجاناً' : '🚀 Available Now - Join Free'}
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                {lang === 'ar' ? 'كن أول من يجرب المنصة!' : 'Be First to Try the Platform!'}
              </h2>

              <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                {lang === 'ar' 
                  ? 'سجّل الآن واحصل على وصول مبكر + مزايا حصرية عند الإطلاق الرسمي'
                  : 'Sign up now and get early access + exclusive perks at official launch'}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                {(lang === 'ar' 
                  ? ['✨ وصول مبكر للمنصة', '🎁 عروض حصرية', '⚡ أولوية في الدعم']
                  : ['✨ Early platform access', '🎁 Exclusive offers', '⚡ Priority support']
                ).map((b, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold">{b}</div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = 'https://khidma-ai.web.app/#/register'}
                  className="px-12 py-5 bg-white text-purple-700 rounded-2xl font-black text-xl hover:bg-white/90 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2 group"
                  aria-label={lang === 'ar' ? 'سجّل الآن مجاناً' : 'Sign Up Free Now'}
                >
                  {lang === 'ar' ? 'سجّل الآن مجاناً' : 'Sign Up Free Now'}
                  <ArrowRight className={`w-6 h-6 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                <button
                  onClick={() => window.location.href = "https://khidma-ai.web.app/#/login"}
                  className="px-12 py-5 bg-white/10 border border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all backdrop-blur-md"
                  aria-label={lang === 'ar' ? 'عندي حساب - دخول' : 'I have an account'}
                >
                  {lang === 'ar' ? 'عندي حساب - دخول' : 'I have an account'}
                </button>
              </div>

              <p className="mt-8 text-white/50 text-sm font-bold">
                ✨ {lang === 'ar' ? '+50,000 شخص انضموا بالفعل' : '+50,000 people already joined'}
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className={`py-20 border-t border-white/5 relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`} role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-10 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div>
              <div className="text-3xl font-black mb-4 tracking-tighter flex items-center gap-2">
                Khidma<span className="text-purple-500">AI</span>
                <Verified className="w-6 h-6 text-blue-500" aria-hidden="true" />
              </div>
              <p className="text-gray-400 max-w-xs font-bold leading-relaxed mb-6">
                {content.footer.desc}
              </p>
              
              <div className="flex items-center gap-4">
                <a href="https://tiktok.com/@khidmaai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all group" aria-label="تيك توك">
                  <FaTiktok className="w-5 h-5 group-hover:text-purple-400 transition-colors" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/khidmaai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all group" aria-label="انستقرام">
                  <FaInstagram className="w-5 h-5 group-hover:text-purple-400 transition-colors" aria-hidden="true" />
                </a>
                <a href="mailto:khidmaai51718@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all group" aria-label="البريد الإلكتروني">
                  <Mail className="w-5 h-5 group-hover:text-purple-400 transition-colors" aria-hidden="true" />
                </a>
              </div>
            </div>
            
            <div className={`flex flex-wrap gap-16 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
              <div className="space-y-4">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-purple-500" aria-hidden="true" />
                  {content.footer.links}
                </h3>
                <ul className="text-gray-400 space-y-2 text-sm font-bold">
                  <li onClick={() => window.location.href = '/about'} className="hover:text-purple-400 cursor-pointer transition-colors flex items-center gap-2">
                    <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    {content.footer.about}
                  </li>
                  <li onClick={() => window.location.href = 'https://khidma-ai.web.app/#/register'} className="hover:text-purple-400 cursor-pointer transition-colors flex items-center gap-2">
                    <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    {content.footer.add}
                  </li>
                  <li onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 cursor-pointer transition-colors flex items-center gap-2">
                    <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    {content.faq.title.replace(' 💬', '')}
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  {content.footer.contact}
                </h3>
                <ul className="text-gray-400 space-y-2 text-sm font-bold">
                  <li>
                    <a href="https://tiktok.com/@khidmaai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">{content.footer.twitter}</a>
                  </li>
                  <li>
                    <a href="https://instagram.com/khidmaai" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-color">{content.footer.instagram}</a>
                  </li>
                  <li>
                    <a href="mailto:khidmaai51718@gmail.com" className="hover:text-purple-400 transition-colors">{content.footer.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={`mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-600 tracking-widest uppercase ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" aria-hidden="true" />
              {content.footer.copyright}
            </p>
            <div className={`flex gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span onClick={() => window.location.href = '/privacy'} className="hover:text-purple-400 cursor-pointer transition-colors">{content.footer.privacy}</span>             
              <span onClick={() => window.location.href = '/terms'} className="hover:text-purple-400 cursor-pointer transition-colors">{content.footer.terms}</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" aria-hidden="true" />
      </footer>

      {cookieVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`fixed bottom-6 ${isRTL ? 'right-6' : 'left-6'} z-50 max-w-sm bg-[#0f0f1a] border border-purple-500/30 rounded-2xl p-5 shadow-2xl shadow-purple-500/10`}
          role="dialog"
          aria-label={lang === 'ar' ? 'إشعار الكوكيز' : 'Cookie Notice'}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
              <span style={{fontSize: '16px'}}>🍪</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {lang === 'ar' 
                ? 'نستخدم الكوكيز لتحسين تجربتك. بالمتابعة أنت توافق على سياسة الخصوصية.'
                : 'We use cookies to improve your experience and analytics.'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                localStorage.setItem('cookies_accepted', 'true');
                setCookieVisible(false);
              }}
              className="flex-1 py-2 bg-purple-600 text-white rounded-lg text-xs font-bold hover:bg-purple-700 transition-all"
              aria-label={lang === 'ar' ? 'قبول الكوكيز' : 'Accept cookies'}
            >
              {lang === 'ar' ? 'موافق' : 'Accept'}
            </button>
            <button
              onClick={() => window.location.href = '/privacy'}
              className="flex-1 py-2 bg-white/5 border border-white/10 text-gray-400 rounded-lg text-xs font-bold hover:bg-white/10 transition-all"
              aria-label={lang === 'ar' ? 'عرض سياسة الخصوصية' : 'View privacy policy'}
            >
              {lang === 'ar' ? 'الخصوصية' : 'Privacy'}
            </button>
          </div>
        </motion.div>
      )}

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 20 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform z-40"
        aria-label={lang === 'ar' ? 'العودة إلى الأعلى' : 'Scroll to top'}
      >
        <ArrowUpRight className="w-6 h-6 rotate-45" aria-hidden="true" />
      </motion.button>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 35s linear infinite;
          display: flex;
          width: max-content;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
}