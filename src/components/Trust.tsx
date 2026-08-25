import { ShieldCheck, MessageCircle, Eye, FileCheck } from 'lucide-react';

const pillars = [
  {
    icon: FileCheck,
    title: 'Vendor vetting',
    desc: 'Every vendor submits to identity verification and a 30-day probation period before listing any account.',
  },
  {
    icon: MessageCircle,
    title: 'Direct contact',
    desc: 'Your vendor link opens a direct channel to the vendor. You handle the deal on your own terms.',
  },
  {
    icon: Eye,
    title: 'Activity audit',
    desc: 'We log creation date, login history, and friend-graph signals to flag suspicious or farmed accounts.',
  },
  {
    icon: ShieldCheck,
    title: 'Replacement policy',
    desc: 'A 72-hour safety window covers every purchase. If anything fails, you get a replacement — not a refund runaround.',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="card-surface relative overflow-hidden p-8 sm:p-12">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-600/15 blur-[100px]" />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-mint-500/10 blur-[90px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1.4fr]">
            <div>
              <span className="section-eyebrow">Trust & safety · 11th year anniversary</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Protection at every layer
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Buying accounts online is risky by nature. For 11 years your vendors vendor
                has removed the risk with vendor screening and a real dispute team — so you
                never send money to a stranger and hope for the best.
              </p>
              <a href="#marketplace" className="btn-primary mt-7">
                Start a safe purchase
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-white/5 bg-ink-900/50 p-5 transition hover:border-mint-400/30"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-mint-500/15 text-mint-300">
                    <p.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-3.5 text-sm font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
