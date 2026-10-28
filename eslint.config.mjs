import js from '@eslint/js'
import globals from 'globals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

// Convenções adaptadas de https://github.com/Rocketseat/eslint-config-rocketseat
// sem dependências de React/TypeScript ou da configuração legada do ESLint 8.
export default [
  { ignores: ['node_modules/**', '.git/**'] },
  js.configs.recommended,
  {
    files: ['assinaturas/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      eqeqeq: ['error', 'always'],
      curly: ['error', 'multi-line'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },
  // Por último: integra Prettier e desativa regras de formatação conflitantes.
  prettierRecommended,
]
