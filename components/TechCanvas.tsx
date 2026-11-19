'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function AICoreSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetY = state.pointer.x * 0.4 + state.clock.elapsedTime * 0.1;
    const targetX = -state.pointer.y * 0.25;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y += 0.008;
      innerSphereRef.current.rotation.x += 0.004;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.01;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += 0.008;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
        {/* Core AI Sphere - Soft Iridescent Crystal */}
        <mesh
          ref={innerSphereRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1.75, 2]} />
          <meshPhysicalMaterial
            color={hovered ? '#4385F5' : '#635BFF'}
            emissive={hovered ? '#20B8D5' : '#635BFF'}
            emissiveIntensity={hovered ? 0.35 : 0.2}
            roughness={0.15}
            metalness={0.3}
            transmission={0.4}
            thickness={1.2}
            transparent
            opacity={0.92}
          />
        </mesh>

        {/* Outer Wireframe Lattice - Delicate Royal Blue/Cyan */}
        <mesh scale={[1.06, 1.06, 1.06]}>
          <icosahedronGeometry args={[1.75, 2]} />
          <meshBasicMaterial
            color="#4385F5"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Soft Orbit Ring 1 - Lavender */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.7, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#A78BFA"
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>

        {/* Soft Orbit Ring 2 - Cyan */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[3.2, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#20B8D5"
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>

        {/* Base Orientation Grid */}
        <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8, 3.8, 32]} />
          <meshBasicMaterial color="#635BFF" wireframe transparent opacity={0.12} />
        </mesh>
      </Float>
    </group>
  );
}

export default function TechCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8.5]} fov={42} />
        <ambientLight intensity={1.4} />
        <directionalLight position={[10, 15, 12]} intensity={1.8} color="#FFFFFF" />
        <directionalLight position={[-10, -5, -8]} intensity={0.8} color="#EEF2FF" />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#635BFF" />
        <pointLight position={[-4, -3, 3]} intensity={1.0} color="#20B8D5" />
        
        {/* Soft Minimal Particles for Light Theme */}
        <Sparkles
          count={45}
          scale={8}
          size={2.5}
          speed={0.4}
          opacity={0.5}
          color="#635BFF"
        />
        <AICoreSphere />
      </Canvas>
    </div>
  );
}
