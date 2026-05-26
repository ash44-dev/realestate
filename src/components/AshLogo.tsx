import clsx from "clsx";

interface AshLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { svg: 20, text: "text-base" },
  md: { svg: 26, text: "text-xl" },
  lg: { svg: 32, text: "text-2xl" },
};

/**
 * ASH logomark — a geometric open "A" (two legs + yellow crossbar)
 * beside the "ASH" wordmark in Playfair Display.
 *
 * The SVG uses currentColor for the legs so it inherits whatever
 * text colour the parent sets (works on both dark page + dark footer).
 */
export default function AshLogo({ className, size = "md" }: AshLogoProps) {
  const { svg, text } = sizes[size];

  return (
    <span className={clsx("inline-flex items-center gap-2.5 select-none", className)}>
      {/* ── Geometric A mark ─────────────────────────────────────── */}
      <svg
        width={svg}
        height={Math.round(svg * 1.1)}
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left leg */}
        <path
          d="M12 2 L2 24"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Right leg */}
        <path
          d="M12 2 L22 24"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Crossbar — accent yellow */}
        <path
          d="M6 16 L18 16"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          className="text-accent"
        />
        {/* Apex dot — accent yellow */}
        <circle cx="12" cy="2" r="1.4" fill="currentColor" className="text-accent" />
      </svg>

      {/* ── Wordmark ─────────────────────────────────────────────── */}
      <span
        className={clsx("font-serif font-bold tracking-tight leading-none", text)}
      >
        <span className="text-accent">A</span>
        <span className="text-foreground">SH</span>
      </span>
    </span>
  );
}
