import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE_URL = 'https://www.lendenhisab.com';

/** সব পাতার সাধারণ মেটা তথ্য; প্রতিটি পাতা নিজের title/description দিয়ে বদলায়। */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'লেনদেন হিসাব — দোকানের বাকির খাতা, ইন্টারনেট ছাড়াই চলে',
    template: '%s — লেনদেন হিসাব',
  },
  description:
    'লেনদেন হিসাব: বাংলাদেশের দোকানদারদের জন্য সহজ বাকির খাতা অ্যাপ। ক্রেতার পাওনা, সরবরাহকারীর দেনা, WhatsApp-এ হিসাব পাঠানো, রিমাইন্ডার, কর্মচারী — ইন্টারনেট ছাড়াই চলে।',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'লেনদেন হিসাব — দোকানের বাকির খাতা',
    description: 'ক্রেতার বাকি, সরবরাহকারীর দেনা আর আদায়ের হিসাব এক অ্যাপে। ইন্টারনেট ছাড়াই চলে।',
    images: ['/assets/logo-512.png'], // metadataBase থাকায় পূর্ণ ঠিকানা হয় (Facebook শেয়ারে ছবি দেখায়)
    type: 'website',
  },
};

export const viewport = { themeColor: '#057a55' };

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        {/* Noto Sans Bengali — আগের সাইটের মতো Google Fonts থেকে (হালকা, display=swap) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
