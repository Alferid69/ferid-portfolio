"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PROJECTS, Project } from "../../data";
import { soundFx } from "./soundFx";
import HUDControls from "./HUDControls";
import Projects3DModal from "./Projects3DModal";

// Section waypoints for Story Mode camera travel
const SECTION_WAYPOINTS: Record<
  string,
  { camera: [number, number, number]; target: [number, number, number] }
> = {
  about: { camera: [0, 0, 11], target: [0, 0, 0] },
  experience: { camera: [5.5, -4, 13], target: [2, -4, 0] },
  skills: { camera: [-5.5, -9.5, 12], target: [-2, -9.5, 0] },
  projects: { camera: [0, -16.5, 15], target: [0, -16.5, 0] },
  hobbies: { camera: [5, -23, 11], target: [2, -23, 0] },
  contact: { camera: [0, -30, 13], target: [0, -30, 0] },
};

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"story" | "free">("story");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredNodeTitle, setHoveredNodeTitle] = useState<string | null>(null);
  const [fps, setFps] = useState(60);

  // References to communicate with the Three.js render loop without re-instantiating
  const controlsRef = useRef<OrbitControls | null>(null);
  const modeRef = useRef<"story" | "free">("story");

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  const targetCameraPos = useRef(new THREE.Vector3(0, 0, 11));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  // Switch between Free Roam and Guided Story mode
  const handleToggleMode = useCallback(() => {
    setMode((prev) => {
      const nextMode = prev === "story" ? "free" : "story";
      if (controlsRef.current) {
        controlsRef.current.enabled = nextMode === "free";
      }
      return nextMode;
    });
  }, []);

  // Quick navigation / teleport to section
  const handleNavigateSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    const wp = SECTION_WAYPOINTS[sectionId];
    if (wp) {
      targetCameraPos.current.set(...wp.camera);
      targetLookAt.current.set(...wp.target);
    }
  }, []);

  // Reset camera view
  const handleResetCamera = useCallback(() => {
    targetCameraPos.current.set(0, 0, 11);
    targetLookAt.current.set(0, 0, 0);
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const isMobile = window.innerWidth < 768;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0f, 0.022);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 150);
    camera.position.set(0, 0, 11);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      // WebGL not available (e.g. test environment or unsupported device)
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.6));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 50;
    controls.minDistance = 2;
    controls.enabled = false; // default to story mode
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xf59e0b, 2.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3, 30);
    cyanLight.position.set(-6, -12, 5);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 2.5, 30);
    emeraldLight.position.set(6, -20, 5);
    scene.add(emeraldLight);

    // --- 1. GALAXY PARTICLES ---
    const starCount = isMobile ? 450 : 1200;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const idx = i * 3;
      starPos[idx] = (Math.random() - 0.5) * 60;
      starPos[idx + 1] = (Math.random() - 0.5) * 70 - 15;
      starPos[idx + 2] = (Math.random() - 0.5) * 35;

      // Color mix: Amber, Cyan, White
      const rand = Math.random();
      if (rand < 0.4) {
        // Amber
        starColors[idx] = 0.96;
        starColors[idx + 1] = 0.62;
        starColors[idx + 2] = 0.04;
      } else if (rand < 0.7) {
        // Cyan / Blue
        starColors[idx] = 0.22;
        starColors[idx + 1] = 0.74;
        starColors[idx + 2] = 0.97;
      } else {
        // White / Slate
        starColors[idx] = 0.95;
        starColors[idx + 1] = 0.98;
        starColors[idx + 2] = 1.0;
      }
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // --- 2. ARCHITECTURAL HORIZON GRID ---
    const gridHelper = new THREE.GridHelper(80, 80, 0xf59e0b, 0x1f293d);
    gridHelper.position.y = -36;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.25;
    scene.add(gridHelper);

    // --- 3. INTERACTIVE 3D PROJECT MONOLITHS ---
    const projectMeshes: THREE.Group[] = [];
    const projectPositions: [number, number, number][] = [
      [-4.5, -15, 0],
      [0, -15, 2],
      [4.5, -15, 0],
      [-2.5, -18, 1],
      [2.5, -18, 1],
    ];

    PROJECTS.forEach((proj, idx) => {
      const pos = projectPositions[idx % projectPositions.length];
      const projGroup = new THREE.Group();
      projGroup.position.set(...pos);
      projGroup.userData = { project: proj, isProjectNode: true };

      // Core Monolith Crystal (High performance standard material)
      const crystalGeo = new THREE.OctahedronGeometry(1.0, 0);
      const crystalMat = new THREE.MeshStandardMaterial({
        color: idx % 2 === 0 ? 0xf59e0b : 0x38bdf8,
        roughness: 0.15,
        metalness: 0.7,
        transparent: true,
        opacity: 0.9,
      });
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      crystal.name = "crystalCore";
      projGroup.add(crystal);

      // Wireframe Outer Cage
      const cageGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.3, 0));
      const cageMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.35,
      });
      const cage = new THREE.LineSegments(cageGeo, cageMat);
      cage.name = "wireCage";
      projGroup.add(cage);

      // Orbital Halo Ring
      const ringGeo = new THREE.TorusGeometry(1.6, 0.015, 16, 50);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3;
      ring.name = "orbitHalo";
      projGroup.add(ring);

      scene.add(projGroup);
      projectMeshes.push(projGroup);
    });

    // --- 4. SKILLS GYROSCOPE (Planetary Tech Core) ---
    const skillsGroup = new THREE.Group();
    skillsGroup.position.set(-3, -9.5, 0);

    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x161822,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
    });
    const skillsCore = new THREE.Mesh(coreGeo, coreMat);
    skillsGroup.add(skillsCore);

    // Glowing internal core
    const innerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    skillsGroup.add(innerCore);

    // 3 Concentric Gyro Rings
    const gyro1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.02, 16, 60),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.5 })
    );
    const gyro2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.018, 16, 60),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 })
    );
    const gyro3 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.015, 16, 60),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.35 })
    );

    skillsGroup.add(gyro1);
    skillsGroup.add(gyro2);
    skillsGroup.add(gyro3);
    scene.add(skillsGroup);

    // --- 5. 3D CHESS PIECE (Beyond Code Showcase) ---
    const chessGroup = new THREE.Group();
    chessGroup.position.set(3.5, -23, 0);

    // Base
    const baseMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.1, 0.3, 16),
      new THREE.MeshStandardMaterial({ color: 0x161822, metalness: 0.8, roughness: 0.2 })
    );
    chessGroup.add(baseMesh);

    // Pedestal
    const stemMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.75, 1.2, 16),
      new THREE.MeshStandardMaterial({ color: 0x0f1118, metalness: 0.8, roughness: 0.2 })
    );
    stemMesh.position.y = 0.7;
    chessGroup.add(stemMesh);

    // Head / Crown (Geometric King/Knight)
    const crownMesh = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.7, 0),
      new THREE.MeshPhysicalMaterial({
        color: 0xf59e0b,
        metalness: 0.3,
        roughness: 0.1,
        clearcoat: 1.0,
      })
    );
    crownMesh.position.y = 1.6;
    chessGroup.add(crownMesh);

    // Chess Aura Ring
    const chessAura = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.015, 16, 50),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.4 })
    );
    chessAura.rotation.x = Math.PI / 2;
    chessAura.position.y = 1.0;
    chessGroup.add(chessAura);

    scene.add(chessGroup);

    // --- 6. RAYCASTING & INTERACTION ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredGroup: THREE.Group | null = null;

    const handlePointerMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Parallax effect on camera target in story mode
      if (modeRef.current === "story") {
        targetCameraPos.current.x = (e.clientX / window.innerWidth - 0.5) * 1.5;
      }
    };

    const handleClick = () => {
      if (hoveredGroup && hoveredGroup.userData.project) {
        soundFx.playClick();
        setActiveProject(hoveredGroup.userData.project);
      }
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("click", handleClick);

    // Scroll listener for Guided Story Waypoints
    const handleScroll = () => {
      if (modeRef.current !== "story") return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / (docHeight || 1), 0), 1);

      // Interpolate camera down through sections
      const totalDepth = -32;
      const targetY = progress * totalDepth;

      // Subtle horizontal weave
      const targetX = Math.sin(progress * Math.PI * 3) * 3.5;
      const targetZ = 11 + Math.cos(progress * Math.PI * 2) * 2.5;

      targetCameraPos.current.set(targetX, targetY, targetZ);
      targetLookAt.current.set(targetX * 0.3, targetY - 1, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Tab visibility handling
    let isTabActive = true;
    const handleVisibility = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // FPS Counter variables
    let frameCount = 0;
    let lastTime = performance.now();

    // Clock
    const clock = new THREE.Clock();

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabActive) return;

      const elapsedTime = clock.getElapsedTime();

      // FPS tracking
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      // Camera Lerp in Story Mode
      if (modeRef.current === "story") {
        camera.position.lerp(targetCameraPos.current, 0.05);
        currentLookAt.current.lerp(targetLookAt.current, 0.05);
        camera.lookAt(currentLookAt.current);
      } else {
        // Free Mode: OrbitControls handles camera
        controls.update();
      }

      // Animate Starfield
      starField.rotation.y = elapsedTime * 0.02;
      starField.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;

      // Animate 3D Project Monoliths
      projectMeshes.forEach((mesh, idx) => {
        mesh.rotation.y = elapsedTime * 0.5 + idx;
        mesh.rotation.x = Math.sin(elapsedTime * 0.8 + idx) * 0.2;
        mesh.position.y = projectPositions[idx][1] + Math.sin(elapsedTime * 1.5 + idx) * 0.25;

        const halo = mesh.getObjectByName("orbitHalo");
        if (halo) {
          halo.rotation.z = -elapsedTime * 0.8;
        }
      });

      // Animate Skills Gyroscope
      skillsCore.rotation.x = elapsedTime * 0.3;
      skillsCore.rotation.y = elapsedTime * 0.4;
      innerCore.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.08);
      gyro1.rotation.x = elapsedTime * 0.7;
      gyro1.rotation.y = elapsedTime * 0.5;
      gyro2.rotation.y = -elapsedTime * 0.6;
      gyro2.rotation.z = elapsedTime * 0.4;
      gyro3.rotation.z = elapsedTime * 0.5;
      gyro3.rotation.x = -elapsedTime * 0.3;

      // Animate Chess Piece
      crownMesh.rotation.y = elapsedTime * 0.8;
      chessAura.rotation.z = elapsedTime * 0.6;
      chessGroup.position.y = -23 + Math.sin(elapsedTime * 2) * 0.15;

      // Raycasting for interactive project nodes
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      let foundProjectGroup: THREE.Group | null = null;
      for (const hit of intersects) {
        let parent: THREE.Object3D | null = hit.object;
        while (parent) {
          if (parent.userData && parent.userData.isProjectNode) {
            foundProjectGroup = parent as THREE.Group;
            break;
          }
          parent = parent.parent;
        }
        if (foundProjectGroup) break;
      }

      if (foundProjectGroup) {
        if (hoveredGroup !== foundProjectGroup) {
          if (hoveredGroup) {
            hoveredGroup.scale.set(1, 1, 1);
          }
          hoveredGroup = foundProjectGroup;
          hoveredGroup.scale.set(1.2, 1.2, 1.2);
          soundFx.playHover();
          setHoveredNodeTitle(hoveredGroup.userData.project.title);
          document.body.style.cursor = "pointer";
        }
      } else {
        if (hoveredGroup) {
          hoveredGroup.scale.set(1, 1, 1);
          hoveredGroup = null;
          setHoveredNodeTitle(null);
          document.body.style.cursor = "default";
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.cursor = "default";

      controls.dispose();
      starGeo.dispose();
      starMat.dispose();
      gridHelper.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={containerRef}
        className={`fixed inset-0 pointer-events-none transition-opacity duration-500 ${
          mode === "free" ? "z-30 !pointer-events-auto" : "z-0"
        }`}
        style={{
          background: "radial-gradient(ellipse at 50% 20%, #111422 0%, #090a0f 75%)",
        }}
      />

      {/* Floating 3D Hover Tooltip */}
      {hoveredNodeTitle && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none bg-[#090a0f]/90 border border-amber-500/50 backdrop-blur-md px-4 py-2 rounded-xl text-amber-300 font-mono text-xs shadow-2xl flex items-center gap-2 animate-in fade-in zoom-in-95 duration-150">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>INSPECT 3D NODE: <strong>{hoveredNodeTitle}</strong> (Click to Open)</span>
        </div>
      )}

      {/* 3D HUD Navigation & Audio Controls */}
      <HUDControls
        mode={mode}
        onToggleMode={handleToggleMode}
        onNavigateSection={handleNavigateSection}
        onResetCamera={handleResetCamera}
        fps={fps}
      />

      {/* 3D Project Detail Inspector Modal */}
      <Projects3DModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
