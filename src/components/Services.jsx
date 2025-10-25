import { motion } from 'framer-motion';
import { Brain, Code2, Bot, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Applied AI & Agents',
    desc: 'Voice and chat agents, RAG systems, orchestration, and evaluation pipelines tailored to your data and workflows.'
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'Design and development of web, mobile, and cloud platforms with modern stacks and strong DX.'
  },
  {
    icon: Bot,
    title: 'Automation & Integrations',
    desc: 'Workflow automation, data pipelines, third‑party integrations, and internal tools that scale.'
  },
  {
    icon: Shield,
    title: 'Security & Reliability',
    desc: 'Observability, testing, hardening, and governance to keep systems compliant and resilient.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-white/60">We transform ideas into intelligent products using proven engineering and cutting‑edge AI.</p>
        </div>
        <div className="hidden text-sm text-white/50 sm:block">End‑to‑end delivery</div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-5 backdrop-blur-md"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl transition group-hover:scale-125" />
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <s.icon className="h-6 w-6 text-fuchsia-300" />
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <button className="mt-4 text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-200">Learn more →</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
