import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Briefcase, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  position: z.string().min(2, "Position is required"),
  linkedin: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  message: z.string().min(10, "Please tell us why you're a good fit"),
});

export default function Careers() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      linkedin: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. Our HR team will contact you soon.",
    });
    form.reset();
  }

  const jobs = [
    { title: "Senior Medical Coder", department: "Provider Services", location: "Remote", type: "Full-time" },
    { title: "Healthcare Data Analyst", department: "Payer Solutions", location: "Dallas, TX / Hybrid", type: "Full-time" },
    { title: "LIMS Implementation Specialist", department: "Lab Services", location: "Travel required", type: "Contract" },
    { title: "Cloud Architecture Consultant", department: "IT Consultancy", location: "Remote", type: "Full-time" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary pt-32 pb-20 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-primary-foreground/80">
              Build the future of healthcare technology with a team of passionate experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Open Positions */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">Open Positions</h2>
              <div className="space-y-4">
                {jobs.map((job, idx) => (
                  <Card key={idx} className="border border-border/50 hover:border-secondary/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{job.title}</h3>
                        <p className="text-sm font-medium text-foreground/50 mb-3">{job.department}</p>
                        <div className="flex items-center gap-4 text-sm text-foreground/70">
                          <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="shrink-0" onClick={() => {
                        form.setValue("position", job.title);
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}>
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-5" id="application-form">
              <div className="bg-muted p-8 rounded-2xl shadow-sm border border-border/50 sticky top-28">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-secondary" />
                  Submit Application
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Full Name</Label>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Label>Email</Label>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <Label>Phone</Label>
                            <FormControl>
                              <Input placeholder="(555) 000-0000" {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Desired Position</Label>
                          <FormControl>
                            <Input placeholder="e.g. Data Analyst" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="linkedin"
                      render={({ field }) => (
                        <FormItem>
                          <Label>LinkedIn Profile (Optional)</Label>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/..." {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Cover Letter / Message</Label>
                          <FormControl>
                            <Textarea placeholder="Tell us why you'd be a great fit..." className="min-h-[120px] bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                      Submit Application
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}