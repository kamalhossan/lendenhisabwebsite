import Link from 'next/link';

/** সব পাতার নিচের অংশ। */
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© ২০২৬ লেনদেন হিসাব</span>
        <nav aria-label="ফুটার">
          <Link href="/plans/">প্ল্যান</Link>
          <Link href="/privacy/">গোপনীয়তা নীতি</Link>
          <Link href="/delete-account/">অ্যাকাউন্ট মোছা</Link>
          <a href="mailto:support@lendenhisab.com">যোগাযোগ</a>
        </nav>
      </div>
    </footer>
  );
}
