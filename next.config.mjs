/**
 * Next.js কনফিগ — লেনদেন হিসাব ওয়েবসাইট
 * - trailingSlash: পুরোনো ঠিকানা (/privacy/, /plans/) যেমন ছিল তেমনই থাকে, তাই Play Console-এর লিংক ভাঙে না।
 * - headers: আগের vercel.json-এর নিরাপত্তা হেডার আর /assets-এর ৭ দিনের ক্যাশ।
 */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/app",
        destination:
          "https://play.google.com/store/apps/details?id=com.kamalhossan.lendenhisab&referrer=utm_source%3Dwhatsapp%26utm_medium%3Dmessage",
        permanent: false,
      },
      {
        source: "/fb",
        destination:
          "https://play.google.com/store/apps/details?id=com.kamalhossan.lendenhisab&referrer=utm_source%3Dfacebook%26utm_medium%3Dpage",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
