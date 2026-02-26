import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Stethoscope, ShieldCheck, Microscope, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/src/assets/images/hero.jpg")' }}
        />
        <div className="absolute inset-0 z-10 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-primary/90 to-transparent" />
        
        <div className="container relative z-30 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
              Transforming Healthcare through Technology & Expertise
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Elevating clinical and financial outcomes with comprehensive IT services, strategic consulting, revenue cycle optimization, and laboratory support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-0 text-lg h-14 px-8">
                <Link href="/contact">Request Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg h-14 px-8">
                <Link href="/consultancy">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Specialized Solutions</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We provide tailored solutions across the healthcare continuum to drive efficiency, compliance, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Stethoscope className="h-10 w-10 text-secondary" />}
              title="Provider Services"
              description="Revenue Cycle Management, Clinical Documentation Improvement, and Billing Optimization."
              link="/provider-services"
              delay={0.1}
            />
            <ServiceCard 
              icon={<ShieldCheck className="h-10 w-10 text-secondary" />}
              title="Payer Solutions"
              description="Secure cloud platforms, claims management, and automation for insurance providers."
              link="/payer-solutions"
              delay={0.2}
            />
            <ServiceCard 
              icon={<Microscope className="h-10 w-10 text-secondary" />}
              title="Laboratory Services"
              description="Startup advisory, licensing & compliance, LIMS integration, and operational support."
              link="/laboratory-services"
              delay={0.3}
            />
            <ServiceCard 
              icon={<Briefcase className="h-10 w-10 text-secondary" />}
              title="Consultancy"
              description="IT strategy, cloud migration, product engineering, security & compliance."
              link="/consultancy"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Partner with Kode Astra?</h2>
              <div className="space-y-6">
                <Feature 
                  title="Deep Healthcare Expertise" 
                  description="Our team consists of industry veterans who understand the nuances of healthcare workflows."
                />
                <Feature 
                  title="Technology-Driven Approach" 
                  description="We leverage the latest in cloud, analytics, and automation to solve complex challenges."
                />
                <Feature 
                  title="Measurable Outcomes" 
                  description="We focus on delivering ROI through improved revenue, reduced costs, and enhanced care quality."
                />
              </div>
              <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-white">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] bg-muted rounded-2xl overflow-hidden relative shadow-lg">
               <img src="/src/assets/images/consultancy.jpg" alt="Healthcare Consultancy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how our solutions can drive your success.
          </p>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 border-0 h-14 px-8 text-lg font-semibold">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, link, delay }: { icon: React.ReactNode, title: string, description: string, link: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
        <CardContent className="p-8 flex flex-col h-full">
          <div className="mb-6 bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-xl font-heading font-semibold text-primary mb-3">{title}</h3>
          <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
          <Link href={link} className="flex items-center text-secondary font-medium hover:text-primary transition-colors mt-auto">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Feature({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-primary">{title}</h4>
        <p className="text-foreground/70 mt-1">{description}</p>
      </div>
    </div>
  );
}