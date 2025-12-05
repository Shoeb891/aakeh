// components/BrainPattern.jsx
export default function BrainPattern() {
  return (
    <svg className="absolute right-0 top-0 w-1/2 h-full opacity-20" viewBox="0 0 800 600">
      <path
        d="M 100 300 Q 150 200, 200 300 T 300 300"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-blue-400"
      />
      {/* Add more paths for brain contours */}
    </svg>
  );
}