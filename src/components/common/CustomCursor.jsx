import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState('default');

  useEffect(() => {
    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let raf;
    let vis = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!vis) { vis = true; setVisible(true); }
    };

    const onLeave = () => { vis = false; setVisible(false); };

    const onOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor]');
      if (el) setVariant(el.dataset.cursor || 'hover');
    };

    const onOut = (e) => {
      if (!e.relatedTarget?.closest('a, button, [data-cursor]')) setVariant('default');
    };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor__dot cursor__dot--${variant}${visible ? ' cursor__dot--visible' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor__ring cursor__ring--${variant}${visible ? ' cursor__ring--visible' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
