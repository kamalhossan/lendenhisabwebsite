# লেনদেন হিসাব — ওয়েবসাইট (Next.js)

অ্যাপের পরিচিতি ওয়েবসাইট, প্ল্যান ও দাম, গোপনীয়তা নীতি আর অ্যাকাউন্ট মোছার নিয়ম। **Next.js 15 (App Router)**, সব পাতা স্ট্যাটিক (বিল্ডের সময় তৈরি), Vercel-এ চলে।
অ্যাডমিন প্যানেলের সঙ্গে কোনো সম্পর্ক নেই — প্যানেলের ঠিকানা এখানে কোথাও নেই।

## পাতা

| ঠিকানা | ফাইল | কী আছে |
|---|---|---|
| `/` | `app/page.js` | হোম: সুবিধা, তিন ধাপে শুরু, দাম (সংক্ষেপে → `/plans/`), সাধারণ প্রশ্ন, ডাউনলোড |
| `/plans/` | `app/plans/page.js` + `PlanPicker.js` + `plans-data.js` | প্ল্যান ও দাম: মেয়াদ বাছাই, ফ্রি বনাম পেইড তুলনা, বিকাশে কেনার ৩ ধাপ (নম্বর কপি → দোকান কোড/TrxID → WhatsApp-এ তৈরি মেসেজ), প্ল্যানের প্রশ্ন |
| `/privacy/` | `app/privacy/page.js` | গোপনীয়তা নীতি, বাংলা + ইংরেজি (Play Store Privacy Policy লিংক) |
| `/delete-account/` | `app/delete-account/page.js` | অ্যাকাউন্ট ও সব তথ্য মোছার নিয়ম (Play Data safety ফর্মের লিংক) |
| ভুল ঠিকানা | `app/not-found.js` | "পাতাটি পাওয়া যায়নি" |

বাকি: `app/layout.js` (সব পাতার কাঠামো, মেটা, ফন্ট), `components/Header.js`, `components/Footer.js`, `app/globals.css` (সব ডিজাইন), `public/` (লোগো, favicon, robots.txt), `next.config.mjs` (`trailingSlash` আর নিরাপত্তা হেডার — আগের vercel.json-এর কাজ)।

ডিজাইন: অ্যাপের সবুজ `#057a55`, Noto Sans Bengali, মোবাইলে এক কলাম। হোমের ফোনের ছবি HTML দিয়ে আঁকা। ভারী JS নেই; শুধু `/plans/`-এর মেয়াদ বাছাই আর WhatsApp মেসেজের অংশ ব্রাউজারে চলে।

## নিজের কম্পিউটারে চালানো

```
npm install       # প্রথমবার
npm run dev       # http://localhost:3000 — বদল সঙ্গে সঙ্গে দেখায়
npm run build     # ডিপ্লয়ের আগে একবার চালিয়ে দেখুন কোনো ভুল নেই
```

## Vercel-এ ডিপ্লয়

- GitHub `kamalhossan/lendenhisabwebsite`-এ পুশ করলেই Vercel নিজে বিল্ড করে।
- Vercel → Project → Settings → Build and Deployment → **Framework Preset: Next.js** (আগে "Other" ছিল)। Build Command / Output Directory খালি (ডিফল্ট) রাখুন।
- ডোমেইন `www.lendenhisab.com` আগের মতোই থাকে।

## যা বদলাতে হবে / মনে রাখার বিষয়

- **দাম ও প্ল্যান (২০ নভেম্বর ২০২৬):** একটাই পেইড প্ল্যান — ১ মাস ৳৫৯, ৩ মাস ৳১৬৫, ৬ মাস ৳২৯৯ (১৫% ছাড়), ১২ মাস ৳৫৪৯ (২২% ছাড়), প্রতিযোগীর চেয়ে ~২৫% কম। সব `app/plans/plans-data.js`-এ (`DURATIONS`, সুবিধার তালিকা, তুলনা, প্রশ্ন)। হোমের দাম অংশে "৳৫৯ থেকে" লেখাও মিলিয়ে বদলাতে হবে (`app/page.js`)।
- **বিকাশ নম্বর:** `plans-data.js`-এ `BKASH_NUMBER` (এখনো `01XXXXXXXXX` — আসল নম্বর বসাতে হবে)। Bank Asia-র Bangla QR এলে সেখানে QR ছবি বসবে।
- **WhatsApp:** পেমেন্টের মেসেজ যায় `WHATSAPP_NUMBER` (8801537544645)-এ; মেসেজে মেয়াদ, টাকা, দোকান কোড, TrxID, পাঠানোর নম্বর থাকে। মালিক মিলিয়ে অ্যাডমিন প্যানেল থেকে প্ল্যান চালু করেন।
- **Play নিয়ম:** Play-এর অ্যাপ থেকে `/plans/`-এর লিংক বা পেমেন্টের নির্দেশনা দেওয়া যাবে না; ইউজারকে অ্যাপের বাইরে (ফেসবুক, WhatsApp, ফোন) থেকে জানাতে হবে।
- **প্ল্যানের সুবিধা** অ্যাপের প্ল্যান পাতার (`app/plans.tsx`) সঙ্গে মিলিয়ে রাখা।
- **ডাউনলোড বোতাম:** `app/page.js`-এর শেষে (`#download`), একটাই বোতাম "Google Play থেকে ডাউনলোড করুন" → `https://play.google.com/store/apps/details?id=com.kamalhossan.lendenhisab`। GitHub APK লিংক আর নেই (২১ নভেম্বর ২০২৬)।
  - Google Play বোতাম এখনো "শিগগির"; প্রকাশ হলে `href="#"`-এর জায়গায় স্টোরের লিংক দিন আর `aria-disabled="true"` তুলে দিন।
- **যোগাযোগের ইমেইল:** `support@lendenhisab.com` (Namecheap forwarding → মালিকের Gmail)।
- **গোপনীয়তা নীতি:** অ্যাপে নতুন ধরনের তথ্য রাখা শুরু করলে `app/privacy/page.js` তারিখসহ হালনাগাদ। একই লেখা অ্যাপ প্রজেক্টের `store/privacy/index.html`-এও আছে।
- `og:image` এখন `metadataBase` দিয়ে পূর্ণ ঠিকানায় যায় (Facebook শেয়ারে লোগো দেখায়)।
