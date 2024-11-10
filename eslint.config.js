// eslint.config.js
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Ignore patterns
  {
    ignores: ['dist/**', 'node_modules/**', '.git/**', '.vscode/**', 'public/**']
  },

  // JS base config
  js.configs.recommended,

  // Vue config (use flat config format)
  ...pluginVue.configs['flat/recommended'],

  // Global settings
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: pluginVue.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      ...prettierConfig.rules, // Disable conflicting ESLint rules
      'prettier/prettier': 'error', // Run Prettier as an ESLint rule,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },

  // Vue specific rules
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'error',
      'vue/no-unused-vars': 'error'
    }
  },
  prettier
]
