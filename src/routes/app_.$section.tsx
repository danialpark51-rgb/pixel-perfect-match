import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CircleHelp,
  ClipboardList,
  FileClock,
  FileSearch,
  FileText,
  LockKeyhole,
  ScanLine,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { AppShell } from "@/components/receiptiq/app-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app_/$section")({
  component: WorkspaceSection,
});

const sections = {
  "upload-receipts": {
    title: "Upload receipts",
    icon: Upload,
    eyebrow: "Receipt intake",
    description:
      "A clear intake flow for bringing receipt documents into a review workspace is planned here.",
    note: "File uploads and receipt processing are not available in this preview.",
  },
  "receipt-history": {
    title: "Receipt history",
    icon: FileClock,
    eyebrow: "Receipt records",
    description:
      "A searchable record of submitted receipts and their review context will live here.",
    note: "There are no saved receipt records in this frontend preview.",
  },
  investigations: {
    title: "Investigations",
    icon: FileSearch,
    eyebrow: "Review workspace",
    description:
      "A focused place for reviewers to examine open questions, supporting details, and next steps.",
    note: "Investigation workflows and sample case records are not implemented.",
  },
  "evidence-findings": {
    title: "Evidence & findings",
    icon: ShieldCheck,
    eyebrow: "Evidence trail",
    description:
      "A structured view connecting a review observation to the details and documents behind it.",
    note: "Evidence storage and finding creation are not available in this preview.",
  },
  reports: {
    title: "Reports",
    icon: FileText,
    eyebrow: "Reporting",
    description:
      "A reporting area for reviewing expense patterns and sharing a clear summary with your team.",
    note: "Report generation and exports are not available in this preview.",
  },
  "review-history": {
    title: "Review history",
    icon: ClipboardList,
    eyebrow: "Decision record",
    description:
      "A transparent timeline of review activity, notes, and outcomes is planned for this space.",
    note: "No review activity is recorded or stored by this preview.",
  },
  "settings-account": {
    title: "Settings & account",
    icon: LockKeyhole,
    eyebrow: "Workspace settings",
    description:
      "Workspace preferences and account controls will be gathered here when account features are available.",
    note: "This demo has no sign-in, account management, or saved settings.",
  },
  pricing: {
    title: "Pricing",
    icon: CircleHelp,
    eyebrow: "Plans",
    description:
      "Plan details will be shared here as the ReceiptIQ product takes shape.",
    note: "There are no purchasable plans or checkout in this preview.",
  },
} as const;

function WorkspaceSection() {
  const { section } = Route.useParams();
  const page = sections[section as keyof typeof sections];
  if (!page) {
    return (
      <AppShell>
        <section className="rounded-[8px] border border-border bg-card px-5 py-8 sm:px-8">
          <div className="grid size-12 place-items-center rounded-[8px] border border-primary/15 bg-blue-soft text-primary">
            <BookOpenCheck className="size-5" aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-display text-[23px] font-semibold text-navy">
            Workspace area not found
          </h2>
          <p className="mt-2 max-w-[520px] text-[13px] leading-[1.7] text-muted-foreground">
            This area is not part of the current ReceiptIQ preview.
          </p>
          <Button asChild className="mt-6 h-11 gap-2 px-4 text-xs">
            <Link to="/app">
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Back to overview
            </Link>
          </Button>
        </section>
      </AppShell>
    );
  }

  const Icon = page.icon;

  return (
    <AppShell>
      <div className="animate-receipt-enter">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-muted-foreground">
              Northstar Studio <span className="mx-1.5 text-border">/</span>
              Workspace
            </p>
            <h2 className="mt-1 font-display text-[25px] font-semibold text-navy sm:text-[29px]">
              {page.title}
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-warning/25 bg-warning-soft px-3 py-1.5 text-[10px] font-medium text-warning">
            <span className="size-1.5 rounded-full bg-warning" />
            Coming soon
          </span>
        </div>

        <section
          aria-labelledby="section-status-title"
          className="relative overflow-hidden rounded-[8px] border border-border bg-card"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-primary/75" />
          <div className="grid gap-9 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-12">
            <div className="max-w-[650px]">
              <div className="mb-6 grid size-12 place-items-center rounded-[8px] border border-primary/15 bg-blue-soft text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[1px] text-primary">
                {page.eyebrow}
              </p>
              <h3
                id="section-status-title"
                className="mt-2 font-display text-[22px] font-semibold leading-tight text-navy sm:text-[26px]"
              >
                This workspace area is still taking shape.
              </h3>
              <p className="mt-3 max-w-[570px] text-[13px] leading-[1.75] text-muted-foreground sm:text-[14px]">
                {page.description}
              </p>
              <div
                role="note"
                className="mt-6 flex items-start gap-2.5 border-l-2 border-warning/60 bg-warning-soft/45 px-3.5 py-3 text-[11px] leading-[1.65] text-warning"
              >
                <ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="font-semibold">Preview limitation.</strong>{" "}
                  {page.note}
                </span>
              </div>
              <div className="mt-7 flex flex-col gap-3 min-[440px]:flex-row">
                <Button asChild className="h-11 justify-center gap-2 px-4 text-xs">
                  <Link to="/app">
                    <ArrowLeft className="size-3.5" aria-hidden="true" />
                    Back to overview
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 justify-center gap-2 px-4 text-xs"
                >
                  <Link to="/app/$section" params={{ section: "receipt-history" }}>
                    Explore receipt history
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="rounded-[7px] border border-border bg-background p-4 sm:p-5">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-foreground">
                <ScanLine className="size-4 text-primary" aria-hidden="true" />
                What this preview includes
              </div>
              <ul className="mt-4 space-y-3.5">
                {[
                  "Navigation between planned workspace areas",
                  "Clear boundaries around unavailable features",
                  "Illustrative figures on the overview only",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[11px] leading-[1.6] text-muted-foreground"
                  >
                    <BookOpenCheck
                      className="mt-0.5 size-3.5 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-[10px] leading-[1.65] text-muted-foreground">
                No receipt is uploaded, processed, or retained here. No account
                or review activity is saved.
              </p>
            </aside>
          </div>
        </section>

        <div className="mt-5 flex items-start gap-2.5 rounded-[7px] border border-border/80 bg-card px-4 py-3.5 text-[11px] leading-[1.65] text-muted-foreground">
          <CircleHelp className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <p>
            ReceiptIQ is an early-stage product preview. Any figures elsewhere
            in this workspace are illustrative examples, not live business data.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
