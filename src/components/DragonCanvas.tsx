'use client';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Group } from 'three';
function DragonSculpture() {
 const group = useRef<Group>(null);
 useFrame((state, delta) => { if (group.current) { group.current.rotation.y += delta * 0.12; group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05; } });
 return <group ref={group} rotation={[0.08, -0.3, -0.08]}>
  <mesh position={[0,0,0]} scale={[0.78,0.45,0.4]} castShadow><icosahedronGeometry args={[1,2]}/><meshStandardMaterial color="#211a36" metalness={0.82} roughness={0.25} emissive="#30115f" emissiveIntensity={0.45}/></mesh>
  <mesh position={[0.66,0.2,0.03]} rotation={[0,0,-0.15]} scale={[0.42,0.28,0.27]} castShadow><coneGeometry args={[0.7,1.2,5]}/><meshStandardMaterial color="#32204e" metalness={0.78} roughness={0.22}/></mesh>
  <mesh position={[0.93,0.23,0.16]} rotation={[0,0,-Math.PI/2]} scale={[0.22,0.13,0.16]} castShadow><coneGeometry args={[0.8,1.1,5]}/><meshStandardMaterial color="#5b2b88" metalness={0.7} roughness={0.25}/></mesh>
  <mesh position={[0.58,0.43,0.02]} rotation={[0,0,-0.55]} scale={[0.09,0.3,0.1]}><coneGeometry args={[0.8,1,5]}/><meshStandardMaterial color="#a78bfa" metalness={0.65} roughness={0.2}/></mesh>
  <mesh position={[0.46,0.42,-0.12]} rotation={[0,0,-0.65]} scale={[0.07,0.23,0.08]}><coneGeometry args={[0.8,1,5]}/><meshStandardMaterial color="#7c3aed" metalness={0.65} roughness={0.2}/></mesh>
  <mesh position={[-0.35,0.48,-0.08]} rotation={[0.1,0,0.55]} scale={[0.58,0.08,0.32]} castShadow><coneGeometry args={[1,1.3,3]}/><meshStandardMaterial color="#20152f" metalness={0.8} roughness={0.3} side={2}/></mesh>
  <mesh position={[-0.35,0.42,0.12]} rotation={[-0.1,0,-0.55]} scale={[0.5,0.07,0.28]} castShadow><coneGeometry args={[1,1.2,3]}/><meshStandardMaterial color="#39205b" metalness={0.75} roughness={0.3} side={2}/></mesh>
  <mesh position={[-0.83,-0.08,0]} rotation={[0,0,-1.15]} scale={[0.42,0.12,0.13]}><coneGeometry args={[0.6,1.6,5]}/><meshStandardMaterial color="#21182f" metalness={0.8} roughness={0.3}/></mesh>
  <mesh position={[0.83,0.29,0.27]}><sphereGeometry args={[0.035,12,12]}/><meshBasicMaterial color="#a5f3fc"/></mesh>
 </group>;
}
export default function DragonCanvas() { return <Canvas camera={{ position:[0,0,3.4], fov:38 }} dpr={[1,1.5]} gl={{ alpha:true, antialias:true }}><ambientLight intensity={0.8}/><directionalLight position={[2,3,4]} intensity={2.1} color="#c4b5fd"/><pointLight position={[-2,-1,2]} intensity={18} color="#7c3aed"/><pointLight position={[1,1,-2]} intensity={10} color="#38bdf8"/><Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.2}><DragonSculpture/></Float><ContactShadows position={[0,-0.9,0]} opacity={0.4} scale={3.5} blur={2.5}/><Environment preset="night"/></Canvas>; }
