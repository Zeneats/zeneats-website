"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("zeneats-splash-seen") !== "true";
  });
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!show) {
      onCompleteRef.current();
      return;
    }

    const logo = logoRef.current;
    const overlay = overlayRef.current;
    if (!logo || !overlay) return;

    // Calculate the target position (navbar logo position)
    const navbarLogoX = 24 + 16; // px-6 (24px) + half of ~32px logo
    const navbarLogoY = 28; // h-14 / 2 = center of navbar

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = navbarLogoX - centerX;
    const deltaY = navbarLogoY - centerY;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("zeneats-splash-seen", "true");
        setShow(false);
        onCompleteRef.current();
      },
    });

    // 1. Fade in and scale up
    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );

    // 2. Brief hold
    tl.to(logo, { duration: 0.6 });

    // 3. Shrink and move to navbar position
    tl.to(logo, {
      x: deltaX,
      y: deltaY,
      scale: 0.32,
      duration: 0.7,
      ease: "power3.inOut",
    });

    // 4. Fade out overlay
    tl.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    return () => {
      tl.kill();
      // Reset styles so the animation can replay on remount (strict mode)
      gsap.set(logo, { opacity: 0, scale: 0.85, x: 0, y: 0 });
      gsap.set(overlay, { opacity: 1 });
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-bg-primary flex items-center justify-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={logoRef}
        src="/images/logos/zeneats-logo.png"
        alt="ZenEats"
        className="w-24 h-24 sm:w-28 sm:h-28 object-contain opacity-0 rounded-2xl"
      />
    </div>
  );
}
