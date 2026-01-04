module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.test.ts", "**/*.test.js"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "solutions/todo-service.ts",
    "solutions/repository.ts"
  ],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90
    }
  }
};
