import Link from 'next/link';

export const metadata = { title: 'পাতা পাওয়া যায়নি' };

/** ভুল ঠিকানায় এই পাতা দেখায় (আগের 404.html)। */
export default function NotFound() {
  return (
    <div className="wrap doc" style={{ textAlign: 'center', padding: '80px 0' }}>
      <h1>পাতাটি পাওয়া যায়নি</h1>
      <p className="muted">ঠিকানাটা আরেকবার দেখুন, অথবা হোম পাতায় ফিরে যান।</p>
      <p><Link className="btn" href="/">হোম পাতা</Link></p>
    </div>
  );
}
