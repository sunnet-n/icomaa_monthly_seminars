import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const faqs = [
    {
      question: "How can I attend the seminars?",
      answer: "You can attend our seminars both in-person and online. For in-person attendance, please register through our website. Online participants can join via the meeting link provided for each seminar."
    },
    {
      question: "Are the seminars free to attend?",
      answer: "Yes, all weekly seminars are free and open to everyone. However, the annual conference may have registration fees for certain activities and materials."
    },
    {
      question: "Can I present my research at ICOMAA?",
      answer: "Absolutely! We welcome proposals from researchers at all career stages. Please submit your proposal through our contact form, and our organizing committee will review it."
    },
    {
      question: "Will recordings be available?",
      answer: "Yes, we record most seminars and make them available to registered participants. Some presentations may not be recorded at the speaker's request."
    },
    {
      question: "How do I stay updated about upcoming events?",
      answer: "Subscribe to our newsletter through the footer form, or follow us on social media. You'll receive announcements about upcoming seminars, conference dates, and other important updates."
    },
    {
      question: "What topics are covered in the seminars?",
      answer: "Our seminars cover a wide range of mathematical topics including Analysis, PDEs, Functional Analysis, Spectral Theory, Optimal Transport, Geometric Analysis, Nonlinear Analysis, and Applied Mathematics."
    },
    {
      question: "Can students attend the seminars?",
      answer: "Yes! We encourage graduate and advanced undergraduate students to attend. The seminars provide excellent learning opportunities and networking possibilities."
    },
    {
      question: "Is there a certificate of attendance?",
      answer: "Certificates of attendance can be provided upon request for participants who attend the full seminar series or annual conference. Please contact us for more details."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-blue-50/30">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4 text-3xl sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our seminars and events
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="backdrop-blur-xl bg-white/80 rounded-2xl border border-white/60 shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/50 transition-all"
              >
                <span className="text-slate-900 pr-4 text-base sm:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown 
                    className={`text-slate-600 transition-colors ${
                      openIndex === index ? "text-blue-600" : ""
                    }`} 
                    size={24} 
                  />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="pt-2 border-t border-slate-200">
                        <p className="text-slate-600 leading-relaxed mt-4 text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
