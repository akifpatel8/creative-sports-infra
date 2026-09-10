import { cn } from "./ui/utils";

type CertificationLogo = {
  id: string;
  name: string;
  sport: string;
  badgeText: string;
  color: string;
  renderIcon: () => React.ReactNode;
};

const CERTIFICATIONS: CertificationLogo[] = [
  {
    id: "world-athletics",
    name: "World Athletics",
    sport: "Running Tracks",
    badgeText: "IAAF Certified",
    color: "from-amber-500 to-orange-600",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="World Athletics">
        <circle cx="24" cy="24" r="22" className="stroke-amber-400" strokeWidth="2.5" />
        <path
          d="M13 28c3-7 8-11 13-11s9 4 12 11"
          className="stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M15 33c3-5 6-8 10-8s8 3 11 8"
          className="stroke-amber-400"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="14" r="3" className="fill-white" />
      </svg>
    ),
  },
  {
    id: "fifa-quality",
    name: "FIFA Quality",
    sport: "Football Turf",
    badgeText: "FIFA Quality Pro",
    color: "from-emerald-600 to-teal-700",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="FIFA Quality Pro">
        <path
          d="M24 4L9 9v14c0 10 6.5 19.5 15 21 8.5-1.5 15-11 15-21V9L24 4z"
          className="fill-blue-900 stroke-emerald-400"
          strokeWidth="2.5"
        />
        <text
          x="24"
          y="20"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="8.5"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.5"
        >
          FIFA
        </text>
        <rect x="14" y="24" width="20" height="7" rx="1.5" className="fill-emerald-500" />
        <text
          x="24"
          y="29.5"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="5"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.8"
        >
          QUALITY PRO
        </text>
      </svg>
    ),
  },
  {
    id: "bwf-badminton",
    name: "BWF Badminton",
    sport: "Badminton",
    badgeText: "BWF Approved",
    color: "from-blue-600 to-cyan-600",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="BWF Badminton">
        <circle cx="24" cy="24" r="22" className="stroke-cyan-400" strokeWidth="2.5" />
        {/* Shuttlecock representation */}
        <path
          d="M17 17l6 14 6-14H17z"
          className="fill-white/90 stroke-white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="33" r="3" className="fill-cyan-400 stroke-white" strokeWidth="1.5" />
        <line x1="20" y1="21" x2="26" y2="21" className="stroke-blue-900" strokeWidth="1.5" />
        <line x1="21.5" y1="26" x2="24.5" y2="26" className="stroke-blue-900" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "fiba-basketball",
    name: "FIBA Basketball",
    sport: "Basketball",
    badgeText: "FIBA Standard",
    color: "from-orange-600 to-amber-600",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="FIBA Basketball">
        <circle cx="24" cy="24" r="22" className="stroke-orange-500" strokeWidth="2.5" />
        {/* Basketball seams */}
        <circle cx="24" cy="24" r="17" className="stroke-orange-400 fill-orange-500/30" strokeWidth="2" />
        <line x1="7" y1="24" x2="41" y2="24" className="stroke-white" strokeWidth="2" />
        <line x1="24" y1="7" x2="24" y2="41" className="stroke-white" strokeWidth="2" />
        <path d="M12 12c7 7 7 17 0 24" className="stroke-white" strokeWidth="2" />
        <path d="M36 12c-7 7-7 17 0 24" className="stroke-white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "itf-tennis",
    name: "ITF Tennis",
    sport: "Tennis Courts",
    badgeText: "ITF Classified",
    color: "from-yellow-500 to-emerald-600",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="ITF Tennis">
        <circle cx="24" cy="24" r="22" className="stroke-yellow-400" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="15" className="fill-yellow-400/30 stroke-yellow-400" strokeWidth="2" />
        <path
          d="M13 19c6 1 10 5 11 11"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M35 29c-6-1-10-5-11-11"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text
          x="24"
          y="26.5"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="8"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
        >
          ITF
        </text>
      </svg>
    ),
  },
  {
    id: "nba-standard",
    name: "NBA Arena",
    sport: "Maple Hardwood",
    badgeText: "NBA Benchmark",
    color: "from-red-600 to-blue-700",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="NBA Standard">
        <rect x="14" y="6" width="20" height="36" rx="4" className="fill-blue-800 stroke-white" strokeWidth="2" />
        <rect x="14" y="6" width="10" height="36" rx="2" className="fill-red-600" />
        {/* Basketball Dribbler silhouette in white */}
        <circle cx="23" cy="14" r="2.5" className="fill-white" />
        <path
          d="M21 17l4 4-2 7 3 10h-2l-2.5-9-2.5 9h-2l2-11-3-4 1-5h3z"
          className="fill-white"
        />
        <circle cx="27" cy="24" r="2.5" className="fill-amber-400" />
      </svg>
    ),
  },
  {
    id: "fip-padel",
    name: "FIP Padel",
    sport: "Padel Courts",
    badgeText: "FIP Compliant",
    color: "from-sky-500 to-blue-700",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="FIP Padel">
        <circle cx="24" cy="24" r="22" className="stroke-sky-400" strokeWidth="2.5" />
        {/* Padel racket head */}
        <circle cx="24" cy="21" r="10" className="fill-sky-500/30 stroke-white" strokeWidth="2" />
        <rect x="22" y="31" width="4" height="9" rx="1.5" className="fill-white" />
        {/* Perforations */}
        <circle cx="21" cy="18" r="1" className="fill-white" />
        <circle cx="24" cy="18" r="1" className="fill-white" />
        <circle cx="27" cy="18" r="1" className="fill-white" />
        <circle cx="21" cy="21" r="1" className="fill-white" />
        <circle cx="24" cy="21" r="1" className="fill-white" />
        <circle cx="27" cy="21" r="1" className="fill-white" />
        <circle cx="21" cy="24" r="1" className="fill-white" />
        <circle cx="24" cy="24" r="1" className="fill-white" />
        <circle cx="27" cy="24" r="1" className="fill-white" />
      </svg>
    ),
  },
  {
    id: "wsf-squash",
    name: "WSF Squash",
    sport: "Squash Courts",
    badgeText: "WSF Certified",
    color: "from-emerald-500 to-green-700",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" className="size-9 fill-none shrink-0" aria-label="WSF Squash">
        <circle cx="24" cy="24" r="22" className="stroke-emerald-400" strokeWidth="2.5" />
        <rect x="14" y="14" width="20" height="20" rx="3" className="stroke-white fill-emerald-500/20" strokeWidth="2" />
        <line x1="14" y1="26" x2="34" y2="26" className="stroke-red-400" strokeWidth="2" />
        <line x1="24" y1="26" x2="24" y2="34" className="stroke-red-400" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" className="fill-yellow-300" />
      </svg>
    ),
  },
];

type CertificationLogosProps = {
  className?: string;
  theme?: "dark" | "light";
};

export function CertificationLogos({ className, theme = "dark" }: CertificationLogosProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <span
          className={cn(
            "h-px w-8 sm:w-12",
            isDark ? "bg-slate-700" : "bg-slate-300"
          )}
        />
        <p
          className={cn(
            "text-xs sm:text-sm font-bold tracking-widest uppercase",
            isDark ? "text-[#E35336]" : "text-blue-700"
          )}
        >
          Official Federation Standards &amp; Certified Flooring
        </p>
        <span
          className={cn(
            "h-px w-8 sm:w-12",
            isDark ? "bg-slate-700" : "bg-slate-300"
          )}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {CERTIFICATIONS.map((item) => (
          <div
            key={item.id}
            className={cn(
              "group flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-200",
              isDark
                ? "bg-slate-900/90 border-slate-800 hover:border-slate-600 hover:bg-slate-800/90 shadow-md"
                : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-md shadow-xs"
            )}
          >
            <div className="relative mb-2 transition-transform duration-200 group-hover:scale-110">
              {item.renderIcon()}
            </div>
            <span
              className={cn(
                "text-xs font-bold leading-tight line-clamp-1",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {item.name}
            </span>
            <span
              className={cn(
                "text-[10px] font-semibold mt-0.5 px-1.5 py-0.5 rounded-md",
                isDark
                  ? "text-emerald-300 bg-emerald-950/60 border border-emerald-800/50"
                  : "text-blue-700 bg-blue-50 border border-blue-200/60"
              )}
            >
              {item.badgeText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
