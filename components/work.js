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
                            <div className= {styles.descriptionBox}>
                                <div className = {styles.projectDescription}>
                                    <h1 className = {styles.textHead}>LEASIFY</h1>
                                    <div className = {styles.textAbout}>Subleasing application for Cal Poly students</div>
                                    <div className = {styles.textDescription}>Designed and blah</div>
                                    <a href="" className = {styles.readMore}>Read More</a>
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
                            {/* <h2>Leasify</h2>
                            <p>Software project done for software class yuh.</p> */}
                            <div className= {styles.descriptionBox}>
                                <div className = {styles.projectDescription}>
                                    <h1 className = {styles.textHead}>VEILODY</h1>
                                    <div className = {styles.textAbout}>Music application</div>
                                    <div className = {styles.textDescription}>Designed and blah</div>
                                    <a href="" className = {styles.readMore}>Read More</a>
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
                        <img src="/images/project1.jpg" alt="Veilody" className={styles.projectImage} />
                        <div className={styles.projectInfo}>
                            <h2>Veilody</h2>
                            <p>Description of the project goes here. This can include technologies used, challenges faced, etc.</p>
                            <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                        </div>
                    </div>
                    <div className={styles.projectItem}>
                        <img src="/images/project1.jpg" alt="SpotSync" className={styles.projectImage} />
                        <div className={styles.projectInfo}>
                            <h2>SpotSync</h2>
                            <p>Description of the project goes here. This can include technologies used, challenges faced, etc.</p>
                            <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
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
