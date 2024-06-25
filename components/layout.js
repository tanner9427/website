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

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="Tanner Tran Website"
                    content="Tanner Tran's Personal Website"
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
                                <h1>Hi!</h1>
                                <h2>My name is Tanner, I'm a
                                    <span className={styles.autotypeEffect}>
                                        <ReactTypingEffect
                                            text={["Designer", "Developer", "Climber"]}
                                            speed={80}
                                            eraseDelay={2000}
                                            eraseSpeed={90}
                                        />
                                    </span>
                                </h2>
                                <h2>Computer science student currently based in Sacramento and studying at Cal Poly, SLO.</h2>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* <Link href="/">
                                <Image
                                    priority
                                    src="/images/profile2.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt=""
                                />
                            </Link> */}
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                    {name}
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
                <div className = {styles.mywork}>
                {home && <Work />}
                </div>
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