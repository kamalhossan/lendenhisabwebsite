/** অ্যাকাউন্ট ও তথ্য মোছার নিয়ম — Play Data safety ফর্মে এই পাতার লিংক। */
export const metadata = {
  title: 'অ্যাকাউন্ট মোছা | Delete account',
  description: 'লেনদেন হিসাব অ্যাপের অ্যাকাউন্ট ও সব তথ্য মোছার নিয়ম (How to delete your Lenden Hisab account).',
};
export default function Page() {
  return (
    <>

<div className="wrap doc">
  <h1>অ্যাকাউন্ট ও সব তথ্য মোছা</h1>
  <div className="muted">লেনদেন হিসাব · <a href="#english">English below</a></div>

  <div className="card" style={{ marginTop: '16px' }}>
    <h2>কীভাবে মুছবেন</h2>
    <ol>
      <li>আপনার অ্যাকাউন্টের ইমেইল থেকে
        <a href="mailto:support@lendenhisab.com?subject=Lenden%20Hisab%20-%20account%20deletion%20request">support@lendenhisab.com</a>
        ঠিকানায় "অ্যাকাউন্ট মুছুন" লিখে পাঠান।</li>
      <li>আমরা অ্যাকাউন্টটি আপনারই কিনা মিলিয়ে দেখব।</li>
      <li>৩০ দিনের মধ্যে অ্যাকাউন্ট ও সব তথ্য মুছে আপনাকে জানানো হবে।</li>
    </ol>

    <h2>কী মোছা হয়</h2>
    <ul>
      <li>আপনার সব দোকান, ক্রেতা ও সরবরাহকারী, এন্ট্রি, প্রতিশ্রুতি।</li>
      <li>ছবি ও ফাইল (সংযুক্তি) সার্ভারের স্টোরেজ থেকে।</li>
      <li>আপনার যোগ করা কর্মচারীর অ্যাকাউন্ট (শুধু ওই দোকানের জন্য হলে)।</li>
      <li>অ্যাকাউন্টের ইমেইল, নাম, মোবাইল, প্ল্যান ও ট্রায়ালের তথ্য, পুশ টোকেন।</li>
    </ul>
    <p>
      কর্মচারী নিজের অ্যাকাউন্ট মুছলে শুধু তাঁর লগইন যায়; তাঁর লেখা এন্ট্রি দোকানে থাকে, লেখকের নাম থাকে না।
    </p>

    <h2>কী থেকে যায়</h2>
    <p>
      আপনার ফোনে থাকা হিসাব ফোনেই থাকে; সেটা মুছতে অ্যাপ আনইনস্টল করুন বা ফোনের সেটিংসে অ্যাপের ডেটা মুছুন।
      সার্ভারের ব্যাকআপ কপি থেকে তথ্য সম্পূর্ণ মুছতে সর্বোচ্চ ৩০ দিন লাগতে পারে। এটি আর ফেরানো যায় না।
    </p>
  </div>

  <div className="card" style={{ marginTop: '24px' }} id="english" lang="en">
    <h1 style={{ fontFamily: 'system-ui,sans-serif' }}>Delete your account and data</h1>
    <h2>How to delete</h2>
    <ol>
      <li>Email <a href="mailto:support@lendenhisab.com?subject=Lenden%20Hisab%20-%20account%20deletion%20request">support@lendenhisab.com</a>
        from your account email with "delete my account".</li>
      <li>We verify that the account is yours.</li>
      <li>Within 30 days the account and all data are deleted and we let you know.</li>
    </ol>
    <h2>What is deleted</h2>
    <ul>
      <li>All your shops, customers and suppliers, entries and promises.</li>
      <li>Photos and files from server storage.</li>
      <li>Staff accounts you created (when they belong only to your shops).</li>
      <li>Account email, name, mobile, plan and trial details, and push tokens.</li>
    </ul>
    <p>If a staff member deletes their own account, only their login is removed; entries they wrote stay in the shop without their name.</p>
    <h2>What remains</h2>
    <p>
      Records on your own phone stay on the phone; uninstall the app or clear its data to remove them. Server backup
      copies may take up to 30 days to disappear completely. Deletion cannot be undone.
    </p>
  </div>
</div>


    </>
  );
}
