import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "node_modules/**",
      "playwright-report/**",
      "reports/**",
      "test-results/**",
      "logs/**",
      "screenshot/**",
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
        ...globals.mocha,
        test: "readonly",
        expect: "readonly",
        require: "readonly",
        module: "readonly",
        page: "readonly",
        browser: "readonly",
        context: "readonly",
        request: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
