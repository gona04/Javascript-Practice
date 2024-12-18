// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021, // or the appropriate ECMAScript version for your project
      sourceType: "module",
    },
    rules: {
      strict: ["error", "global"],
      "multiline-comment-style": ["error", "bare-block"],
      "no-undef": ["error"], // To catch undefined variables
    },
  },
];
