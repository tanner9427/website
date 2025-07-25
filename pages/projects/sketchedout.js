import Head from 'next/head';
import Layout from '../../components/layout'; // Adjust the path based on your project structure
import styles from './project.module.css'; // Create a CSS module for styling the page
import ImageModal from '../../components/ImageModal';

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
                        Created during the Sacramento Hackathon (SacHacks), SketchedOut is a collaborative online whiteboard that allows multiple people to draw together in real time.
                        Using socket.io and unique room IDs, anyone is able to create a space and invite friends to join. Users can change brush sizes, colors, and clear the board.
                    </p>
                    <p>
                        In this project, I focused on building out the front-end using React. I created the interactive canvas, drawing tools, and handled the visual design of the webpage.
                        This was my first experience working with HTML and CSS so I definitely wouldn't say this is one of my proudest works but figuring out the customizable tools
                        and getting the canvas to work was a huge accomplishment for me and I thoroughly enjoyed the process. Overall this project allowed me to learn new skills within a short
                        amount of time and it was fun to see my work come to life.
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