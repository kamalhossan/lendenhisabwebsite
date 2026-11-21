import PlanPicker from "./PlanPicker";
import { COMPARE_ROWS, PLAN_FAQ } from "./plans-data";

/**
 * প্ল্যান ও দাম পাতা (/plans/)।
 * ⚠ Play Store-এর অ্যাপ থেকে এই পাতার লিংক দেওয়া যাবে না (Play payments policy) —
 *    ইউজারকে ফেসবুক/WhatsApp/ফোনে জানাতে হবে।
 */
export const metadata = {
  title: "প্ল্যান ও দাম",
  description:
    "লেনদেন হিসাবের ফ্রি ও পেইড প্ল্যান। পেইড প্ল্যান মাসে ৳৫৯ থেকে — যত খুশি ক্রেতা, একাধিক দোকান, কর্মচারী, অটো ব্যাকআপ। বিকাশে পেমেন্ট করে WhatsApp-এ জানান।",
  openGraph: {
    title: "প্ল্যান ও দাম — লেনদেন হিসাব",
    description: "পেইড প্ল্যান মাসে ৳৫৯ থেকে। ১ মাস ফ্রি ট্রায়াল।",
    images: ["/assets/logo-512.png"],
  },
};

export default function PlansPage() {
  return (
    <>
      {/* ১. শিরোনাম */}
      <section className="plans-hero">
        <div className="wrap">
          <span className="eyebrow">১ মাস ফ্রি ট্রায়াল</span>
          <h1>
            আপনার দোকানের জন্য <span className="hl">সহজ প্ল্যান</span>
          </h1>
          <p className="lead">
            ছোট দোকানের জন্য সবসময় ফ্রি। ব্যবসা বড় হলে পেইড প্ল্যান — মাসে
            মাত্র ৳৫৯ থেকে।
          </p>
        </div>
      </section>

      <PlanPicker>
        <section className="alt">
          <div className="wrap">
            <div className="sec-head">
              <h2>ফ্রি আর পেইডে পার্থক্য</h2>
            </div>
            <div className="compare card">
              <div className="crow head">
                <span>সুবিধা</span>
                <span>ফ্রি</span>
                <span>পেইড</span>
              </div>
              {COMPARE_ROWS.map(([name, free, paid]) => (
                <div className="crow" key={name}>
                  <span>{name}</span>
                  <span className={free === "—" ? "n" : undefined}>{free}</span>
                  <span className="y">{paid}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PlanPicker>

      {/* ৫. প্ল্যান নিয়ে প্রশ্ন */}
      <section className="alt" id="plan-faq">
        <div className="wrap">
          <div className="sec-head">
            <h2>প্ল্যান নিয়ে প্রশ্ন</h2>
          </div>
          <div className="faq">
            {PLAN_FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
