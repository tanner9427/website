import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const HeroParallax = dynamic(() => import('../components/HeroParallax'), { ssr: false });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('#myWork')) {
      const el = document.getElementById('myWork');
      if (el) {
        // Timeout ensures the DOM is ready
        setTimeout(() => {
          const yOffset = -100; // Adjust for navbar height
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 50);
      }
    }
  }, [router.asPath]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroParallax />
      <section className={utilStyles.headingMd}>
      </section>
    </Layout>
  );
}