"use client";

import React, { useEffect } from 'react';

const GoogleCSE: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=d3e00c3da7cfd4230';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="gcse-search"></div>
  );
};

export default GoogleCSE;
