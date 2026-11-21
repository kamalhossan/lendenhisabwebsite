'use client';

/**
 * প্ল্যান পাতার চলমান অংশ (ব্রাউজারে চলে):
 * মেয়াদ বাছাই → দাম বদল, বিকাশ নম্বর কপি, দোকান কোড/TrxID দিয়ে WhatsApp মেসেজ তৈরি।
 */
import { useMemo, useState } from 'react';
import {
  DURATIONS, DEFAULT_MONTHS, BKASH_NUMBER, WHATSAPP_NUMBER, SUPPORT_EMAIL,
  FREE_FEATURES, PAID_FEATURES,
} from './plans-data';

/** children = মাঝখানে দেখানোর অংশ (তুলনা টেবিল), সার্ভারেই তৈরি হয় */
export default function PlanPicker({ children }) {
  const [months, setMonths] = useState(DEFAULT_MONTHS);
  const [shopCode, setShopCode] = useState('');
  const [trxId, setTrxId] = useState('');
  const [fromNumber, setFromNumber] = useState('');
  const [copied, setCopied] = useState(false);

  const plan = DURATIONS.find((d) => d.months === months);

  // WhatsApp/ইমেইলে যে মেসেজ যাবে
  const message = useMemo(
    () =>
      [
        'আসসালামু আলাইকুম, আমি লেনদেন হিসাবের পেইড প্ল্যান নিতে চাই।',
        `মেয়াদ: ${plan.label}`,
        `টাকা: ৳${plan.price}`,
        `দোকান কোড: ${shopCode.trim() || '—'}`,
        `বিকাশ TrxID: ${trxId.trim() || '—'}`,
        `যে নম্বর থেকে পাঠিয়েছি: ${fromNumber.trim() || '—'}`,
      ].join('\n'),
    [plan, shopCode, trxId, fromNumber],
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailLink = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('পেইড প্ল্যান — পেমেন্ট')}&body=${encodeURIComponent(message)}`;

  function copyNumber() {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(BKASH_NUMBER).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      {/* ২. মেয়াদ বাছাই + দুই প্ল্যানের কার্ড */}
      <section className="tight">
        <div className="wrap">
          <div className="dur" role="radiogroup" aria-label="মেয়াদ বাছাই করুন">
            {DURATIONS.map((d) => (
              <button
                key={d.months}
                type="button"
                role="radio"
                aria-checked={d.months === months}
                onClick={() => setMonths(d.months)}
              >
                {d.label} {d.off && <span className="off">{d.off}</span>}
              </button>
            ))}
          </div>

          <div className="plans">
            <div className="card plan">
              <h3>ফ্রি</h3>
              <div className="big-price">৳০ <small>সবসময়</small></div>
              <ul>{FREE_FEATURES.map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="btn soft" href="/#download">ফ্রি শুরু করুন</a>
            </div>

            <div className="card plan pro">
              <h3>পেইড <span className="tag">সবচেয়ে জনপ্রিয়</span></h3>
              <div className="big-price">৳{plan.price} <small>{plan.label}</small></div>
              <div className="per">
                মাসে ৳{plan.perMonth} {plan.save && <span className="save">{plan.save}</span>}
              </div>
              <ul>{PAID_FEATURES.map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="btn" href="#pay">এই প্ল্যান নিন</a>
            </div>
          </div>
          <p className="note">প্রথমে অ্যাপ থেকে ১ মাসের ফ্রি ট্রায়াল নিয়ে দেখুন। ভালো লাগলে তারপর কিনুন।</p>
        </div>
      </section>

      {/* ৩. তুলনা টেবিল */}
      {children}

      {/* ৪. কেনার তিন ধাপ */}
      <PaySteps
        plan={plan}
        copied={copied}
        onCopy={copyNumber}
        fields={{ shopCode, setShopCode, trxId, setTrxId, fromNumber, setFromNumber }}
        waLink={waLink}
        mailLink={mailLink}
      />
    </>
  );
}

/** বিকাশে কেনার ৩ ধাপ */
function PaySteps({ plan, copied, onCopy, fields, waLink, mailLink }) {
  return (
    <section id="pay">
      <div className="wrap">
        <div className="sec-head">
          <h2>কীভাবে কিনবেন</h2>
          <p>বিকাশে টাকা পাঠিয়ে WhatsApp-এ জানান। ২৪ ঘণ্টার মধ্যে প্ল্যান চালু হবে।</p>
        </div>

        <div className="paybox">
          <div className="card pstep">
            <span className="num">১</span>
            <div>
              <h3>বিকাশে টাকা পাঠান</h3>
              <p>বিকাশ অ্যাপে <b>Send Money</b> করে নিচের নম্বরে <b>৳{plan.price}</b> পাঠান।</p>
              <div className="bkash">
                <span className="bk-label">বিকাশ (পার্সোনাল)</span>
                <b>{BKASH_NUMBER}</b>
                <button type="button" className="btn sm soft" onClick={onCopy}>
                  {copied ? 'কপি হয়েছে ✓' : 'কপি'}
                </button>
              </div>
            </div>
          </div>

          <div className="card pstep">
            <span className="num">২</span>
            <div>
              <h3>তথ্য লিখুন</h3>
              <p>অ্যাপের সেটিংসে আপনার দোকান কোড আছে। বিকাশের মেসেজ থেকে TrxID নিন।</p>
              <div className="form">
                <label>দোকান কোড
                  <input type="text" autoComplete="off" placeholder="যেমন: RS1234"
                    value={fields.shopCode} onChange={(e) => fields.setShopCode(e.target.value)} />
                </label>
                <label>বিকাশ TrxID
                  <input type="text" autoComplete="off" placeholder="যেমন: BHK7X2M9QP"
                    value={fields.trxId} onChange={(e) => fields.setTrxId(e.target.value)} />
                </label>
                <label>যে নম্বর থেকে পাঠালেন
                  <input type="tel" inputMode="numeric" placeholder="01XXXXXXXXX"
                    value={fields.fromNumber} onChange={(e) => fields.setFromNumber(e.target.value)} />
                </label>
              </div>
            </div>
          </div>

          <div className="card pstep">
            <span className="num">৩</span>
            <div>
              <h3>WhatsApp-এ জানান</h3>
              <p>বোতামে চাপ দিলে WhatsApp খুলবে, মেসেজ লেখা থাকবে। শুধু পাঠিয়ে দিন।</p>
              <a className="btn wa" href={waLink} target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" /></svg>
                WhatsApp-এ পাঠান
              </a>
              <p className="small muted" style={{ marginTop: 8 }}>
                WhatsApp নেই? <a href={mailLink}>ইমেইলে জানান</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
