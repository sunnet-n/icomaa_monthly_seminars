import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl mb-6 shadow-lg"
        >
          <Mail className="text-white" size={32} />
        </motion.div>

        <h2 className="text-white mb-4 text-3xl sm:text-4xl">
          Stay Updated
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and never miss an update on upcoming seminars, conferences, and mathematical events.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="w-full px-5 py-4 rounded-full bg-white/95 backdrop-blur-xl border-2 border-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-slate-900 placeholder-slate-500 disabled:opacity-50 text-base min-h-[52px]"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-purple-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px] text-base active:scale-95"
            >
              <span>{status === "loading" ? "Subscribing..." : "Subscribe"}</span>
              {status !== "loading" && <Send size={18} />}
            </motion.button>
          </div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-2xl text-white text-sm"
            >
              ✓ Thank you for subscribing! Check your email for confirmation.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-500/20 border border-red-400 rounded-2xl text-white text-sm"
            >
              ✗ Something went wrong. Please try again.
            </motion.div>
          )}
        </form>

        <p className="text-white/70 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>
    </section>
  );
}