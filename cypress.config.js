const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5174/ISTQB_project/",
    viewportWidth: 1280,
    viewportHeight: 720,
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
