const grains: Array<[number, number, number, string]> = [
  [710, 155, 12, "#416f8f"],
  [805, 210, 16, "#4f9ca7"],
  [890, 184, 10, "#ac7d2e"],
  [980, 248, 18, "#416f8f"],
  [1082, 226, 13, "#4f9ca7"],
  [760, 326, 15, "#ac7d2e"],
  [848, 268, 11, "#416f8f"],
  [944, 332, 17, "#4f9ca7"],
  [1030, 292, 12, "#ac7d2e"],
  [1115, 350, 16, "#416f8f"],
  [694, 448, 14, "#4f9ca7"],
  [790, 412, 17, "#416f8f"],
  [895, 462, 13, "#ac7d2e"],
  [994, 420, 16, "#4f9ca7"],
  [1088, 504, 12, "#416f8f"],
  [770, 594, 12, "#ac7d2e"],
  [1025, 588, 15, "#416f8f"]
];

export function ContactNetworkGraphic() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      viewBox="0 0 1200 760"
      role="img"
      aria-label="Abstract contact network inspired by granular materials"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="grainGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.78" />
          <stop offset="55%" stopColor="#f2e5c2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f7f3ea" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="760" fill="url(#grainGlow)" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M710 155 L805 210 L890 184 L980 248 L1082 226"
          stroke="#416f8f"
          strokeOpacity="0.32"
          strokeWidth="2.4"
        />
        <path
          d="M760 326 L848 268 L944 332 L1030 292 L1115 350"
          stroke="#4f9ca7"
          strokeOpacity="0.34"
          strokeWidth="2.2"
        />
        <path
          d="M694 448 L790 412 L895 462 L994 420 L1088 504"
          stroke="#ac7d2e"
          strokeOpacity="0.32"
          strokeWidth="2"
        />
        <path
          d="M770 594 C850 536 932 532 1025 588"
          stroke="#416f8f"
          strokeOpacity="0.2"
          strokeWidth="5"
        />
        <path
          d="M736 222 C846 300 918 390 1008 518"
          stroke="#17202a"
          strokeOpacity="0.09"
          strokeWidth="8"
        />
      </g>
      <g>
        {grains.map(([cx, cy, r, fill]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={r}
            fill={fill}
            opacity="0.32"
          />
        ))}
      </g>
    </svg>
  );
}
