import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.name}>Tanner Tran</a>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Link href="work">
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="resume">
                        <img src="/images/resume.svg" alt="About Me" className={styles.icon} />
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="contact">
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="about me">
                        <img src="/images/profileimg.svg" alt="About Me" className={styles.icon} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}