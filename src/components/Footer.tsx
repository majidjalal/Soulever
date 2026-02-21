import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold">SOULEVER</span>
          <span className="text-gold text-lg font-bold"> by Beyond</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} SOULEVER by Beyond. All rights reserved.
        </p>
        <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-gold transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
