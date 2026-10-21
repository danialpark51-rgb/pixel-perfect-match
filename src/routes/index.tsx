import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleCheck,
  FileSearch,
  Fingerprint,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import receiptImage from "@/assets/receiptiq-receipt.jpg";
import { BrandMark } from "@/components/receiptiq/brand-mark";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReceiptIQ — A clearer picture of every expense" },
      { name: "description", content: "Meet ReceiptIQ, a receipt intelligence platform being built to bring clarity, consistency, and stronger evidence to expense review." },
      { property: "og:title", content: "ReceiptIQ — A clearer picture of every expense" },
      { property: "og:description", content: "Thoughtful receipt intelligence for the people responsible for every expense." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const strengths = [
  {
    icon: ScanLine,
    title: "Every receipt, understood",
    copy: "An easier path from a paper receipt to the details your finance team needs.",
  },
  {
    icon: FileSearch,
    title: "Questions worth asking",
    copy: "Bring unusual charges, duplicates, and missing context into clearer view.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence with context",
    copy: "Keep the why close to the what—so a finding is easier to understand.",
  },
];

const steps = [
  { number: "01", title: "Bring receipts together", copy: "Start with the receipts your team already works with." },
  { number: "02", title: "See more than a total", copy: "Surface the details, inconsistencies, and open questions behind a claim." },
  { number: "03", title: "Make a confident call", copy: "Give reviewers a clearer view of what needs attention and why." },
];

function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <header className="relative z-10 border-b border-border/70 bg-background/90">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-3 px-5 sm:px-8">
          <Link to="/" aria-label="ReceiptIQ home"><BrandMark /></Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="On this page">
            <a href="#approach" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Our approach</a>
            <a href="#how-it-works" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">How it works</a>
            <a href="#principles" className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">Our principles</a>
          </nav>
          <Button asChild size="sm" className="h-10 gap-2 px-4 text-xs sm:px-5">
            <Link to="/app">Explore the demo <ArrowRight className="size-3.5" aria-hidden="true" /></Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative mx-auto grid min-h-[590px] max-w-[1240px] items-center gap-8 px-5 pb-14 pt-12 sm:px-8 md:min-h-[640px] md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:py-12">
          <div className="relative z-[1] animate-receipt-enter">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-blue-soft px-3 py-1.5 text-[11px] font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              A new lens on expense review
            </div>
            <h1 className="mt-6 max-w-[600px] font-display text-[42px] font-semibold leading-[1.1] text-navy sm:text-[54px] md:text-[58px]">
              A clearer picture of <span className="text-primary">every expense.</span>
            </h1>
            <p className="mt-5 max-w-[470px] text-[15px] leading-[1.8] text-muted-foreground sm:text-[16px]">
              Receipts hold more than a total. ReceiptIQ is being built to help finance teams find the details, connections, and questions that matter.
            </p>
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
              <Button asChild size="lg" className="h-12 gap-2 px-6 text-[13px]">
                <Link to="/app">Explore the dashboard <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 gap-2 px-5 text-[13px]">
                <a href="#how-it-works">See our approach <ArrowDown className="size-3.5" aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[11px] text-muted-foreground">
              <CircleCheck className="size-4 shrink-0 text-success" aria-hidden="true" />
              Product preview · No real receipt processing yet
            </div>
            <div className="mt-9 flex items-center gap-5 border-t border-border pt-5">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="grid size-8 place-items-center rounded-full border-2 border-background bg-blue-soft font-display text-[10px] font-semibold text-primary">F</span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-background bg-success-soft font-display text-[10px] font-semibold text-success">A</span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-background bg-warning-soft font-display text-[10px] font-semibold text-warning">T</span>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">Built for finance teams, reviewers<br className="sm:hidden" /> &amp; the people on the move.</p>
            </div>
          </div>

          <div className="relative animate-receipt-enter md:pl-2" style={{ animationDelay: "90ms" }}>
            <div className="absolute -right-8 top-4 z-[1] hidden items-center gap-2.5 rounded-[6px] border border-border bg-card px-3.5 py-3 receipt-shadow sm:flex">
              <span className="grid size-8 place-items-center rounded-md bg-success-soft text-success"><TrendingUp className="size-4" aria-hidden="true" /></span>
              <span><span className="block text-[10px] text-muted-foreground">A better view of spend</span><span className="mt-0.5 block font-display text-[12px] font-semibold text-foreground">Every detail in context</span></span>
            </div>
            <div className="relative overflow-hidden rounded-[8px] bg-secondary">
              <img src={receiptImage} alt="Receipt, notebook, and pencil on a bright desk" width={1536} height={1024} className="aspect-[1.42] w-full object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 via-navy/30 to-transparent p-5 pt-16 sm:p-6 sm:pt-20">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-medium text-success">
                  <Check className="size-3" aria-hidden="true" /> Clarity from the first line
                </span>
                <p className="mt-3 font-display text-[20px] font-semibold text-primary-foreground sm:text-[23px]">From paper trail<br />to a clearer story.</p>
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-[6px] border border-border bg-card px-3 py-2.5 receipt-shadow sm:bottom-4 sm:-left-7">
              <span className="grid size-7 place-items-center rounded-md bg-blue-soft text-primary"><Fingerprint className="size-4" aria-hidden="true" /></span>
              <span className="font-display text-[11px] font-medium text-foreground">Thoughtful by design</span>
              <ArrowUpRight className="ml-1 size-3.5 text-muted-foreground" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="approach" className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-[1240px] gap-0 px-5 py-7 sm:grid-cols-3 sm:px-8 sm:py-0">
            {[
              { value: "01", label: "Capture", note: "A more complete view" },
              { value: "02", label: "Investigate", note: "Questions worth exploring" },
              { value: "03", label: "Understand", note: "Evidence with context" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 border-b border-border py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:py-5 sm:pl-7 sm:first:pl-0 sm:last:border-r-0">
                <span className="font-mono text-[10px] text-primary">{item.value}</span>
                <span className="font-display text-[12px] font-semibold text-foreground">{item.label}</span>
                <span className="text-[11px] text-muted-foreground">{item.note}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="principles" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-[560px]">
            <span className="font-mono text-[10px] font-medium uppercase text-primary">A thoughtful new approach</span>
            <h2 className="mt-3 font-display text-[29px] font-semibold leading-[1.2] text-navy sm:text-[36px]">Better questions make<br className="hidden sm:block" /> for better reviews.</h2>
            <p className="mt-3 max-w-[460px] text-[14px] leading-[1.75] text-muted-foreground">An idea for expense review that keeps people, context, and evidence at the center.</p>
          </div>
          <div className="mt-9 grid divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {strengths.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="py-6 sm:px-6 sm:py-7 sm:first:pl-0 sm:last:pr-0">
                <div className={`grid size-10 place-items-center rounded-[6px] ${index === 1 ? "bg-warning-soft text-warning" : index === 2 ? "bg-success-soft text-success" : "bg-blue-soft text-primary"}`}>
                  <Icon className="size-[18px]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-[14px] font-semibold text-foreground">{title}</h3>
                <p className="mt-2 max-w-[300px] text-[12px] leading-[1.7] text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-[1240px] gap-9 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
            <div>
              <span className="font-mono text-[10px] font-medium uppercase text-primary">Designed around the full story</span>
              <h2 className="mt-3 font-display text-[28px] font-semibold leading-[1.25] text-navy sm:text-[32px]">From expense to evidence.</h2>
              <p className="mt-3 max-w-[400px] text-[13px] leading-[1.75] text-muted-foreground">We’re shaping a review experience that starts with a receipt and keeps the people making decisions in the loop.</p>
              <Button asChild variant="outline" className="mt-5 h-10 gap-2 px-4 text-xs">
                <Link to="/app">See the product preview <ArrowRight className="size-3.5" aria-hidden="true" /></Link>
              </Button>
            </div>
            <ol className="divide-y divide-border">
              {steps.map((step) => (
                <li key={step.number} className="grid grid-cols-[40px_minmax(0,1fr)] gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[48px_minmax(0,1fr)]">
                  <span className="pt-0.5 font-mono text-[11px] text-primary">{step.number}</span>
                  <div><h3 className="font-display text-[13px] font-semibold text-foreground">{step.title}</h3><p className="mt-1 text-[12px] leading-[1.65] text-muted-foreground">{step.copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-6 border-b border-border pb-10 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="max-w-[600px]">
              <span className="font-mono text-[10px] font-medium uppercase text-primary">Designed to earn trust</span>
              <h2 className="mt-3 font-display text-[26px] font-semibold text-navy sm:text-[30px]">Clarity without the guesswork.</h2>
            </div>
            <p className="max-w-[400px] text-[12px] leading-[1.7] text-muted-foreground sm:pb-1">ReceiptIQ is in early development. This preview contains illustrative data only and does not process receipts, perform investigations, or store account activity.</p>
          </div>
          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5 text-[12px] text-foreground"><ShieldCheck className="size-[18px] shrink-0 text-success" aria-hidden="true" />Designed with a focus on privacy and evidence integrity</div>
            <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Sparkles className="size-3.5 text-primary" aria-hidden="true" />An honest first look at a work in progress</span>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 sm:pb-20">
          <div className="relative overflow-hidden rounded-[8px] bg-navy px-6 py-8 sm:px-10 sm:py-10">
            <div className="relative z-[1] grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="max-w-[540px]">
                <span className="font-mono text-[10px] font-medium uppercase text-primary-foreground/65">Take a closer look</span>
                <h2 className="mt-2 font-display text-[24px] font-semibold text-primary-foreground sm:text-[30px]">Meet the ReceiptIQ preview.</h2>
                <p className="mt-2 max-w-[450px] text-[12px] leading-[1.7] text-primary-foreground/75">Explore an example workspace built to show where receipt intelligence could go.</p>
              </div>
              <Button asChild variant="secondary" size="lg" className="h-11 w-fit gap-2 px-5 text-xs">
                <Link to="/app">Open demo dashboard <ArrowRight className="size-3.5" aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3"><BrandMark compact /><span className="font-display text-[13px] font-semibold text-foreground">Receipt<span className="text-primary">IQ</span></span></div>
          <p className="text-[10px] text-muted-foreground">Early-stage product preview · Sample figures are illustrative</p>
        </div>
      </footer>
    </div>
  );
}