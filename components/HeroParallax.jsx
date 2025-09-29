import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './navbar';

export default function HeroParallax() {
    const root = useRef(null);
    const starsRef = useRef(null);
    const mountainRef = useRef(null);
    const rocksRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduce) return;

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
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={root} aria-label="Mountain Hero">
            <div className="navOverlay">
                <Navbar />
            </div>
            <img ref={starsRef} src="/images/Night Back.png" alt="" className="layer stars" />
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
        .bottomFade {
          position: absolute; left: 0; right: 0; bottom: -1px; height: 22vh;
          background: linear-gradient(180deg, rgba(5,29,60,0) 0%, #051d3c 85%, #041730 100%);
          z-index: 4; pointer-events: none;
        }
        .hint {
          position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
          font-size: 12px; letter-spacing: .2em; text-transform: uppercase;
          color: rgba(235,242,250,.8); z-index: 5; user-select: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .layer { transform: none !important; opacity: 1 !important; }
          .hint { display: none; }
        }
      `}</style>
        </section>
    );
}
