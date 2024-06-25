import Head from 'next/head';
import Layout from '../components/layout';
import styles from './work.module.css';

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>My Work | Tanner Tran</title>
            </Head>
            <section className={styles.workSection}>
                <h1>My Work</h1>
                <p>Here is a collection of projects and work that I have created.</p>
                <div className={styles.projectList}>
                    {/* Example project item */}
                    <div className={styles.projectItem}>
                        <img src="/images/project1.jpg" alt="Project 1" className={styles.projectImage} />
                        <div className={styles.projectInfo}>
                            <h2>Project 1</h2>
                            <p>Description of the project goes here. This can include technologies used, challenges faced, etc.</p>
                            <a href="https://example.com" target="_blank" className={styles.projectLink}>View Project</a>
                        </div>
                    </div>
                    {/* Add more project items as needed */}
                </div>
            </section>
        </Layout>
    );
}
