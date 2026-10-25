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
      renderer.toneMappingExposure = 1.35;

      container.appendChild(renderer.domElement);

      // Main Group for interactive mouse rotation
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // 1. Central Solar Core (Crystalline Gold Icosahedron)
      const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#1c1305'),
        emissive: new THREE.Color('#ff9100'),
        emissiveIntensity: 0.28,
        roughness: 0.15,
        metalness: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        transparent: true,
        opacity: 0.92,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);

      // Golden Wireframe Lattice
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#ffd60a'),
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      const wireframeMesh = new THREE.Mesh(coreGeo, wireframeMat);
      wireframeMesh.scale.set(1.002, 1.002, 1.002);
      mainGroup.add(wireframeMesh);

      // 2. Solar Orbiting Rings (Echoing the Golden Neon Ring)
      const ringGeo1 = new THREE.TorusGeometry(2.35, 0.03, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#ffb703'),
        transparent: true,
        opacity: 0.85,
      });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      mainGroup.add(ring1);

      const ringGeo2 = new THREE.TorusGeometry(2.7, 0.022, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: new THREE.Color('#fb8500'),
        transparent: true,
        opacity: 0.75,
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.z = Math.PI / 4;
      mainGroup.add(ring2);

      // 3. Floating Fiery Embers & Golden Dust
      const particleCount = 320;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorPalette = [
        new THREE.Color('#fff3b0'),
        new THREE.Color('#ffd60a'),
        new THREE.Color('#ffb703'),
        new THREE.Color('#fb8500'),
        new THREE.Color('#ff5400'),
      ];

      for (let i = 0; i < particleCount; i++) {
        const radius = 2.3 + Math.random() * 2.3;
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
        size: 0.055,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const particleField = new THREE.Points(particleGeo, particleMat);
      mainGroup.add(particleField);

      // 4. Warm Solar & Ember Lighting
      const ambientLight = new THREE.AmbientLight('#120e06', 1.6);
      scene.add(ambientLight);

      const goldPointLight = new THREE.PointLight('#ffb703', 4.5, 16);
      goldPointLight.position.set(4, 4, 3);
      scene.add(goldPointLight);

      const amberPointLight = new THREE.PointLight('#ff5400', 4, 16);
      amberPointLight.position.set(-4, -3, 2);
      scene.add(amberPointLight);

      const sunRimLight = new THREE.DirectionalLight('#ffe57f', 1.3);
      sunRimLight.position.set(0, 5, -3);
      scene.add(sunRimLight);

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
          coreMesh.rotation.y = elapsedTime * 0.22;
          coreMesh.rotation.z = elapsedTime * 0.11;
          wireframeMesh.rotation.y = elapsedTime * 0.22;
          wireframeMesh.rotation.z = elapsedTime * 0.11;

          ring1.rotation.z = elapsedTime * 0.25;
          ring2.rotation.z = -elapsedTime * 0.22;

          particleField.rotation.y = -elapsedTime * 0.09;
          particleField.rotation.x = elapsedTime * 0.05;

          // Levitation
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
        aria-label="Solar cyber core fallback"
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/25 via-yellow-500/15 to-orange-600/25 blur-2xl animate-pulse" />
          <div className="w-48 h-48 rounded-full border-2 border-amber-400/60 relative flex items-center justify-center shadow-[0_0_40px_rgba(255,184,0,0.4)] animate-spin [animation-duration:20s]">
            <div className="w-36 h-36 rounded-full border border-orange-400/50 [animation-direction:reverse] animate-spin [animation-duration:12s]" />
            <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/70 to-orange-600/70 blur-sm" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Solar Hologram"
      role="img"
    />
  );
};
