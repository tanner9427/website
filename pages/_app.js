import { useEffect } from 'react';
import '../styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ThemeInitializer() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return null;
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeInitializer />
      <Component {...pageProps} />
    </>
  );
}
