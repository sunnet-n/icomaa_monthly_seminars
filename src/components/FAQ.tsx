import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I receive the Zoom link?",
    answer: "After registering, you'll receive the Zoom link via email immediately. The link will also be sent as a reminder 24 hours and 1 hour before the seminar starts."
  },
  {
    question: "What timezone are the seminars in?",
    answer: "All seminars are scheduled in EST (Eastern Standard Time). We recommend using a timezone converter if you're joining from a different timezone. The Zoom link will show the time in your local timezone."
  },
  {
    question: "Are the seminars recorded?",
    answer: "Yes! All seminars are recorded and made available to registered participants within 48 hours after the event. You'll receive a link to access the recording via email."
  },
  {
    question: "Is there a cost to attend?",
    answer: "Our monthly seminars are completely free for all participants. This is part of our commitment to making quality education and networking accessible to everyone preparing for ICOMAA 2026."
  },
  {
    question: "Can I ask questions during the seminar?",
    answer: "Absolutely! We encourage participation. You can ask questions using the Zoom Q&A feature or the chat. The speaker will address questions during the designated Q&A session at the end of each presentation."
  },
  {
    question: "What if I can't attend live?",
    answer: "No problem! Even if you register and can't attend live, you'll still receive access to the recording. However, we highly recommend attending live for the interactive Q&A session."
  },
  {
    question: "How do I connect to ICOMAA 2026?",
    answer: "Attending our monthly seminars is a great way to prepare for ICOMAA 2026. Conference registration details and special discounts for seminar participants will be announced in early 2026."
  },
  {
    question: "Are certificates provided?",
    answer: "Yes! Participants who attend at least 80% of the seminar series will receive a certificate of participation, which can be valuable for professional development."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 backdrop-blur-sm rounded-full mb-4 border border-blue-500/30">
              <HelpCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our seminars
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-amber-100/15 backdrop-blur-sm border-2 border-amber-500/30 rounded-xl px-6 shadow-lg hover:shadow-amber-500/20 transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-white">
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}