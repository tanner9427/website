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
                    <h1>SOME OF MY PAST WORKS</h1>
                </div>

                <div className={styles.projectList}>
                    <div className={styles.projectItem}>
                        {/* <h2>Leasify</h2>
                            <p>Software project done for software class yuh.</p> */}
                        <div className={styles.descriptionBox}>
                            <div className={styles.projectDescription}>
                                <h1 className={styles.textHead}>Leasify</h1>
                                <div className={styles.textAbout}>Subleasing application for Cal Poly students</div>
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
                                <div className={styles.textAbout}>Cal Poly Senior Project</div>
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
                                <h1 className={styles.textHead}>VEILODY</h1>
                                <div className={styles.textAbout}>Musical platform promoting anonymous expression and live jam sessions, designed to reduce performance anxiety.
                                    Submission for UCI's 2024 Designathon.
                                </div>
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
                                <div className={styles.textAbout}>A Spotify add-on to find friends with similar tastes near you..
                                </div>
                                <Link href="/projects/veilody" className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectItemBox}>
                            <Link href="/projects/veilody" passHref>
                                <img src="/images/Neighbor Profile.png" alt="SpotSync" className={styles.projectImage} />
                                {/* <div className={styles.projectInfo}>
                                <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                                </div> */}
                            </Link>
                        </div>

                    </div>

                    <div className={styles.projectItem}>
                        <img src="/images/project1.jpg" alt="SketchedOut" className={styles.projectImage} />
                        <div className={styles.projectInfo}>
                            <h2>SketchedOut</h2>
                            <p>Description of the project goes here. This can include technologies used, challenges faced, etc.</p>
                            <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
