import "./globals.css"; // 👈 هذا أهم سطر

export const metadata = {

  title: "Khidma AI | دليل الخدمات والمراكز في السعودية",
  description:
    "Khidma AI هو دليلك الذكي لاكتشاف أفضل المراكز والخدمات القريبة منك بسهولة. تقييمات، مواقع، وكل شيء في مكان واحد.",
  keywords: [
    "دليل خدمات",
    "مراكز قريبة",
    "أفضل عيادة",
    "مطاعم قريبة",
    "Khidma AI",
    "خدمات السعودية",
  ],
  authors: [{ name: "Khidma AI" }],
verification: {
  "zsTk6LrITxqR2e21dnl183AFLQ6hL1EO6JKaz6Dhw"
},
  openGraph: {
    title: "Khidma AI",
    description: "اكتشف أفضل الخدمات حولك بسهولة",
    url: "https://khidma-ai.vercel.app",
    siteName: "Khidma AI",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
};

// 👇 هذا الجزء فقط أضفناه
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}