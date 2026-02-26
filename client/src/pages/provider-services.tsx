import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, FileText, DollarSign, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function ProviderServices() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/src/assets/images/provider-services.jpg')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Provider Services</h1>
            <p className="text-xl text-primary-foreground/80">
              Empowering healthcare providers with end-to-end operational, financial, and clinical technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Optimizing the Business of Care</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Kode Astra HealthCare partners with physician groups, hospitals, and specialized clinics to streamline their financial and operational workflows. Our services are designed to reduce administrative burden so you can focus on patient care.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                From patient registration to final payment, our comprehensive suite ensures maximum revenue capture, compliance, and efficiency.
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">Discuss Your Needs</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img src="/src/assets/images/provider-services.jpg" alt="Doctors reviewing data" className="object-cover w-full h-full" />
            </div>
          </div>

          <h3 className="text-2xl font-heading font-bold text-center text-primary mb-12">Core Service Areas</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceHighlight 
              icon={<DollarSign className="h-8 w-8 text-secondary" />}
              title="Revenue Cycle Management (RCM)"
              items={[
                "End-to-end billing and collections",
                "Denial management and appeals",
                "Accounts receivable (A/R) recovery",
                "Patient responsibility processing"
              ]}
            />
            <ServiceHighlight 
              icon={<FileText className="h-8 w-8 text-secondary" />}
              title="Clinical Documentation Improvement (CDI)"
              items={[
                "Concurrent and retrospective chart reviews",
                "Physician education and training",
                "DRG optimization",
                "Quality metrics tracking"
              ]}
            />
            <ServiceHighlight 
              icon={<Activity className="h-8 w-8 text-secondary" />}
              title="Coding & Compliance"
              items={[
                "Certified medical coding (ICD-10, CPT, HCPCS)",
                "Coding audits and compliance risk assessments",
                "Specialty-specific coding expertise",
                "Regulatory updates management"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceHighlight({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <div className="bg-muted p-8 rounded-2xl border border-border/50 hover:border-secondary/30 transition-colors">
      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-primary mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}