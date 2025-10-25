import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 sm:p-12">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Ready to build with intelligence?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-2 max-w-2xl text-white/70"
        >
          Tell us about your goals. We respond within one business day with next steps and a clear path forward.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 grid gap-3 sm:grid-cols-2"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 backdrop-blur-md focus:border-fuchsia-400/40"
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 backdrop-blur-md focus:border-fuchsia-400/40"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 backdrop-blur-md focus:border-fuchsia-400/40 sm:col-span-2"
          />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 backdrop-blur-md focus:border-fuchsia-400/40 sm:col-span-2"
          />
          <div className="mt-1 flex items-center gap-3 sm:col-span-2">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50">
              Request consult
            </button>
            <span className="text-xs text-white/50">No spam. Just solutions.</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
