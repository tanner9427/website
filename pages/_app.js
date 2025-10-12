import { useEffect } from 'react';
import '../styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CursorManager() {
  useEffect(() => {
    // Respect touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Ensure a .cursor element exists
    let cursor = document.querySelector('.cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'cursor';
      cursor.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cursor);
    }

    // Update position (keep your CSS translate(-50%, -50%))
    const onMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.classList.remove('hidden');
    };

    // Hide/Show on window + tab boundaries
    const hide = () => cursor.classList.add('hidden');
    const show = () => cursor.classList.remove('hidden');

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mouseenter', show);
    window.addEventListener('blur', hide);
    window.addEventListener('focus', show);

    const onVis = () => (document.hidden ? hide() : show());
    document.addEventListener('visibilitychange', onVis);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('blur', hide);
      window.removeEventListener('focus', show);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <CursorManager />
      <Component {...pageProps} />
    </>
  );
}
