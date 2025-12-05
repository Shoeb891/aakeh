import React from 'react';

function IrisPattern() {
  return (
   <svg
      className="w-full h-full"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Outer glow circles */}
      <circle cx="100" cy="100" r="95" stroke="#1d968b" strokeWidth="1" opacity="0.15" />
      <circle cx="100" cy="100" r="92" stroke="#8e24aa" strokeWidth="1" opacity="0.15" />
      
      {/* Outer circle - sclera/eye outline */}
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="#1d968b"
        strokeWidth="3"
        opacity="0.5"
      />
      
      {/* Middle circle - iris border */}
      <circle
        cx="100"
        cy="100"
        r="65"
        stroke="#8e24aa"
        strokeWidth="2.5"
        strokeDasharray="10 8"
        opacity="0.6"
      />
      
      {/* Inner circle - pupil */}
      <circle
        cx="100"
        cy="100"
        r="35"
        stroke="#241773"
        strokeWidth="3"
        opacity="0.7"
        fill="#241773"
        fillOpacity="0.05"
      />
      
      {/* Radial lines - iris texture (more lines for detail) */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 100 + 38 * Math.cos(angle);
        const y1 = 100 + 38 * Math.sin(angle);
        const x2 = 100 + 65 * Math.cos(angle);
        const y2 = 100 + 65 * Math.sin(angle);
        
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#1d968b"
            strokeWidth="1.5"
            opacity="0.35"
            strokeDasharray="2 2"
          />
        );
      })}
      
      {/* Secondary iris ring */}
      <circle
        cx="100"
        cy="100"
        r="50"
        stroke="#8e24aa"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        opacity="0.4"
      />
      
      {/* Light reflection dots */}
      <circle cx="85" cy="85" r="8" fill="#1d968b" opacity="0.2" />
      <circle cx="80" cy="82" r="4" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}
export default IrisPattern;