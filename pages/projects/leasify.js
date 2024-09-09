import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './leasify.module.css'; // Create a CSS module for styling the page

export default function Leasify() {
    return (
        <Layout showHeader = {false} showNavbar = {true} >
            <Head>
                <title>Leasify - Tanner Tran</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Leasify</h1>
                <div className={styles.content}>
                    <p className={styles.description}>Subleasing application for Cal Poly students</p>
                    <p className={styles.details}>
                        Leasify is a project designed to help students at Cal Poly find and manage subleases. It was built using [Technologies used], and it addresses the challenges of [specific challenges]. The project includes features like [key features].
                    </p>
                    <img src="/images/Leasify_Demo.png" alt="Leasify Demo" className={styles.image} />
                </div>
                <p className={styles.moreInfo}>
                    For more details, visit the <a href="https://example.com" target="_blank" rel="noopener noreferrer">project website</a>.
                </p>
            </div>
        </Layout>
    );
}