"use client";

import { useEffect, useRef } from "react";

const SRC =
  "Tamerlan Mammadov :: M.S. Cybersecurity, Webster University :: pentest, vulnerability assessment, Kali Linux, Burp Suite, TryHackMe :: Linux, TCP/IP, DNS, DHCP, VLSM :: HTML CSS JS SQL Oracle APEX :: PenTest+ Linux+ :: ";
const BYTES = Array.from(new TextEncoder().encode(SRC));
const hx = (n: number, l = 2) => n.toString(16).padStart(l, "0");
const DUMP = Array.from({ length: 420 }, (_, r) => {
  const b = Array.from({ length: 8 }, (_, k) => BYTES[(r * 8 + k) % BYTES.length]);
  return `${hx(r * 8, 6)}  ${b.map((v) => hx(v)).join(" ")}  ${b.map((v) => String.fromCharCode(v)).join("")}`;
}).join("\n");

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const name = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = root.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = matchMedia("(hover: none)").matches;
    const t0 = performance.now();
    let last = t0, pointerAt = -1, visible = true, raf = 0, ready = false;
    let cur = { x: 0, y: 0 }, tgt = { x: 0, y: 0 };

    const nameBox = () => {
      const h = el.getBoundingClientRect(), n = name.current!.getBoundingClientRect();
      return { x: n.left - h.left, y: n.top - h.top, w: n.width, h: n.height };
    };
    const start = nameBox();
    cur = tgt = { x: start.x + start.w * 0.5, y: start.y + start.h * 0.45 };
    cur = { ...cur };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tgt = { x: e.clientX - r.left, y: e.clientY - r.top };
      pointerAt = performance.now();
    };
    const down = () => el.classList.add("is-press");
    const up = () => el.classList.remove("is-press");
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerdown", down);
    addEventListener("pointerup", up);

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const idle = pointerAt < 0 || (touch && now - pointerAt > 2500);
      const t = (now - t0) / 1000;
      if (!reduce && idle) {
        const b = nameBox();
        const k = touch ? (Math.sin(t * 0.5) + 1) / 2 : Math.min(1, Math.max(0, (t - 0.4) / 2.2));
        const e = k * k * (3 - 2 * k);
        tgt = { x: b.x + b.w * (0.05 + 0.9 * e), y: b.y + b.h * (0.45 + 0.18 * Math.sin(t * 3.2)) };
      }
      const f = reduce ? 1 : 1 - Math.exp(-dt * 11);
      cur.x += (tgt.x - cur.x) * f;
      cur.y += (tgt.y - cur.y) * f;
      el.style.setProperty("--x", cur.x + "px");
      el.style.setProperty("--y", cur.y + "px");
      if (!ready) { ready = true; el.classList.add("ready"); }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerdown", down);
      removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={root}>
      <div className="container hero-content">
        <p className="hero-kicker">Cybersecurity &amp; IT professional building practical technical solutions.</p>
        <h1 ref={name}>
          Tamerlan
          <br />
          Mammadov<span className="dot">.</span>
        </h1>
        <div className="hero-row">
          <p className="hero-description">
            Cybersecurity graduate student with a B.S. in Computer Engineering and hands-on experience in systems administration,
            networking, web development, databases, and penetration testing.
          </p>
          <div className="hero-buttons">
            <a className="primary-button" href="#projects">View projects <span>↗</span></a>
            <a className="secondary-button" href="/Tamerlan_Mammadov_IT_Cybersecurity_Resume.pdf" target="_blank" rel="noopener noreferrer">View resume <span>↗</span></a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://github.com/TamerlanMammadov" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/tamerlan-mammadov-244812254" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="mailto:tamerlan.mamedov16@gmail.com">Email ↗</a>
        </div>
      </div>

      <div className="lens" aria-hidden="true"><pre>{DUMP}</pre></div>
      <div className="ring" aria-hidden="true" />
      <p className="hint" aria-hidden="true">
        <span className="hint-mouse">Move your cursor. Press to widen the lens.</span>
        <span className="hint-touch">There is more underneath.</span>
      </p>
    </section>
  );
}
