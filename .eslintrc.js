module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'warn',

    // 单引号
    quotes: ['error', 'single'],

    // 三等号
    eqeqeq: ['error', 'always'],

    // 数组的括号内的前后禁止有空格
    'array-bracket-spacing': ['error', 'never'],

    // 禁止行尾有空格
    'no-trailing-spaces': ['error'],

    // 禁止使用 var
    'no-var': 'error',

    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: {
            after: true
          },
          for: {
            after: true
          },
          while: {
            after: true
          },
          else: {
            after: true
          }
        }
      }
    ],

    // 禁止出现未使用过的变量
    'no-unused-vars': 'error',

    // 禁止语法错误
    'vue/no-parsing-error': 'error',

    // options顺序(官方推荐)
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],

    // props 必须要有默认值，不限制
    'vue/require-default-prop': 'off',

    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
    // typescript-eslint 配置
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
};
