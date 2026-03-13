"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors, config] = useMemo(() => {
    const starCount = 3000;
    const pos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    // Mixing star colors: some gold, some mist/ectoplasmic blue
    const colorArray = new Float32Array(starCount * 3);
    const colorGold = new THREE.Color("#d4af37");
    const colorBlue = new THREE.Color("#00d4ff");
    const colorWhite = new THREE.Color("#ffffff");
    
    for (let i = 0; i < starCount; i++) {
      const rand = Math.random();
      let color = colorWhite;
      if (rand > 0.8) color = colorGold;
      else if (rand > 0.6) color = colorBlue;
      
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }
    
    return [pos, colorArray, { size: 0.012, transparent: true, opacity: 0.8 }];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial {...config} vertexColors sizeAttenuation={true} depthWrite={false} />
    </points>
  );
}

export default function BackgroundStars() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(ellipse_at_center,_#1a0b2e_0%,_#0e0e0e_100%)]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={["#0e0e0e", 1, 3]} />
        <Stars />
      </Canvas>
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
    </div>
  );
}
