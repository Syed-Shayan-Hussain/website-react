import React, { useState } from 'react';

export default function Scroll() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
  
      setShowScroll(true);

  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="container">

      <button className="scroll position-fixed  fw-bold" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
         ^      </button>
    </div>
  );
}

