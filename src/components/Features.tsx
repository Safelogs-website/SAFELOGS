import { ShieldCheck, BadgeCheck, RefreshCw, Headset, Wallet, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Verified, aged accounts',
    desc: 'Every listing is screened for authenticity, activity history, and original creation year before it reaches the marketplace.',
  },
  {
    icon: MessageCircle,
    title: 'Direct vendor contact',
    desc: 'Your vendor link opens a direct line to the vendor. Agree on terms, ask questions, and arrange delivery yourself.',
  },
  {
    icon: RefreshCw,
    title: 'Replacement guarantee',
    desc: 'If an account fails verification within 72 hours, we issue a no-questions-asked replacement from the same vendor pool.',
  },
  {
    icon: Wallet,
    title: 'Cheapest price guaranteed',
    desc: 'No hidden fees. The best quality of Facebook at the cheapest price you can get — with bulk discounts for repeat buyers. Anniversary offer ends December.',
  },
  {
    icon: Headset,
    title: '24/7 dispute support',
    desc: 'A real human reviews every dispute within minutes. Our team mediates between buyers and vendors until it is resolved.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first by design',
    desc: 'Vendor links are single-use, tokenized, and expire automatically. We never expose your identity to the other party.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">11th year anniversary · your vendors vendor</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            The best quality of Facebook at the cheapest price
          </h2>
          <p className="mt-4 text-base text-slate-300">
            For 11 years SAFE LOGS has been your vendors vendor — handling verification
            and dispute resolution so you can focus on finding the right account, not
            worrying about getting scammed. Anniversary offer ends December.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-surface group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-glow"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-mint-500/20 text-brand-300 transition group-hover:text-mint-300">
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
