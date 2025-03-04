import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),
  {
    env: {
      node: true,
    },
  },
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.eslint.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  {
    plugins: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
    ],
  },
  {
    rules: {
      'unused-imports/no-unused-imports': 'error',
      curly: ['error', 'all'],
      'import/no-cycle': ['error', { ignoreExternal: false, maxDepth: 3 }],
      'react/prop-types': 0,
      'react/require-default-props': 0,
      'react/no-unused-prop-types': 0,
      'react/jsx-no-target-blank': 0,
      'import/prefer-default-export': 0,
      'react/jsx-props-no-spreading': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'react/no-danger': 0,
      '@typescript-eslint/return-await': 0,
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default eslintConfig;
