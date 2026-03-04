"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function initScrollAnimations() {
  registerGSAP();

  const sections = document.querySelectorAll("[data-animate]");
  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

export function initCounterAnimation(
  element: HTMLElement,
  target: number,
  suffix: string = ""
) {
  registerGSAP();

  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 60%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + suffix;
    },
  });
}
