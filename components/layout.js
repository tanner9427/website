import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';
import ReactTypingEffect from 'react-typing-effect';

const name = 'Tanner Tran';
export const siteTitle = 'Tanner Tran';

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <header className={styles.header}>
                    {home ? (
                        <>
                            {/* <Image
                                priority
                                src="/images/profile2.jpg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt=""
                            /> */}
                            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
                            <div className={styles.autotype}>
                                <h2>Hi, my name is Tanner, I'm a
                                    <span className={styles.autotypeEffect}>
                                        <ReactTypingEffect
                                            text={["Designer", "Developer", "Climber"]}
                                            speed={80}
                                            eraseDelay={2000}
                                            eraseSpeed={90}
                                        />
                                    </span>
                                </h2>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <Image
                                    priority
                                    src="/images/profile2.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt=""
                                />
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                    {name}
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
                {/* <Navbar /> */}
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">← Back to home</Link>
                    </div>
                )}
            </div>
        </div>
    );
}