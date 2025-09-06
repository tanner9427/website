import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './project.module.css'; // Create a CSS module for styling the page
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';
import { projects } from '../../components/projectData';
import { getProjectNav } from '../../components/projectNav';

export default function Veilody() {
    const { prev, next } = getProjectNav('veilody');

    return (
        <Layout showHeader={false} showNavbar={true} >
            <Head>
                <title>Veilody - Tanner Tran</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Veilody</h1>
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
                    <ImageModal src="/images/Veilody Login.png" alt="Login Page" className={styles.projectImage} />
                    <ImageModal src="/images/Veilody Dashboard.png" alt="Dashboard" className={styles.projectImage} />
                    <ImageModal src="/images/Jam Session.png" alt="Jam Session" className={styles.projectImage} />
                </div>
                <p className={styles.moreInfo}>
                    View the project on Figma <Link href="https://www.figma.com/design/QGmBUuzgVTTBV2N0rZk1OI/Veilody-UCI-Designathon-2024?node-id=2-3&t=85ZSCAaFNj8z9NYI-1" target="_blank" rel="noopener noreferrer">
                        here
                    </Link>.
                </p>
            </div>
            {/* Peek buttons */}
            <Link href={`/projects/${prev.slug}`} className={styles.peekPrev} aria-label={`Previous: ${prev.title}`}>
                <span>← {prev.title}</span>
            </Link>

            <Link href={`/projects/${next.slug}`} className={styles.peekNext} aria-label={`Next: ${next.title}`}>
                <span>{next.title} →</span>
            </Link>
        </Layout>
    );
}