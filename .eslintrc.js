// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'react'],
  rules: {
    'prettier/prettier': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
