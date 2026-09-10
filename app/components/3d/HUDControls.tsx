"use client";

import React, { useState, useEffect } from "react";
import { 
  Compass, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Sparkles,
  X
} from "lucide-react";
import { soundFx } from "./soundFx";

interface HUDControlsProps {
  mode: "story" | "free";
  onToggleMode: () => void;
  onNavigateSection: (sectionId: string) => void;
  onResetCamera: () => void;
  fps: number;
}

export default function HUDControls({
  mode,
  onToggleMode,
  onNavigateSection,
  onResetCamera,
  fps,
}: HUDControlsProps) {
  const [audioEnabled, setAudioEnabled] = useState(soundFx.enabled);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleToggle = () => setIsCollapsed((prev) => !prev);
    window.addEventListener("toggle-3d-hud", handleToggle);
    return () => window.removeEventListener("toggle-3d-hud", handleToggle);
  }, []);

  const toggleAudio = () => {
    const newState = soundFx.toggle();
    setAudioEnabled(newState);
  };

  const sections = [
    { id: "about", label: "01 // HERO" },
    { id: "experience", label: "02 // CAREER" },
    { id: "skills", label: "03 // SKILLS" },
    { id: "projects", label: "04 // PROJECTS" },
    { id: "hobbies", label: "05 // BEYOND" },
    { id: "contact", label: "06 // CONTACT" },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 font-mono text-xs select-none">
      {/* HUD Main Body */}
      {!isCollapsed && (
        <div className="bg-[#090a0f]/95 border border-white/15 backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 shadow-2xl flex flex-col gap-3 max-w-[340px] w-full animate-in fade-in zoom-in-95 duration-150">
          {/* Header row: Mode & FPS */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Sparkles size={14} />
              <span>3D ENGINE HUD</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {fps} FPS
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsCollapsed(true);
                }}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Close 3D HUD"
                aria-label="Close 3D HUD"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Controls: Mode Switch & Sound */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                soundFx.playClick();
                onToggleMode();
              }}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border transition-all text-xs font-semibold ${
                mode === "free"
                  ? "bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/20"
                  : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
              }`}
            >
              <Compass size={14} />
              {mode === "free" ? "3D Free Roam" : "Enter Free 3D"}
            </button>

            <button
              onClick={toggleAudio}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border transition-all text-xs ${
                audioEnabled
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                  : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {audioEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              {audioEnabled ? "Audio On" : "Audio Off"}
            </button>
          </div>

          {/* Waypoints / Teleport */}
          <div>
            <div className="flex items-center justify-between text-[10px] uppercase text-slate-400 tracking-wider mb-1.5">
              <span>3D Camera Waypoints</span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  onResetCamera();
                }}
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                title="Reset Camera to default"
              >
                <RotateCcw size={10} /> Reset
              </button>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    soundFx.playTeleport();
                    onNavigateSection(sec.id);
                  }}
                  className="py-1.5 px-2 bg-white/5 hover:bg-amber-500/10 hover:border-amber-500/30 text-slate-300 hover:text-amber-300 border border-white/5 rounded-lg text-[10px] transition-all text-center truncate"
                >
                  {sec.label.split("// ")[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Quick instructions hint */}
          {mode === "free" && (
            <div className="text-[10px] text-amber-300/80 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 leading-tight">
              Left-drag to Orbit • Right-drag to Pan • Scroll to Zoom • Click 3D Nodes to Inspect
            </div>
          )}
        </div>
      )}

      {/* Floating Minimized Trigger */}
      {isCollapsed && (
        <button
          onClick={() => {
            soundFx.playClick();
            setIsCollapsed(false);
          }}
          className="flex items-center gap-2 bg-[#090a0f]/80 hover:bg-[#161822] border border-white/10 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 px-3 py-2 rounded-full shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all text-xs font-mono cursor-pointer"
          title="Open 3D Controls"
          aria-label="Open 3D Controls"
        >
          <Compass size={14} />
          <span>3D HUD</span>
        </button>
      )}
    </div>
  );
}
