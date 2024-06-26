import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navcontainer}>
            <div className={styles.navbar}>
                <div className = {styles.logoName}>
                <img src="/images/Tanner Tran Logo.png" alt="Logo" className={styles.logo}></img>
                <a className={styles.name}>Tanner Tran</a>
                </div>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="work">
                            work
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="resume">
                            {/* <img src="/images/resumeline.svg" alt="About Me" className={styles.icon} /> */}
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