/** হোম পাতা: হিরো, সুবিধা, তিন ধাপ, দাম (সংক্ষেপে → /plans/), সাধারণ প্রশ্ন, ডাউনলোড। */
export default function Page() {
  return (
    <>

  <section className="hero">
    <div className="wrap">
      <div>
        <span className="eyebrow">দোকানদারদের জন্য, বাংলায়</span>
        <h1>কাগজের খাতা ছাড়ুন,<br /><span className="hl">বাকির হিসাব ফোনে রাখুন</span></h1>
        <p className="lead">কোন ক্রেতার কাছে কত পাওনা, সরবরাহকারীকে কত দেনা, আজ কত আদায় হলো — সব এক জায়গায়। ইন্টারনেট না থাকলেও চলে, আর এক চাপে ক্রেতাকে WhatsApp-এ হিসাব পাঠান।</p>
        <div className="cta">
          <a className="btn" href="#download">অ্যাপ ডাউনলোড করুন</a>
          <a className="btn soft" href="#features">কী কী আছে দেখুন</a>
        </div>
        <ul className="checks">
          <li>ফ্রি শুরু</li>
          <li>ইন্টারনেট ছাড়াই চলে</li>
          <li>বাংলা ও ইংরেজি</li>
        </ul>
      </div>

      <div className="phone" role="img" aria-label="অ্যাপের হোম পর্দার নমুনা: মোট পাওনা ও ক্রেতার তালিকা">
        <div className="screen">
          <div className="sbar">
            <span className="t"><img src="/assets/logo-192.png" alt="" />রহিম স্টোর</span>
            <span className="sync">● সিংক ✓</span>
          </div>
          <div className="total"><small>মোট পাওনা</small><b>৳৪৫,৮২০</b><small>৩২ জন ক্রেতা</small></div>
          <div className="prow"><span className="av">ক</span><span className="n"><b>করিম মিয়া</b><span>আজ · বাকি যোগ</span></span><span className="amt due">৳১২,৫০০</span></div>
          <div className="prow"><span className="av">স</span><span className="n"><b>সালমা বেগম</b><span>গতকাল · জমা বিকাশে</span></span><span className="amt due">৳৩,২০০</span></div>
          <div className="prow"><span className="av">জ</span><span className="n"><b>জাহিদ হাসান</b><span>২ দিন আগে · জমা</span></span><span className="amt paid">অগ্রিম ৳৫০০</span></div>
          <div className="prow"><span className="av">র</span><span className="n"><b>রফিক ট্রেডার্স</b><span>সরবরাহকারী</span></span><span className="amt due">৳৮,৭৫০</span></div>
          <div className="pbtn">+ নতুন ক্রেতা যোগ করুন</div>
        </div>
      </div>
    </div>
  </section>

  <section className="alt" id="features">
    <div className="wrap">
      <div className="sec-head">
        <h2>দোকানের হিসাবের যা যা লাগে</h2>
        <p>শুধু টাকার হিসাব — পণ্যের তালিকার ঝামেলা নেই। সহজ, দ্রুত, বাংলায়।</p>
      </div>
      <div className="grid">
        <div className="card">
          <div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5a7 7 0 0 1 14 0" /><path d="M8.5 15.5a3.5 3.5 0 0 1 7 0" /><circle cx="12" cy="19" r="1" /><path d="M3 3l18 18" /></svg></div>
          <h3>ইন্টারনেট ছাড়াই চলে</h3>
          <p>সব হিসাব আগে ফোনে থাকে। নেট না থাকলেও এন্ট্রি দিন, পরে নিজে থেকে সিংক হবে।</p>
        </div>
        <div className="card">
          <div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 4v16M7 4L3.5 7.5M7 4l3.5 3.5M17 20V4M17 20l-3.5-3.5M17 20l3.5-3.5" /></svg></div>
          <h3>বাকি ও জমা এক জায়গায়</h3>
          <p>ক্রেতা ও সরবরাহকারী আলাদা। নগদ, বিকাশ বা ব্যাংকে জমা, অগ্রিম — প্রতিটি এন্ট্রিতে তারিখ ও সময়।</p>
        </div>
        <div className="card">
          <div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" /></svg></div>
          <h3>WhatsApp-এ হিসাব পাঠান</h3>
          <p>এন্ট্রির পর এক চাপে ক্রেতাকে WhatsApp বা SMS-এ বাকির হিসাব। ভদ্র বা জরুরি, দুই ধরনের বার্তা।</p>
        </div>
        <div className="card">
          <div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" /></svg></div>
          <h3>পরিশোধের রিমাইন্ডার</h3>
          <p>ক্রেতা কবে টাকা দেবেন লিখে রাখুন; সেদিন ফোনে মনে করিয়ে দেবে। দেরি হলে আলাদা করে দেখায়।</p>
        </div>
        <div className="card">
          <div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="11" width="4" height="9" rx="1" /><rect x="10" y="4" width="4" height="16" rx="1" /><rect x="16" y="8" width="4" height="12" rx="1" /></svg></div>
          <h3>প্রতিবেদন ও স্টেটমেন্ট</h3>
          <p>মোট বাকি, আজকের আদায়, গত ৭ দিন, কার বাকি পুরোনো। ক্রেতার স্টেটমেন্ট PDF করে পাঠান।</p>
        </div>
        <div className="card">
          <div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14c2.5 0 4.5 1.7 4.5 4.5" /></svg></div>
          <h3>কর্মচারী ও একাধিক দোকান</h3>
          <p>কর্মচারীকে আলাদা লগইন দিন, কে কোন এন্ট্রি লিখেছেন দেখুন। কয়েকটি দোকানের হিসাব আলাদা রাখুন।</p>
        </div>
      </div>
    </div>
  </section>

  <section id="how">
    <div className="wrap">
      <div className="sec-head">
        <h2>তিন ধাপে শুরু</h2>
        <p>অ্যাকাউন্ট ছাড়াই ব্যবহার শুরু করা যায়; পরে চাইলে সিংক চালু করুন।</p>
      </div>
      <div className="steps">
        <div className="card step">
          <h3>ক্রেতা যোগ করুন</h3>
          <p>নাম আর মোবাইল নম্বর লিখুন, অথবা ফোনের কন্টাক্ট থেকে বেছে নিন।</p>
        </div>
        <div className="card step">
          <h3>বাকি বা জমা লিখুন</h3>
          <p>টাকার অঙ্ক দিয়ে সংরক্ষণ করুন। চাইলে সঙ্গে সঙ্গে ক্রেতাকে মেসেজ পাঠান।</p>
        </div>
        <div className="card step">
          <h3>হিসাব থাকুক নিরাপদ</h3>
          <p>অ্যাকাউন্ট খুলে সিংক চালু করলে ফোন হারালেও নতুন ফোনে লগইন করে সব ফিরে পাবেন।</p>
        </div>
      </div>
    </div>
  </section>

  <section className="alt" id="pricing">
    <div className="wrap">
      <div className="sec-head">
        <h2>দাম</h2>
        <p>ছোট দোকানের জন্য ফ্রি। ব্যবসা বড় হলে পেইড প্ল্যান।</p>
      </div>
      <div className="plans">
        <div className="card plan">
          <h3>ফ্রি</h3>
          <div className="price">সবসময় ফ্রি</div>
          <ul>
            <li>৫০ জন পর্যন্ত ক্রেতা ও সরবরাহকারী</li>
            <li>১টি দোকান</li>
            <li>বাকি, জমা, মেসেজ, রিমাইন্ডার</li>
            <li>প্রতিবেদন ও স্টেটমেন্ট</li>
            <li>সিংক, আর যতবার ইচ্ছা PDF ব্যাকআপ</li>
          </ul>
          <a className="btn soft" href="#download">ফ্রি শুরু করুন</a>
        </div>
        <div className="card plan pro">
          <h3>পেইড <span className="tag">ব্যবসার জন্য</span></h3>
          <div className="from">মাসে মাত্র <b>৳৫৯</b> থেকে</div>
          <ul>
            <li>যত খুশি ক্রেতা</li>
            <li>একাধিক দোকান</li>
            <li>কর্মচারীর আলাদা লগইন</li>
            <li>কর্মচারীর বাতিলের অনুরোধে মালিকের অনুমোদন</li>
            <li>অটো ব্যাকআপ, গুগল ড্রাইভেও থাকে</li>
            <li>এন্ট্রিতে একাধিক ছবি ও ফাইল</li>
            <li>ফ্রি প্ল্যানের সব সুবিধা</li>
          </ul>
          <a className="btn" href="/plans/">প্ল্যান ও দাম দেখুন</a>
        </div>
      </div>
    </div>
  </section>

  <section id="faq">
    <div className="wrap">
      <div className="sec-head">
        <h2>সাধারণ প্রশ্ন</h2>
      </div>
      <div className="faq">
        <details>
          <summary>ইন্টারনেট ছাড়া কি সত্যিই চলে?</summary>
          <p>হ্যাঁ। সব হিসাব আগে আপনার ফোনেই থাকে, তাই নেট ছাড়াই এন্ট্রি দেওয়া, হিসাব দেখা সব করা যায়। অ্যাকাউন্টে সিংক চালু থাকলে নেট এলে নিজে থেকে সার্ভারে চলে যায়।</p>
        </details>
        <details>
          <summary>ফোন হারালে বা বদলালে কি হিসাব হারাবে?</summary>
          <p>অ্যাকাউন্ট খুলে সিংক চালু করলে হারাবে না — নতুন ফোনে একই ইমেইলে লগইন করলেই সব হিসাব ফিরে আসে। সিংক ছাড়া ব্যবহার করলে হিসাব শুধু ওই ফোনেই থাকে।</p>
        </details>
        <details>
          <summary>ভুল এন্ট্রি দিলে কী করব?</summary>
          <p>এন্ট্রি মোছা যায় না, কিন্তু কারণ লিখে বাতিল করা যায়। এতে হিসাবে কোনো কারচুপির সুযোগ থাকে না, আর কী বাতিল হয়েছে তা পরেও দেখা যায়।</p>
        </details>
        <details>
          <summary>কর্মচারী কি আমার সব হিসাব বদলাতে পারবে?</summary>
          <p>কর্মচারী এন্ট্রি দিতে পারেন, কিন্তু বাতিল করতে চাইলে মালিকের কাছে অনুরোধ পাঠাতে হয়। কোন এন্ট্রি কে লিখেছেন তাও দেখা যায়। মালিক যেকোনো সময় কর্মচারীর অ্যাকাউন্ট বন্ধ করতে পারেন।</p>
        </details>
        <details>
          <summary>আমার তথ্য কি নিরাপদ?</summary>
          <p>আপনার দোকানের হিসাব শুধু আপনি আর আপনার কর্মচারীরা দেখতে পান। আমরা কারো তথ্য বিক্রি করি না, বিজ্ঞাপনও নেই। বিস্তারিত <a href="/privacy/">গোপনীয়তা নীতি</a> ও <a href="/delete-account/">অ্যাকাউন্ট মোছা</a> পাতায়।</p>
        </details>
        <details>
          <summary>ইমেইল বা পাসওয়ার্ড ভুলে গেলে?</summary>
          <p>ইমেইল মনে থাকলে ইমেইলে কোড নিয়ে নতুন পাসওয়ার্ড দিন। ইমেইল মনে না থাকলে অ্যাপে আগে থেকে দেওয়া মোবাইল নম্বর দিয়ে অ্যাকাউন্ট খুঁজে পাসওয়ার্ড বদলাতে পারবেন।</p>
        </details>
      </div>
    </div>
  </section>

  <section id="download" style={{ paddingTop: '8px' }}>
    <div className="wrap">
      <div className="download">
        <div>
          <h2>আজই হিসাব রাখা শুরু করুন</h2>
          <p>Android ফোনের জন্য। Google Play থেকে ফ্রি ডাউনলোড করুন।</p>
        </div>
        <div className="cta">
          <a className="btn" href="https://play.google.com/store/apps/details?id=com.kamalhossan.lendenhisab" target="_blank" rel="noopener">Google Play থেকে ডাউনলোড করুন</a>
        </div>
      </div>
    </div>
  </section>


    </>
  );
}
