import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { Article } from '@/content/articles';
export default function ArticleCard({ article, locale }: {article:Article;locale:Locale}) { const en=locale==='en'; return <Link className="article-card" href={`/${locale}/knowledge/${article.slug}`}><div className="article-top"><span>{article.category}</span><span>{article.readingTime} {en?'min read':'دقائق قراءة'}</span></div><h3>{article.title[en?'en':'ar']}</h3><p>{article.excerpt[en?'en':'ar']}</p><div className="article-bottom"><time dateTime={article.date}>{article.date}</time><span>↗</span></div></Link>; }
