module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
