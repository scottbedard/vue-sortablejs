module.exports = {
  extends: [
    'airbnb-typescript/base',
  ],
  ignorePatterns: [
    'dist',
    'rollup.config.ts',
    'sandbox',
    'scripts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/semi': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'object-curly-newline': 0,
    'prefer-destructuring': 0,
    'quote-props': 0,
    'semi': ['error', 'never'],
    'symbol-description': 0,
  },
}
