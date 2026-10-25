import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGlError, setHasWebGlError] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGlError(true);
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;

    try {
      scene = new THREE.Scene();

      const width = container.clientWidth || 400;
      const height = container.clientHeight || 400;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 7.5;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;

      container.appendChild(renderer.domElement);

      // Main Group for interactive mouse rotation
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // 1. Central Holographic Core (Icosahedron)
      const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#0b1933'),
        emissive: new THREE.Color('#00f2fe'),
        emissiveIntensity: 0.15,
        roughness: 0.2,
        metalness: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        wireframe: false,
        transparent: true,
        opacity: 0.88,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);

      // Wireframe overlay for cyber lattice look
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#00f2fe'),
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const wireframeMesh = new THREE.Mesh(coreGeo, wireframeMat);
      wireframeMesh.scale.set(1.002, 1.002, 1.002);
      mainGroup.add(wireframeMesh);

      // 2. Orbital Rings (Torus)
      const ringGeo1 = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#38bdf8'),
        transparent: true,
        opacity: 0.7,
      });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      mainGroup.add(ring1);

      const ringGeo2 = new THREE.TorusGeometry(2.65, 0.02, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#a855f7'),
        transparent: true,
        opacity: 0.65,
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.z = Math.PI / 4;
      mainGroup.add(ring2);

      // 3. Floating Technology Data Nodes / Point Particles
      const particleCount = 280;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorPalette = [
        new THREE.Color('#00f2fe'),
        new THREE.Color('#38bdf8'),
        new THREE.Color('#818cf8'),
        new THREE.Color('#c084fc'),
        new THREE.Color('#f472b6'),
      ];

      for (let i = 0; i < particleCount; i++) {
        const radius = 2.4 + Math.random() * 2.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = chosenColor.r;
        colors[i * 3 + 1] = chosenColor.g;
        colors[i * 3 + 2] = chosenColor.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });
      const particleField = new THREE.Points(particleGeo, particleMat);
      mainGroup.add(particleField);

      // 4. Controlled Futuristic Lighting
      const ambientLight = new THREE.AmbientLight('#111827', 1.5);
      scene.add(ambientLight);

      const cyanLight = new THREE.PointLight('#00f2fe', 4, 15);
      cyanLight.position.set(4, 4, 3);
      scene.add(cyanLight);

      const violetLight = new THREE.PointLight('#9333ea', 3.5, 15);
      violetLight.position.set(-4, -3, 2);
      scene.add(violetLight);

      const pinkRimLight = new THREE.DirectionalLight('#ec4899', 1.2);
      pinkRimLight.position.set(0, -5, -3);
      scene.add(pinkRimLight);

      // Mouse reactivity with smooth lerp
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 0.8;
        targetY = y * 0.8;
      };

      const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length > 0) {
          const touch = event.touches[0];
          const rect = container.getBoundingClientRect();
          const x = (touch.clientX - rect.left) / rect.width - 0.5;
          const y = (touch.clientY - rect.top) / rect.height - 0.5;
          targetX = x * 0.5;
          targetY = y * 0.5;
        }
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });

      // Resize handler
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      // Animation loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Mouse tilt interpolation
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        mainGroup.rotation.y = mouseX + (reducedMotion ? 0 : elapsedTime * 0.12);
        mainGroup.rotation.x = -mouseY * 0.8 + (reducedMotion ? 0.2 : Math.sin(elapsedTime * 0.3) * 0.1);

        if (!reducedMotion) {
          coreMesh.rotation.y = elapsedTime * 0.2;
          coreMesh.rotation.z = elapsedTime * 0.1;
          wireframeMesh.rotation.y = elapsedTime * 0.2;
          wireframeMesh.rotation.z = elapsedTime * 0.1;

          ring1.rotation.z = elapsedTime * 0.25;
          ring2.rotation.z = -elapsedTime * 0.2;

          particleField.rotation.y = -elapsedTime * 0.08;
          particleField.rotation.x = elapsedTime * 0.04;

          // Subtle floating levitation
          mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;
        }

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('resize', handleResize);

        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }

        coreGeo.dispose();
        coreMat.dispose();
        wireframeMat.dispose();
        ringGeo1.dispose();
        ringMat1.dispose();
        ringGeo2.dispose();
        ringMat2.dispose();
        particleGeo.dispose();
        particleMat.dispose();
      };
    } catch (err) {
      console.warn('3D WebGL initialization failed, switching to accessible fallback', err);
      setHasWebGlError(true);
    }
  }, [reducedMotion]);

  if (hasWebGlError) {
    return (
      <div 
        className="w-full h-full min-h-[360px] flex items-center justify-center relative select-none"
        aria-label="Futuristic holographic orb graphic"
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-600/20 blur-2xl animate-pulse" />
          <div className="w-48 h-48 rounded-full border-2 border-cyan-400/40 relative flex items-center justify-center shadow-[0_0_40px_rgba(0,242,254,0.3)] animate-spin [animation-duration:20s]">
            <div className="w-36 h-36 rounded-full border border-purple-400/50 [animation-direction:reverse] animate-spin [animation-duration:12s]" />
            <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/60 to-purple-600/60 blur-sm" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Technology Hologram"
      role="img"
    />
  );
};
