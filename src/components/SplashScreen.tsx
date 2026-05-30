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

    // Measure the real navbar logo so the splash lands exactly on it,
    // accounting for the navbar's centered max-width container and padding.
    const navbarLogo = document.getElementById("navbar-logo");
    // The logo may already carry a GSAP scale (set on cleanup for replay), so
    // normalize the measured width back to its unscaled size before deriving
    // the target scale — otherwise the landed logo comes out too large.
    const currentScale = Number(gsap.getProperty(logo, "scaleX")) || 1;
    const splashRect = logo.getBoundingClientRect();
    const splashBaseWidth = splashRect.width / currentScale;
    const splashCenterX = splashRect.left + splashRect.width / 2;
    const splashCenterY = splashRect.top + splashRect.height / 2;

    let deltaX: number;
    let deltaY: number;
    let targetScale: number;

    if (navbarLogo) {
      const navRect = navbarLogo.getBoundingClientRect();
      const navCenterX = navRect.left + navRect.width / 2;
      const navCenterY = navRect.top + navRect.height / 2;

      // The source image is square (1500x1500) and both logos use object-contain,
      // so matching the rendered logo size is just matching the contained square.
      // min() guards against either box being letterboxed by its aspect ratio.
      const navVisibleSize = Math.min(navRect.width, navRect.height);
      targetScale = navVisibleSize / splashBaseWidth;
      deltaX = navCenterX - splashCenterX;
      deltaY = navCenterY - splashCenterY;
    } else {
      // Fallback to a reasonable top-left landing if the navbar isn't mounted.
      targetScale = 0.35;
      deltaX = 56 - splashCenterX;
      deltaY = 56 - splashCenterY;
    }

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
      scale: targetScale,
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
        className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain opacity-0 rounded-2xl"
      />
    </div>
  );
}
