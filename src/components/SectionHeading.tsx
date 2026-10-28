import type { ReactNode } from 'react';

export default function SectionHeading({ eyebrow, title, description, link }: { eyebrow:string; title:string; description?:string; link?:ReactNode }) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description&&<p className="section-description">{description}</p>}</div>{link}</div>; }
