import logoAsset from "@/assets/brabantse-jongens-logo-wide.jpg.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <img
      src={logoAsset.url}
      alt="Brabantse Jongens Automotive"
      className={cn("h-10 w-auto max-w-full shrink-0 object-contain mix-blend-screen sm:h-12", className)}
    />
  );
}
