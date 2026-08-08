import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Cars } from "@/components/sections/Cars";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

const title = "Brabantse Jongens Automotive | Garage & occasions Waalwijk";
const description =
  "De garage met de zacht G. Onderhoud, reparatie, APK en occasions in Waalwijk. Gemoedelijk, gedreven en gespecialiseerd.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Cars />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
