'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Element A: Flowing Liquid 3D Ribbons
 * Smooth Catmull-Rom parametric splines with translucent glossy glass materials
 * Calibrated dimensions to prevent viewport clipping.
 */
function LiquidRibbons({ isMobile }: { isMobile: boolean }) {
  const ribbon1Ref = useRef<THREE.Mesh>(null);
  const ribbon2Ref = useRef<THREE.Mesh>(null);

  // Organic 3D spline curves proportioned within the camera's safe framing frustum
  const curve1 = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 2;
      const x = Math.sin(t) * 2.8 + Math.cos(t * 2) * 0.6;
      const y = Math.cos(t) * 2.1 + Math.sin(t * 3) * 0.4;
      const z = Math.sin(t * 2) * 1.3 - 1.2;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.5);
  }, []);

  const curve2 = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 22;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 2;
      const x = Math.cos(t) * 3.0 + Math.sin(t * 2) * 0.5;
      const y = Math.sin(t) * 1.7 + Math.cos(t * 3) * 0.45;
      const z = Math.cos(t * 2) * 1.4 - 0.8;
      points.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.CatmullRomCurve3(points, true, 'catmullrom', 0.5);
  }, []);

  // Continuous organic wave deformation
  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (ribbon1Ref.current) {
      ribbon1Ref.current.rotation.x = Math.sin(time * 0.16) * 0.1;
      ribbon1Ref.current.rotation.y = time * 0.05;
      ribbon1Ref.current.rotation.z = Math.cos(time * 0.12) * 0.07;
    }

    if (ribbon2Ref.current) {
      ribbon2Ref.current.rotation.x = Math.cos(time * 0.14) * 0.08;
      ribbon2Ref.current.rotation.y = -time * 0.045;
      ribbon2Ref.current.rotation.z = Math.sin(time * 0.1) * 0.08;
    }
  });

  return (
    <group>
      {/* Ribbon 1: Electric Blue / Cyan Liquid Glass Ribbon */}
      <mesh ref={ribbon1Ref} position={[0, 0, -1.2]}>
        <tubeGeometry args={[curve1, isMobile ? 56 : 100, 0.11, isMobile ? 8 : 16, true]} />
        <meshPhysicalMaterial
          color="#39BBD5"
          emissive="#4385F4"
          emissiveIntensity={0.32}
          roughness={0.12}
          metalness={0.1}
          transmission={0.8}
          thickness={1.3}
          ior={1.45}
          transparent
          opacity={0.82}
        />
      </mesh>

      {/* Ribbon 2: Violet / Lavender Translucent Ribbon */}
      <mesh ref={ribbon2Ref} position={[0, 0, -0.6]}>
        <tubeGeometry args={[curve2, isMobile ? 56 : 100, 0.09, isMobile ? 8 : 16, true]} />
        <meshPhysicalMaterial
          color="#6957F5"
          emissive="#EEEAFE"
          emissiveIntensity={0.26}
          roughness={0.16}
          metalness={0.15}
          transmission={0.75}
          thickness={1.1}
          ior={1.4}
          transparent
          opacity={0.78}
        />
      </mesh>
    </group>
  );
}

/**
 * Element B: 3D Elliptical Orbital Rings
 * 3 distinct elliptical rings with variable angles, thicknesses, depths, and rotation speeds.
 * Scaled carefully so they do not intersect edges abruptly.
 */
function OrbitalRings({ isMobile }: { isMobile: boolean }) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.0024;
      ring1Ref.current.rotation.x = Math.PI / 3.4 + Math.sin(time * 0.18) * 0.03;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += 0.002;
      ring2Ref.current.rotation.z -= 0.0016;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= 0.0016;
      ring3Ref.current.rotation.y += 0.0014;
    }
  });

  const segments = isMobile ? 44 : 76;

  return (
    <group>
      {/* Ring 1: Violet/RoyalBlue Elliptical Ring */}
      <mesh
        ref={ring1Ref}
        scale={[1.22, 0.85, 1.05]}
        rotation={[Math.PI / 3.4, 0.2, -0.35]}
        position={[0, 0, -0.5]}
      >
        <torusGeometry args={[2.55, 0.028, 16, segments]} />
        <meshPhysicalMaterial
          color="#6957F5"
          emissive="#4385F4"
          emissiveIntensity={0.28}
          roughness={0.14}
          metalness={0.22}
          transmission={0.7}
          thickness={0.75}
          transparent
          opacity={0.82}
        />
      </mesh>

      {/* Ring 2: Cyan/Mint Glossy Glass Ring */}
      <mesh
        ref={ring2Ref}
        scale={[1.18, 0.98, 0.9]}
        rotation={[-Math.PI / 4, 0.4, 0.25]}
        position={[0, 0, -0.9]}
      >
        <torusGeometry args={[2.95, 0.022, 16, segments]} />
        <meshPhysicalMaterial
          color="#39BBD5"
          emissive="#39BBD5"
          emissiveIntensity={0.3}
          roughness={0.12}
          metalness={0.18}
          transmission={0.75}
          thickness={0.8}
          transparent
          opacity={0.78}
        />
      </mesh>

      {/* Ring 3: Delicate Lavender/Pink Outer Orbital Ring */}
      <mesh
        ref={ring3Ref}
        scale={[1.24, 0.92, 1.1]}
        rotation={[0.25, -Math.PI / 2.8, 0.45]}
        position={[0, 0, -1.3]}
      >
        <torusGeometry args={[3.45, 0.016, 16, segments]} />
        <meshPhysicalMaterial
          color="#F18BB5"
          emissive="#EEEAFE"
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.25}
          transparent
          opacity={0.62}
        />
      </mesh>
    </group>
  );
}

/**
 * Element C: Floating Glass Spheres
 * Core iridescent glass orb + multi-depth floating satellites with independent harmonic movement
 */
function FloatingGlassSpheres({ isMobile }: { isMobile: boolean }) {
  const coreOrbRef = useRef<THREE.Mesh>(null);
  const innerLatticeRef = useRef<THREE.Mesh>(null);
  const sat1Ref = useRef<THREE.Mesh>(null);
  const sat2Ref = useRef<THREE.Mesh>(null);
  const sat3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (coreOrbRef.current) {
      coreOrbRef.current.rotation.y = time * 0.035;
      coreOrbRef.current.rotation.z = Math.sin(time * 0.12) * 0.05;
    }

    if (innerLatticeRef.current) {
      innerLatticeRef.current.rotation.x = -time * 0.06;
      innerLatticeRef.current.rotation.y = -time * 0.04;
    }

    // Independent harmonic floating for satellites
    if (sat1Ref.current) {
      sat1Ref.current.position.y = 1.5 + Math.sin(time * 0.6) * 0.18;
      sat1Ref.current.position.x = 2.0 + Math.cos(time * 0.4) * 0.12;
      sat1Ref.current.rotation.y += 0.007;
    }

    if (sat2Ref.current) {
      sat2Ref.current.position.y = -1.4 + Math.cos(time * 0.5) * 0.16;
      sat2Ref.current.position.x = -2.1 + Math.sin(time * 0.38) * 0.12;
      sat2Ref.current.rotation.z -= 0.005;
    }

    if (sat3Ref.current) {
      sat3Ref.current.position.y = -1.6 + Math.sin(time * 0.7 + 1.0) * 0.15;
      sat3Ref.current.position.z = -1.1 + Math.cos(time * 0.45) * 0.12;
    }
  });

  return (
    <group>
      {/* Primary Central Glass Orb (Translucent, positioned behind dashboard) */}
      <group position={[0, 0, -0.6]}>
        <mesh ref={coreOrbRef}>
          <sphereGeometry args={[1.35, isMobile ? 32 : 48, isMobile ? 32 : 48]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            attenuationColor="#4385F4"
            attenuationDistance={2.5}
            roughness={0.08}
            metalness={0.08}
            transmission={0.85}
            thickness={1.6}
            ior={1.5}
            transparent
            opacity={0.86}
          />
        </mesh>

        {/* Inner Glowing Crystalline Core */}
        <mesh ref={innerLatticeRef} scale={[0.8, 0.8, 0.8]}>
          <icosahedronGeometry args={[1.15, 2]} />
          <meshStandardMaterial
            color="#39BBD5"
            emissive="#6957F5"
            emissiveIntensity={0.42}
            wireframe
            transparent
            opacity={0.32}
          />
        </mesh>
      </group>

      {/* Satellite 1: Upper-Right Cyan Glass Satellite */}
      <mesh ref={sat1Ref} position={[2.0, 1.5, -0.7]}>
        <sphereGeometry args={[0.32, 24, 24]} />
        <meshPhysicalMaterial
          color="#39BBD5"
          emissive="#39BBD5"
          emissiveIntensity={0.32}
          roughness={0.1}
          metalness={0.15}
          transmission={0.8}
          thickness={0.9}
          transparent
          opacity={0.82}
        />
      </mesh>

      {/* Satellite 2: Lower-Left Violet Glass Satellite */}
      <mesh ref={sat2Ref} position={[-2.1, -1.4, -0.4]}>
        <sphereGeometry args={[0.38, 24, 24]} />
        <meshPhysicalMaterial
          color="#6957F5"
          emissive="#6957F5"
          emissiveIntensity={0.28}
          roughness={0.12}
          metalness={0.15}
          transmission={0.8}
          thickness={1.0}
          transparent
          opacity={0.82}
        />
      </mesh>

      {/* Satellite 3: Distant Lavender Node */}
      <mesh ref={sat3Ref} position={[1.7, -1.6, -1.1]}>
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshPhysicalMaterial
          color="#F18BB5"
          emissive="#EEEAFE"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.2}
          transmission={0.7}
          transparent
          opacity={0.72}
        />
      </mesh>
    </group>
  );
}

/**
 * Element D: Dynamic Aurora Atmosphere Lighting
 * Soft volumetric-style lighting with gentle harmonic color transitions
 */
function AuroraAtmosphereLighting() {
  const cyanLightRef = useRef<THREE.PointLight>(null);
  const violetLightRef = useRef<THREE.PointLight>(null);
  const pinkLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (cyanLightRef.current) {
      cyanLightRef.current.intensity = 1.2 + Math.sin(time * 0.35) * 0.25;
    }
    if (violetLightRef.current) {
      violetLightRef.current.intensity = 1.4 + Math.cos(time * 0.3) * 0.3;
    }
    if (pinkLightRef.current) {
      pinkLightRef.current.intensity = 0.85 + Math.sin(time * 0.45 + 1.2) * 0.2;
    }
  });

  return (
    <>
      {/* Soft Ambient Light for clean light theme visibility */}
      <ambientLight intensity={1.75} color="#F4F0FF" />

      {/* Key Directional Sunlight */}
      <directionalLight position={[6, 10, 8]} intensity={1.9} color="#FFFFFF" />
      <directionalLight position={[-6, -4, -4]} intensity={0.75} color="#EEEAFE" />

      {/* Atmospheric Dynamic Point Lights */}
      <pointLight ref={cyanLightRef} position={[-3.5, 2.5, 2]} intensity={1.2} color="#39BBD5" distance={13} />
      <pointLight ref={violetLightRef} position={[2.5, -2.5, 2.5]} intensity={1.4} color="#6957F5" distance={14} />
      <pointLight ref={pinkLightRef} position={[-1.8, -3.5, 3.5]} intensity={0.85} color="#F18BB5" distance={11} />
    </>
  );
}

/**
 * Main 3D Environment Scene
 * Handles mouse parallax interpolation, depth layering, and respects prefers-reduced-motion
 */
function LiquidAuroraScene({
  isMobile,
  prefersReducedMotion,
}: {
  isMobile: boolean;
  prefersReducedMotion: boolean;
}) {
  const sceneGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!sceneGroupRef.current || prefersReducedMotion) return;

    if (!isMobile) {
      // Gentle, high-damping mouse parallax on desktop
      const targetY = state.pointer.x * 0.22 + state.clock.elapsedTime * 0.035;
      const targetX = -state.pointer.y * 0.14;

      sceneGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        sceneGroupRef.current.rotation.y,
        targetY,
        0.035
      );
      sceneGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        sceneGroupRef.current.rotation.x,
        targetX,
        0.035
      );
    } else {
      // Subtle idle rotation on mobile without mouse parallax
      sceneGroupRef.current.rotation.y = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <group ref={sceneGroupRef}>
      <Float
        speed={prefersReducedMotion ? 0 : 1.3}
        rotationIntensity={prefersReducedMotion ? 0 : 0.18}
        floatIntensity={prefersReducedMotion ? 0 : 0.38}
      >
        {/* Dynamic Aurora Atmospheric Lighting */}
        <AuroraAtmosphereLighting />

        {/* Element A: Flowing Liquid 3D Ribbons */}
        <LiquidRibbons isMobile={isMobile} />

        {/* Element B: 3D Orbital Rings */}
        <OrbitalRings isMobile={isMobile} />

        {/* Element C: Floating Glass Spheres */}
        <FloatingGlassSpheres isMobile={isMobile} />

        {/* Element E: Depth Particles */}
        <Sparkles
          count={isMobile ? 12 : 24}
          scale={7.5}
          size={isMobile ? 1.6 : 2.0}
          speed={prefersReducedMotion ? 0 : 0.24}
          opacity={0.45}
          color="#6957F5"
        />
        <Sparkles
          count={isMobile ? 10 : 20}
          scale={8.8}
          size={isMobile ? 1.4 : 1.8}
          speed={prefersReducedMotion ? 0 : 0.2}
          opacity={0.38}
          color="#39BBD5"
        />
        {!isMobile && (
          <Sparkles
            count={12}
            scale={6.8}
            size={1.6}
            speed={prefersReducedMotion ? 0 : 0.16}
            opacity={0.3}
            color="#F18BB5"
          />
        )}
      </Float>
    </group>
  );
}

export default function TechCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Detect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    // Pause rendering when outside viewport to optimize performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', motionListener);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[440px] sm:min-h-[520px] relative pointer-events-none"
      style={{
        // Soft radial feathering prevents hard rectangular edge cutoff at all boundaries
        maskImage: 'radial-gradient(ellipse 90% 86% at 50% 50%, black 58%, rgba(0,0,0,0.65) 80%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 86% at 50% 50%, black 58%, rgba(0,0,0,0.65) 80%, transparent 100%)',
      }}
    >
      {isInView && (
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 9.4]} fov={isMobile ? 48 : 42} />
          <LiquidAuroraScene isMobile={isMobile} prefersReducedMotion={prefersReducedMotion} />
        </Canvas>
      )}
    </div>
  );
}
