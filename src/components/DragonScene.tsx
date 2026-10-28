'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const DragonCanvas = dynamic(() => import('./DragonCanvas'), { ssr: false, loading: () => <DragonFallback /> });
function DragonFallback() { return <div className="dragon-fallback" aria-label="Abstract dragon emblem"><div className="dragon-orbit orbit-one"/><div className="dragon-orbit orbit-two"/><div className="dragon-core">龍</div><span className="dragon-spark spark-one"/><span className="dragon-spark spark-two"/></div>; }
export default function DragonScene() { return <div className="dragon-scene"><Suspense fallback={<DragonFallback />}><DragonCanvas /></Suspense><div className="scene-caption"><span className="status-dot"/> DIGITAL FORGE / 001</div></div>; }
