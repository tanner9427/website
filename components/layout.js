import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';
import ReactTypingEffect from 'react-typing-effect';
import Work from './work';

const name = 'Tanner Tran';
export const siteTitle = 'Tanner Tran';

export default function Layout({ children, home, showHeader = false, showNavbar = true }) {
    return (
        <div className={styles.outerContainer}>
            <Head>
                <link rel="icon" href="/images/favicon.png" />
                <meta name="Tanner Tran Website" content="Tanner Tran's Personal Website" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
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
        </div>
    );
}
