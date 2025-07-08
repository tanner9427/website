import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './project.module.css'; // Create a CSS module for styling the page
import Link from 'next/link';

export default function Gamification() {
    return (
        <Layout showHeader={false} showNavbar={true} >
            <Head>
                <title>Rhythm Learning Gamification - Tanner Tran</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Rhythm Learning Gamification</h1>
                <p className={styles.description}>
                    <p>
                        For my senior project, I developed a rhythm-based video game to help musicians improve their ability to read and perform rhythms.
                        he project compared how well students learned using a game versus traditional worksheets. I ran user studies, analyzed rhythm performance data,
                        collected user feedback through surveys and interviews, and explored how gamification can make learning music more engaging.
                        This project combined my interests in user experience, educational technology, and research.
                    </p>
                </p>
                <div className={styles.imageGrid}>
                    <img src="/images/Digital Flyer.png" alt="Digital Flyer" className={styles.projectImage} />
                    <img src="/images/Worksheet.PNG" alt="Rhythm Worksheet" className={styles.projectImage} />
                </div>
                <p className={styles.moreInfo}>
                    View the full research study <Link href="/rhythm.pdf" target="_blank" rel="noopener noreferrer">
                            here
                        </Link>.
                </p>
            </div>
        </Layout>
    );
}