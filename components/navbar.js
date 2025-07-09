import Link from 'next/link';
import styles from './navbar.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={styles.navcontainer}>
            <div className={styles.navbar}>
                <div className={styles.logoName}>
                    <Link href="/" className={styles.logoContainer}>
                        <span className={styles.name}>TANNER TRAN</span>
                    </Link>
                    {/* <span style={{ color: 'white' }}>☰</span> */}

                    {/* Hamburger icon (visible only on mobile) */}
                    <button className={styles.hamburger} onClick={toggleMenu}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </button>
                </div>

                <ul className={`${styles.items} ${isOpen ? styles.show : ''}`}>
                    <li className={styles.item}>
                        {isHome ? (
                            <ScrollLink
                                to="myWork"
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className={styles.itemLink}
                            >
                                work
                            </ScrollLink>
                        ) : (
                            <Link href="/#myWork" className={styles.itemLink}>
                                work
                            </Link>
                        )}
                    </li>
                    <li className={styles.item}>
                        <Link href="/Tanner Tran Resume.pdf" target="_blank" rel="noopener noreferrer">
                            resume
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/aboutme">about me</Link>
                    </li>
                    <li className={styles.item}>
                        <a href="mailto:tanner9427@outlook.com">contact me</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}