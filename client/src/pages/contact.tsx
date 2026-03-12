import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Please provide some details about your inquiry"),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent",
      description: "We've received your inquiry and will respond within 24 hours.",
    });
    form.reset();
  }

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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/80">
              Ready to elevate your healthcare organization? Get in touch with our experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">Get in Touch</h2>
              <p className="text-lg text-foreground/70 mb-10">
                Whether you need strategic IT consulting, revenue cycle optimization, or specialized lab services, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">Headquarters</h4>
                    <p className="text-foreground/70">Flat No: 106, Aditya Lake View Towers, Lake View Colony, Nizampet, Hyderabad, 500090</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">Phone</h4>
                    <p className="text-foreground/70">+91 9000924324<br />Mon-Fri, 8am-6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">Email</h4>
                    <p className="text-foreground/70">contact@kodeastrahealthcare.com<br />support@kodeastrahealthcare.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-border/50">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Full Name</Label>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Email</Label>
                          <FormControl>
                            <Input placeholder="john@company.com" type="email" {...field} />
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
                          <Label>Phone Number</Label>
                          <FormControl>
                            <Input placeholder="(555) 000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Company / Organization</Label>
                        <FormControl>
                          <Input placeholder="e.g. City General Hospital" {...field} />
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
                        <Label>How can we help?</Label>
                        <FormControl>
                          <Textarea placeholder="Please describe your needs..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white mt-6">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}