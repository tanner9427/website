import Head from 'next/head';
import Layout from '../components/layout';
import styles from './aboutme.module.css';
import Navbar from '../components/navbar';
import Slider from 'react-slick';

export default function AboutMe() {
    const settings = {
        centerMode: false,
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0px',
                },
            },
        ],
    };

    return (
        <>
            <Navbar variant="sticky" />
            <Layout showHeader={false}>
                <Head>
                    <title>About Me - Tanner Tran</title>
                </Head>
                <div className={styles.aboutContainer}>
                    <div className={styles.description}>
                        <h1>About Me</h1>
                        <p>
                            I'm Tanner, a developer and designer passionate about creating beautiful, functional applications and websites.
                            I graduated Cal Poly SLO with a degree in Computer Science.
                            My strengths are in UI/UX design, web development, and graphic design, but I also have experience with software
                            engineering and enjoy working with technical projects. I am very passionate on blending creativity with technology
                            and bringing ideas to life.
                        </p>
                        <p>
                            In my spare time, I love playing and listening to music. Aside from that, you will usually see me calligraphing or
                            outside on a bike or climbing.
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
        </>
    );
}
