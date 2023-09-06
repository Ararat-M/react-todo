import type {Config} from 'jest';

const config: Config = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  moduleDirectories: [
    "node_modules",
    "<rootDir>/src"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  rootDir: "../../",
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"
  ]
};

export default config;
