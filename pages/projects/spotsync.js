import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './project.module.css'; // Create a CSS module for styling the page

export default function SpotSync() {
    return (
        <Layout showHeader = {false} showNavbar = {true} >
            <Head>
                <title>SpotSync - Tanner Tran</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>SpotSync</h1>
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
                <div className={styles.imageGrid}>
                    <img src="/images/Veilody Login.png" alt="Login Page" className={styles.projectImage} />
                    <img src="/images/Veilody Dashboard.png" alt="Dashboard" className={styles.projectImage} />
                    <img src="/images/Jam Session.png" alt="Jam Session" className={styles.projectImage} />
                </div>
                {/* <p className={styles.moreInfo}>
                    For more details, visit the <a href="https://example.com" target="_blank" rel="noopener noreferrer">project website</a>.
                </p> */}
            </div>
        </Layout>
    );
}