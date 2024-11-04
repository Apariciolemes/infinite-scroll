// eslint.config.js
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'

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
    }
  },

  // Vue specific rules
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'error',
      'vue/no-unused-vars': 'error'
    }
  }
]
