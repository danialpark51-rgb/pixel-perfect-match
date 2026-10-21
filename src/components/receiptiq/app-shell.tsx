import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  ArrowDownToLine,
  Bell,
  CircleHelp,
  CreditCard,
  FileChartColumnIncreasing,
  FileClock,
  FileSearch,
  LayoutDashboard,
  Menu,
  MessageSquareText,
  Settings2,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/receiptiq/brand-mark";

const sections = [
  {
    label: "WORKSPACE",
    items: [
      { label: "Overview", icon: LayoutDashboard, href: "/app" as const },
      { label: "Upload receipts", icon: Upload, section: "upload-receipts" as const },
      { label: "Receipt history", icon: FileClock, section: "receipt-history" as const },
      { label: "Investigations", icon: FileSearch, section: "investigations" as const },
    ],
  },
  {
    label: "INTELLIGENCE",
    items: [
      { label: "Evidence & findings", icon: ShieldCheck, section: "evidence-findings" as const },
      { label: "Reports", icon: FileChartColumnIncreasing, section: "reports" as const },
      { label: "Review history", icon: MessageSquareText, section: "review-history" as const },
    ],
  },
  {
    label: "ACCOUNT",
    items: [
      { label: "Settings & account", icon: Settings2, section: "settings-account" as const },
      { label: "Pricing", icon: CreditCard, section: "pricing" as const },
    ],
  },
];

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="flex h-full flex-col">
      <Link to="/app" onClick={onNavigate} className="inline-flex w-fit items-center">
        <BrandMark />
      </Link>

      <div className="mt-8 flex w-full items-center gap-3 rounded-[8px] border border-border/80 p-2.5 text-left" aria-label="Northstar Studio demo workspace">
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-blue-soft font-display text-[12px] font-semibold text-primary">NS</span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-semibold text-foreground">Northstar Studio</span>
          <span className="mt-0.5 block text-[11px] text-muted-foreground">Demo workspace</span>
        </span>
      </div>

      <nav aria-label="Main navigation" className="mt-7 flex-1 space-y-6 overflow-y-auto pb-3">
        {sections.map((section) => (
          <section key={section.label}>
            <h2 className="mb-2 px-2 text-[10px] font-semibold tracking-[1.1px] text-muted-foreground">
              {section.label}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const sectionSlug = "section" in item ? item.section : undefined;
                const href = "href" in item ? item.href : undefined;
                const active = sectionSlug
                  ? pathname === `/app/${sectionSlug}`
                  : pathname === href;
                const itemContent = (
                  <>
                    <Icon className="size-[17px] shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                  </>
                );
                const linkClassName = `flex min-h-11 w-full items-center gap-2.5 rounded-[6px] border-l-2 px-3 text-left text-[13px] transition-colors ${
                  active
                    ? "border-primary bg-blue-soft font-semibold text-primary"
                    : "border-transparent text-muted-foreground hover:bg-accent hover:text-foreground"
                }`;

                return (
                  <li key={item.label}>
                    {sectionSlug ? (
                      <Link
                        to="/app/$section"
                        params={{ section: sectionSlug }}
                        onClick={onNavigate}
                        aria-current={active ? "page" : undefined}
                        className={linkClassName}
                      >
                        {itemContent}
                      </Link>
                    ) : (
                      <Link
                        to="/app"
                        onClick={onNavigate}
                        aria-current={active ? "page" : undefined}
                        className={linkClassName}
                      >
                        {itemContent}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>

      <div className="mb-3 rounded-[7px] border border-border/80 bg-background p-3.5">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-foreground">
          <Sparkles className="size-4 text-primary" aria-hidden="true" />
          ReceiptIQ preview
        </div>
        <p className="mt-1.5 text-[11px] leading-[1.55] text-muted-foreground">Uploads, analysis, and saved records are not available in this preview.</p>
        <Button asChild variant="outline" size="sm" className="mt-3 h-9 w-full gap-1.5 text-[11px]">
          <Link to="/app/$section" params={{ section: "pricing" }}>
          <CircleHelp aria-hidden="true" /> Learn about plans
          </Link>
        </Button>
      </div>

      <Link to="/app/$section" params={{ section: "settings-account" }} onClick={onNavigate} className="flex min-h-[60px] items-center gap-3 border-t border-border py-3 text-left transition-colors hover:bg-accent/50">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy font-display text-xs font-semibold text-primary-foreground">AR</span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[12px] font-semibold text-foreground">Alex Rivera</span>
          <span className="mt-0.5 block text-[11px] text-muted-foreground">Demo account</span>
        </span>
        <Settings2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[250px] border-r border-border bg-card px-5 pb-1 pt-6 lg:block">
        <Sidebar />
      </aside>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Close navigation" className="absolute inset-0 bg-navy/35" onClick={() => setMenuOpen(false)} />
          <aside className="relative z-10 flex h-full w-[min(84vw,300px)] flex-col overflow-y-auto bg-card p-5 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <BrandMark />
              <Button size="icon" variant="ghost" onClick={() => setMenuOpen(false)} aria-label="Close menu" className="size-11">
                <X aria-hidden="true" />
              </Button>
            </div>
            <Sidebar onNavigate={() => setMenuOpen(false)} />
          </aside>
        </div>
      )}

      <div className="min-h-screen lg:pl-[250px]">
        <header className="sticky top-0 z-10 border-b border-border/80 bg-background/95 backdrop-blur-sm">
          <div className="mx-auto flex h-[65px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-7">
            <div className="flex min-w-0 items-center gap-3">
              <Button size="icon" variant="ghost" onClick={() => setMenuOpen(true)} className="size-11 shrink-0 lg:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
              <div className="min-w-0">
                <div className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                  <span>Northstar Studio</span><span>/</span><span>Workspace</span>
                </div>
                <h1 className="truncate font-display text-[15px] font-semibold text-foreground">{getPageTitle(pathname)}</h1>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
              <span className="hidden rounded-full border border-warning/25 bg-warning-soft px-2.5 py-1 text-[10px] font-medium text-warning sm:inline-flex">DEMO DATA</span>
              <Button size="icon" variant="ghost" disabled title="Notifications are not available in this preview" aria-label="Notifications are not available in this preview" className="relative size-11 cursor-not-allowed opacity-60">
                <Bell aria-hidden="true" />
              </Button>
              <span className="hidden h-7 w-px bg-border sm:block" />
              <span className="hidden items-center gap-1.5 text-[11px] text-muted-foreground sm:flex"><Activity className="size-3.5 text-primary" aria-hidden="true" /> Product preview</span>
              <Button asChild size="sm" className="h-9 gap-1.5 px-3 text-xs sm:px-4">
                <Link to="/">
                  <ArrowDownToLine className="size-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Product overview</span>
                  <span className="sm:hidden">About</span>
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-[1440px] px-4 pb-12 pt-7 sm:px-7 sm:pt-9">
          {children}
        </main>
      </div>
    </div>
  );
}

const pageTitles: Record<string, string> = {
  "/app": "Overview",
  "/app/upload-receipts": "Upload receipts",
  "/app/receipt-history": "Receipt history",
  "/app/investigations": "Investigations",
  "/app/evidence-findings": "Evidence & findings",
  "/app/reports": "Reports",
  "/app/review-history": "Review history",
  "/app/settings-account": "Settings & account",
  "/app/pricing": "Pricing",
};

function getPageTitle(pathname: string) {
  return pageTitles[pathname] ?? "Workspace";
}
