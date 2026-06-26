"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";

function MaterialRing() {
  const ring = useRef(null);
  const base = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ring.current) {
      ring.current.rotation.y = time * 0.24;
      ring.current.rotation.z = Math.sin(time * 0.55) * 0.035;
    }
    if (base.current) {
      base.current.rotation.y = -time * 0.16;
    }
  });

  return (
    <group>
      <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.22}>
        <mesh ref={ring} position={[0, 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.34, 0.075, 32, 144]} />
          <meshStandardMaterial color="#191512" metalness={0.72} roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.08, 0.012, 16, 128]} />
          <meshStandardMaterial color="#c59b63" emissive="#2b1e0d" metalness={0.9} roughness={0.18} />
        </mesh>
        <mesh position={[0, 0.28, 0.02]}>
          <circleGeometry args={[0.64, 72]} />
          <meshStandardMaterial color="#0d1115" emissive="#09111b" emissiveIntensity={0.45} roughness={0.32} />
        </mesh>
      </Float>
      <mesh ref={base} position={[0, -0.92, 0]} scale={[1.18, 0.18, 0.52]}>
        <cylinderGeometry args={[1, 1, 1, 80]} />
        <meshStandardMaterial color="#14120f" metalness={0.58} roughness={0.24} />
      </mesh>
      <mesh position={[0, -0.76, 0]} scale={[1.02, 0.04, 0.38]}>
        <cylinderGeometry args={[1, 1, 1, 80]} />
        <meshStandardMaterial color="#c59b63" emissive="#281908" metalness={0.82} roughness={0.21} />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  if (process.env.NODE_ENV === "test") {
    return <div data-testid="hero-canvas" className="hero-canvas-fallback" />;
  }

  return (
    <Canvas className="hero-canvas" dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0.05, 5.15]} fov={35} />
      <ambientLight intensity={1.8} />
      <directionalLight position={[3, 3, 4]} intensity={3.2} />
      <pointLight position={[-2.4, 1.4, 2]} intensity={1.8} color="#8aa8c4" />
      <MaterialRing />
      <Environment preset="city" />
    </Canvas>
  );
}
