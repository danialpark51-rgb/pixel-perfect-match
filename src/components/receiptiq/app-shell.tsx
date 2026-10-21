import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowDownToLine,
  Bell,
  ChevronDown,
  CircleHelp,
  FileChartColumnIncreasing,
  FileClock,
  FileSearch,
  LayoutDashboard,
  Menu,
  MessageSquareText,
  ScanLine,
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
      { label: "Overview", icon: LayoutDashboard, current: true },
      { label: "Upload receipts", icon: Upload },
      { label: "Receipt history", icon: FileClock },
      { label: "Investigations", icon: FileSearch, count: "07" },
    ],
  },
  {
    label: "INTELLIGENCE",
    items: [
      { label: "Evidence & findings", icon: ShieldCheck },
      { label: "Reports", icon: FileChartColumnIncreasing },
      { label: "Review history", icon: MessageSquareText },
    ],
  },
];

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <Link to="/app" onClick={onNavigate} className="inline-flex w-fit items-center">
        <BrandMark />
      </Link>

      <button className="mt-8 flex w-full items-center gap-3 rounded-[8px] border border-border/80 p-2.5 text-left transition-colors hover:bg-accent" aria-label="Workspace: Northstar Studio, demo workspace">
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-blue-soft font-display text-[12px] font-semibold text-primary">NS</span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] font-semibold text-foreground">Northstar Studio</span>
          <span className="mt-0.5 block text-[11px] text-muted-foreground">Demo workspace</span>
        </span>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      </button>

      <nav aria-label="Main navigation" className="mt-8 flex-1 space-y-7">
        {sections.map((section) => (
          <section key={section.label}>
            <h2 className="mb-2 px-2 text-[10px] font-semibold tracking-[1.1px] text-muted-foreground">
              {section.label}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const itemContent = (
                  <>
                    <Icon className="size-[17px] shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    {item.count && (
                      <span className="rounded-full bg-warning-soft px-1.5 py-0.5 font-mono text-[10px] font-medium text-warning">
                        {item.count}
                      </span>
                    )}
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.current ? (
                      <Link
                        to="/app"
                        onClick={onNavigate}
                        aria-current="page"
                        className="flex min-h-10 items-center gap-2.5 rounded-[6px] border-l-2 border-primary bg-blue-soft px-3 text-[13px] font-semibold text-primary"
                      >
                        {itemContent}
                      </Link>
                    ) : (
                      <button type="button" disabled title={`${item.label} is not available in this demo`} aria-label={`${item.label}, coming soon`} className="flex min-h-10 w-full cursor-not-allowed items-center gap-2.5 rounded-[6px] px-3 text-left text-[13px] text-muted-foreground opacity-80">
                        {itemContent}
                      </button>
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
        <p className="mt-1.5 text-[11px] leading-[1.55] text-muted-foreground">AI analysis and saved receipts are not connected yet.</p>
        <Button variant="outline" size="sm" disabled className="mt-3 h-8 w-full cursor-not-allowed gap-1.5 text-[11px]">
          <CircleHelp aria-hidden="true" /> Learn about plans
        </Button>
      </div>

      <button type="button" disabled className="flex cursor-not-allowed items-center gap-3 border-t border-border py-4 text-left" aria-label="Demo account, settings coming soon">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy font-display text-xs font-semibold text-primary-foreground">AR</span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[12px] font-semibold text-foreground">Alex Rivera</span>
          <span className="mt-0.5 block text-[11px] text-muted-foreground">Demo account</span>
        </span>
        <Settings2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      </button>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <Button size="icon" variant="ghost" onClick={() => setMenuOpen(false)} aria-label="Close menu">
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
              <Button size="icon" variant="ghost" onClick={() => setMenuOpen(true)} className="shrink-0 lg:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
              <div className="min-w-0">
                <div className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                  <span>Northstar Studio</span><span>/</span><span>Workspace</span>
                </div>
                <h1 className="truncate font-display text-[15px] font-semibold text-foreground">Overview</h1>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
              <span className="hidden rounded-full border border-warning/25 bg-warning-soft px-2.5 py-1 text-[10px] font-medium text-warning sm:inline-flex">DEMO DATA</span>
              <Button size="icon" variant="ghost" aria-label="Notifications, 2 demo alerts" className="relative">
                <Bell aria-hidden="true" />
                <span className="absolute right-[7px] top-[7px] size-1.5 rounded-full bg-primary ring-2 ring-background" />
              </Button>
              <span className="hidden h-7 w-px bg-border sm:block" />
              <span className="hidden items-center gap-1.5 text-[11px] text-muted-foreground sm:flex"><Activity className="size-3.5 text-success" aria-hidden="true" /> All systems operational</span>
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