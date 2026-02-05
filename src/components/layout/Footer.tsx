import { Link } from "react-router-dom";

const footerLinks = {
  institutional: [
    { label: "Contact", href: "/contact" },
    { label: "Press / Institutional Inquiries", href: "/press" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  policies: [
    { label: "Trademark & Designation Rules", href: "/trademark" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Full Document Index", href: "/documents" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border mt-section">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-medium mb-4">The CASM Institute</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A global, examination-based credential in advanced systems medicine and healthspan.
            </p>
          </div>

          {/* Institutional links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Institutional
            </p>
            <ul className="space-y-2">
              {footerLinks.institutional.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Policies
            </p>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} The CASM Institute. All rights reserved.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              v1.0 · Global Standard
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}