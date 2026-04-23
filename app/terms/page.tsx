"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, FileText, Scale, UserCheck, AlertTriangle,
  Shield, Ban, CheckCircle, XCircle, Info,
  Briefcase, CreditCard, RefreshCw, Zap, Languages,Mail
} from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const isRTL = lang === 'ar';

  const content = {
    ar: {
      title: 'الشروط والأحكام',
      subtitle: 'القواعد والمبادئ التي تحكم استخدام منصة Khidma AI',
      lastUpdate: 'آخر تحديث: يناير 2026',
      intro: 'مرحباً بك في Khidma AI. باستخدامك لمنصتنا، فأنت توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام خدماتنا.',
      sections: [
        {
          icon: <FileText className="w-6 h-6" />,
          title: 'القبول والموافقة',
          type: 'info',
          content: [
            {
              subtitle: 'الموافقة على الشروط',
              text: 'باستخدامك لمنصة Khidma AI، فإنك توافق على الالتزام بجميع الشروط والأحكام الموضحة في هذه الوثيقة.'
            },
            {
              subtitle: 'الأهلية القانونية',
              text: 'يجب أن يكون عمرك 18 عاماً على الأقل لاستخدام المنصة. إذا كنت تحت 18 عاماً، يجب عليك استخدام المنصة بموافقة ولي الأمر.'
            },
            {
              subtitle: 'التحديثات',
              text: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات جوهرية، واستمرارك في استخدام المنصة يعني قبولك للشروط المحدثة.'
            }
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: 'حساب المستخدم',
          type: 'info',
          content: [
            {
              subtitle: 'إنشاء الحساب',
              text: 'يجب عليك تقديم معلومات دقيقة وصحيحة عند إنشاء حسابك. أنت مسؤول عن الحفاظ على سرية بيانات حسابك.'
            },
            {
              subtitle: 'أمان الحساب',
              text: 'أنت مسؤول عن جميع الأنشطة التي تتم من خلال حسابك. يجب عليك إخطارنا فوراً إذا شككت في أي وصول غير مصرح به.'
            },
            {
              subtitle: 'حساب واحد لكل مستخدم',
              text: 'لا يُسمح بإنشاء أكثر من حساب لنفس المستخدم. قد يؤدي انتهاك هذه القاعدة إلى إيقاف جميع حساباتك.'
            },
            {
              subtitle: 'إنهاء الحساب',
              text: 'يمكنك حذف حسابك في أي وقت. نحتفظ بالحق في تعليق أو إنهاء حسابك إذا انتهكت هذه الشروط.'
            }
          ]
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: 'استخدام المنصة',
          type: 'warning',
          content: [
            {
              subtitle: 'الاستخدام المسموح',
              text: 'يُسمح باستخدام المنصة فقط للأغراض القانونية والمشروعة. يجب عليك احترام جميع القوانين المحلية والوطنية والدولية.'
            },
            {
              subtitle: 'حقوق الملكية الفكرية',
              text: 'جميع المحتويات والعلامات التجارية والتصاميم على المنصة مملوكة لنا أو لمانحي التراخيص. لا يجوز نسخها أو توزيعها دون إذن.'
            },
            {
              subtitle: 'سلوك المستخدم',
              text: 'يجب التعامل مع المستخدمين الآخرين ومقدمي الخدمات باحترام. أي سلوك مسيء أو تحرش سيؤدي إلى إيقاف الحساب.'
            }
          ]
        },
        {
          icon: <Ban className="w-6 h-6" />,
          title: 'الاستخدامات المحظورة',
          type: 'danger',
          content: [
            {
              subtitle: 'المحتوى المحظور',
              text: 'يُمنع منعاً باتاً نشر أي محتوى غير قانوني، مسيء، مضلل، أو ينتهك حقوق الآخرين.'
            },
            {
              subtitle: 'الأنشطة الاحتيالية',
              text: 'يُحظر استخدام المنصة لأي أنشطة احتيالية أو خادعة أو لانتحال شخصية الآخرين.'
            },
            {
              subtitle: 'إساءة الاستخدام',
              text: 'يُمنع محاولة الوصول غير المصرح به، التلاعب بالأنظمة، أو أي نشاط يضر بالمنصة أو المستخدمين الآخرين.'
            },
            {
              subtitle: 'البريد المزعج والإعلانات',
              text: 'يُحظر إرسال رسائل غير مرغوب فيها أو الترويج لخدمات خارجية دون إذن.'
            }
          ]
        },
        {
          icon: <Briefcase className="w-6 h-6" />,
          title: 'للشركات ومقدمي الخدمات',
          type: 'info',
          content: [
            {
              subtitle: 'التسجيل كمركز',
              text: 'يجب تقديم معلومات دقيقة وصحيحة عن مركزك. أي معلومات مضللة قد تؤدي إلى إلغاء التسجيل.'
            },
            {
              subtitle: 'كود الدعوة',
              text: 'التسجيل كمركز يتطلب كود دعوة خاص يتم الحصول عليه من خلال التواصل الرسمي معنا عبر حسابات التواصل الاجتماعي الموثقة للمركز.'
            },
            {
              subtitle: 'مسؤولية المحتوى',
              text: 'أنت مسؤول عن دقة وصحة المعلومات التي تنشرها عن مركزك، بما في ذلك الأسعار والخدمات والمواعيد.'
            },
            {
              subtitle: 'التقييمات والمراجعات',
              text: 'التقييمات الواردة على مركزك هي آراء المستخدمين الشخصية. نحتفظ بالحق في إزالة أي تقييمات مخالفة لسياساتنا.'
            }
          ]
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: 'الرسوم والمدفوعات',
          type: 'info',
          content: [
            {
              subtitle: 'مجانية للمستخدمين',
              text: 'استخدام المنصة مجاني بالكامل للمستخدمين العاديين. لا توجد أي رسوم مخفية.'
            },
            {
              subtitle: 'رسوم الأعمال',
              text: 'قد نفرض رسوم على مقدمي الخدمات للميزات المتقدمة أو الإعلانات المميزة في المستقبل.'
            },
            {
              subtitle: 'سياسة الاسترداد',
              text: 'في حال وجود أي رسوم مستقبلية، سنوفر سياسة استرداد واضحة وعادلة.'
            }
          ]
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: 'إخلاء المسؤولية',
          type: 'warning',
          content: [
            {
              subtitle: 'المحتوى التابع لطرف ثالث',
              text: 'المنصة تجمع معلومات من مقدمي خدمات مستقلين. نحن لسنا مسؤولين عن دقة أو جودة الخدمات المقدمة من قبلهم.'
            },
            {
              subtitle: 'عدم الضمان',
              text: 'نقدم المنصة "كما هي" دون أي ضمانات صريحة أو ضمنية. لا نضمن أن المنصة ستكون خالية من الأخطاء أو متوفرة في جميع الأوقات.'
            },
            {
              subtitle: 'المسؤولية المحدودة',
              text: 'لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة ناتجة عن استخدامك للمنصة.'
            },
            {
              subtitle: 'التعاملات الخارجية',
              text: 'أي معاملات أو اتفاقيات تتم بينك وبين مقدمي الخدمات هي مسؤوليتك الخاصة.'
            }
          ]
        },
        {
          icon: <RefreshCw className="w-6 h-6" />,
          title: 'التعديلات والإنهاء',
          type: 'info',
          content: [
            {
              subtitle: 'تعديل الخدمات',
              text: 'نحتفظ بالحق في تعديل أو إيقاف أي جزء من المنصة في أي وقت مع أو بدون إشعار مسبق.'
            },
            {
              subtitle: 'إنهاء الوصول',
              text: 'يمكننا تعليق أو إنهاء وصولك للمنصة في أي وقت إذا انتهكت هذه الشروط أو لأي سبب آخر نراه مناسباً.'
            },
            {
              subtitle: 'الآثار بعد الإنهاء',
              text: 'بعد إنهاء حسابك، قد نحتفظ ببعض المعلومات وفقاً لسياسة الخصوصية والمتطلبات القانونية.'
            }
          ]
        },
        {
          icon: <Info className="w-6 h-6" />,
          title: 'أحكام عامة',
          type: 'info',
          content: [
            {
              subtitle: 'القانون الحاكم',
              text: 'تخضع هذه الشروط لقوانين المملكة العربية السعودية. أي نزاعات سيتم حلها في المحاكم المختصة في المملكة.'
            },
            {
              subtitle: 'قابلية الفصل',
              text: 'إذا تبين أن أي بند من هذه الشروط غير قانوني أو غير قابل للتنفيذ، سيظل باقي الشروط سارياً.'
            },
            {
              subtitle: 'الاتفاقية الكاملة',
              text: 'هذه الشروط، بالإضافة إلى سياسة الخصوصية، تشكل الاتفاقية الكاملة بينك وبيننا فيما يتعلق باستخدام المنصة.'
            },
            {
              subtitle: 'التنازل',
              text: 'عدم ممارستنا لأي حق من حقوقنا بموجب هذه الشروط لا يعتبر تنازلاً عن هذا الحق.'
            }
          ]
        }
      ],
      important: {
        title: 'نقاط مهمة يجب تذكرها',
        items: [
          'استخدم المنصة بطريقة قانونية ومحترمة',
          'احترم حقوق الآخرين وخصوصيتهم',
          'قدم معلومات دقيقة وصحيحة',
          'لا تنشر محتوى مسيء أو مضلل',
          'احتفظ بسرية بيانات حسابك',
          'نحن هنا لمساعدتك - تواصل معنا عند الحاجة'
        ]
      },
      contact: {
        title: 'تواصل معنا',
        text: 'إذا كان لديك أي أسئلة حول هذه الشروط، لا تتردد في التواصل معنا عبر:',
        email: 'legal@khidmaai.com'
      },
      back: 'رجوع للرئيسية'
    },
    en: {
      title: 'Terms & Conditions',
      subtitle: 'The rules and principles governing the use of Khidma AI platform',
      lastUpdate: 'Last Updated: January 2026',
      intro: 'Welcome to Khidma AI. By using our platform, you agree to comply with these terms and conditions. Please read them carefully before using our services.',
      sections: [
        {
          icon: <FileText className="w-6 h-6" />,
          title: 'Acceptance and Agreement',
          type: 'info',
          content: [
            {
              subtitle: 'Agreement to Terms',
              text: 'By using the Khidma AI platform, you agree to comply with all the terms and conditions outlined in this document.'
            },
            {
              subtitle: 'Legal Capacity',
              text: 'You must be at least 18 years old to use the platform. If you are under 18, you must use the platform with parental consent.'
            },
            {
              subtitle: 'Updates',
              text: 'We reserve the right to modify these terms at any time. You will be notified of any material changes, and your continued use of the platform means acceptance of the updated terms.'
            }
          ]
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: 'User Account',
          type: 'info',
          content: [
            {
              subtitle: 'Account Creation',
              text: 'You must provide accurate and correct information when creating your account. You are responsible for maintaining the confidentiality of your account data.'
            },
            {
              subtitle: 'Account Security',
              text: 'You are responsible for all activities conducted through your account. You must notify us immediately if you suspect any unauthorized access.'
            },
            {
              subtitle: 'One Account Per User',
              text: 'Creating more than one account for the same user is not allowed. Violation of this rule may result in suspension of all your accounts.'
            },
            {
              subtitle: 'Account Termination',
              text: 'You can delete your account at any time. We reserve the right to suspend or terminate your account if you violate these terms.'
            }
          ]
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: 'Platform Use',
          type: 'warning',
          content: [
            {
              subtitle: 'Permitted Use',
              text: 'The platform may only be used for legal and legitimate purposes. You must respect all local, national, and international laws.'
            },
            {
              subtitle: 'Intellectual Property Rights',
              text: 'All content, trademarks, and designs on the platform are owned by us or our licensors. They may not be copied or distributed without permission.'
            },
            {
              subtitle: 'User Conduct',
              text: 'You must treat other users and service providers with respect. Any abusive behavior or harassment will result in account suspension.'
            }
          ]
        },
        {
          icon: <Ban className="w-6 h-6" />,
          title: 'Prohibited Uses',
          type: 'danger',
          content: [
            {
              subtitle: 'Prohibited Content',
              text: 'Publishing any illegal, abusive, misleading, or rights-violating content is strictly prohibited.'
            },
            {
              subtitle: 'Fraudulent Activities',
              text: 'Using the platform for any fraudulent or deceptive activities or impersonating others is prohibited.'
            },
            {
              subtitle: 'Misuse',
              text: 'Attempting unauthorized access, system manipulation, or any activity that harms the platform or other users is prohibited.'
            },
            {
              subtitle: 'Spam and Advertising',
              text: 'Sending unsolicited messages or promoting external services without permission is prohibited.'
            }
          ]
        },
        {
          icon: <Briefcase className="w-6 h-6" />,
          title: 'For Businesses and Service Providers',
          type: 'info',
          content: [
            {
              subtitle: 'Center Registration',
              text: 'You must provide accurate and correct information about your center. Any misleading information may result in registration cancellation.'
            },
            {
              subtitle: 'Invitation Code',
              text: 'Center registration requires a special invitation code obtained through official communication with us via verified social media accounts of the center.'
            },
            {
              subtitle: 'Content Responsibility',
              text: 'You are responsible for the accuracy and correctness of the information you publish about your center, including prices, services, and schedules.'
            },
            {
              subtitle: 'Reviews and Ratings',
              text: 'Reviews received on your center are personal opinions of users. We reserve the right to remove any reviews that violate our policies.'
            }
          ]
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: 'Fees and Payments',
          type: 'info',
          content: [
            {
              subtitle: 'Free for Users',
              text: 'Using the platform is completely free for regular users. There are no hidden fees.'
            },
            {
              subtitle: 'Business Fees',
              text: 'We may charge service providers for advanced features or premium advertising in the future.'
            },
            {
              subtitle: 'Refund Policy',
              text: 'In case of any future fees, we will provide a clear and fair refund policy.'
            }
          ]
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: 'Disclaimer',
          type: 'warning',
          content: [
            {
              subtitle: 'Third Party Content',
              text: 'The platform aggregates information from independent service providers. We are not responsible for the accuracy or quality of services provided by them.'
            },
            {
              subtitle: 'No Warranty',
              text: 'We provide the platform "as is" without any express or implied warranties. We do not guarantee that the platform will be error-free or available at all times.'
            },
            {
              subtitle: 'Limited Liability',
              text: 'We will not be liable for any indirect, incidental, or special damages resulting from your use of the platform.'
            },
            {
              subtitle: 'External Transactions',
              text: 'Any transactions or agreements between you and service providers are your own responsibility.'
            }
          ]
        },
        {
          icon: <RefreshCw className="w-6 h-6" />,
          title: 'Modifications and Termination',
          type: 'info',
          content: [
            {
              subtitle: 'Service Modifications',
              text: 'We reserve the right to modify or discontinue any part of the platform at any time with or without prior notice.'
            },
            {
              subtitle: 'Access Termination',
              text: 'We can suspend or terminate your access to the platform at any time if you violate these terms or for any other reason we deem appropriate.'
            },
            {
              subtitle: 'Effects After Termination',
              text: 'After terminating your account, we may retain some information in accordance with our privacy policy and legal requirements.'
            }
          ]
        },
        {
          icon: <Info className="w-6 h-6" />,
          title: 'General Provisions',
          type: 'info',
          content: [
            {
              subtitle: 'Governing Law',
              text: 'These terms are subject to the laws of the Kingdom of Saudi Arabia. Any disputes will be resolved in the competent courts in the Kingdom.'
            },
            {
              subtitle: 'Severability',
              text: 'If any provision of these terms is found to be illegal or unenforceable, the remaining terms will remain in effect.'
            },
            {
              subtitle: 'Entire Agreement',
              text: 'These terms, along with the privacy policy, constitute the entire agreement between you and us regarding the use of the platform.'
            },
            {
              subtitle: 'Waiver',
              text: 'Our failure to exercise any right under these terms does not constitute a waiver of that right.'
            }
          ]
        }
      ],
      important: {
        title: 'Important Points to Remember',
        items: [
          'Use the platform legally and respectfully',
          'Respect the rights and privacy of others',
          'Provide accurate and correct information',
          'Do not publish abusive or misleading content',
          'Keep your account credentials confidential',
          'We are here to help you - contact us when needed'
        ]
      },
      contact: {
        title: 'Contact Us',
        text: 'If you have any questions about these terms, do not hesitate to contact us at:',
        email: 'legal@khidmaai.com'
      },
      back: 'Back to Home'
    }
  };

  const t = content[lang];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'danger': return 'from-red-600/20 to-red-900/20 border-red-500/20';
      case 'warning': return 'from-yellow-600/20 to-orange-900/20 border-yellow-500/20';
      default: return 'from-purple-600/20 to-blue-900/20 border-purple-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'danger': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      default: return <CheckCircle className="w-5 h-5 text-purple-400" />;
    }
  };

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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
              <Scale className="w-4 h-4" />
              {lang === 'ar' ? 'القواعد والأحكام' : 'Rules & Regulations'}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
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
            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
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
              transition={{ delay: i * 0.05 }}
              className={`bg-gradient-to-br ${getTypeColor(section.type)} backdrop-blur-xl border rounded-3xl p-8 md:p-10`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${section.type === 'danger' ? 'bg-red-500/20' : section.type === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'} rounded-2xl flex items-center justify-center ${section.type === 'danger' ? 'text-red-400' : section.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'}`}>
                  {section.icon}
                </div>
                <h2 className="text-3xl font-black">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, j) => (
                  <div key={j} className="space-y-2">
                    <h3 className={`text-xl font-bold flex items-center gap-2 ${section.type === 'danger' ? 'text-red-300' : section.type === 'warning' ? 'text-yellow-300' : 'text-blue-300'}`}>
                      {getTypeIcon(section.type)}
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

      {/* Important Points */}
      <section className="py-20 px-6 bg-[#030014]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600/20 to-blue-900/20 border border-purple-500/20 rounded-3xl p-12"
          >
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-3xl font-black mb-8 text-center">{t.important.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.important.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-black mb-4">{t.contact.title}</h3>
            <p className="text-gray-300 mb-4">{t.contact.text}</p>
            <a href={`mailto:${t.contact.email}`} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold text-lg">
              <Mail className="w-5 h-5" />
              {t.contact.email}
            </a>
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