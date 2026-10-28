import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/content/articles';
import { getCopy,isLocale,locales } from '@/lib/i18n';
export function generateStaticParams(){return locales.flatMap(locale=>articles.map(article=>({locale,slug:article.slug})));}
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{const {locale,slug}=await params;if(!isLocale(locale))return {};const article=articles.find(a=>a.slug===slug);return article?{title:article.title[locale],description:article.excerpt[locale]}:{};}
export default async function ArticlePage({params}:{params:Promise<{locale:string;slug:string}>}){const {locale:raw,slug}=await params;if(!isLocale(raw))notFound();const article=articles.find(a=>a.slug===slug);if(!article)notFound();const t=getCopy(raw),en=raw==='en';return <div className="page-shell"><article className="project-detail"><Link href={`/${raw}/knowledge`} className="back-link">← {t.back}</Link><header className="detail-hero"><p className="eyebrow">{article.category.toUpperCase()} / {article.readingTime} {en?'MIN READ':'دقائق قراءة'}</p><h1>{article.title[en?'en':'ar']}</h1><p>{article.excerpt[en?'en':'ar']}</p><time className="small-note" dateTime={article.date}>{article.date}</time></header>{article.body[en?'en':'ar'].map((paragraph,i)=><section className="detail-block" key={i}><p>{paragraph}</p></section>)}<p className="small-note" style={{marginTop:24}}>{t.note}: {t.sampleNote}</p></article></div>}
