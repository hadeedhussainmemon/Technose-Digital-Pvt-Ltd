import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQS = () => {
    return ( 
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 w-full rounded-2xl border border-neutral-200 bg-neutral-100/95"
        >
          <div className="p-6 md:p-10 md:px-14">
            <div className="text-2xl font-bold text-neutral-900 md:text-5xl">
              Have Questions?
            </div>
            <div className="bg-gradient-to-r from-[#00AAE7] to-cyan-500 bg-clip-text text-2xl font-bold text-transparent md:text-5xl">
              Get Answers.
            </div>
            <Accordion type="single" collapsible className="mt-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>What does Technose Digital Pvt Ltd do?</AccordionTrigger>
                <AccordionContent>
                  We are a digital growth agency focused on web design, E-commerce
                  development, branding, and marketing execution.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do we get started?</AccordionTrigger>
                <AccordionContent>
                  Submit the contact form or book a strategy call. Our team usually
                  responds within one business day.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
              How does pricing work?
                </AccordionTrigger>
                <AccordionContent>
                  We offer both fixed plans and custom proposals based on scope,
                  timelines, and goals.
                  
                </AccordionContent>
              </AccordionItem>
            
              <AccordionItem value="item-4">
                <AccordionTrigger>
              What support do you provide?
                  </AccordionTrigger>
                <AccordionContent>
                  Active clients receive dedicated support, progress updates, and regular
                  check-ins during delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div> );
}
 
export default FAQS;