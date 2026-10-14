import logo from "@/assets/brabantse-jongens-logo.jpg";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <img
      src={logo}
      alt="Brabantse Jongens Automotive"
      className={cn("h-10 w-auto max-w-full shrink-0 object-contain sm:h-12", className)}
    />
  );
}
