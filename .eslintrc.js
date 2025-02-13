module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/strongly-recommended", "@vue/standard"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "generator-star-spacing": "off",
    "no-mixed-operators": 0,
    "no-trailing-spaces": 1,
    "no-multiple-empty-lines": 1,
    "comma-dangle": 0,
    "vue/max-attributes-per-line": 0,
    semi: 0,
    curly: 0,
    "no-useless-return": 0,
    "space-before-function-paren": 0,
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      },
    ],
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/no-unused-components": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-parsing-error": 0,
    "no-tabs": 0,
    quotes: 0,
    "eol-last": 0,
    eqeqeq: 0,
    "operator-linebreak": 0,
    // semi: [
    //   2,
    //   'never',
    //   {
    //     beforeStatementContinuationChars: 'never',
    //   },
    // ],
    "no-delete-var": 2,
    "prefer-const": [
      2,
      {
        ignoreReadBeforeAssign: false,
      },
    ],
    "template-curly-spacing": "off",
    indent: "off",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
