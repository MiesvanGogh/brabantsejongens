import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary font-display text-lg font-bold italic tracking-tighter text-primary-foreground">
        BJ
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-base font-bold uppercase tracking-wide sm:text-lg",
            tone === "light" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          Brabantse Jongens
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-primary">
          Automotive
        </span>
      </span>
    </span>
  );
}
