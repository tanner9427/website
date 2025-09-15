// pages/projects/bagel.js
import Head from 'next/head';
import Layout from '../../components/layout';
import styles from './project.module.css';
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';
import { getProjectNav } from '../../components/projectNav';

export default function Bagel() {
    const { prev, next } = getProjectNav('nybagel');

    // Change this to your real video URL:
    // - External (YouTube/Vimeo): e.g. "https://youtu.be/your-id"
    // - Local file: put /public/videos/bagel-walkthrough.mp4 and use "/videos/bagel-walkthrough.mp4"
    const WALKTHROUGH_URL = '/images/Bagel Shop Redesign.mp4';

    return (
        <Layout showHeader={false} showNavbar={true}>
            <Head>
                <title>New York Bagel Redesign - Tanner Tran</title>
            </Head>

            <div className={styles.container}>
                <h1 className={styles.title}>New York Bagel — WordPress Redesign</h1>

                <div className={styles.description}>
                    <p>
                        I redesigned a local bagel shop’s website in WordPress with Elementor, improving information architecture, 
                        performance, and accessibility. The redesign introduced a more appetizing visual hierarchy, simplified navigation, 
                        and a mobile-friendly layout that reflects the needs of their customers. Throughout the process, I spoke directly with 
                        the shop owners to better understand their business goals and how they wanted to connect with the community. 
                        This collaboration influenced both the layout decisions and the imagery I captured of the storefront and products, 
                        helping to present them authentically as a local neighborhood business. I also created reusable sections in Elementor 
                        and optimized site assets for faster load times.
                    </p>
                    {/* Embedded video */}
                    <video
                        className={styles.videoPlayer}
                        controls
                        preload="metadata"
                        poster="/images/bagel-thumb.jpg"  // optional thumbnail image
                    >
                        <source src="/images/Bagel Shop Redesign.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <p className={styles.moreInfo}>
                    Built with WordPress (Elementor), supported by the WP Accessibility plugin, semantic headings, and keyboard-friendly
                    navigation. This redesign was not fully deployed due to conflicts with the shop’s existing online ordering system.
                    You can view the current live website <a href="https://www.newyorkbagelsshop.com/" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
            </div>

            {/* Peek buttons (hidden on mobile if you like via CSS) */}
            <Link href={`/projects/${prev.slug}`} className={styles.peekPrev} aria-label={`Previous: ${prev.title}`}>
                <span>← {prev.title}</span>
            </Link>

            <Link href={`/projects/${next.slug}`} className={styles.peekNext} aria-label={`Next: ${next.title}`}>
                <span>{next.title} →</span>
            </Link>
        </Layout>
    );
}
