import logoAsset from "@/assets/logo-bj.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <img
      src={logoAsset.url}
      alt="Brabantse Jongens Automotive"
      className={cn("h-10 w-auto shrink-0 object-contain sm:h-12", className)}
    />
  );
}
