import Link from 'next/link';

/** সব পাতার উপরের মেনু। হোম পাতার অংশগুলোতে যেতে "/#..." লিংক। */
export default function Header() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand" href="/">
          <img src="/assets/logo-192.png" alt="" width="36" height="36" />
          লেনদেন হিসাব
        </Link>
        <nav className="nav-links" aria-label="প্রধান">
          <Link href="/#features">সুবিধা</Link>
          <Link href="/#how">কীভাবে চলে</Link>
          <Link href="/plans/">দাম</Link>
          <Link href="/#faq">প্রশ্ন</Link>
          <Link className="btn sm" href="/#download">ডাউনলোড</Link>
        </nav>
      </div>
    </header>
  );
}
