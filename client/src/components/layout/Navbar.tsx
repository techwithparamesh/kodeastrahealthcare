import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/provider-services", label: "Provider Services" },
  { href: "/payer-solutions", label: "Payer Solutions" },
  { href: "/laboratory-services", label: "Laboratory Services" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-primary">
                Kode Astra <span className="text-secondary">HealthCare</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
                      location === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <Button asChild className="ml-4 bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium cursor-pointer",
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}