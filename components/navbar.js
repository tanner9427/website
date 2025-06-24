import Link from 'next/link';
import styles from './navbar.module.css';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
    return (
        <div className={styles.navcontainer}>
            <div className={styles.navbar}>
                <div className={styles.logoName}>
                    <Link href="/" className = {styles.logoContainer}>
                            {/* <img src="/images/tt_icon.png" alt="Logo" className={styles.logo}></img> */}
                            <span className={styles.name}>TANNER TRAN</span>
                    </Link>
                </div>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="components/work.js">
                            work
                        </Link>
                        <ScrollLink>

                        </ScrollLink>
                    </li>
                    <li className={styles.item}>
                        <Link href="/Tanner Tran Resume.pdf" target="_blank" rel="noopener noreferrer">
                            resume
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="about me">
                            {/* <img src="/images/profileimg.svg" alt="About Me" className={styles.icon} /> */}
                            about me
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="contact">
                            contact me
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}