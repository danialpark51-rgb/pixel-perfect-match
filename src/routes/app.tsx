import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleAlert,
  Clock3,
  Ellipsis,
  FileCheck2,
  FileText,
  ReceiptText,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { AppShell } from "@/components/receiptiq/app-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Overview · ReceiptIQ Demo Workspace" },
      { name: "description", content: "Explore the ReceiptIQ product preview dashboard. All displayed workspace figures are illustrative demo data." },
      { property: "og:title", content: "Overview · ReceiptIQ Demo Workspace" },
      { property: "og:description", content: "An example expense intelligence workspace populated with illustrative data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const metrics = [
  { label: "Total expenses", value: "$48,284", cents: ".20", delta: "+8.2%", note: "vs. previous month", icon: ReceiptText, tone: "blue", direction: "up" },
  { label: "Receipts reviewed", value: "284", cents: "", delta: "+12.4%", note: "vs. previous month", icon: FileCheck2, tone: "green", direction: "up" },
  { label: "Needs a closer look", value: "07", cents: "", delta: "3 high priority", note: "example open items", icon: CircleAlert, tone: "amber", direction: "alert" },
  { label: "Potential savings", value: "$3,820", cents: "", delta: "Illustrative", note: "example estimate only", icon: TrendingDown, tone: "blue", direction: "down" },
];

const transactions = [
  { vendor: "Cedar & Stone", category: "Client dinner", amount: "$284.60", date: "Oct 21, 2026", initials: "CS", iconTone: "bg-warning-soft text-warning", status: "Needs review", statusTone: "bg-warning-soft text-warning" },
  { vendor: "Northline Air", category: "Air travel", amount: "$642.18", date: "Oct 20, 2026", initials: "NA", iconTone: "bg-blue-soft text-primary", status: "Reviewed", statusTone: "bg-success-soft text-success" },
  { vendor: "Fieldwork Hotel", category: "Accommodation", amount: "$318.00", date: "Oct 19, 2026", initials: "FH", iconTone: "bg-success-soft text-success", status: "Reviewed", statusTone: "bg-success-soft text-success" },
  { vendor: "Brightside Office", category: "Office supplies", amount: "$96.42", date: "Oct 18, 2026", initials: "BO", iconTone: "bg-muted text-muted-foreground", status: "Duplicate check", statusTone: "bg-warning-soft text-warning" },
];

const bars = [
  { label: "Travel", amount: "$14,680", percent: "82%", fill: "bg-primary" },
  { label: "Meals & entertainment", amount: "$9,240", percent: "56%", fill: "bg-success" },
  { label: "Accommodation", amount: "$8,190", percent: "50%", fill: "bg-warning" },
  { label: "Office & supplies", amount: "$5,870", percent: "36%", fill: "bg-primary/65" },
];

const alertItems = [
  { icon: CircleAlert, label: "Unusual meal expense", detail: "Cedar & Stone · $284.60", time: "38m ago", tone: "bg-warning-soft text-warning" },
  { icon: ReceiptText, label: "Possible duplicate receipt", detail: "Brightside Office · $96.42", time: "2h ago", tone: "bg-blue-soft text-primary" },
  { icon: Clock3, label: "Missing business purpose", detail: "MetroCab · $48.20", time: "Yesterday", tone: "bg-muted text-muted-foreground" },
];

function Dashboard() {
  return (
    <AppShell>
      <div className="animate-receipt-enter">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2 text-[10px] text-muted-foreground sm:hidden"><span>Northstar Studio</span><span>/</span><span>Demo workspace</span></div>
            <p className="text-[11px] text-muted-foreground">Wednesday, October 21, 2026</p>
            <h2 className="mt-1 font-display text-[24px] font-semibold text-navy sm:text-[29px]">Good morning, Alex <span aria-hidden="true">✳</span></h2>
            <p className="mt-1 text-[12px] text-muted-foreground">Here’s an illustrative snapshot of your team’s expenses.</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button variant="outline" disabled className="h-9 cursor-not-allowed gap-1.5 px-3 text-[11px]">
              <CalendarDays className="size-3.5" aria-hidden="true" /> This month
            </Button>
            <Button asChild className="h-9 gap-1.5 px-3 text-[11px]">
              <Link to="/app/$section" params={{ section: "upload-receipts" }}>
                <ReceiptText className="size-3.5" aria-hidden="true" /> Add receipt
              </Link>
            </Button>
          </div>
        </div>

        <div role="note" className="mb-5 flex items-start gap-2.5 border-y border-warning/20 bg-warning-soft/50 px-3.5 py-3 text-[11px] leading-relaxed text-warning sm:items-center sm:px-4">
          <CircleAlert className="mt-0.5 size-4 shrink-0 sm:mt-0" aria-hidden="true" />
          <span><strong className="font-semibold">Illustrative demo only.</strong> These sample transactions and figures are not connected to receipt processing, a bank account, or a saved investigation.</span>
        </div>

        <section aria-label="Expense overview" className="grid grid-cols-1 gap-px overflow-hidden rounded-[7px] border border-border bg-border min-[460px]:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article key={metric.label} className="min-w-0 bg-card p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="min-w-0 truncate text-[11px] font-medium text-muted-foreground">{metric.label}</h3>
                  <span className={`grid size-8 shrink-0 place-items-center rounded-[6px] ${metric.tone === "green" ? "bg-success-soft text-success" : metric.tone === "amber" ? "bg-warning-soft text-warning" : "bg-blue-soft text-primary"}`}><Icon className="size-4" aria-hidden="true" /></span>
                </div>
                <div className="mt-3 flex items-baseline gap-0.5 font-display text-[26px] font-semibold text-navy sm:text-[28px]">
                  {metric.value}{metric.cents && <span className="text-[16px]">{metric.cents}</span>}
                </div>
                <div className="mt-2 flex min-w-0 items-center gap-1.5 text-[10px]">
                  {metric.direction === "alert" ? <CircleAlert className="size-3.5 shrink-0 text-warning" aria-hidden="true" /> : metric.direction === "down" ? <ArrowDownRight className="size-3.5 shrink-0 text-success" aria-hidden="true" /> : <ArrowUpRight className="size-3.5 shrink-0 text-success" aria-hidden="true" />}
                  <span className={`shrink-0 font-medium ${metric.direction === "alert" ? "text-warning" : "text-success"}`}>{metric.delta}</span>
                  <span className="min-w-0 truncate text-muted-foreground">{metric.note}</span>
                </div>
              </article>
            );
          })}
        </section>

        <div className="mt-6 grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1.52fr)_minmax(290px,0.88fr)]">
          <section className="min-w-0 overflow-hidden rounded-[7px] border border-border bg-card">
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-5">
              <div className="min-w-0"><h3 className="font-display text-[14px] font-semibold text-foreground">Recent expenses</h3><p className="mt-0.5 text-[10px] text-muted-foreground">An example of the receipt review workspace</p></div>
              <Button size="icon" variant="ghost" aria-label="More expense table options" disabled className="shrink-0 cursor-not-allowed"><Ellipsis aria-hidden="true" /></Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[530px] text-left">
                <thead><tr className="border-b border-border bg-background/70 text-[9px] font-medium tracking-[0.65px] text-muted-foreground">
                  <th className="px-4 py-3 font-medium sm:px-5">MERCHANT</th><th className="px-3 py-3 font-medium">CATEGORY</th><th className="px-3 py-3 text-right font-medium">AMOUNT</th><th className="px-3 py-3 font-medium">STATUS</th><th className="px-3 py-3 text-right font-medium">DATE</th>
                </tr></thead>
                <tbody>{transactions.map((transaction) => (
                  <tr key={transaction.vendor} className="border-b border-border last:border-b-0">
                    <td className="px-4 py-3.5 sm:px-5"><div className="flex items-center gap-2.5"><span className={`grid size-8 shrink-0 place-items-center rounded-[5px] font-mono text-[9px] font-medium ${transaction.iconTone}`}>{transaction.initials}</span><span className="truncate text-[11px] font-medium text-foreground">{transaction.vendor}</span></div></td>
                    <td className="px-3 py-3.5 text-[10px] text-muted-foreground">{transaction.category}</td>
                    <td className="px-3 py-3.5 text-right font-mono text-[10px] font-medium text-foreground">{transaction.amount}</td>
                    <td className="px-3 py-3.5"><span className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-1 text-[9px] font-medium ${transaction.statusTone}`}>{transaction.status === "Reviewed" && <Check className="mr-1 size-2.5" aria-hidden="true" />}{transaction.status}</span></td>
                    <td className="whitespace-nowrap px-3 py-3.5 text-right text-[9px] text-muted-foreground">{transaction.date}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
            <div className="border-t border-border px-4 py-3 sm:px-5">
              <Button asChild variant="link" className="h-auto p-0 text-[10px] text-primary">
                <Link to="/app/$section" params={{ section: "receipt-history" }}>View receipt history <ArrowRight className="size-3" aria-hidden="true" /></Link>
              </Button>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-1">
            <section className="min-w-0 rounded-[7px] border border-border bg-card">
              <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-4 sm:px-5">
                <div><h3 className="font-display text-[13px] font-semibold text-foreground">Spend by category</h3><p className="mt-0.5 text-[10px] text-muted-foreground">Illustrative · current month</p></div>
                <TrendingUp className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              </div>
              <div className="space-y-[18px] p-4 sm:px-5 sm:py-5">
                {bars.map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-[10px]"><span className="min-w-0 truncate text-muted-foreground">{bar.label}</span><span className="shrink-0 font-mono font-medium text-foreground">{bar.amount}</span></div>
                    <div className="h-[5px] overflow-hidden rounded-full bg-secondary"><div className={`h-full rounded-full ${bar.fill}`} style={{ width: bar.percent }} /></div>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-border pt-3 text-[10px]"><span className="text-muted-foreground">Other categories</span><span className="font-mono font-medium text-foreground">$10,304.20</span></div>
              </div>
            </section>

            <section className="min-w-0 rounded-[7px] border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-5">
                <div><h3 className="font-display text-[13px] font-semibold text-foreground">Items to revisit</h3><p className="mt-0.5 text-[10px] text-muted-foreground">Example alerts · not actual findings</p></div>
                <span className="rounded-full bg-warning-soft px-2 py-1 font-mono text-[10px] font-medium text-warning">03</span>
              </div>
              <ul className="divide-y divide-border px-4 sm:px-5">
                {alertItems.map((item) => {
                  const Icon = item.icon;
                  return <li key={item.label} className="flex items-center gap-2.5 py-3.5">
                    <span className={`grid size-8 shrink-0 place-items-center rounded-[5px] ${item.tone}`}><Icon className="size-4" aria-hidden="true" /></span>
                    <span className="min-w-0 flex-1"><span className="block truncate text-[10px] font-medium text-foreground">{item.label}</span><span className="mt-0.5 block truncate text-[9px] text-muted-foreground">{item.detail}</span></span>
                    <span className="shrink-0 whitespace-nowrap text-[9px] text-muted-foreground">{item.time}</span>
                  </li>;
                })}
              </ul>
              <div className="border-t border-border px-4 py-3 sm:px-5">
                <Button asChild variant="link" className="h-auto p-0 text-[10px] text-primary">
                  <Link to="/app/$section" params={{ section: "investigations" }}>Explore investigations <ArrowRight className="size-3" aria-hidden="true" /></Link>
                </Button>
              </div>
            </section>
          </div>
        </div>

        <p className="mt-7 flex items-center gap-2 text-[9px] text-muted-foreground"><FileText className="size-3.5" aria-hidden="true" />A product concept preview by ReceiptIQ. These examples are fictional and are not based on real receipts or financial accounts.</p>
      </div>
    </AppShell>
  );
}