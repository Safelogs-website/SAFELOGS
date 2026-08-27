import { Phone, MessageCircle, Send, Radio } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/IMG-20260827-WA0011(1).jpg"
                alt="SAFE LOGS logo"
                className="h-11 w-11 rounded-xl object-cover"
              />
              <span className="text-lg font-extrabold tracking-tight text-white">
                SAFE<span className="text-mint-400"> LOGS</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Your vendors vendor for 11 years. The best quality of Facebook at the cheapest
              price you can get. Filter, generate a secure vendor link, and transact with
              confidence. Anniversary offer ends December.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Marketplace
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#marketplace" className="text-slate-300 hover:text-white">Generate link</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-white">Features</a></li>
              <li><a href="#how" className="text-slate-300 hover:text-white">How it works</a></li>
              <li><a href="#trust" className="text-slate-300 hover:text-white">Trust & safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href="tel:+2347075202707" className="hover:text-white">Live chat, +2347075202707</a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>Telegram<br />customer support @safelogs_support</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <Radio className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href="https://t.me/+agfRYCwTEroxZjQ0" target="_blank" rel="noreferrer" className="break-words hover:text-white">
                  Get updates https://t.me/+agfRYCwTEroxZjQ0
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SAFE LOGS · Your vendors vendor · 11th year anniversary.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Vendor policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
