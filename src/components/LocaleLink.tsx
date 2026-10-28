import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';
export function LocaleLink({ locale, href, children, className }: { locale: Locale; href: string; children: ReactNode; className?: string }) {
  return <Link href={`/${locale}${href === '/' ? '' : href}`} className={className}>{children}</Link>;
}
