import Link from 'next/link';
import { getCopy, type Locale } from '@/lib/i18n';
export default function Navbar({ locale }: { locale: Locale }) {
 const t = getCopy(locale); const en = locale === 'en';
 const links = [{ href:'', label:t.nav.home },{href:'/about',label:t.nav.about},{href:'/projects',label:t.nav.projects},{href:'/lab',label:t.nav.lab},{href:'/knowledge',label:t.nav.knowledge},{href:'/contact',label:t.nav.contact}];
 return <header className="site-header"><div className="nav-wrap"><Link href={`/${locale}`} className="brand" aria-label="Digital Forge home"><span className="brand-mark">龍</span><span className="brand-name">DIGITAL<span>FORGE</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(item=><Link key={item.href} href={`/${locale}${item.href}`}>{item.label}</Link>)}</nav><div className="nav-actions"><Link className="locale-switch" href={`/${en?'ar':'en'}`} aria-label={en?'Switch to Arabic':'Switch to English'}>{en?'عربي':'EN'} <span>↗</span></Link><Link className="nav-contact" href={`/${locale}/contact`}>{t.contactCta}<span>↗</span></Link></div></div></header>;
}
