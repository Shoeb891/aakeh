// components/DottedCircle.tsx
export default function DottedCircle() {
  return (
    <svg
      className="w-80 h-80 text-yellow-300"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="currentColor"
        strokeWidth="10"
        fill="none"
        strokeDasharray="10 15" // 10px dash, 15px gap
      />
    </svg>
  );
}
