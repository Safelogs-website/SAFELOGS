import { useMemo, useState } from 'react';
import {
  CalendarDays,
  Users,
  Heart,
  Sparkles,
  Link2,
  CheckCircle2,
  Copy,
  ShieldCheck,
  ArrowRight,
  Hash,
  Tag,
  Globe,
} from 'lucide-react';
import SelectField from './SelectField';

const years = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' },
];

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const types = [
  { value: 'non-dating', label: 'Non-dating account' },
  { value: 'dating', label: 'Dating account' },
];

const UNIT_PRICE: Record<string, number> = {
  dating: 18000,
  'non-dating': 10000,
};

const NON_DATING_COUNTRIES = [
  { value: 'usa', label: 'USA', price: 9000 },
  { value: 'random', label: 'Random Country', price: 5000 },
];

const formatNaira = (n: number) =>
  '₦' + n.toLocaleString('en-NG', { maximumFractionDigits: 0 });

const trustBadges = [
  '11th year anniversary',
  'Your vendors vendor',
  'Verified accounts only',
];

export default function Hero() {
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [country, setCountry] = useState('');
  const [generated, setGenerated] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const qty = Math.max(1, parseInt(quantity || '1', 10) || 1);
  const isNonDating = type === 'non-dating';
  const countryOption = NON_DATING_COUNTRIES.find((c) => c.value === country);
  const unitPrice = isNonDating
    ? countryOption
      ? countryOption.price
      : UNIT_PRICE['non-dating']
    : type
      ? UNIT_PRICE[type]
      : 0;
  const total = unitPrice * qty;

  const priceVisible = Boolean(type) && (!isNonDating || Boolean(country));
  const needsCountry = isNonDating && !country;

  const canGenerate = year && gender && type && quantity && (!isNonDating || country);

  const handleTypeChange = (value: string) => {
    setType(value);
    setCountry('');
    setGenerated(null);
  };

  const handleGenerate = () => {
    if (!canGenerate) {
      setError(
        'Please select an account year, gender, type, quantity' +
          (isNonDating ? ', and country.' : '.'),
      );
      return;
    }
    setError('');

    const phone = '2347075202707';
    const formattedGender = gender.charAt(0).toUpperCase() + gender.slice(1);
    const formattedType = type === 'dating' ? 'Dating account' : 'Non-dating account';
    
    let message = `Hello! I want to order a Facebook Account:%0A` +
      `• Year: ${year}%0A` +
      `• Gender: ${formattedGender}%0A` +
      `• Type: ${formattedType}%0A`;

    if (isNonDating && countryOption) {
      message += `• Country: ${countryOption.label}%0A`;
    }

    message += `• Quantity: ${qty}%0A` +
      `• Total Price: ${formatNaira(total)}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    setGenerated(whatsappUrl);
    setCopied(false);

    window.open(whatsappUrl, '_blank');
  };

  const handleCopy = async () => {
    if (!generated) return;
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="absolute right-0 top-40 -z-10 h-64 w-64 rounded-full bg-mint-500/10 blur-[100px]" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fade-up">
          <span className="section-eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" />
            11th year anniversary — your vendors vendor
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            The best quality of Facebook at the
            <span className="text-gradient-brand"> cheapest price you can get.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            SAFE LOGS has been your vendors vendor for 11 years — connecting buyers with
            vetted vendors offering aged, authentic Facebook accounts. Filter by year,
            gender, and account type, then generate a direct WhatsApp message to complete your
            purchase.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-mint-400/30 bg-mint-500/10 px-4 py-2.5 text-sm font-semibold text-mint-200">
            <Tag className="h-4 w-4" />
            Offer ends December — anniversary pricing in effect
          </div>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {trustBadges.map((b) => (
              <li key={b} className="chip">
                <CheckCircle2 className="h-3.5 w-3.5 text-mint-400" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#marketplace" className="btn-primary">
              Order on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-ghost">
              How it works
            </a>
          </div>
        </div>

        {/* Form card */}
        <div id="marketplace" className="animate-fade-up [animation-delay:120ms]">
          <div className="card-surface relative p-6 shadow-2xl sm:p-8">
            <div className="absolute -right-3 -top-3 hidden sm:block">
              <span className="chip border-mint-400/30 bg-mint-500/10 text-mint-300">
                <Sparkles className="h-3.5 w-3.5" />
                Vendor generator
              </span>
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">Build your order link</h2>
            <p className="mt-1.5 text-sm text-slate-400">
              Pick your filters to generate a direct WhatsApp order message for the vendor.
            </p>

            <div className="mt-6 grid gap-4">
              <SelectField
                id="year"
                label="Account year"
                value={year}
                onChange={setYear}
                options={years}
                placeholder="Select year"
                icon={<CalendarDays className="h-3.5 w-3.5 text-brand-400" />}
              />
              <SelectField
                id="gender"
                label="Gender"
                value={gender}
                onChange={setGender}
                options={genders}
                placeholder="Select gender"
                icon={<Users className="h-3.5 w-3.5 text-brand-400" />}
              />
              <SelectField
                id="type"
                label="Account type"
                value={type}
                onChange={handleTypeChange}
                options={types}
                placeholder="Select account type"
                icon={<Heart className="h-3.5 w-3.5 text-brand-400" />}
              />

              {isNonDating && (
                <div className="animate-fade-up">
                  <SelectField
                    id="country"
                    label="Country"
                    value={country}
                    onChange={(v) => {
                      setCountry(v);
                      setGenerated(null);
                    }}
                    options={NON_DATING_COUNTRIES.map((c) => ({
                      value: c.value,
                      label: `${c.label} — ${formatNaira(c.price)}`,
                    }))}
                    placeholder="Select country"
                    icon={<Globe className="h-3.5 w-3.5 text-brand-400" />}
                  />
                </div>
              )}

              <div>
                <label htmlFor="quantity" className="label-field">
                  <span className="inline-flex items-center gap-1.5">
                    <Hash className="h-3.5 w-3.5 text-brand-400" />
                    Quantity
                  </span>
                </label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                    setGenerated(null);
                  }}
                  placeholder="How many accounts?"
                  className="field-select"
                />
              </div>
            </div>

            {/* Live price bar */}
            <div
              className={`mt-5 overflow-hidden rounded-xl border transition-all duration-300 ${
                priceVisible
                  ? 'border-mint-400/30 bg-mint-500/5 opacity-100'
                  : 'border-white/5 bg-ink-900/40 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {priceVisible
                      ? 'Estimated total'
                      : needsCountry
                        ? 'Select a country'
                        : 'Select an account type'}
                  </div>
                  <div className="mt-0.5 truncate text-sm text-slate-400">
                    {priceVisible
                      ? `${qty} × ${formatNaira(unitPrice)} ${
                          type === 'dating'
                            ? 'dating'
                            : countryOption?.label.toLowerCase() || 'non-dating'
                        } account${qty > 1 ? 's' : ''}`
                      : needsCountry
                        ? 'Price appears once you choose USA or Random Country'
                        : 'Price appears once you choose dating or non-dating'}
                  </div>
                </div>
                <div
                  className={`shrink-0 text-right font-mono text-2xl font-extrabold ${
                    priceVisible ? 'text-mint-300' : 'text-slate-600'
                  }`}
                >
                  {priceVisible ? formatNaira(total) : '—'}
                </div>
              </div>
            </div>

            {error && (
              <p className="mt-3 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-300">
                {error}
              </p>
            )}

            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="btn-primary mt-5 w-full"
            >
              <Link2 className="h-4 w-4" />
              Order on WhatsApp
            </button>

            {generated && (
              <div className="mt-5 animate-fade-up rounded-xl border border-mint-400/20 bg-mint-500/5 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mint-300">
                  <CheckCircle2 className="h-4 w-4" />
                  WhatsApp order link ready
                </div>
                <div className="mt-2.5 flex items-center gap-2">
                  <code className="flex-1 truncate rounded-lg bg-ink-900/80 px-3 py-2.5 font-mono text-xs text-mint-200">
                    {generated}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-mint-400/40 hover:text-mint-300"
                    aria-label="Copy link"
                  >
                    {copied ? (
                      <CheckCircle2 className="h-4 w-4 text-mint-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Opening WhatsApp... If it doesn't open automatically, click or copy the link above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}