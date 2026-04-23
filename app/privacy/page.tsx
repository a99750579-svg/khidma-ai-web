"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Shield, Lock, Eye, Database, 
  UserCheck, Bell, Cookie, FileText, Mail,
  CheckCircle, AlertCircle, Zap, Languages
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const isRTL = lang === 'ar';

  const content = {
    ar: {
      title: 'سياسة الخصوصية',
      subtitle: 'التزامنا الكامل بحماية خصوصيتك وبياناتك',
      lastUpdate: 'آخر تحديث: يناير 2026',
      intro: 'نحن في Khidma AI نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. هذه السياسة توضح كيف نجمع ونستخدم ونحمي معلوماتك.',
      sections: [
        {
          icon: <Database className="w-6 h-6" />,
          title: 'البيانات التي نجمعها',
          content: [
            {
              subtitle: 'معلومات الحساب',
              text: 'عند التسجيل في المنصة، نجمع اسمك، بريدك الإلكتروني، ورقم هاتفك. هذه المعلومات ضرورية لإنشاء حسابك وتقديم الخدمات.'
            },
            {
              subtitle: 'بيانات الاستخدام',
              text: 'نجمع معلومات حول كيفية استخدامك للمنصة، مثل عمليات البحث التي تجريها، المراكز التي تزورها، والتقييمات التي تتركها.'
            },
            {
              subtitle: 'البيانات التقنية',
              text: 'نجمع معلومات تقنية تلقائياً مثل عنوان IP، نوع المتصفح، نظام التشغيل، ومعلومات الجهاز لتحسين أداء المنصة.'
            },
            {
              subtitle: 'بيانات الموقع',
              text: 'مع إذنك، نجمع بيانات موقعك الجغرافي لنقدم لك نتائج بحث دقيقة عن الخدمات القريبة منك.'
            }
          ]
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: 'كيف نستخدم بياناتك',
          content: [
            {
              subtitle: 'تقديم الخدمات',
              text: 'نستخدم بياناتك لتشغيل المنصة، معالجة طلباتك، وتقديم الخدمات التي تطلبها.'
            },
            {
              subtitle: 'تحسين التجربة',
              text: 'نحلل بيانات الاستخدام لتحسين المنصة، تطوير ميزات جديدة، وتخصيص تجربتك.'
            },
            {
              subtitle: 'التواصل',
              text: 'نرسل لك إشعارات حول حجوزاتك، تحديثات الخدمة، وعروض خاصة (يمكنك إلغاء الاشتراك في أي وقت).'
            },
            {
              subtitle: 'الأمان والحماية',
              text: 'نستخدم بياناتك للكشف عن الاحتيال، منع إساءة الاستخدام، وضمان أمان المنصة.'
            }
          ]
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: 'حماية البيانات',
          content: [
            {
              subtitle: 'التشفير',
              text: 'نستخدم تقنيات التشفير من الدرجة الأولى (SSL/TLS) لحماية بياناتك أثناء النقل والتخزين.'
            },
            {
              subtitle: 'الوصول المحدود',
              text: 'فقط الموظفون المصرح لهم لديهم إمكانية الوصول لبياناتك، وذلك فقط عند الضرورة لأداء مهامهم.'
            },
            {
              subtitle: 'المراقبة المستمرة',
              text: 'نراقب أنظمتنا باستمرار للكشف عن أي نشاط مشبوه أو محاولات اختراق.'
            },
            {
              subtitle: 'النسخ الاحتياطي',
              text: 'نحتفظ بنسخ احتياطية آمنة من بياناتك لضمان عدم فقدانها في حالة حدوث طارئ.'
            }
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: 'حقوقك',
          content: [
            {
              subtitle: 'الوصول والتعديل',
              text: 'يمكنك الوصول إلى بياناتك الشخصية وتعديلها في أي وقت من خلال إعدادات حسابك.'
            },
            {
              subtitle: 'الحذف',
              text: 'لديك الحق في طلب حذف حسابك وبياناتك بالكامل. سنقوم بحذفها خلال 30 يوماً من طلبك.'
            },
            {
              subtitle: 'التحكم في الإشعارات',
              text: 'يمكنك اختيار نوع الإشعارات التي تريد استلامها أو إلغاء الاشتراك فيها بالكامل.'
            },
            {
              subtitle: 'تصدير البيانات',
              text: 'يمكنك طلب نسخة من جميع بياناتك في صيغة قابلة للقراءة.'
            }
          ]
        },
        {
          icon: <Cookie className="w-6 h-6" />,
          title: 'ملفات تعريف الارتباط (Cookies)',
          content: [
            {
              subtitle: 'الكوكيز الأساسية',
              text: 'نستخدم كوكيز ضرورية لتشغيل المنصة بشكل صحيح، مثل تسجيل الدخول وحفظ تفضيلاتك.'
            },
            {
              subtitle: 'كوكيز التحليلات',
              text: 'نستخدم كوكيز تحليلية لفهم كيفية استخدامك للمنصة وتحسين تجربتك (يمكنك رفضها).'
            },
            {
              subtitle: 'كوكيز التسويق',
              text: 'نستخدم كوكيز تسويقية لعرض إعلانات مخصصة لك (يمكنك رفضها).'
            },
            {
              subtitle: 'التحكم في الكوكيز',
              text: 'يمكنك إدارة تفضيلات الكوكيز من خلال إعدادات متصفحك أو من خلال لوحة تحكم الكوكيز في موقعنا.'
            }
          ]
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: 'مشاركة البيانات',
          content: [
            {
              subtitle: 'عدم البيع',
              text: 'لا نبيع بياناتك الشخصية لأي طرف ثالث تحت أي ظرف من الظروف.'
            },
            {
              subtitle: 'مقدمو الخدمات',
              text: 'قد نشارك بياناتك مع مقدمي خدمات موثوقين (مثل خدمات الاستضافة أو الدفع) فقط لتقديم الخدمات المطلوبة.'
            },
            {
              subtitle: 'الالتزامات القانونية',
              text: 'قد نكشف عن بياناتك إذا كان ذلك مطلوباً بموجب القانون أو لحماية حقوقنا وحقوق المستخدمين.'
            },
            {
              subtitle: 'نقل الملكية',
              text: 'في حالة اندماج أو بيع الشركة، قد يتم نقل بياناتك للمالك الجديد مع الالتزام بنفس سياسة الخصوصية.'
            }
          ]
        },
        {
          icon: <Bell className="w-6 h-6" />,
          title: 'تحديثات السياسة',
          content: [
            {
              subtitle: 'الإشعار بالتغييرات',
              text: 'سنقوم بإشعارك عبر البريد الإلكتروني أو من خلال إشعار في المنصة عند إجراء أي تغييرات جوهرية على هذه السياسة.'
            },
            {
              subtitle: 'مراجعة منتظمة',
              text: 'ننصحك بمراجعة هذه السياسة بشكل دوري للبقاء على اطلاع بكيفية حماية معلوماتك.'
            },
            {
              subtitle: 'الموافقة المستمرة',
              text: 'استمرارك في استخدام المنصة بعد نشر التحديثات يعني موافقتك على السياسة المحدثة.'
            }
          ]
        },
        {
          icon: <Mail className="w-6 h-6" />,
          title: 'اتصل بنا',
          content: [
            {
              subtitle: 'الأسئلة والاستفسارات',
              text: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية أو كيفية معالجة بياناتك، لا تتردد في الاتصال بنا.'
            },
            {
              subtitle: 'البريد الإلكتروني',
              text: 'privacy@khidmaai.com'
            },
            {
              subtitle: 'فريق الدعم',
              text: 'متوفر على مدار الساعة طوال أيام الأسبوع للرد على استفساراتك.'
            }
          ]
        }
      ],
      commitment: {
        title: 'التزامنا تجاهك',
        items: [
          'نحترم خصوصيتك ونعاملها بأقصى درجات الجدية',
          'نستخدم أحدث تقنيات الأمان لحماية بياناتك',
          'نمنحك التحكم الكامل في معلوماتك الشخصية',
          'نلتزم بالشفافية التامة في كيفية استخدام بياناتك'
        ]
      },
      back: 'رجوع للرئيسية'
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'Our Complete Commitment to Protecting Your Privacy and Data',
      lastUpdate: 'Last Updated: January 2026',
      intro: 'At Khidma AI, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.',
      sections: [
        {
          icon: <Database className="w-6 h-6" />,
          title: 'Data We Collect',
          content: [
            {
              subtitle: 'Account Information',
              text: 'When you register on the platform, we collect your name, email address, and phone number. This information is necessary to create your account and provide services.'
            },
            {
              subtitle: 'Usage Data',
              text: 'We collect information about how you use the platform, such as searches you perform, centers you visit, and reviews you leave.'
            },
            {
              subtitle: 'Technical Data',
              text: 'We automatically collect technical information such as IP address, browser type, operating system, and device information to improve platform performance.'
            },
            {
              subtitle: 'Location Data',
              text: 'With your permission, we collect your geographic location data to provide you with accurate search results for nearby services.'
            }
          ]
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: 'How We Use Your Data',
          content: [
            {
              subtitle: 'Provide Services',
              text: 'We use your data to operate the platform, process your requests, and deliver the services you request.'
            },
            {
              subtitle: 'Improve Experience',
              text: 'We analyze usage data to improve the platform, develop new features, and personalize your experience.'
            },
            {
              subtitle: 'Communication',
              text: 'We send you notifications about your bookings, service updates, and special offers (you can unsubscribe at any time).'
            },
            {
              subtitle: 'Security and Protection',
              text: 'We use your data to detect fraud, prevent misuse, and ensure platform security.'
            }
          ]
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: 'Data Protection',
          content: [
            {
              subtitle: 'Encryption',
              text: 'We use first-class encryption technologies (SSL/TLS) to protect your data during transfer and storage.'
            },
            {
              subtitle: 'Limited Access',
              text: 'Only authorized employees have access to your data, and only when necessary to perform their duties.'
            },
            {
              subtitle: 'Continuous Monitoring',
              text: 'We continuously monitor our systems to detect any suspicious activity or breach attempts.'
            },
            {
              subtitle: 'Backup',
              text: 'We maintain secure backups of your data to ensure it is not lost in case of emergency.'
            }
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: 'Your Rights',
          content: [
            {
              subtitle: 'Access and Edit',
              text: 'You can access and edit your personal data at any time through your account settings.'
            },
            {
              subtitle: 'Deletion',
              text: 'You have the right to request deletion of your account and data completely. We will delete it within 30 days of your request.'
            },
            {
              subtitle: 'Notification Control',
              text: 'You can choose the types of notifications you want to receive or unsubscribe from them completely.'
            },
            {
              subtitle: 'Data Export',
              text: 'You can request a copy of all your data in a readable format.'
            }
          ]
        },
        {
          icon: <Cookie className="w-6 h-6" />,
          title: 'Cookies',
          content: [
            {
              subtitle: 'Essential Cookies',
              text: 'We use necessary cookies to operate the platform properly, such as login and saving your preferences.'
            },
            {
              subtitle: 'Analytics Cookies',
              text: 'We use analytics cookies to understand how you use the platform and improve your experience (you can reject them).'
            },
            {
              subtitle: 'Marketing Cookies',
              text: 'We use marketing cookies to display personalized ads to you (you can reject them).'
            },
            {
              subtitle: 'Cookie Control',
              text: 'You can manage your cookie preferences through your browser settings or through our cookie control panel on our site.'
            }
          ]
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: 'Data Sharing',
          content: [
            {
              subtitle: 'No Selling',
              text: 'We do not sell your personal data to any third party under any circumstances.'
            },
            {
              subtitle: 'Service Providers',
              text: 'We may share your data with trusted service providers (such as hosting or payment services) only to provide required services.'
            },
            {
              subtitle: 'Legal Obligations',
              text: 'We may disclose your data if required by law or to protect our rights and the rights of users.'
            },
            {
              subtitle: 'Ownership Transfer',
              text: 'In case of merger or sale of the company, your data may be transferred to the new owner with the same privacy policy commitment.'
            }
          ]
        },
        {
          icon: <Bell className="w-6 h-6" />,
          title: 'Policy Updates',
          content: [
            {
              subtitle: 'Change Notification',
              text: 'We will notify you via email or through a notification on the platform when making any material changes to this policy.'
            },
            {
              subtitle: 'Regular Review',
              text: 'We recommend reviewing this policy periodically to stay informed about how we protect your information.'
            },
            {
              subtitle: 'Continued Consent',
              text: 'Your continued use of the platform after posting updates means you agree to the updated policy.'
            }
          ]
        },
        {
          icon: <Mail className="w-6 h-6" />,
          title: 'Contact Us',
          content: [
            {
              subtitle: 'Questions and Inquiries',
              text: 'If you have any questions about the privacy policy or how we process your data, do not hesitate to contact us.'
            },
            {
              subtitle: 'Email',
              text: 'privacy@khidmaai.com'
            },
            {
              subtitle: 'Support Team',
              text: 'Available 24/7 to answer your inquiries.'
            }
          ]
        }
      ],
      commitment: {
        title: 'Our Commitment to You',
        items: [
          'We respect your privacy and treat it with the utmost seriousness',
          'We use the latest security technologies to protect your data',
          'We give you complete control over your personal information',
          'We commit to complete transparency in how we use your data'
        ]
      },
      back: 'Back to Home'
    }
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen bg-[#02000f] text-white ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: '"Tajawal", "Cairo", sans-serif' }}>
      
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
      `}</style>

      {/* Header */}
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
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-6">
              <Shield className="w-4 h-4" />
              {lang === 'ar' ? 'محمي ومؤمّن' : 'Protected & Secured'}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-blue-200">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-4">
              {t.subtitle}
            </p>
            <p className="text-sm text-gray-500 font-bold">
              {t.lastUpdate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {t.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-black">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, j) => (
                  <div key={j} className="space-y-2">
                    <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-300 leading-relaxed pl-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-[#030014]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600/20 to-emerald-900/20 border border-green-500/20 rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-black mb-8">{t.commitment.title}</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {t.commitment.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
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
            {t.back}
          </Link>
        </div>
      </section>

      {/* Footer */}
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