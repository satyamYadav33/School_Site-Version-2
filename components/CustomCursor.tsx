
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const currentNav = NAV_LINKS.find(link => 
    link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path)
  );

  const cursorColor = currentNav?.cursorColor || '#1e3a8a';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button');
      
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out flex items-center justify-center"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1})`,
        }}
      >
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: cursorColor }}
        />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out border-[1.5px] rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          borderColor: cursorColor,
          opacity: 0.5,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;
