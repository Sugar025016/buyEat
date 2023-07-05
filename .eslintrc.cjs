module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
    },
    /* 指定如何解析語法 */
    parser: 'vue-eslint-parser',
    /** 優先級低於 parse 的語法解析配置 */
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      jsxPragma: 'React',
      ecmaFeatures: {
        jsx: true,
      },
    },
    /* 繼承已有的規則 */
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['vue', '@typescript-eslint'],
    /*
     * "off" 或 0 ==> 關閉規則 
     * "warn" 或 1 ==> 打開的規則作為警告（不影響代碼執行） 
     * "error" 或 2 ==> 規則作為一個錯誤（代碼不能執行，界面報錯）
     */
    rules: {
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允許多個空行
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error', // 禁止空餘的多行
      'no-useless-escape': 'off', // 禁止不必要的轉義字符
  
      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定義未使用的變量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignor
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 類型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定義 TypeScript 模塊和命名空間。
      '@typescript-eslint/semi': 'off',
  
      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 要求組件名稱始終為 “-” 鏈接的單詞
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的變量<template>被標記為未使用
      'vue/no-mutating-props': 'off', // 不允許組件 prop的改變
      'vue/attribute-hyphenation': 'off', // 對模板中的自定義組件強制執行屬性命名樣式
    },
  };
