import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Link href="profile">
                        <img src="/images/profileimg.svg" alt="Profile" className={styles.icon} />
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="">
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="resume">
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="contact">
                    </Link>
                </li>
            </ul>
        </div>
    )
}