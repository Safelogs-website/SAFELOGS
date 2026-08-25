import { SlidersHorizontal, Link2, MessageCircle, CircleCheck } from 'lucide-react';

const steps = [
  {
    icon: SlidersHorizontal,
    title: 'Set your filters',
    desc: 'Choose the account year, gender, dating or non-dating type, and quantity that match what you need.'
  },
  {
    icon: Link2,
    title: 'Generate a vendor link',
    desc: 'We instantly build a tokenized, single-use link to a vetted vendor with matching inventory.',
  },
  {
    icon: MessageCircle,
    title: 'Get in direct contact with vendor',
    desc: 'Open the vendor link to chat directly with the vendor, agree on terms, and arrange your purchase.',
  },
  {
    icon: CircleCheck,
    title: 'Receive your account',
    desc: 'Get full credentials and a 72-hour replacement window once the vendor delivers your account.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">How it works · your vendors vendor</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            From filter to account in four steps
          </h2>
          <p className="mt-4 text-base text-slate-300">
            No haggling in random chat windows, no risky direct transfers. For 11 years SAFE LOGS
            has connected buyers and vetted vendors through a simple, protected workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="card-surface h-full p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                    <s.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-600">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
