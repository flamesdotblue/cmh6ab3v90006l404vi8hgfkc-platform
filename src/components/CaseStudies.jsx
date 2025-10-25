import { motion } from 'framer-motion';

const items = [
  {
    tag: 'Enterprise',
    title: 'AI Voice Concierge for Global Travel Brand',
    body: 'Deployed multilingual voice agents to automate booking support across 12 regions, reducing average handle time by 41%.',
  },
  {
    tag: 'Startup',
    title: 'RAG Search for Fintech Knowledge Base',
    body: 'Implemented retrieval‑augmented generation on private docs with granular permissions and observability, cutting search time by 72%.',
  },
  {
    tag: 'Healthcare',
    title: 'Clinical Note Summarization',
    body: 'Built HIPAA‑aligned summarization workflows with human‑in‑the‑loop review and audit trails, accelerating documentation by 2.3x.',
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected work</h2>
          <p className="mt-2 max-w-2xl text-white/60">Real outcomes from intelligent systems shipped to production.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((it, idx) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
          >
            <div className="relative h-44 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600/30 via-indigo-500/30 to-amber-400/30" />
              <div className="absolute inset-0 opacity-50 [background:radial-gradient(1200px_400px_at_-10%_-20%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(1000px_400px_at_120%_120%,rgba(255,255,255,0.12),transparent_60%)]" />
            </div>
            <div className="p-5">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">{it.tag}</div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{it.title}</h3>
              <p className="mt-2 text-sm text-white/65">{it.body}</p>
              <button className="mt-4 text-sm font-medium text-fuchsia-300 transition hover:text-fuchsia-200">Read case study →</button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
