import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
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
        </div> );
}
 
export default FAQS;