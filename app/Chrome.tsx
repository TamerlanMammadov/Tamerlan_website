"use client";

import { useEffect } from "react";

export default function Chrome() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>(".progress")!;
    const links = document.querySelectorAll<HTMLElement>(".nav-links button");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    const onMove = (e: PointerEvent) => {
      const c = (e.target as HTMLElement).closest<HTMLElement>(".project-card");
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", e.clientX - r.left + "px");
      c.style.setProperty("--my", e.clientY - r.top + "px");
    };
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const id = en.target.id === "training" ? "education" : en.target.id;
          links.forEach((l) => l.classList.toggle("active", l.dataset.id === id));
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("pointermove", onMove);
    onScroll();
    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div className="progress" aria-hidden="true" />;
}
