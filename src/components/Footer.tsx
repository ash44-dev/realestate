import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-2xl font-bold tracking-tight">
              Estate<span className="text-accent-light">&</span>
            </span>
            <p className="font-sans text-white/50 text-sm max-w-xs leading-relaxed">
              Exceptional homes for discerning buyers. Where real estate meets
              artistry.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            © {year} Estate &. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/30">
            Privacy Policy · Terms of Service · DRE #01234567
          </p>
        </div>
      </div>
    </footer>
  );
}
