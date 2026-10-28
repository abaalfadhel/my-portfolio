import Link from 'next/link';

export default function IndexPage() {
  return (
    <main className="page-shell not-found">
      <p className="eyebrow">DIGITAL FORGE</p>
      <h1>اختر اللغة / Choose your language</h1>
      <p>انتقل إلى النسخة العربية أو الإنجليزية من الموقع.</p>
      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <Link className="button button-primary" href="/ar/">العربية</Link>
        <Link className="button button-secondary" href="/en/">English</Link>
      </div>
    </main>
  );
}
