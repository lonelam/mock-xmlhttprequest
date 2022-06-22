const { rules: tsBaseRules } = require('eslint-config-airbnb-typescript/lib/shared');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    // Allow to use braces if desired
    'arrow-body-style': 0,

    // Trailing commas on function arguments is just silly
    '@typescript-eslint/comma-dangle': ['error', {
      ...tsBaseRules['@typescript-eslint/comma-dangle'][1],
      functions: 'never',
    }],

    // Saving 2 characters is not worth the potential errors
    'curly': ['error', 'all'],

    // A chain of 'if' and 'else if' statements is clearer than multiple individual 'if' blocks
    'no-else-return': ['error', { allowElseIf: true }],

    // Finding good names is hard so allow reuse
    'no-param-reassign': 0,

    // Increment with += 1 is just too long to type
    'no-plusplus': 0,

    // Finding good names is hard so allow reuse
    '@typescript-eslint/no-shadow': 0,

    // This is still the best way to express the private api intent
    'no-underscore-dangle': ['error', { 'allowAfterThis': true }],

    // Allow functions to be used before defined because:
    // 1) they are hoisted;
    // 2) it allows code ordering that moves helper functions to the bottom.
    '@typescript-eslint/no-use-before-define': ['error', {
      ...tsBaseRules['@typescript-eslint/no-use-before-define'][1],
      functions: false,
    }],

    // To allow comment blocks that are actually section headers
    'spaced-comment': ['error', 'always', { 'exceptions': ['/'] }],
  },
};
