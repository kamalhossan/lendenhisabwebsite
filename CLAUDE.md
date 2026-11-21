# CLAUDE.md — লেনদেন হিসাব ওয়েবসাইট

লাইভ: https://www.lendenhisab.com (গোপনীয়তা নীতি `/privacy/`, অ্যাকাউন্ট মোছা `/delete-account/`)। মালিক কামাল হোসেন; সব উত্তর **বাংলায়**।
সঙ্গী প্রজেক্ট: অ্যাপ `D:\Personal\লেনদেন হিসাব`, অ্যাডমিন `D:\Personal\LendenHisab-Admin`।

## ১. কী এটা
- অ্যাপের পাবলিক পরিচিতি সাইট + প্ল্যান ও দাম + Play/APKPure-এর জন্য **গোপনীয়তা নীতি** ও **অ্যাকাউন্ট মোছার নিয়ম** পাতা। **২০ নভেম্বর ২০২৬ থেকে Next.js 15 (App Router, JavaScript, Tailwind নেই)** — আগে শুধু HTML+CSS ছিল। সব পাতা স্ট্যাটিক; Vercel Framework Preset: **Next.js**।
- **অ্যাডমিন প্যানেলের সঙ্গে কোনো সম্পর্ক নেই; প্যানেলের ঠিকানা/তথ্য এখানে কোথাও থাকবে না।**
- ডোমেইন `lendenhisab.com` Namecheap-এ (হোস্টিং নেই; Vercel-এর DNS রেকর্ড বসানো); সহায়তা ইমেইল `support@lendenhisab.com` (Namecheap forwarding → মালিকের Gmail)।

## ২. ফাইল
```
app/layout.js            সব পাতার কাঠামো: metadata (metadataBase = https://www.lendenhisab.com), Noto Sans Bengali <link>, Header + Footer
app/page.js              হোম: সুবিধা, তিন ধাপে শুরু, দাম (সংক্ষেপে → /plans/), সাধারণ প্রশ্ন, ডাউনলোড
app/plans/page.js        প্ল্যান ও দাম (সার্ভার): শিরোনাম, তুলনা টেবিল, প্রশ্ন
app/plans/PlanPicker.js  'use client': মেয়াদ চিপ → দাম, বিকাশ নম্বর কপি, দোকান কোড/TrxID → WhatsApp/ইমেইল মেসেজ
app/plans/plans-data.js  দাম, বিকাশ নম্বর, WhatsApp নম্বর, সুবিধা, তুলনা, প্রশ্ন — সব এক জায়গায়
app/privacy/page.js      গোপনীয়তা নীতি (বাংলা + ইংরেজি)
app/delete-account/page.js  অ্যাকাউন্ট মোছার নিয়ম
app/not-found.js         ৪০৪
app/globals.css          সব ডিজাইন (আগের assets/style.css)
components/Header.js, Footer.js
public/                  assets/logo-*.png, favicon.*, apple-touch-icon.png, robots.txt
next.config.mjs          trailingSlash: true (পুরোনো /privacy/ ঠিকানা অক্ষত), নিরাপত্তা হেডার, /assets ক্যাশ ৭ দিন
```
পুরোনো স্ট্যাটিক ফাইল (index.html, 404.html, plans/, privacy/, delete-account/, assets/, root-এর favicon/robots, vercel.json) আর লাগে না — ইউজারকে মুছতে বলা হয়েছে।

## ৩. ডিজাইন
- অ্যাপের মতো সবুজ `#057a55`, ফন্ট Noto Sans Bengali, মোবাইলে এক কলাম। হোমের ফোনের ছবি আসলে HTML দিয়ে আঁকা নমুনা। ক্লাসের নাম আগের CSS-এর মতোই (`className`)।
- ক্যানভাসে "লেনদেন হিসাব — ওয়েবসাইট ডিজাইন" আছে; পাতা বদলালে ক্যানভাসও মিলিয়ে রাখা।
- হালকা রাখা: ছবি/ফন্ট ছোট, কোনো ভারী JS বা অ্যানিমেশন নয় (ইউজাররা লো-এন্ড ফোনে, ধীর নেটে)।

## ৪. ডাউনলোড
- ২১ নভেম্বর ২০২৬ থেকে ডাউনলোডের **একটাই বোতাম: Google Play** (`app/page.js`, `#download`) → `https://play.google.com/store/apps/details?id=com.kamalhossan.lendenhisab` (নতুন ট্যাবে)। GitHub APK লিংক ও "অজানা উৎস" নির্দেশ সরানো হয়েছে (মালিকের সিদ্ধান্ত)। পুরোনো GitHub Release ফাইলটা রিপোতে থাকলেও সাইটে আর লিংক নেই।
- অ্যাপ APKPure-এও আছে (`com.kamalhossan.lendenhisab`), তবে সাইটে শুধু Play।

## ৫. কনটেন্ট নিয়ম
- দাম (২০ নভেম্বর ২০২৬): একটাই পেইড প্ল্যান — ১ মাস ৳৫৯, ৩ মাস ৳১৬৫, ৬ মাস ৳২৯৯, ১২ মাস ৳৫৪৯ (প্রতিযোগীর চেয়ে ~২৫% কম); বড় ব্যবসার জন্য পরে প্ল্যান বদলাতে পারে। পেমেন্ট: পার্সোনাল বিকাশে Send Money → WhatsApp (01537544645)-এ দোকান কোড + TrxID → মালিক অ্যাডমিন থেকে চালু; Bangla QR (Bank Asia) এলে নম্বরের জায়গায় QR। বিকাশ নম্বর `app/plans/plans-data.js`-এর `BKASH_NUMBER`-এ (এখনো খালি `01XXXXXXXXX`)। Play অ্যাপ থেকে এই পাতায় লিংক নয় (Play payments policy); ওয়েবসাইটে দেখানো ঠিক আছে। পেইডের সুবিধা অ্যাপের সঙ্গে মেলাতে হবে: আনলিমিটেড ক্রেতা-সরবরাহকারী, একাধিক দোকান, কর্মচারী অ্যাকাউন্ট, ফাইল সংযুক্তি ও বাড়তি ছবি, **অটো ব্যাকআপ ও গুগল ড্রাইভে রাখা**; ফ্রি = ৫০ ক্রেতা+সরবরাহকারী, ১ দোকান, প্রতি এন্ট্রিতে ১ ছবি, হাতে PDF ব্যাকআপ যতবার ইচ্ছা (১৪ নভেম্বর ২০২৬ থেকে); ১ মাসের ফ্রি ট্রায়াল।
- **গোপনীয়তা নীতিতে ব্যবসায়িক লজিক বিস্তারিত লেখা নয়** (ইউজারের সিদ্ধান্ত); নীতির শব্দ পরের আপডেটে সংশোধনের কথা আছে। অ্যাপে নতুন ধরনের তথ্য (ছবি, সংযুক্তি, ডিভাইস মডেল/OS সংস্করণ, Google লগইন, মোবাইল নম্বর, পুশ টোকেন) রাখা শুরু হলে নীতি তারিখসহ হালনাগাদ। একই লেখা অ্যাপ প্রজেক্টের `store/privacy/index.html`-এও রাখতে হয়।
- অ্যাকাউন্ট মোছার নিয়ম: `support@lendenhisab.com`-এ অনুরোধ → মালিক Supabase SQL (`delete_user_everything`) ও Storage মোছা চালান।
- `og:image` ঠিক করা (পূর্ণ ঠিকানা দিয়ে) পরের কাজ।

## ৬. চালানো ও ডিপ্লয়
- লোকাল: `npm install` (প্রথমবার) → `npm run dev` → http://localhost:3000; ডিপ্লয়ের আগে `npm run build`।
- ডিপ্লয়: GitHub `kamalhossan/lendenhisabwebsite`-এ পুশ → Vercel অটো ডিপ্লয়। **পুশ/ডিপ্লয় ইউজার নিজে করেন** (বলা ছাড়া নয়)।

## ৭. কাজের পদ্ধতি
1. পরিবর্তনের পর README.md-ও মিলিয়ে রাখা (ইউজারের স্থায়ী নির্দেশ: সবকিছু README-তে)।
2. ইউজারের লোকাল ফাইল না জানিয়ে ওভাররাইট নয়; ডিভাইসের বর্তমান ফাইল দেখে diff করে বদলানো।
3. ডিভাইসে পৌঁছানো: stage → বদল → `SendUserFile` → `device_commit_files` (`expectedMtimeMs` গার্ড)।
4. `npm run build` সফল ও মোবাইলে যাচাই (Playwright স্ক্রিনশট) করে তবেই দেওয়া।
5. কোনো গোপন তথ্য (কী, পাসওয়ার্ড, অ্যাডমিন URL) এই রিপোতে নয় — রিপো public।
