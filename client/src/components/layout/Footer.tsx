import { Link } from "wouter";
import { Activity, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Kode Astra <span className="text-secondary">HealthCare</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
              Transforming healthcare through innovative technology solutions, expert consulting, and streamlined operational services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 border-b border-primary-foreground/10 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/provider-services" className="hover:text-secondary transition-colors">Provider Services</Link></li>
              <li><Link href="/payer-solutions" className="hover:text-secondary transition-colors">Payer Solutions</Link></li>
              <li><Link href="/laboratory-services" className="hover:text-secondary transition-colors">Laboratory Services</Link></li>
              <li><Link href="/consultancy" className="hover:text-secondary transition-colors">Consultancy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 border-b border-primary-foreground/10 pb-2">Company</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 border-b border-primary-foreground/10 pb-2">Contact Info</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Flat No: 106, Aditya Lake View Towers, Lake View Colony, Nizampet, Hyderabad, 500090</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+91 744 872 6536</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>contact@kodeastrahealthcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Kode Astra HealthCare. All rights reserved.
          </p>
          <div className="text-primary-foreground/50 text-sm">
            Designed for healthcare excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}