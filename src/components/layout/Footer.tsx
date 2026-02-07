import { Link } from "react-router-dom";

const footerLinks = {
  institutional: [
    { label: "Contact", href: "/contact" },
    { label: "Press & Institutional Inquiries", href: "/press" },
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
    <footer className="border-t border-foreground/8 mt-16">
      <div className="container-regular">
        {/* Navigation level */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-[15px] font-medium mb-4">The CASM Institute</p>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ maxWidth: '32ch' }}>
              A global, examination-based credential in advanced systems medicine and healthspan.
            </p>
          </div>

          {/* Institutional */}
          <div>
            <p className="label-institutional mb-4">INSTITUTIONAL</p>
            <ul className="space-y-2.5">
              {footerLinks.institutional.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-[160ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="label-institutional mb-4">POLICIES</p>
            <ul className="space-y-2.5">
              {footerLinks.policies.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-[160ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Meta legal level */}
        <div className="py-6 border-t border-foreground/8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="font-mono text-[11px] text-muted-foreground tracking-wider">
              © {new Date().getFullYear()} The CASM Institute. All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wider">
              Version v1.0 · Global Standard
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}