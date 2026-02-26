import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, FlaskConical, ClipboardCheck, Cog, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function LaboratoryServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/src/assets/images/lab-services.jpg')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Laboratory Services</h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive operational, compliance, and IT support for clinical and molecular laboratories.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Accelerating Lab Performance</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              From initial startup to scaling operations, Kode Astra provides the specialized expertise required to navigate the complex regulatory and technical landscape of diagnostic testing. We ensure your lab runs efficiently, profitably, and in full compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LabCard 
              icon={<FlaskConical className="h-8 w-8 text-secondary" />}
              title="Startup Advisory"
              features={[
                "Feasibility studies",
                "Equipment procurement strategy",
                "Space and workflow design",
                "Go-to-market planning"
              ]}
            />
            <LabCard 
              icon={<ClipboardCheck className="h-8 w-8 text-secondary" />}
              title="Licensing & Compliance"
              features={[
                "CLIA / CAP certification support",
                "State-specific licensing",
                "Mock inspections",
                "Standard Operating Procedures (SOPs)"
              ]}
            />
            <LabCard 
              icon={<Cog className="h-8 w-8 text-secondary" />}
              title="LIMS Integration"
              features={[
                "System selection and configuration",
                "Instrument interfacing",
                "EHR / EMR connectivity",
                "Workflow automation"
              ]}
            />
            <LabCard 
              icon={<LineChart className="h-8 w-8 text-secondary" />}
              title="Operational Analytics"
              features={[
                "Turnaround time (TAT) monitoring",
                "Reagent utilization tracking",
                "Revenue and profitability dashboards",
                "Quality control metrics"
              ]}
            />
          </div>

          <div className="mt-20 bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Expert Guidance for Your Lab?</h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our team of laboratory operations specialists and IT architects are ready to help you optimize your diagnostic facility.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Link href="/contact">Contact Our Lab Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function LabCard({ icon, title, features }: { icon: React.ReactNode, title: string, features: string[] }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
      <div className="mb-6 relative z-10">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-primary mb-6 relative z-10">{title}</h4>
      <ul className="space-y-4 relative z-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
            <span className="text-sm text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}