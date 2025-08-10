"use client";
import Navbar from "../Navbar";
import Image from "next/image";
import { useScrollVisibility } from "./UseHeaderVisibility";
import BaseImage from "@/components/BaseImage";

export default function Header() {
  const { isScrolled, isVisible } = useScrollVisibility();

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 flex h-20 w-full items-center justify-center transition-transform duration-700 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-purple-dark/40 backdrop-blur-md xl:bg-transparent"
            : "bg-transparent"
        }`}
      >
        <BaseImage
          src="/logo.webp"
          alt="logo da playbox"
          extraClassImage="h-full w-full object-contain"
          extraClassWrapper="relative flex h-20 w-20 items-center justify-center"
        />
      </div>
      <Navbar isVisible={isVisible} />
    </>
  );
}
