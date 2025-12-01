"use client";

import dynamic from "next/dynamic";

const SpaceParticles = dynamic(
  () => import("@/components/Particles/SpaceParticles"),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function SpaceParticlesWrapper() {
  return <SpaceParticles />;
}
