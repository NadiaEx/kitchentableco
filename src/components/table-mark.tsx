export function TableMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* chairs */}
      <rect x="27" y="3" width="10" height="6" rx="1.5" fill="currentColor" />
      <rect x="27" y="55" width="10" height="6" rx="1.5" fill="currentColor" />
      <rect x="3" y="27" width="6" height="10" rx="1.5" fill="currentColor" />
      <rect x="55" y="27" width="6" height="10" rx="1.5" fill="currentColor" />
      {/* table */}
      <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
