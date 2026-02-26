import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lightbulb, Network, Code2, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Consultancy() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/src/assets/images/consultancy.jpg')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">IT Consultancy</h1>
            <p className="text-xl text-primary-foreground/80">
              Strategic guidance and technical execution to align your healthcare IT with business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Strategic Technology Transformation</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Technology is only as good as the strategy behind it. Our consultancy practice bridges the gap between clinical needs and technical capabilities, delivering actionable roadmaps and flawless execution.
            </p>
          </div>

          <div className="space-y-24">
            <ConsultingArea 
              icon={<Lightbulb className="h-10 w-10 text-secondary" />}
              title="Healthcare IT Strategy"
              description="We help organizations define their future state. From interoperability roadmaps to vendor selection (EHR/EMR), we provide unbiased, expert advice to ensure your IT investments deliver measurable returns."
              points={["Digital transformation roadmaps", "Vendor evaluation and selection", "IT governance and organizational design", "M&A technology due diligence"]}
              reverse={false}
            />
            
            <ConsultingArea 
              icon={<Network className="h-10 w-10 text-secondary" />}
              title="Cloud Migration & Infrastructure"
              description="Safely transition your sensitive healthcare workloads to modern cloud environments (AWS, Azure, GCP). We architect for resilience, performance, and compliance from day one."
              points={["Cloud readiness assessments", "Architecture design and provisioning", "Legacy system modernization", "Disaster recovery and business continuity"]}
              reverse={true}
            />

            <ConsultingArea 
              icon={<Code2 className="h-10 w-10 text-secondary" />}
              title="Product Engineering"
              description="Build bespoke software solutions tailored to your unique clinical or operational workflows. Our engineering teams utilize modern stacks to create secure, scalable, and intuitive applications."
              points={["Custom patient portals", "Clinical workflow automation", "Mobile health (mHealth) applications", "API development and FHIR integrations"]}
              reverse={false}
            />

            <ConsultingArea 
              icon={<Lock className="h-10 w-10 text-secondary" />}
              title="Security & Compliance"
              description="Protect patient data and organizational reputation against evolving threats. Our security practice ensures your infrastructure meets the stringent requirements of healthcare regulations."
              points={["HIPAA and HITRUST compliance audits", "Cybersecurity risk assessments", "Penetration testing and vulnerability scanning", "Security architecture design"]}
              reverse={true}
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Build Your IT Strategy?</h2>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white text-primary hover:text-secondary h-14 px-8 text-lg font-semibold mt-4">
            <Link href="/contact">Speak with a Consultant</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ConsultingArea({ icon, title, description, points, reverse }: { icon: React.ReactNode, title: string, description: string, points: string[], reverse: boolean }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
      <div className="md:w-1/2">
        <div className="mb-6 inline-flex bg-primary/5 p-4 rounded-2xl">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-lg text-foreground/70 mb-6 leading-relaxed">{description}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
              <span className="text-sm font-medium text-primary/80">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="aspect-video bg-muted rounded-2xl border border-border/50 relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
           <div className="text-primary/20 scale-150">
             {icon}
           </div>
        </div>
      </div>
    </div>
  );
}