import Link from 'next/link';
import styles from './navbar.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Navbar() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [theme, setTheme] = useState('light');
    const [hover, setHover] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
            const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(event.target);

            if (clickedOutsideMenu && clickedOutsideButton) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);


    return (
        <div className={styles.navcontainer}>
            <div className={styles.navbar}>
                <div className={styles.logoName}>
                    <Link href="/" className={styles.logoContainer}>
                        <span className={styles.name}>TANNER TRAN</span>
                    </Link>

                    {/* Hamburger icon (visible only on mobile) */}
                    <button className={styles.hamburger} onClick={toggleMenu} ref={buttonRef}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </button>
                </div>

                <ul ref={menuRef} className={`${styles.items} ${isOpen ? styles.show : ''}`}>
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
            <div className={styles.themeToggle}>
                <button
                    onClick={toggleTheme}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <img
                        src={
                            theme === 'light'
                                ? hover
                                    ? '/icons/moonfilled.svg'
                                    : '/icons/moonoutline.svg'
                                : hover
                                    ? '/icons/sunfilled.svg'
                                    : '/icons/sunoutline.svg'
                        }
                        alt="Theme Toggle"
                        className={styles.icon}
                    />
                </button>
            </div>
        </div>
    );
}