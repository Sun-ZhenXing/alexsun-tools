import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: true,
    markdown: false,
    typescript: {},
    vue: true,
  },
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    },
  },
)
