import type { CSSProperties } from "react";

interface MenaLogoIconProps {
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
}

interface MenaLogoFullProps {
  iconSize?: number;
  className?: string;
}

export function MenaLogoIcon({
  className = "h-8 w-8 shrink-0 text-primary",
  style,
  "aria-hidden": ariaHidden = true,
}: MenaLogoIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      <path d="M2 36V17L12 7L20 15L28 7L38 17V36H30V22H26V36H14V22H10V36Z" />
    </svg>
  );
}

export function MenaLogoFull({ iconSize = 24, className }: MenaLogoFullProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <MenaLogoIcon
        style={{ width: iconSize, height: iconSize }}
        className="shrink-0 text-primary"
        aria-hidden
      />
      <span className="font-bold tracking-tight">Mena Inmobiliaria</span>
    </div>
  );
}
