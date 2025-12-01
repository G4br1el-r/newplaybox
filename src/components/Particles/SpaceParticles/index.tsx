"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useMemo } from "react";

export default function SpaceParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const starsOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: { default: "out" as const },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: { enable: true, width: 800, height: 800 },
          value: 60,
        },
        opacity: {
          value: { min: 0.2, max: 0.8 },
          animation: { enable: true, speed: 1, sync: false },
        },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  const constellationOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: { default: "bounce" as const },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: { enable: true, width: 800, height: 800 },
          value: 25,
        },
        opacity: { value: 0.5 },
        size: { value: 2 },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <>
      <Particles
        id="stars"
        options={starsOptions}
        className="absolute inset-0 z-0"
      />
      <Particles
        id="constellation"
        options={constellationOptions}
        className="absolute inset-0 z-0"
      />
    </>
  );
}
