import Link from 'next/link';
import styles from './navbar.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

export default function Navbar() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // close mobile menu on outside click
  useEffect(() => {
    const close = (e) => {
      const outsideMenu = menuRef.current && !menuRef.current.contains(e.target);
      const outsideBtn = buttonRef.current && !buttonRef.current.contains(e.target);
      if (outsideMenu && outsideBtn) setIsOpen(false);
    };
    if (isOpen) document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [isOpen]);

  useEffect(() => {
    if (!mounted || !navRef.current) return;
    gsap.registerPlugin(ScrollTrigger, Flip);

    const nav = navRef.current;
    let fixed = false;

    const toFixed = () => {
      const state = Flip.getState(nav);
      nav.classList.add(styles.fixed);
      Flip.from(state, {
        duration: 0.55,
        ease: 'power2.inOut',
        onStart: () => {
          gsap.to(nav, {
            '--pill-radius': '0px',
            '--h': '56px',
            boxShadow: 'none',
            duration: 0.55,
            ease: 'power2.inOut',
          });
        },
      });
      fixed = true;
    };

    const toFloat = () => {
      const state = Flip.getState(nav);
      nav.classList.remove(styles.fixed);
      Flip.from(state, {
        duration: 0.55,
        ease: 'power2.inOut',
        onStart: () => {
          gsap.to(nav, {
            '--pill-radius': '18px',
            '--bg': 'rgba(20,28,34,0.6)',
            '--h': '72px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
            duration: 0.55,
            ease: 'power2.inOut',
          });
        },
      });
      fixed = false;
    };

    const st = ScrollTrigger.create({
      start: 80,
      onUpdate: (self) => {
        if (self.scroll() > 80 && !fixed) toFixed();
        else if (self.scroll() <= 80 && fixed) toFloat();
      },
    });

    return () => st.kill();
  }, [mounted]);

  if (!mounted) return null;

  // Render the nav in a portal so it overlays the WHOLE page (hero + rest)
  return createPortal(
    <div ref={overlayRef} className={styles.overlay} aria-hidden={false}>
      <div className={styles.wrap}>
        <nav ref={navRef} className={styles.navbar} aria-label="Primary Navigation">
          <div className={styles.logoRow}>
            <Link href="/" className={styles.logoContainer} onClick={() => setIsOpen(false)}>
              <span className={styles.name}>TANNER TRAN</span>
            </Link>

            <button
              className={styles.hamburger}
              onClick={() => setIsOpen((o) => !o)}
              ref={buttonRef}
              aria-expanded={isOpen}
              aria-controls="primary-menu"
              aria-label="Toggle navigation menu"
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </button>
          </div>

          <ul id="primary-menu" ref={menuRef} className={`${styles.items} ${isOpen ? styles.show : ''}`}>
            <li className={styles.item}>
              {isHome ? (
                <ScrollLink to="myWork" smooth duration={500} offset={-100} className={styles.itemLink} onClick={() => setIsOpen(false)}>
                  work
                </ScrollLink>
              ) : (
                <Link href="/#myWork" className={styles.itemLink} onClick={() => setIsOpen(false)}>
                  work
                </Link>
              )}
            </li>
            <li className={styles.item}>
              <Link href="/Tanner Tran Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.itemLink} onClick={() => setIsOpen(false)}>
                resume
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/aboutme" className={styles.itemLink} onClick={() => setIsOpen(false)}>
                about me
              </Link>
            </li>
            <li className={styles.item}>
              <a href="mailto:tanner9427@outlook.com" className={styles.itemLink} onClick={() => setIsOpen(false)}>
                contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>,
    document.body
  );
}
