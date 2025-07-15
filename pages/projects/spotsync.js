import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './project.module.css'; // Create a CSS module for styling the page

export default function SpotSync() {
    return (
        <Layout showHeader={false} showNavbar={true} >
            <Head>
                <title>SpotSync - Tanner Tran</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>SpotSync</h1>
                <p className={styles.description}>
                    <p>
                        SpotSync is a UI redesign project done during my User-Centered Interface Design and Development course
                        that adds social connectivity features to match peoples music taste on Spotify.
                        Music says a lot about who you are, so the idea of creating something to meet others with similar tastes really resonated with me.
                        We designed SpotSync to match people based on what they're listening to through already existing data on Spotify.
                        With the data, Spotify will generate a 'Neighbors' page with individuals, either near or far, with highest compatibility
                        along with artists and songs that they share the most in common.
                    </p>
                    <p>
                        The project originally started as a bigger social networking app, but we decided to pivot and focus on Spotify integration to keep things realistic and more focused.
                    </p>
                </p>
                <div className={styles.imageGrid}>
                    <img src="/images/Neighbors.png" alt="Neighbors" className={styles.projectImage} />
                    <img src="/images/Neighbors Profile.png" alt="Neighbors Profile" className={styles.projectImage} />
                    <img src="/images/SpotSync User Jouney.jpg" alt="SpotSync User Journey" className={styles.projectImage} />
                </div>
                {/* <p className={styles.moreInfo}>
                    For more details, visit the <a href="https://example.com" target="_blank" rel="noopener noreferrer">project website</a>.
                </p> */}
            </div>
        </Layout>
    );
}