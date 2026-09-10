"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { soundFx } from "./soundFx";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();

    const isMobile = window.innerWidth < 768;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      // WebGL not available
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 8, 10);
    amberLight.position.set(2.5, 2.5, 3);
    scene.add(amberLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 4, 8);
    rimLight.position.set(-2.5, -2, 2.5);
    scene.add(rimLight);

    // Main Group for Card & Orbits
    const cardGroup = new THREE.Group();
    scene.add(cardGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const portraitTexture = textureLoader.load("/ferid-portrait.webp");
    portraitTexture.colorSpace = THREE.SRGBColorSpace;

    // Card Dimensions (aspect ~ 3:4)
    const cardWidth = 2.4;
    const cardHeight = 3.2;
    const cardDepth = 0.08;

    // Card Bevel Box Geometry
    const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth, 16, 16, 2);

    // Front Material with Portrait
    const frontMaterial = new THREE.MeshPhysicalMaterial({
      map: portraitTexture,
      roughness: 0.2,
      metalness: 0.1,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
      reflectivity: 0.8,
    });

    // Body / Back / Side Materials
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x161822,
      roughness: 0.3,
      metalness: 0.8,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f1118,
      roughness: 0.4,
      metalness: 0.9,
    });

    // Box Materials: [right, left, top, bottom, front, back]
    const materials = [
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      frontMaterial,
      backMaterial,
    ];

    const cardMesh = new THREE.Mesh(cardGeometry, materials);
    cardGroup.add(cardMesh);

    // Fine Glowing Hairline Wireframe Frame
    const wireframeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(cardWidth + 0.02, cardHeight + 0.02, cardDepth + 0.01));
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.45,
    });
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    cardGroup.add(wireframe);

    // Outer Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.012, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    cardGroup.add(ring1);

    // Orbiting Satellite 1
    const sat1Geo = new THREE.SphereGeometry(0.06, 16, 16);
    const sat1Mat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const satellite1 = new THREE.Mesh(sat1Geo, sat1Mat);
    ring1.add(satellite1);

    // Outer Orbital Ring 2 (Crossed)
    const ring2Geo = new THREE.TorusGeometry(2.5, 0.009, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    cardGroup.add(ring2);

    // Orbiting Satellite 2
    const sat2Geo = new THREE.SphereGeometry(0.045, 16, 16);
    const sat2Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const satellite2 = new THREE.Mesh(sat2Geo, sat2Mat);
    ring2.add(satellite2);

    // Ambient Stardust Particles
    const particleCount = isMobile ? 45 : 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 3;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interactive Mouse / Pointer Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerPosition.x;
        const deltaY = e.clientY - previousPointerPosition.y;
        cardGroup.rotation.y += deltaX * 0.01;
        cardGroup.rotation.x += deltaY * 0.01;
        previousPointerPosition = { x: e.clientX, y: e.clientY };
      } else {
        targetRotationY = mouseX * 0.35;
        targetRotationX = -mouseY * 0.35;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      previousPointerPosition = { x: e.clientX, y: e.clientY };
      soundFx.playClick();
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handlePointerLeave = () => {
      isDragging = false;
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);
    container.addEventListener("mouseleave", handlePointerLeave);

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationY = x * 0.4;
        targetRotationX = -y * 0.4;
      }
    };
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Visibility & Intersection checks to pause WebGL when offscreen
    let isIntersecting = true;
    let isTabActive = true;

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isIntersecting || !isTabActive) return;

      const elapsedTime = clock.getElapsedTime();

      // Idle harmonic float
      if (!isDragging) {
        cardGroup.rotation.x += (targetRotationX - cardGroup.rotation.x) * 0.06;
        cardGroup.rotation.y += (targetRotationY - cardGroup.rotation.y) * 0.06;
        cardGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
      }

      // Spin orbital rings & satellites
      ring1.rotation.z = elapsedTime * 0.4;
      satellite1.position.x = Math.cos(elapsedTime * 1.8) * 2.3;
      satellite1.position.y = Math.sin(elapsedTime * 1.8) * 2.3;

      ring2.rotation.z = -elapsedTime * 0.3;
      satellite2.position.x = Math.cos(-elapsedTime * 1.4) * 2.5;
      satellite2.position.y = Math.sin(-elapsedTime * 1.4) * 2.5;

      // Slowly rotate particle dust
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      container.removeEventListener("mouseleave", handlePointerLeave);
      container.removeEventListener("touchmove", handleTouchMove);
      resizeObserver.disconnect();

      cardGeometry.dispose();
      materials.forEach((m) => m.dispose());
      wireframeGeo.dispose();
      wireframeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      sat1Geo.dispose();
      sat1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      sat2Geo.dispose();
      sat2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      portraitTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Interactive 3D Holographic Identity - Drag or hover to rotate"
      />

      {/* Cyberpunk / Architectural HUD Overlay */}
      <div className="absolute top-2 left-2 sm:left-4 pointer-events-none flex items-center gap-2 bg-[#090a0f]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] font-mono text-amber-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>3D_HOLO_BADGE // V3.8</span>
      </div>

      <div className="absolute bottom-2 right-2 sm:right-4 pointer-events-none flex items-center gap-1.5 bg-[#090a0f]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-mono text-slate-400">
        <span>DRAG TO ROTATE 3D</span>
      </div>
    </div>
  );
}
