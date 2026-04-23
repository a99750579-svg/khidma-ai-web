"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Users, MapPin, Shield, 
  Zap, Target, Heart, TrendingUp, Award, CheckCircle,
  Rocket, Globe, Building2, Star, Clock, Languages
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const isRTL = lang === 'ar';

  const content = {
    ar: {
      title: 'عن Khidma AI',
      subtitle: 'رحلتنا لتسهيل الحياة اليومية في المملكة',
      intro: {
        title: 'من نحن؟',
        p1: 'Khidma AI هي منصة ذكية رائدة تجمع أفضل المراكز والخدمات المحلية في مكان واحد. ولدت الفكرة من تجربة شخصية بسيطة: كم من الوقت نضيعه في البحث عن عيادة موثوقة أو مطعم جيد قريب منا؟',
        p2: 'قررنا أن نحل هذه المشكلة باستخدام أحدث تقنيات الذكاء الاصطناعي لنجمع لك كل الخيارات المتاحة، مع تقييمات حقيقية من مستخدمين آخرين، وإمكانية الحجز الفوري.',
        p3: 'نبدأ من مدينة الرس ونتوسع تدريجياً لتغطية كل المملكة العربية السعودية، مدينة بعد مدينة، حتى نصل لكل منزل سعودي.'
      },
      mission: {
        title: 'رسالتنا',
        text: 'تسهيل الحياة اليومية للمواطنين والمقيمين في السعودية من خلال منصة ذكية توفر الوقت والجهد في البحث عن الخدمات المحلية الموثوقة.'
      },
      vision: {
        title: 'رؤيتنا',
        text: 'أن نكون المنصة الأولى والأكثر ثقة في المملكة لاكتشاف وحجز الخدمات المحلية، مع توفير تجربة سلسة وذكية تعتمد على الذكاء الاصطناعي.'
      },
      values: {
        title: 'قيمنا',
        items: [
          {
            icon: <Shield className="w-8 h-8" />,
            title: 'الثقة والمصداقية',
            desc: 'نضمن أن كل مركز مسجل لدينا موثوق ومُراجع بعناية'
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: 'السرعة والكفاءة',
            desc: 'نوفر لك الوقت من خلال تجميع كل الخيارات في مكان واحد'
          },
          {
            icon: <Heart className="w-8 h-8" />,
            title: 'خدمة العملاء',
            desc: 'رضاك هو أولويتنا، ونسعى دائماً لتحسين تجربتك'
          },
          {
            icon: <Rocket className="w-8 h-8" />,
            title: 'الابتكار المستمر',
            desc: 'نستخدم أحدث التقنيات لتقديم حلول ذكية ومبتكرة'
          }
        ]
      },
      journey: {
        title: 'رحلتنا',
        milestones: [
          {
            year: '2024',
            title: 'انطلاقة الفكرة',
            desc: 'بدأنا كفكرة بسيطة لحل مشكلة يومية يعاني منها الجميع'
          },
          {
            year: '2025',
            title: 'التطوير التقني',
            desc: 'بنينا المنصة بأحدث تقنيات الذكاء الاصطناعي'
          },
          {
            year: '2026',
            title: 'الإطلاق الأول',
            desc: 'إطلاق المنصة في مدينة الرس كبداية قوية'
          },
          {
            year: 'قريباً',
            title: 'التوسع الوطني',
            desc: 'نخطط للتوسع في جميع مدن المملكة'
          }
        ]
      },
      team: {
        title: 'فريقنا',
        desc: 'فريق شغوف من المطورين ورواد الأعمال السعوديين الذين يؤمنون بقوة التكنولوجيا في تحسين حياتنا اليومية.'
      },
      cta: {
        title: 'جاهز للانضمام إلينا؟',
        desc: 'كن جزءاً من ثورة الخدمات الذكية في السعودية',
        button: 'ابدأ الآن',
        back: 'رجوع للرئيسية'
      }
    },
    en: {
      title: 'About Khidma AI',
      subtitle: 'Our Journey to Simplify Daily Life in the Kingdom',
      intro: {
        title: 'Who We Are?',
        p1: 'Khidma AI is a leading smart platform that brings together the best local centers and services in one place. The idea was born from a simple personal experience: how much time do we waste searching for a reliable clinic or a good restaurant near us?',
        p2: 'We decided to solve this problem using the latest artificial intelligence technologies to gather all available options for you, with real reviews from other users, and instant booking capability.',
        p3: 'We start from Ar Rass city and expand gradually to cover the entire Kingdom of Saudi Arabia, city by city, until we reach every Saudi home.'
      },
      mission: {
        title: 'Our Mission',
        text: 'To simplify daily life for citizens and residents in Saudi Arabia through a smart platform that saves time and effort in finding reliable local services.'
      },
      vision: {
        title: 'Our Vision',
        text: 'To be the first and most trusted platform in the Kingdom for discovering and booking local services, providing a seamless and smart experience powered by artificial intelligence.'
      },
      values: {
        title: 'Our Values',
        items: [
          {
            icon: <Shield className="w-8 h-8" />,
            title: 'Trust & Credibility',
            desc: 'We ensure every registered center is trusted and carefully reviewed'
          },
          {
            icon: <Zap className="w-8 h-8" />,
            title: 'Speed & Efficiency',
            desc: 'We save you time by gathering all options in one place'
          },
          {
            icon: <Heart className="w-8 h-8" />,
            title: 'Customer Service',
            desc: 'Your satisfaction is our priority, we always strive to improve your experience'
          },
          {
            icon: <Rocket className="w-8 h-8" />,
            title: 'Continuous Innovation',
            desc: 'We use the latest technologies to provide smart and innovative solutions'
          }
        ]
      },
      journey: {
        title: 'Our Journey',
        milestones: [
          {
            year: '2024',
            title: 'The Idea Launch',
            desc: 'We started as a simple idea to solve a daily problem everyone faces'
          },
          {
            year: '2025',
            title: 'Technical Development',
            desc: 'We built the platform with the latest AI technologies'
          },
          {
            year: '2026',
            title: 'First Launch',
            desc: 'Launching the platform in Ar Rass city as a strong start'
          },
          {
            year: 'Soon',
            title: 'National Expansion',
            desc: 'We plan to expand across all cities in the Kingdom'
          }
        ]
      },
      team: {
        title: 'Our Team',
        desc: 'A passionate team of Saudi developers and entrepreneurs who believe in the power of technology to improve our daily lives.'
      },
      cta: {
        title: 'Ready to Join Us?',
        desc: 'Be part of the smart services revolution in Saudi Arabia',
        button: 'Start Now',
        back: 'Back to Home'
      }
    }
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen bg-[#02000f] text-white ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: '"Tajawal", "Cairo", sans-serif' }}>
      
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
      `}</style>

      {/* Header with Language Toggle */}
      <div className="fixed top-0 w-full bg-[#02000f]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Zap className="w-6 h-6 fill-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">Khidma<span className="text-purple-500 italic">AI</span></span>
          </Link>
          
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <Languages className="w-4 h-4" />
            <span className="text-sm font-bold">{lang === 'ar' ? 'EN' : 'ع'}</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              {lang === 'ar' ? 'قصتنا' : 'Our Story'}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl font-black">{t.intro.title}</h2>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>{t.intro.p1}</p>
              <p>{t.intro.p2}</p>
              <p className="text-purple-300 font-bold">{t.intro.p3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-[#030014]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-3xl p-8 border border-white/10"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-black mb-4">{t.mission.title}</h3>
              <p className="text-gray-300 leading-relaxed">{t.mission.text}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-3xl p-8 border border-white/10"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-black mb-4">{t.vision.title}</h3>
              <p className="text-gray-300 leading-relaxed">{t.vision.text}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">{t.values.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-[#030014]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">{t.journey.title}</h2>
          </motion.div>

          <div className="space-y-8">
            {t.journey.milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-sm">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all">
                  <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                  <p className="text-gray-400">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-12"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-black mb-4">{t.team.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {t.team.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{t.cta.title}</h2>
              <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">{t.cta.desc}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="px-10 py-5 bg-white text-purple-700 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
                >
                  {t.cta.button}
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold text-lg transition-colors group"
          >
            <ArrowRight className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${isRTL ? '' : 'rotate-180'}`} />
            {t.cta.back}
          </Link>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 KHIDMA AI - {lang === 'ar' ? 'صنع بكل حب في السعودية' : 'Made with Love in Saudi Arabia'} 🇸🇦
          </p>
        </div>
      </footer>
    </div>
  );
}