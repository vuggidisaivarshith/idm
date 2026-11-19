'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AICoreSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetY = state.pointer.x * 0.45 + state.clock.elapsedTime * 0.12;
    const targetX = -state.pointer.y * 0.3;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y += 0.01;
      innerSphereRef.current.rotation.x += 0.005;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.015;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += 0.012;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
        {/* Core AI Neural Sphere */}
        <mesh
          ref={innerSphereRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1.7, 2]} />
          <meshStandardMaterial
            color={hovered ? '#00F2FE' : '#1E1B4B'}
            emissive={hovered ? '#0072FF' : '#4338CA'}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            metalness={0.9}
            roughness={0.15}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Node Lattice */}
        <mesh scale={[1.08, 1.08, 1.08]}>
          <icosahedronGeometry args={[1.7, 2]} />
          <meshBasicMaterial
            color="#00F2FE"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Cyber Orbit Ring 1 */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2.7, 0.035, 16, 100]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#9333EA"
            emissiveIntensity={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Cyber Orbit Ring 2 */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[3.2, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#00F2FE"
            emissive="#00C9FF"
            emissiveIntensity={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Ground Data Scanner Ring */}
        <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8, 3.8, 32]} />
          <meshBasicMaterial color="#00F2FE" wireframe transparent opacity={0.15} />
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
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 15, 12]} intensity={2.2} color="#E0F2FE" />
        <pointLight position={[-8, -5, -4]} intensity={1.5} color="#A855F7" />
        <pointLight position={[5, -4, 4]} intensity={1.8} color="#00F2FE" />
        
        <Stars radius={45} depth={30} count={750} factor={3.5} saturation={1} fade speed={1.2} />
        <AICoreSphere />
      </Canvas>
    </div>
  );
}
