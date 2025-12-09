import React from 'react';

function IrisPattern2() {
  return (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="irisGrad">
        <stop offset="0%" stopColor="#241773" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#8e24aa" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#241773" stopOpacity="0.05" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#irisGrad)" />
    {[...Array(24)].map((_, i) => (
      <line
        key={i}
        x1="100"
        y1="100"
        x2={100 + 85 * Math.cos((i * Math.PI) / 12)}
        y2={100 + 85 * Math.sin((i * Math.PI) / 12)}
        stroke="#241773"
        strokeWidth="0.5"
        opacity="0.3"
      />
    ))}
    <circle cx="100" cy="100" r="30" fill="#241773" opacity="0.4" />
    <circle cx="100" cy="100" r="15" fill="#000" opacity="0.6" />
  </svg>
  );
}
export default IrisPattern2;