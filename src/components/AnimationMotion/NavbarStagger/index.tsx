"use client";

import { motion } from "framer-motion";
import { useIsOpenNavBar } from "@/store/useIsOpenNavBar";
import { ReactNode, useEffect, useState } from "react";

interface NavbarStaggerProps {
  children: ReactNode;
}

export function NavbarStagger({ children }: NavbarStaggerProps) {
  const { isOpen } = useIsOpenNavBar();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1280);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (isDesktop) {
    return <div className="flex flex-col">{children}</div>;
  }

  return (
    <motion.div
      key="navbar-content"
      variants={container}
      initial="hidden"
      animate={isOpen ? "show" : "exit"}
      className="flex flex-col"
    >
      {children}
    </motion.div>
  );
}

interface NavbarItemProps {
  children: ReactNode;
}

export function NavbarItem({ children }: NavbarItemProps) {
  const item = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return <motion.div variants={item}>{children}</motion.div>;
}
