import { ScanLine } from "lucide-react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5" aria-label="ReceiptIQ">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] bg-primary text-primary-foreground">
        <ScanLine className="size-[19px]" strokeWidth={2.1} aria-hidden="true" />
      </span>
      {!compact && (
        <span className="font-display text-[17px] font-semibold tracking-[-0.35px] text-foreground">
          Receipt<span className="text-primary">IQ</span>
        </span>
      )}
    </span>
  );
}