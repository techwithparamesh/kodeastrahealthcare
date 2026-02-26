import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Shield, Cloud, BarChart3, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function PayerSolutions() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/src/assets/images/payer-solutions.jpg')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Payer Solutions</h1>
            <p className="text-xl text-primary-foreground/80">
              Modernizing payer operations with scalable platforms, automated claims processing, and actionable analytics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24 flex-row-reverse">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img src="/src/assets/images/payer-solutions.jpg" alt="Payer Solutions Analytics" className="object-cover w-full h-full" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Next-Generation Systems for Health Insurers</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Health plans face unprecedented pressure to lower administrative costs while improving member experiences and provider relations. Kode Astra delivers the technological foundation required to meet these demands.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                We design and implement secure, cloud-ready architectures that break down data silos, automate complex workflows, and provide real-time insights into population health and financial performance.
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>

          <h3 className="text-2xl font-heading font-bold text-center text-primary mb-12">Our Payer Technology Offerings</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard 
              icon={<Database className="h-8 w-8 text-secondary" />}
              title="Core Administration Systems"
              description="Modernization and integration of legacy claims and enrollment systems for greater agility and reduced maintenance costs."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-secondary" />}
              title="Claims Automation & Fraud Detection"
              description="AI-driven claims adjudication workflows that increase auto-adjudication rates while identifying anomalous patterns indicative of FWA."
            />
            <FeatureCard 
              icon={<Cloud className="h-8 w-8 text-secondary" />}
              title="Secure Cloud Infrastructure"
              description="HIPAA-compliant, HITRUST-certified cloud migrations that ensure data availability, disaster recovery, and infinite scalability."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-8 w-8 text-secondary" />}
              title="Advanced Analytics & Reporting"
              description="Enterprise data warehousing and BI dashboards for VBC tracking, risk adjustment, and member churn prediction."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-6 p-8 bg-muted/50 rounded-2xl border border-transparent hover:border-border transition-all">
      <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm h-16 w-16 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-primary mb-3">{title}</h4>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}