// @ts-check
import { defineConfig } from "astro/config";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";

const defaultLocale = "es";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
};

// https://astro.build/config
export default defineConfig({
  site: "https://joviedo.com/",
  trailingSlash: "always",
  integrations: [
    i18n({
      locales,
      defaultLocale,
      redirectDefaultLocale: true,
    }),
  ],
});
