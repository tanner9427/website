import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';
import ReactTypingEffect from 'react-typing-effect';
import Work from './work';
import { useEffect } from 'react';

const name = 'Tanner Tran';
export const siteTitle = 'Tanner Tran';

export default function Layout({ children, home, showHeader = false, showNavbar = true }) {
    useEffect(() => {
        const cursor = document.getElementById("cursor");
        if (!cursor) return;

        // Config & helpers
        const HOVER_SEL =
            'a, button, [role="button"], label, input[type="submit"], .readMore, [data-hover-glow]';

        let lastX = -1;
        let lastY = -1;
        let rafId = 0;
        let scrolling = false;
        let scrollEndTimer;

        const show = () => cursor.classList.remove("hidden");
        const hide = () => {
            cursor.classList.add("hidden");
            cursor.classList.remove("hover");
        };

        const applyHoverFromElement = (el) => {
            if (el && el.closest && el.closest(HOVER_SEL)) {
                cursor.classList.add("hover");
            } else {
                cursor.classList.remove("hover");
            }
        };

        const syncHoverUnderPointer = () => {
            if (lastX < 0 || lastY < 0) return;
            const el = document.elementFromPoint(lastX, lastY);
            applyHoverFromElement(el);
        };

        // Pointer movement (primary source of truth)
        const onPointerMove = (e) => {
            lastX = e.clientX;
            lastY = e.clientY;
            cursor.style.top = lastY + "px";
            cursor.style.left = lastX + "px";
            show();
            syncHoverUnderPointer(); // immediate update on real moves
        };

        // Fallback over/out (still useful when moving between elements)
        const onPointerOver = (e) => applyHoverFromElement(e.target);
        const onPointerOut = (e) => {
            const to = e.relatedTarget;
            if (!to || !to.closest || !to.closest(HOVER_SEL)) {
                cursor.classList.remove("hover");
            }
        };

        // ------------------------
        // Scroll-aware hover sync
        // ------------------------
        const startScrollRaf = () => {
            if (rafId) return;
            const loop = () => {
                syncHoverUnderPointer();
                if (scrolling) rafId = requestAnimationFrame(loop);
                else {
                    cancelAnimationFrame(rafId);
                    rafId = 0;
                }
            };
            rafId = requestAnimationFrame(loop);
        };

        const onAnyScroll = () => {
            scrolling = true;
            startScrollRaf();
            clearTimeout(scrollEndTimer);
            scrollEndTimer = setTimeout(() => {
                scrolling = false;
                syncHoverUnderPointer(); // one last sync
            }, 120); // debounce scroll end
        };

        // Listen on capture so we catch scrolls in nested containers too
        document.addEventListener("scroll", onAnyScroll, true);
        window.addEventListener("wheel", onAnyScroll, { passive: true });
        // Touchpad/trackpad kinetic scroll on some browsers:
        window.addEventListener("touchmove", onAnyScroll, { passive: true });
        window.addEventListener("resize", onAnyScroll);

        // ------------------------
        // Hide when leaving tab/window
        // ------------------------
        const onMouseOutWindow = (e) => { if (!e.relatedTarget) hide(); };
        const onMouseLeaveDoc = () => hide();
        const onBlur = () => hide();
        const onVisibility = () => (document.hidden ? hide() : show());
        const onPointerCancel = () => hide();

        document.addEventListener("pointermove", onPointerMove, { passive: true });
        document.addEventListener("pointerover", onPointerOver, true);
        document.addEventListener("pointerout", onPointerOut, true);

        window.addEventListener("mouseout", onMouseOutWindow, true);
        document.addEventListener("mouseleave", onMouseLeaveDoc, true);
        window.addEventListener("blur", onBlur);
        document.addEventListener("visibilitychange", onVisibility);
        document.addEventListener("pointercancel", onPointerCancel, true);

        // Start hidden until first move
        hide();

        return () => {
            cancelAnimationFrame(rafId);
            clearTimeout(scrollEndTimer);

            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerover", onPointerOver, true);
            document.removeEventListener("pointerout", onPointerOut, true);

            document.removeEventListener("scroll", onAnyScroll, true);
            window.removeEventListener("wheel", onAnyScroll);
            window.removeEventListener("touchmove", onAnyScroll);
            window.removeEventListener("resize", onAnyScroll);

            window.removeEventListener("mouseout", onMouseOutWindow, true);
            document.removeEventListener("mouseleave", onMouseLeaveDoc, true);
            window.removeEventListener("blur", onBlur);
            document.removeEventListener("visibilitychange", onVisibility);
            document.removeEventListener("pointercancel", onPointerCancel, true);
        };
    }, []);


    return (
        <div className={styles.outerContainer}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#051D3C" />
                <meta name="Tanner Tran Website" content="Tanner Tran's Personal Website" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="description"
                    content="Tanner Tran is a UI/UX-focused web and front-end developer that graduated from Cal Poly, SLO. His work focuses on thoughtful, accessible user design and experiences"
                />
            </Head>
            {/* {showNavbar && <Navbar />} */}
            <div className={styles.innerContainer}>
                {showHeader && (
                    <div className={styles.headerContainer}>
                        <header className={styles.header}>
                            {/* {home ? (
                                <>
                                    <div className={styles.autotype}>
                                        <h1>My name is Tanner,</h1>
                                        <h1>I'm a
                                            <span className={styles.autotypeEffect}>
                                                <ReactTypingEffect
                                                    text={["UI Designer.", "Frontend Developer.", "UX Designer.", "Web Developer.", "Web Designer.", "Problem-Solver."]}
                                                    speed={80}
                                                    eraseDelay={2000}
                                                    eraseSpeed={90}
                                                />
                                            </span>
                                        </h1>
                                        <h2>Developer and designer based in Sacramento with a background in Computer Science and a passion for web development and design.</h2>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2 className={utilStyles.headingLg}>
                                        <Link href="/" className={utilStyles.colorInherit}>
                                            {name}
                                        </Link>
                                    </h2>
                                </>
                            )} */}
                        </header>
                    </div>
                )}
                <main className={styles.mainContent}>
                    {children}
                </main>

                <div className={styles.mywork}>
                    {home && <Work />}
                </div>

                <div className={styles.currentlyBar}>
                    <span>currently • </span>
                    <span>listening to <a href="https://open.spotify.com/track/3wBy12K7BHKHJspUwJw8fq?si=6b9ea817f0674b5e" target="_blank" rel="noopener noreferrer">mojo pin</a> • </span>
                    <span>watching <a href="https://www.imdb.com/title/tt7160372/" target="_blank" rel="noopener noreferrer">the zone of interest</a> • </span>
                    <span>reading <a href="https://www.goodreads.com/book/show/13623848-the-song-of-achilles" target="_blank" rel="noopener noreferrer">the song of achilles</a></span>
                    <span className={styles.signature}>© 2025 Tanner Tran. Built with Next.js, chalky hands, & ❤.</span>
                </div>
            </div>
            <div id="cursor" className="cursor"></div>
        </div>
    );
}
