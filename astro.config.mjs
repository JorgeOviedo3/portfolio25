// @ts-check
import { defineConfig } from "astro/config";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";

const defaultLocale = "es";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
};

function redirects(req, res, next) {
  const url = req.url;

  if (url === "/es/") {
    res.writeHead(302, { Location: "/" });
    res.end();
  } else {
    next();
  }
}

// https://astro.build/config
export default defineConfig({
  // site: "https://joviedo.com/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
      redirectDefaultLocale: true,
    }),
    {
      name: "redirects",
      hooks: {
        "astro:server:setup": ({ server }) => {
          server.middlewares.use(redirects);
        },
      },
    },
  ],
});
