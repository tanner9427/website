// components/AboutTech.jsx
import styles from "./abouttech.module.css";
import Link from "next/link";
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
    SiReact, SiNextdotjs, SiGreensock, SiFigma, SiJavascript,
    SiNodedotjs, SiWordpress, SiHtml5, SiCss3, SiTypescript
} from "react-icons/si";

export default function AboutTech() {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);
    itemsRef.current = [];

    useEffect(() => {
        const section = sectionRef.current;
        const els = itemsRef.current.filter(Boolean);
        if (!section || !els.length) return;

        // initial hidden state (also in CSS)
        gsap.set(els, { y: 24, opacity: 0 });

        // IO: fire only when 60% of section is visible
        const io = new IntersectionObserver(
            (entries) => {
                const e = entries[0];
                if (e.isIntersecting && e.intersectionRatio >= 0.6) {
                    gsap.to(els, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: { each: 0.18 }, // slower stagger
                    });
                    io.disconnect(); // run once
                }
            },
            { threshold: 0.6 } // tune to taste (0.5–0.7)
        );

        io.observe(section);
        return () => io.disconnect();
    }, []);


    const tech = [
        { name: "React", Icon: SiReact },
        { name: "Next.js", Icon: SiNextdotjs },
        { name: "JavaScript", Icon: SiJavascript },
        { name: "Figma", Icon: SiFigma },
        { name: "HTML5", Icon: SiHtml5 },
        { name: "CSS3", Icon: SiCss3 },
        { name: "WordPress", Icon: SiWordpress },
        { name: "GSAP", Icon: SiGreensock },
        { name: "TypeScript", Icon: SiTypescript },
        { name: "Node.js", Icon: SiNodedotjs },
    ];

    return (
        <section ref={sectionRef} id="about-tech" className={styles.section} aria-labelledby="about-tech-title">
            <div className={styles.inner}>
                {/* LEFT */}
                <div className={styles.about}>
                    {/* <h2 id="about-tech-title" className={styles.h2}>Who I am</h2> */}
                    <p className={styles.blurb}>
                        A UI/UX-focused front-end and web developer who loves crafting
                        creative, accessible, and expressive digital experiences. I enjoy blending
                        clean design with smooth motion to make interfaces feel alive.
                    </p>
                    {/* <p className={styles.blurb}>
                        Currently, I’m a <strong>Web Developer</strong> at {" "}
                        <a
                            href="https://cedargroupak.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.inlineLink}
                        >
                            <strong>Cedar Group</strong>
                        </a>, helping strengthen businesses and organizations while supporting projects that
                        uplift local communities and honor Indigenous cultures across Juneau and Southeast Alaska.
                        <Link href="/aboutme" className={styles.button}> Read more about me! →</Link>
                    </p> */}

                </div>

                {/* RIGHT */}
                <div className={styles.tech}>
                    <h3 className={styles.h3}>Stack & Tools</h3>
                    <ul className={styles.grid} role="list">
                        {tech.map(({ name, Icon }, i) => (
                            <li
                                key={name}
                                className={styles.techItem}
                                ref={(el) => (itemsRef.current[i] = el)}
                            >
                                <span className={styles.iconWrap} aria-hidden="true">
                                    <Icon className={styles.icon} />
                                </span>
                                <span className={styles.label}>{name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
