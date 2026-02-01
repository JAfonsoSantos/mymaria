import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-primary">
              MyMaria
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Your personal AI assistant, built around you. MyMaria helps you remember, organize, and act — through WhatsApp and the tools you already use.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              MyMaria is an independent service and is not affiliated with Meta or WhatsApp.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Get in touch
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@mymaria.io" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  support@mymaria.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} MyMaria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;