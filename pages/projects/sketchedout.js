import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './project.module.css'; // Create a CSS module for styling the page

export default function SketchedOut() {
    return (
        <Layout showHeader={false} showNavbar={true} >
            <Head>
                <title>SketchedOut - Tanner Tran</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>SketchedOut</h1>
                <p className={styles.description}>
                    <p>
                        Designed during the UCI 2024 Designathon, Veilody is a music-based social platform designed to reduce performance anxiety and allow more inclusive musical expression.
                        The app encourages users to share their music anonymously through custom avatars and connect with oters in virtual live jam sessions.
                    </p>
                    <p>
                        My role focused on user interface design and interactive mockups. The platform was designed on Figma and covered key features such as a dashboard with a friends list,
                        trending live sessions and genre discovery. An anonymous jam feature was also implemented where users can join or host private music rooms along with a live comment stream.
                    </p>
                </p>
                {/* <div className={styles.imageGrid}>
                    <img src="/images/Neighbors.png" alt="Neighbors" className={styles.projectImage} />
                    <img src="/images/Neighbors Profile.png" alt="Neighbors Profile" className={styles.projectImage} />
                </div> */}
                <p className={styles.moreInfo}>
                    For more details, visit the <a href="https://devpost.com/software/sketchedout" target="_blank" rel="noopener noreferrer">Devpost</a>.
                </p>
            </div>
        </Layout>
    );
}