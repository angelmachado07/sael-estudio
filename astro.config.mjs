// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://saelestudio.com.uy",
  redirects: {
    "/servicios": {
      destination: "/#servicios",
      status: 301,
    },
  },
});
