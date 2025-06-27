import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './project.module.css'; // Create a CSS module for styling the page

export default function Leasify() {
    return (
        <Layout showHeader = {false} showNavbar = {true} >
            <Head>
                <title>Leasify - Tanner Tran</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Leasify</h1>
                <p className={styles.description}>
                    <p>This is a project that I worked on with a team during my software development class, Leasify is a web-based application that
                    aims to provide subleasing options for Cal Poly students who plan on looking or listing a rental place. The application is built
                    in Next.js to support fast refresh and modern web development features. For the databased, we utilized the Prisma schema to manage things such as property and profile information.
                    </p>
                    <p>
                    My main focus was on the frontend development. I started by creating mockups on Figma of
                    various pages  such as the property listing, profile, login, and landing pages.
                    After creating the mockups, I implemented and linked it to the appropriate pages, ensuring everything worked smoothly.
                    I also set up the profile and listings properties and attributes. 
                    <p>
                    This project was really helpful for me as it provided hand-on experience with creating an application, setting realistic goals, and working on a timeline.
                    This collaborative process with my group gave me a glance into projects I may encounter within the real world, with deadlines and objectives.
                    </p>
                    </p>
                </p>
                <div className={styles.imageGrid}>
                    <img src="/images/Landing Page 1.png" alt="Landing Page" className={styles.projectImage} />
                    <img src="/images/Listings Page.png" alt="Listing Page" className={styles.projectImage} />
                    <img src="/images/Login Page.png" alt="Landing Page" className={styles.projectImage} />
                </div>
                {/* <p className={styles.moreInfo}>
                    For more details, visit the <a href="https://example.com" target="_blank" rel="noopener noreferrer">project website</a>.
                </p> */}
            </div>
        </Layout>
    );
}