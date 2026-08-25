import { ShieldCheck, Mail, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-mint-500 text-white">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
              </span>
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
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 text-brand-400" /> support@safelogs.io
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="h-4 w-4 text-brand-400" /> Live chat, 24/7
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Send className="h-4 w-4 text-brand-400" /> @safelogs official
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
