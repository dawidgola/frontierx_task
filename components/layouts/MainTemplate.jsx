import React from 'react';
import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import Container from '@/components/global/Container';

const MainTemplate = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          backgroundColor: 0x0,
          maxDistance: 1.0,
          backgroundAlpha: 0.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="flex justify-center h-full relative">
      <div
        className="absolute h-full top-0 left-0 lg:left-[222px] right-0 z-[0] bg-pattern-main-gradient -rotate-180"
        ref={vantaRef}
      ></div>
      <Container>{children}</Container>
    </div>
  );
};

export default MainTemplate;
