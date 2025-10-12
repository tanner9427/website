// components/AboutTech.jsx
import styles from "./abouttech.module.css";
import Link from "next/link";

export default function AboutTech() {
    const tech = [
        "React", "Next.js", "GSAP", "TypeScript", "Figma",
        "Tailwind (optional)", "Node.js", "WordPress",
    ];

    return (
        <section id="about-tech" className={styles.section} aria-labelledby="about-tech-title">
            <div className={styles.inner}>
                {/* LEFT: About */}
                <div className={styles.about}>
                    <h2 id="about-tech-title" className={styles.h2}>Who I am</h2>
                    <p className={styles.blurb}>
                        I’m Tanner — a UI/UX-focused front-end and web developer who loves crafting
                        creative, accessible, and expressive digital experiences. I enjoy blending
                        clean design with smooth motion to make interfaces feel alive.
                    </p>
                    <p className={styles.blurb}>
                        Currently, I’m a <strong>Web Developer</strong> at <strong>Cedar Group</strong>, where I help strengthen
                        businesses and organizations across Juneau and Southeast Alaska. I love supporting projects
                        that uplift local communities and honor Indigenous cultures through thoughtful, purposeful design.
                    </p>
                    <Link href="/aboutme" className={styles.button}>
                        about me →
                    </Link>
                </div>
                {/* RIGHT: Tech */}
                <div className={styles.tech}>
                    <h3 className={styles.h3}>Current stack & tools</h3>
                    <ul className={styles.grid} role="list">
                        {tech.map((t) => (
                            <li key={t} className={styles.pill}>{t}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
