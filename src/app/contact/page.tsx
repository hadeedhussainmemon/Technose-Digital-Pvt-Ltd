"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiSmiley } from "react-icons/pi";
import PricingNavbar from "@/components/pricing-navbar";

const FormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid work email"),
  job_title: z.string().min(1, "Job title is required"),
  company_name: z.string().min(1, "Company name is required"),
  help: z.enum([
    "Need a proposal",
    "Have a project brief",
    "Need a discovery call",
    "Other",
  ]),
  services: z.enum([
    "Website Design",
    "E-commerce Development",
    "Graphic Design",
    "Social Media Marketing",
    "Performance Marketing",
  ]),
  info: z.string().min(1, "Please share project details"),
  website: z.string().optional(),
  formLoadedAt: z.coerce.number(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Need a discovery call",
      services: "Website Design",
      info: "",
      website: "",
      formLoadedAt: Date.now(),
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (currentStep === 0) fieldsToValidate = ["first_name", "last_name"];
    if (currentStep === 1) fieldsToValidate = ["email", "company_name", "job_title", "website"];
    if (currentStep === 2) fieldsToValidate = ["help", "services"];
    
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep === 0) form.setFocus("first_name");
      if (currentStep === 1) form.setFocus("email");
      if (currentStep === 2) form.setFocus("help");
      if (currentStep === 3) form.setFocus("info");
    }, 450);
    return () => clearTimeout(timer);
  }, [currentStep, form]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep < 3) {
      e.preventDefault();
      nextStep();
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch {
      toast({
        title: "Error",
        description: "We could not submit your request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  const steps = [
    { title: "Who Are We Speaking With?", subtitle: "Start with your basic details." },
    { title: "How Can We Reach You?", subtitle: "Tell us about your brand." },
    { title: "What Are Your Goals?", subtitle: "Select the service you need." },
    { title: "Tell Us The Details", subtitle: "Almost done! Share your vision." },
  ];

  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen">
      {/* Dynamic Background Mesh */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center w-full">
        <motion.div 
          animate={{ x: currentStep * 50, scale: 1 + currentStep * 0.1 }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00AAE7] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 transition-all duration-1000" 
        />
        <motion.div 
          animate={{ x: -currentStep * 50 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 transition-all duration-1000" 
        />
      </div>

      <PricingNavbar />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 pt-16 md:pt-10 pb-16 gap-10 lg:gap-14 relative z-10">
        <div className="w-full lg:w-[45%] text-center lg:text-left">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AAE7]/10 border border-[#00AAE7]/20 text-[#00AAE7] text-xs font-bold tracking-widest uppercase">
              Step {currentStep + 1} of 4
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1] bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 bg-opacity-50">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl">
              {steps[currentStep].subtitle}
            </p>
          </motion.div>

          <div className="bg-white/5 lg:w-4/5 space-y-5 p-6 rounded-3xl mt-10 hidden md:block border border-white/10 backdrop-blur-sm shadow-2xl">
             <div className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded-full bg-[#00AAE7]/20 flex items-center justify-center text-[#00AAE7] font-bold group-hover:scale-110 transition-transform">1</div>
               <div className="text-white/80 font-medium tracking-tight">End-to-end strategic growth support</div>
             </div>
             <div className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded-full bg-[#00AAE7]/20 flex items-center justify-center text-[#00AAE7] font-bold group-hover:scale-110 transition-transform">2</div>
               <div className="text-white/80 font-medium tracking-tight">Rapid delivery & clear milestones</div>
             </div>
             <div className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded-full bg-[#00AAE7]/20 flex items-center justify-center text-[#00AAE7] font-bold group-hover:scale-110 transition-transform">3</div>
               <div className="text-white/80 font-medium tracking-tight">Premium design excellence</div>
             </div>
          </div>
        </div>

        <div className="w-full lg:w-[48%] relative">
          {/* Form Progress Bar Card Top */}
          <div className="absolute -top-1 left-8 right-8 h-1 z-20">
            <div className="w-full h-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${(currentStep + 1) * 25}%` }}
                className="h-full bg-gradient-to-r from-[#00AAE7] to-cyan-400 shadow-[0_0_15px_rgba(0,170,231,0.5)]" 
              />
            </div>
          </div>

          <Form {...form}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
                >
                  <Link 
                    href="/" 
                    title="Cancel"
                    className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all z-40 outline-none focus:ring-2 focus:ring-[#00AAE7]"
                  >
                    ✕
                  </Link>

                  {/* Decorative background element for the card */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00AAE7]/5 rounded-full blur-3xl pointer-events-none" />

                  <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    onKeyDown={handleKeyDown}
                    className="space-y-8 relative z-10 pt-4"
                  >
                    {currentStep === 0 && (
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} required placeholder="John" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7] transition-all" />
                              </FormControl>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">Last Name *</FormLabel>
                              <FormControl>
                                <Input {...field} required placeholder="Doe" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7] transition-all" />
                              </FormControl>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="col-span-1 md:col-span-2">
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">Work Email *</FormLabel>
                              <FormControl>
                                <Input {...field} required type="email" placeholder="you@company.com" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7] transition-all" />
                              </FormControl>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">Company Name *</FormLabel>
                              <FormControl>
                                <Input {...field} required placeholder="Company Pvt Ltd" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7] transition-all" />
                              </FormControl>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="job_title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">Job Title *</FormLabel>
                              <FormControl>
                                <Input {...field} required placeholder="CEO, Founder, etc." className="h-14 bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7] transition-all" />
                              </FormControl>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                        {/* Honeypot Field - Hidden from humans, exposed to bots */}
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem className="absolute opacity-0 -left-[9999px] w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true" tabIndex={-1}>
                              <FormLabel className="sr-only">Website (Leave blank if human)</FormLabel>
                              <FormControl>
                                <Input {...field} tabIndex={-1} autoComplete="off" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="help"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">How can we help you? *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                <FormControl>
                                  <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7]">
                                    <SelectValue placeholder="Select an option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-neutral-900 border-white/10 text-white">
                                  <SelectItem value="Need a proposal">Need a proposal</SelectItem>
                                  <SelectItem value="Have a project brief">Have a project brief</SelectItem>
                                  <SelectItem value="Need a discovery call">Need a discovery call</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">Service Needed *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} required>
                                <FormControl>
                                  <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7]">
                                    <SelectValue placeholder="Select service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-neutral-900 border-white/10 text-white">
                                  <SelectItem value="Website Design">Website Design</SelectItem>
                                  <SelectItem value="E-commerce Development">E-commerce Development</SelectItem>
                                  <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                                  <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                                  <SelectItem value="Performance Marketing">Performance Marketing</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="info"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/70 font-semibold uppercase tracking-widest text-[0.65rem]">Project Vision *</FormLabel>
                              <FormControl>
                                <Textarea style={{ height: "120px" }} {...field} required placeholder="Describe your goals and vision..." className="bg-white/5 border-white/10 text-white rounded-2xl text-lg focus:ring-[#00AAE7] resize-none" />
                              </FormControl>
                              <FormMessage className="text-rose-500 text-xs" />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-4 pt-4">
                      {currentStep > 0 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="flex-1 h-16 rounded-2xl border border-white/10 text-white font-bold tracking-tight hover:bg-white/5 transition-all outline-none"
                        >
                          Back
                        </button>
                      )}
                      
                      {currentStep < 3 ? (
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={nextStep}
                          className="flex-[2] h-16 rounded-2xl bg-[#00AAE7] text-white font-bold tracking-tight shadow-xl shadow-cyan-500/20 hover:bg-cyan-500 transition-all outline-none"
                        >
                          Next Step
                        </motion.button>
                      ) : (
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={loading}
                          className="flex-[2] h-16 rounded-2xl bg-gradient-to-r from-[#00AAE7] to-cyan-400 text-white font-bold tracking-tight shadow-xl shadow-cyan-500/20 hover:brightness-110 transition-all outline-none disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Launching...
                            </>
                          ) : "Submit Project Inquiry"}
                        </motion.button>
                      )}
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100 }}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-12 backdrop-blur-3xl shadow-2xl flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.3 }}
                    className="w-24 h-24 rounded-full bg-[#00AAE7]/20 flex items-center justify-center mb-8 border border-[#00AAE7]/30 shadow-2xl shadow-cyan-500/20"
                  >
                    <PiSmiley className="text-6xl text-[#00AAE7]" />
                  </motion.div>
                  <h2 className="text-4xl font-bold tracking-tight text-white mb-4">You&apos;re All Set!</h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-10">
                    We received your inquiry. Our strategy team will reach out to you within 24 hours.
                  </p>
                  <Link
                    href="/"
                    className="h-14 px-10 rounded-2xl border border-white/10 text-white font-bold flex items-center justify-center hover:bg-white/5 transition-all"
                  >
                    Back to Home
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </Form>
        </div>
      </div>
    </div>
  );
}
