module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom"],

  moduleNameMapper: {
    "\\.(svg|png|jpg|jpeg|gif|webp)$": "<rootDir>/src/test/fileMock.js",
  },

  testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"],
};