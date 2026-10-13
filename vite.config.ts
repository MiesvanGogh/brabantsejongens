import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: { enabled: true },
  },
  vite: {
    // Alleen op GitHub Actions het subpad gebruiken, zodat Lovable-preview blijft werken
    base: process.env.GITHUB_ACTIONS ? "/brabantsejongens/" : "/",
  },
});
