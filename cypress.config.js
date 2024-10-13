const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank",
    env: {
      loginPage: "/index.htm",
      registerPage: "/register.htm"

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
