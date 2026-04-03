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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiSmiley } from "react-icons/pi";
import PricingNavbar from "@/components/pricing-navbar";

const FormSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().email(),
  job_title: z.string().min(1),
  company_name: z.string().min(1),
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
  info: z.string().min(1),
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
    <div className="w-full md:items-center md:justify-center bg-white antialiased bg-grid-black/[0.02] relative overflow-hidden">
      <PricingNavbar />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div>
          <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80 bg-opacity-50">
            Contact our strategy team
          </div>
          <div className="py-4 text-gray-300">
            Tell us your goals and we will recommend the right roadmap for your
            business.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b">
              <div className="font-normal pb-4">
                End-to-end support for websites, branding, and growth campaigns
                under one team.
              </div>
            </div>

            <div className="flex gap-4 border-b">
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
              className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3"
            >
              <input type="hidden" {...form.register("formLoadedAt")} />
              <input
                type="text"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
                {...form.register("website")}
              />

              <div className="md:flex items-center gap-6">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm">First name *</FormLabel>
                      <FormControl>
                        <Input {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="w-60 text-sm">Last name *</FormLabel>
                      <FormControl>
                        <Input {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm">Work email *</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="w-60 text-sm">Company name *</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="job_title"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="w-60 text-sm">Job title *</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="w-60 text-sm">
                      Services you are interested in *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      required
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Website Design">Website Design</SelectItem>
                        <SelectItem value="E-commerce Development">
                          E-commerce Development
                        </SelectItem>
                        <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                        <SelectItem value="Social Media Marketing">
                          Social Media Marketing
                        </SelectItem>
                        <SelectItem value="Performance Marketing">
                          Performance Marketing
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="w-60 text-sm">How can we help?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      required
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Need a proposal">Need a proposal</SelectItem>
                        <SelectItem value="Have a project brief">
                          Have a project brief
                        </SelectItem>
                        <SelectItem value="Need a discovery call">
                          Need a discovery call
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="w-60 text-sm">Project details *</FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} required />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox className="text-[#6c6684]" required />
                </div>
                <div className="text-black font-light md:w-3/4 mb-1">
                  I agree to receive communication from Technose Digital Pvt Ltd
                  regarding my inquiry.
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="bg-white text-sm font-light"
                  disabled={loading}
                  variant="secondary"
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
              <div className="w-80 py-20">
                <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />

                <div className="text-gray-500 font-light text-center justify-center mx-auto py-10 h-screen">
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
