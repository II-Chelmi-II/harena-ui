import { defineConfig } from "cypress";
import webpackConfig from "./webpack.config"; 

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/index.ts",
  },

  retries: {
    runMode: 2,
    openMode: 1,
  },

  screenshotOnRunFailure: true,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: webpackConfig,
    },
  },
});