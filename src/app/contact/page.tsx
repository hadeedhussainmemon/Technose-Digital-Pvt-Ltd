"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
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

  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen">
      <PricingNavbar />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 md:px-10 pt-24 md:pt-10 pb-16 gap-10 lg:gap-14">
        <div className="w-full lg:w-[48%]">
          <div className="text-4xl sm:text-5xl md:text-6xl font-medium w-full lg:w-4/5 pb-5 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact Our Strategy Team
          </div>
          <div className="py-2 md:py-4 text-gray-300 text-base md:text-lg max-w-xl">
            Tell us your goals and we will recommend the right roadmap for your
            business.
          </div>

          <div className="bg-white/5 lg:w-4/5 space-y-5 p-5 md:p-6 rounded-2xl mt-6 hidden md:flex md:flex-col shadow-sm border border-white/10 text-white">
            <div className="flex gap-4 border-b border-black/10">
              <div className="font-normal pb-4">
                End-to-end support for websites, branding, and growth campaigns
                under one team.
              </div>
            </div>

            <div className="flex gap-4 border-b border-black/10">
              <div className="font-normal pb-4">
                Transparent communication, clear milestones, and reliable
                delivery timelines.
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-normal pb-4">
                Dedicated support throughout strategy, execution, and launch.
              </div>
            </div>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full lg:w-[44%] xl:w-[48%] space-y-5 border border-white/15 bg-white/[0.06] rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="border-b border-white/10 pb-4">
                <h2 className="text-white text-xl md:text-2xl font-medium">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                  Fill in a few details and our team will get back to you
                  shortly.
                </p>
              </div>

              <input type="hidden" {...form.register("formLoadedAt")} />
              <input
                type="text"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
                {...form.register("website")}
              />

              <div className="md:flex items-start gap-4 space-y-5 md:space-y-0">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm text-white">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          required
                          placeholder="John"
                          className="h-11 bg-white border-neutral-300"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm text-white">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          required
                          placeholder="Doe"
                          className="h-11 bg-white border-neutral-300"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm text-white">
                      Work email *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        type="email"
                        placeholder="you@company.com"
                        className="h-11 bg-white border-neutral-300"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm text-white">
                      Company name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        placeholder="Company Pvt Ltd"
                        className="h-11 bg-white border-neutral-300"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="job_title"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm text-white">
                      Job title *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        placeholder="Marketing Manager"
                        className="h-11 bg-white border-neutral-300"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm text-white">
                      Services you are interested in *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      required
                    >
                      <FormControl>
                        <SelectTrigger className="h-11 bg-white border-neutral-300">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Website Design">Website Design</SelectItem>
                        <SelectItem value="E-commerce Development">
                          E-commerce Development
                        </SelectItem>
                        <SelectItem value="Graphic Design">
                          Graphic Design
                        </SelectItem>
                        <SelectItem value="Social Media Marketing">
                          Social Media Marketing
                        </SelectItem>
                        <SelectItem value="Performance Marketing">
                          Performance Marketing
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm text-white">
                      How can we help?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      required
                    >
                      <FormControl>
                        <SelectTrigger className="h-11 bg-white border-neutral-300">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Need a proposal">
                          Need a proposal
                        </SelectItem>
                        <SelectItem value="Have a project brief">
                          Have a project brief
                        </SelectItem>
                        <SelectItem value="Need a discovery call">
                          Need a discovery call
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm text-white">
                      Project details *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        style={{ height: "120px" }}
                        {...field}
                        required
                        placeholder="Tell us about your goals, timelines, and key requirements."
                        className="bg-white border-neutral-300 resize-none"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 items-start rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="pt-0.5">
                  <Checkbox
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                    required
                  />
                </div>
                <div className="text-white font-light md:w-3/4 mb-1">
                  I agree to receive communication from Technose Digital Pvt Ltd
                  regarding my inquiry.
                </div>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <Button
                  type="submit"
                  className="w-full h-11 bg-white text-black text-sm font-medium hover:bg-gray-200"
                  disabled={loading}
                  variant="secondary"
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="w-full lg:w-[44%] xl:w-[42%] border border-white/15 bg-white/[0.06] rounded-3xl p-10 md:p-12 backdrop-blur-md text-xl md:text-2xl flex items-center justify-center flex-col">
              <div className="w-full max-w-sm">
                <PiSmiley className="text-6xl text-[#6c6684] mx-auto mb-6" />

                <div className="text-gray-300 font-light text-center justify-center mx-auto leading-relaxed">
                  We received your inquiry and will contact you shortly by email.
                </div>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
