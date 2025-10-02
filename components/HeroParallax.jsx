import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './navbar';

export default function HeroParallax() {
  const root = useRef(null);
  const starsRef = useRef(null);
  const mountainRef = useRef(null);
  const rocksRef = useRef(null);

  // aurora
  const auroraRef = useRef(null);

  // intro ref
  const introRef = useRef(null);
  const wordsRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        wordsRef.current.forEach((el) => { if (el) { el.style.opacity = 1; el.style.transform = "none"; } });
        return;
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=450vh",
          scrub: true,
        },
        defaults: { ease: "none" }
      })
        .to(starsRef.current, { y: -20 }, 0)
        .to(mountainRef.current, { y: 800, scale: 1.06, }, 0);
      gsap.from(wordsRef.current.filter(Boolean), {
        y: 41,               // move up
        autoAlpha: 0,        // fade in
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.30,
        delay: 0.25,
        clearProps: "transform,opacity" // state clean
      });

      gsap.to(".aurora.s", {
        x: "8vw",              // drift right
        yPercent: -3,          // tiny upward bias
        scale: 1.02,
        duration: 22,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".aurora.flip", {
        x: "-8vw",             // drift left
        yPercent: 2,           // tiny downward bias
        scale: 1.025,
        duration: 26,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".aurora.s", {
        y: "3vh",
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".aurora.flip", {
        y: "-3vh",
        duration: 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 5, // 180° phase shift vs .s
      });

      // slight rotation oscillation for organic feel
      gsap.to(".aurora.s", {
        rotate: 1.2,
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".aurora.flip", {
        rotate: -1.4,
        duration: 18,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // scroll parallax to the whole aurora stack
      gsap.to(".aurora-stack", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=200vh",
          scrub: true,
        },
      });

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={root} aria-label="Mountain Hero">
      <div className="navOverlay">
        <Navbar />
      </div>

      <h1 className="intro" ref={introRef} aria-label="Hi, I'm Tanner">
        <span className="word" ref={(el) => (wordsRef.current[0] = el)}>Hi,</span>{" "}
        <span className="word" ref={(el) => (wordsRef.current[1] = el)}>I'm</span>{" "}
        <span className="word" ref={(el) => (wordsRef.current[2] = el)}>Tanner.</span>
      </h1>

      <img ref={starsRef} src="/images/Night Back.png" alt="" className="layer stars" />
      <div className="auroraWrap">
        <img src="/images/Aurora.svg" alt="Aurora" className="aurora" />
      </div>
      <img ref={mountainRef} src="/images/Night Mountain.png" alt="" className="layer mountain" />
      <img ref={rocksRef} src="/images/Night Foreground.png" alt="" className="layer rocks" />

      <div className="bottomFade" aria-hidden="true" />
      <div className="hint">Scroll</div>

      <style jsx>{`
        .hero { position: relative; height: 100vh; overflow: clip; background: transparent; }
        .layer { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; will-change: transform, opacity; }
        .stars { z-index: 1; }
        .mountain { z-index: 2; }
        .rocks { z-index: 3; }

        .auroraWrap {
          position: absolute;
          top: -30%;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;          
          pointer-events: none;
        }

        :global(.aurora),
        :global(.aurora.clone) {
          position: absolute; inset: 0;           
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;            
          mix-blend-mode: screen;
          will-change: transform, filter, opacity;
        }

        /* Base layer: subtle */
        :global(.aurora) {
          opacity: 0.9;
        }

        /* Clone layer: softer, slightly blurrier glow that drifts differently */
        :global(.aurora.clone) {
          opacity: 0.55;
          filter: blur(2px);
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          :global(.aurora), :global(.aurora.clone) { animation: none !important; }
        }


        .intro {
          position: absolute;
          top: 25%;                 
          left: 5%;                
          margin: 0;
          font-family: "Unbounded", system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 5vw, 56px);
          line-height: 1.05;
          letter-spacing: 0.5px;
          color: #E6EEF5;
          text-shadow: 0 6px 24px rgba(0,0,0,0.35);
          z-index: 6;               /* above fades and images */
          pointer-events: none;     /* decorative; doesn't block scroll/clicks */
          will-change: transform, opacity;
        }
        .intro .word { display: inline-block; } /* needed so each word can move independently */

        .bottomFade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 22vh;
          background: linear-gradient(
            180deg,
            rgba(5, 29, 60, 0) 0%,
            #051D3C 85%,
            #051D3C 100%
          );
          z-index: 4;
          pointer-events: none;
        }
        .hint {
          position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
          font-size: 12px; letter-spacing: .2em; text-transform: uppercase;
          color: rgba(235,242,250,.8); z-index: 5; user-select: none;
        }

        @media (max-width: 768px) {
          .intro { left: 7%; top: 22%; font-size: clamp(24px, 7vw, 40px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .layer { transform: none !important; opacity: 1 !important; }
          .hint { display: none; }
          .intro .word { transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}
