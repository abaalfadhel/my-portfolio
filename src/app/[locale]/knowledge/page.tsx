import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/content/articles';
import { getCopy,isLocale } from '@/lib/i18n';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;return {title:locale==='en'?'Knowledge library':'المكتبة المعرفية'};}
export default async function KnowledgePage({params}:{params:Promise<{locale:string}>}){const {locale:raw}=await params;if(!isLocale(raw))notFound();const t=getCopy(raw);return <div className="page-shell"><header className="inner-hero"><p className="eyebrow">FIELD NOTES / RESEARCH</p><h1>{t.knowledgePageTitle}</h1><p>{t.knowledgePageText}</p></header><section className="content-section"><div className="article-grid">{articles.map(a=><ArticleCard key={a.slug} article={a} locale={raw}/>)}</div><p className="small-note" style={{marginTop:22}}>{t.sampleNote}</p></section></div>}
