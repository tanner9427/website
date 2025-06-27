import Link from 'next/link';
import styles from './navbar.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const isHome = router.pathname === '/';

    return (
        <div className={styles.navcontainer}>
            <div className={styles.navbar}>
                <div className={styles.logoName}>
                    <Link href="/" className={styles.logoContainer}>
                        {/* <img src="/images/tt_icon.png" alt="Logo" className={styles.logo}></img> */}
                        <span className={styles.name}>TANNER TRAN</span>
                    </Link>
                </div>
                <ul className={styles.items}>
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
                        <Link href="/aboutme">
                            about me
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <a href="mailto:tanner9427@outlook.com">
                            contact me
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}