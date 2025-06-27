import Head from 'next/head';
import Layout from '../components/layout';
import styles from './aboutme.module.css';
import Slider from 'react-slick';

export default function AboutMe() {
    const settings = {
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Layout showHeader={false}>
            <Head>
                <title>About Me - Tanner Tran</title>
            </Head>
            <div className={styles.aboutContainer}>
                <div className={styles.description}>
                    <h1>About Me</h1>
                    <p>
                        Hi! I'm Tanner, a UI/UX designer and developer passionate about creating beautiful, functional digital experiences.
                        I love rock climbing, music, and blending creativity with technology. Currently based in Sacramento, studying at Cal Poly, SLO.
                    </p>
                </div>

                <div className={styles.carouselWrapper}>
                    <Slider {...settings}>
                        <div className={styles.slide}>
                            <img src="/images/halfdome.jpeg" alt="Half Dome" />
                            <p className={styles.caption}>Reaching the top of Half Dome, Yosemite</p>
                        </div>
                        <div className={styles.slide}>
                            <img src="/images/piratescove.jpg" alt="Pirates Cove" />
                            <p className={styles.caption}>Exploring Pirate's Cove</p>
                        </div>
                        <div className={styles.slide}>
                            <img src="/images/sockhop.jpg" alt="Bouldering" />
                            <p className={styles.caption}>Bouldering in Ojai</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </Layout>
    );
}
