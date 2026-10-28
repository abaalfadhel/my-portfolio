import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Digital Forge | Personal Portfolio', template: '%s | Digital Forge' }, description: 'A personal portfolio for software engineering, AI experiments, and research.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="ar"><body>{children}</body></html>; }
