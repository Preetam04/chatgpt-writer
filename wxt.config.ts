import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "Connect Linkedin",
    permissions: ["tabs", "activeTab", "scripting"],
    content_security_policy: {
      extension_pages: "script-src 'self'; object-src 'self'",
    },
    host_permissions: ["https://*.linkedin.com/*"],
    web_accessible_resources: [
      {
        resources: [
          "assets/ai-icon.svg",
          "assets/insert.svg",
          "assets/regenerate.svg",
          "assets/send.svg",
        ],
        matches: ["https://*.linkedin.com/*"],
      },
    ],

    // icons: {
    //   16: "linkedin.svg",
    // },
  },
  manifestVersion: 3,
});
