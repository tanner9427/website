import Head from 'next/head';
import Layout from '../../components/layout';
import styles from './project.module.css';
import { projects } from '../../components/projectData';
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';
import { getProjectNav } from '../../components/projectNav';

export default function Gamification() {
  const { prev, next } = getProjectNav('gamification');

  return (
    <Layout showHeader={false} showNavbar={true}>
      <Head>
        <title>Rhythm Learning Gamification - Tanner Tran</title>
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Rhythm Learning Gamification</h1>

        <div className={styles.description}>
          <p>
            For my senior project, I developed a rhythm-based video game to help musicians improve their ability to read and perform rhythms.
            The project compared how well students learned using a game versus traditional worksheets. I ran user studies, analyzed rhythm performance data,
            collected user feedback through surveys and interviews, and explored how gamification can make learning music more engaging.
            This project combined my interests in user experience, educational technology, and research.
          </p>
        </div>

        <div className={styles.imageGrid}>
          <ImageModal src="/images/Digital Flyer.png" alt="Digital Flyer" className={styles.projectImage} />
          <ImageModal src="/images/Worksheet.PNG" alt="Rhythm Worksheet" className={styles.projectImage} />
        </div>

        <p className={styles.moreInfo}>
          View the full research study{' '}
          <Link href="/rhythm.pdf" target="_blank" rel="noopener noreferrer">here</Link>.
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
