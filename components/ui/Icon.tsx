import type { SVGProps } from "react";

type IconName =
  | "notebook"
  | "chat"
  | "family"
  | "mic"
  | "grid"
  | "calendar"
  | "shield"
  | "phone"
  | "heart"
  | "doc"
  | "trophy"
  | "lock"
  | "flag"
  | "arrow"
  | "check"
  | "play"
  | "image"
  | "users"
  | "sparkles"
  | "bell"
  | "stethoscope";

const paths: Record<IconName, React.ReactNode> = {
  notebook: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3v18M13 8h3M13 12h3" />
    </>
  ),
  chat: <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" />,
  family: (
    <>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="9" r="2" />
      <path d="M3 21v-1a6 6 0 0 1 12 0v1M15 21v-1a5 5 0 0 1 6-4.9" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </>
  ),
  shield: <path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />,
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
    </>
  ),
  heart: <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 7a5 5 0 0 1 9.5 5C19 16.5 12 21 12 21z" />,
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 5H4v1a3 3 0 0 0 3 3M17 5h3v1a3 3 0 0 1-3 3M12 14v3M8 21h8M9 21a3 3 0 0 1 6 0" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  flag: <path d="M5 21V4m0 0c3-1.5 6 1.5 9 0s5-1.5 5-1.5v9s-2 1.5-5 1.5-6-1.5-9 0" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 13l4 4L19 7" />,
  play: <path d="M8 5v14l11-7z" />,
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5L5 21" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a6 6 0 0 1 12 0v2M16 3.5a4 4 0 0 1 0 7M21 21v-2a6 6 0 0 0-3-5" />
    </>
  ),
  sparkles: <path d="M12 3l1.8 4.8L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.7zM19 14l.9 2.4 2.4.9-2.4.9L19 21l-.9-2.4-2.4-.9 2.4-.9z" />,
  bell: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />,
  stethoscope: (
    <>
      <path d="M5 3v6a4 4 0 0 0 8 0V3M5 3H4M5 3h1M12 3h-1M12 3h1" />
      <path d="M9 13v3a5 5 0 0 0 10 0v-1" />
      <circle cx="19" cy="13" r="2" />
    </>
  ),
};

export default function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
