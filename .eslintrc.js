module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/naming-convention': [2, {
      'selector': 'interface',
      'format': ['PascalCase'],
      'custom': {
        'regex': '^I[A-Z]',
        'match': true,
      },
    },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unused-vars': 0,
    'newline-per-chained-call': [2, {'ignoreChainWithDepth': 2}],
    'no-multiple-empty-lines': [2, {'max': 2}],
    'arrow-parens': 2,
  },
}
