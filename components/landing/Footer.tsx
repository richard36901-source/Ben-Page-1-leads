import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} כל הזכויות שמורות
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              מדיניות פרטיות
            </Link>
            <Link
              to="/terms-of-use"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
