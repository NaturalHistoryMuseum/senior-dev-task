// jest.config.mjs
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
  setupFilesAfterEnv: ["<rootDir>/.jest/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  moduleNameMapper: {
    "use-resize-observer": "use-resize-observer/polyfilled",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/layouts/(.*)$": "<rootDir>/layouts/$1",
    "^@/utilities/(.*)$": "<rootDir>/utilities/$1",
    "^@/constants/(.*)$": "<rootDir>/constants/$1",
    "^@/icons/(.*)$": "<rootDir>components/base/icons/$1",
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 60,
    },
  },
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
