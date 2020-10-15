module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-spacing': [2],
    'brace-style': [2, '1tbs'],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, { before: false, after: true }],
    'eol-last': [2, 'always'],
    'indent': [2, 2, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral'],
    }],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [2, { before: true, after: true }],
    'linebreak-style': [2, 'unix'],
    'no-commonjs': 0,
    'no-console': 0,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-trailing-spaces': 2,
    'no-undef': ['warn'],
    'object-curly-spacing': [2, 'always'],
    'prefer-template': [2],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-before-blocks': 2,
    'space-infix-ops': 2,
    'space-in-parens': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
