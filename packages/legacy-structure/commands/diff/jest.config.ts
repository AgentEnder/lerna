/* eslint-disable */
export default {
  displayName: "legacy-structure-commands-diff",
  preset: "../../../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../../coverage/packages/legacy-structure/commands/diff",
};