import Head from 'next/head';
import Layout from '../components/layout';
import styles from './work.module.css';
import Link from 'next/link';

export default function Work() {
    return (
        <div>
            <Head>
                <title>Tanner Tran</title>
            </Head>
            <section id="myWork" className={styles.mywork}>
                <div className={styles.headerBox}>
                    <h1>Selected Works</h1>
                </div>

                <div className={styles.projectList}>
                    <div className={styles.projectItem}>
                        {/* <h2>Leasify</h2>
                            <p>Software project done for software class yuh.</p> */}
                        <div className={styles.descriptionBox}>
                            <div className={styles.projectDescription}>
                                <h1 className={styles.textHead}>Leasify</h1>
                                <div className={styles.textAbout}>Subleasing platform for Cal Poly students built with Next.js and Prisma. </div>
                                <Link href="/projects/leasify" className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectItemBox}>
                            <Link href="/projects/leasify" passHref>
                                <img src="/images/Leasify.png" alt="Leasify" className={styles.projectImage} />
                                {/* <div className={styles.projectInfo}>
                                <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                                </div> */}
                            </Link>
                        </div>

                    </div>
                    <div className={styles.projectItem}>
                        <div className={styles.descriptionBox}>
                            <div className={styles.projectDescription}>
                                <h1 className={styles.textHead}>Rhythm-Learning Gamification</h1>
                                <div className={styles.textAbout}>Senior project investigating whether rhythm-based video games can improve music reading skills. </div>
                                <Link href="/projects/gamification" className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectItemBox}>
                            <Link href="/projects/gamification" passHref>
                                <img src="/images/AsteroidDodge.png" alt="Rhythm Gamification" className={styles.projectImage} />
                                {/* <div className={styles.projectInfo}>
                                <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                                </div> */}
                            </Link>
                        </div>

                    </div>

                    <div className={styles.projectItem}>
                        {/* <h2>Leasify</h2>
                            <p>Software project done for software class yuh.</p> */}
                        <div className={styles.descriptionBox}>
                            <div className={styles.projectDescription}>
                                <h1 className={styles.textHead}>Veilody</h1>
                                <div className={styles.textAbout}>Musical platform promoting anonymous expression and live jam sessions, designed to reduce performance anxiety.</div>
                                <Link href="/projects/veilody" className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectItemBox}>
                            <Link href="/projects/veilody" passHref>
                                <img src="/images/Veilody.png" alt="Veilody" className={styles.projectImage} />
                                {/* <div className={styles.projectInfo}>
                                <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                                </div> */}
                            </Link>
                        </div>

                    </div>

                    <div className={styles.projectItem}>
                        {/* <h2>Leasify</h2>
                            <p>Software project done for software class yuh.</p> */}
                        <div className={styles.descriptionBox}>
                            <div className={styles.projectDescription}>
                                <h1 className={styles.textHead}>SpotSync</h1>
                                <div className={styles.textAbout}>A Spotify add-on to find friends with similar tastes near you.
                                </div>
                                <Link href="/projects/spotsync" className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectItemBox}>
                            <Link href="/projects/spotsync" passHref>
                                <img src="/images/Neighbor Profile.png" alt="SpotSync" className={styles.projectImage} />
                                {/* <div className={styles.projectInfo}>
                                <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                                </div> */}
                            </Link>
                        </div>
                    </div>

                    <div className={styles.projectItem}>
                        {/* <h2>Leasify</h2>
                            <p>Software project done for software class yuh.</p> */}
                        <div className={styles.descriptionBox}>
                            <div className={styles.projectDescription}>
                                <h1 className={styles.textHead}>SketchedOut</h1>
                                <div className={styles.textAbout}>A Spotify add-on to find friends with similar tastes near you..
                                </div>
                                <Link href="/projects/sketchedout" className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectItemBox}>
                            <Link href="/projects/sketchedout" passHref>
                                <img src="/images/sketchedout.jpg" alt="SketchedOut" className={styles.projectImage} />
                                {/* <div className={styles.projectInfo}>
                                <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                                </div> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
