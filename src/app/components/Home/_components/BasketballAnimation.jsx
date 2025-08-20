import { useEffect, useRef } from 'react';

const BasketballAnimation = () => {
  const basketballRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = basketballRef.current.getBoundingClientRect();

    const basketballCenterX = left + width / 2;
    const basketballCenterY = top + height / 2;

    const angle = Math.atan2(clientY - basketballCenterY, clientX - basketballCenterX);
    const distance = Math.min(Math.hypot(clientX - basketballCenterX, clientY - basketballCenterY), width / 2);

    const x = distance * Math.cos(angle);
    const y = distance * Math.sin(angle);

    basketballRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="basketball-container">
      <img
        src="/basketball.png"  // Adjust path if necessary
        alt="Basketball"
        className="basketball"
        ref={basketballRef}
      />

      <style jsx>{`
        .basketball-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .basketball {
          width: 100px;
          height: 100px;
          transition: transform 0.1s;
        }
      `}</style>
    </div>
  );
};

export default BasketballAnimation;
