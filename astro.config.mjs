// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tema7-gruppe2.github.io",
  base: import.meta.env.PROD ? "/hojskolendk" : "/",
});
