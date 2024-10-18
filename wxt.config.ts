import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: ["tabs", "activeTab", "scripting"],
    content_security_policy: {
      extension_pages: "script-src 'self'; object-src 'self'",
    },
    host_permissions: ["https://*.linkedin.com/*"],
    web_accessible_resources: [
      {
        resources: ["assets/ai-icon.svg"],
        matches: ["https://*.linkedin.com/*"],
      },
    ],
  },
  manifestVersion: 3,
  // vite: () => ({
  //   plugins: [react()],
  // }),
});
