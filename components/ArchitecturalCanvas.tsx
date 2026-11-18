'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ArchitecturalStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Smooth lerping to mouse position
    const targetY = state.pointer.x * 0.4 + state.clock.elapsedTime * 0.08;
    const targetX = -state.pointer.y * 0.25;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);

    if (coreRef.current) {
      coreRef.current.rotation.y -= 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Main Central Tower */}
        <mesh
          ref={coreRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[2.2, 4.8, 2.2]} />
          <meshStandardMaterial
            color={hovered ? '#D4AF37' : '#141A24'}
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {/* Outer Architectural Wireframe Lattice */}
        <mesh scale={[1.04, 1.04, 1.04]}>
          <boxGeometry args={[2.2, 4.8, 2.2]} />
          <meshBasicMaterial
            color="#D4AF37"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Secondary Terraced Blocks (Modernist Architectural Stepping) */}
        <mesh position={[1.4, -0.9, 0.8]}>
          <boxGeometry args={[1.5, 3.0, 1.5]} />
          <meshStandardMaterial
            color="#1F2937"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[1.4, -0.9, 0.8]} scale={[1.04, 1.04, 1.04]}>
          <boxGeometry args={[1.5, 3.0, 1.5]} />
          <meshBasicMaterial
            color="#C59B27"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>

        <mesh position={[-1.3, -1.5, -0.6]}>
          <boxGeometry args={[1.6, 2.2, 1.6]} />
          <meshStandardMaterial
            color="#111827"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[-1.3, -1.5, -0.6]} scale={[1.04, 1.04, 1.04]}>
          <boxGeometry args={[1.6, 2.2, 1.6]} />
          <meshBasicMaterial
            color="#D4AF37"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Ground grid disc indicating construction site */}
        <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.5, 4.5, 32]} />
          <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>
    </group>
  );
}

export default function ArchitecturalCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0.5, 9]} fov={40} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 20, 15]} intensity={1.8} color="#FFFBF0" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#4A6572" />
        <pointLight position={[0, 5, 2]} intensity={1.2} color="#D4AF37" distance={10} />
        
        <Stars radius={50} depth={30} count={600} factor={3} saturation={0.5} fade speed={1} />
        <ArchitecturalStructure />
      </Canvas>
    </div>
  );
}
