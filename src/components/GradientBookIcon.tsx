import React from 'react';

type GradientBookIconProps = {
  size?: number;
  className?: string;
  colors?: string[];
  strokeWidth?: number;
};

export default function GradientBookIcon({
  size = 40,
  className = '',
  colors = ['#60a5fa', '#a855f7', '#ec4899'],
  strokeWidth = 2
}: GradientBookIconProps) {
  // useId ensures the same ID between server and client to avoid hydration mismatches
  const gradientId = `book-gradient-${React.useId()}`;

  // Build gradient stops evenly spaced across provided colors
  const stops = colors.map((c, i) => (
    <stop key={i} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={c} />
  ));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          {stops}
        </linearGradient>
      </defs>
      {/* Simple open book: two rounded rectangles and a center seam */}
      <rect x="3" y="5" width="8" height="14" rx="2" ry="2" stroke={`url(#${gradientId})`} strokeWidth={strokeWidth} />
      <rect x="13" y="5" width="8" height="14" rx="2" ry="2" stroke={`url(#${gradientId})`} strokeWidth={strokeWidth} />
      <line x1="12" y1="5" x2="12" y2="19" stroke={`url(#${gradientId})`} strokeWidth={strokeWidth} />
    </svg>
  );
}