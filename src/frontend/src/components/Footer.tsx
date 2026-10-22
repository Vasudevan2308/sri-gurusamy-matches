import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const year = new Date().getFullYear();
const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
  typeof window !== "undefined"
    ? window.location.hostname
    : "srigurusamymatches",
)}`;

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

function SGMULogoSmall() {
  return (
    <svg
      width="36"
      height="24"
      viewBox="0 0 44 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SGMU Logo"
    >
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
      <rect
        x="3"
        y="3"
        width="38"
        height="23"
        rx="1.5"
        fill="oklch(0.36 0.08 32)"
      />
      <rect
        x="3"
        y="3"
        width="38"
        height="4.5"
        rx="1.5"
        fill="oklch(0.62 0.19 60)"
      />
      <rect
        x="3"
        y="21.5"
        width="38"
        height="4.5"
        rx="1.5"
        fill="oklch(0.62 0.19 60)"
      />
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

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <SGMULogoSmall />
              <div>
                <div className="font-display text-sm font-bold text-foreground">
                  Sri Gurusamy Matches Unit
                </div>
                <div className="font-body text-[10px] text-muted-foreground tracking-widest uppercase font-semibold">
                  Since 2007
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Manufacturing and supplying the best quality safety matches all
              over India and exporting outside India since 2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 font-medium"
                  data-ocid={`footer.${link.label.toLowerCase().replace(/\s/g, "_")}.link`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>
                  3/760-B, Naranapuram Road, Anuppankulam, Sivakasi – 626 189
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  {["+91 9443375091", "+91 9443375191", "+91 9489311091"].map(
                    (phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="hover:text-accent transition-colors duration-200 font-medium"
                        data-ocid="footer.phone.link"
                      >
                        {phone}
                      </a>
                    ),
                  )}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:srigurusamymatchesunit@gmail.com"
                  className="hover:text-accent transition-colors duration-200 break-all font-medium"
                >
                  srigurusamymatchesunit@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © 2007–{year} Sri Gurusamy Matches Unit. All rights reserved.
          </span>
          <span>
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
