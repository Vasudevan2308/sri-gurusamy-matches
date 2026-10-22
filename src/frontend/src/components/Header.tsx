import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// SGMU Matchbox SVG Logo
function SGMULogo({ size = 44 }: { size?: number }) {
  const w = size;
  const h = Math.round(size * 0.65);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 44 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sri Gurusamy Matches Unit Logo"
    >
      {/* Outer box body — warm deep red */}
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="28"
        rx="2.5"
        fill="oklch(0.28 0.09 28)"
        stroke="oklch(0.62 0.19 60)"
        strokeWidth="1"
      />
      {/* Inner label panel — lighter warm tone */}
      <rect
        x="3"
        y="3"
        width="38"
        height="23"
        rx="1.5"
        fill="oklch(0.36 0.08 32)"
      />
      {/* Top accent stripe */}
      <rect
        x="3"
        y="3"
        width="38"
        height="4.5"
        rx="1.5"
        fill="oklch(0.62 0.19 60)"
      />
      {/* Bottom accent stripe */}
      <rect
        x="3"
        y="21.5"
        width="38"
        height="4.5"
        rx="1.5"
        fill="oklch(0.62 0.19 60)"
      />
      {/* Vertical side strikes (match striker texture) */}
      <rect
        x="3"
        y="3"
        width="3"
        height="23"
        rx="1"
        fill="oklch(0.5 0.14 38)"
      />
      <rect
        x="38"
        y="3"
        width="3"
        height="23"
        rx="1"
        fill="oklch(0.5 0.14 38)"
      />
      {/* SGMU letters */}
      <text
        x="22"
        y="17.5"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="900"
        fontSize="10"
        letterSpacing="1.5"
        fill="oklch(0.97 0.03 75)"
      >
        SGMU
      </text>
      {/* Match stick decorative element — top right */}
      <line
        x1="36"
        y1="9"
        x2="36"
        y2="14"
        stroke="oklch(0.85 0.12 60)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="36" cy="8" r="1.5" fill="oklch(0.55 0.22 25)" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="header.link"
        >
          <div className="transition-smooth group-hover:scale-105">
            <SGMULogo size={44} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-foreground tracking-tight leading-none">
              SRI GURUSAMY
            </div>
            <div className="font-body text-[10px] text-muted-foreground tracking-widest uppercase font-semibold">
              Matches Unit
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-body font-medium transition-smooth",
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-muted",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          data-ocid="header.mobile_menu.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-md text-sm font-body font-medium transition-smooth",
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-muted",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
