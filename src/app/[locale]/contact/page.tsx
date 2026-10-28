import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import { getCopy,isLocale } from '@/lib/i18n';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;return {title:locale==='en'?'Contact':'تواصل'};}
export default async function ContactPage({params}:{params:Promise<{locale:string}>}){const {locale:raw}=await params;if(!isLocale(raw))notFound();const t=getCopy(raw);return <div className="page-shell"><header className="inner-hero"><p className="eyebrow">CONTACT / COLLABORATE</p><h1>{t.contactTitle}</h1><p>{t.contactText}</p></header><section className="content-section"><div className="contact-panel"><ContactForm locale={raw}/></div></section></div>}
