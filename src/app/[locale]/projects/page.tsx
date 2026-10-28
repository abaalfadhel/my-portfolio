import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/content/projects';
import { getCopy,isLocale } from '@/lib/i18n';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;return {title:locale==='en'?'Projects':'المشاريع'};}
export default async function ProjectsPage({params}:{params:Promise<{locale:string}>}){const {locale:raw}=await params;if(!isLocale(raw))notFound();const locale=raw,t=getCopy(locale),en=locale==='en';return <div className="page-shell"><header className="inner-hero"><p className="eyebrow">PORTFOLIO / CASE FILES</p><h1>{t.projectsTitle}</h1><p>{t.projectsText}</p></header><section className="content-section"><div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p} locale={locale} label={t.status}/>)}</div><p className="small-note" style={{marginTop:22}}>{t.sampleNote}</p><p><Link className="text-link" href={`/${locale}/contact`}>{en?'Discuss a project':'ناقش مشروعًا'} ↗</Link></p></section></div>}
