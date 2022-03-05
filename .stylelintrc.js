module.exports = {
  "customSyntax": "postcss-html",
  "extends": ["stylelint-config-standard-scss"],
  "plugins": ["stylelint-scss"],
  "rules": {
    // 在开括号之后要求有一个换行符
    "block-opening-brace-newline-after": "always",
        
    // 在括开号之前要求有空白
    "block-opening-brace-space-before": "always",
        
    // 禁止在闭括号之前有空行
    "block-closing-brace-empty-line-before": "never",
        
    // 在闭括号之后要求有一个换行符，或禁止有空白
    "block-closing-brace-newline-after": "always",
        
    // 在闭括号之前要求有一个换行符
    "block-closing-brace-newline-before": "always",
        
    // 禁止出现空块
    "block-no-empty": true,
        
    // 禁止使用无效的十六进制颜色
    "color-no-invalid-hex": true,
        
    // 禁止空注释
    "comment-no-empty": true,
        
    // 在感叹号之后禁止有空白。
    "declaration-bang-space-after": "never",
        
    // 在感叹号之前要求有一个空格
    "declaration-bang-space-before": "always",
        
    // 在声明的块中中禁止出现重复的属性
    "declaration-block-no-duplicate-properties": true,
        
    // 在声明块的分号之后要求有一个换行符
    "declaration-block-semicolon-newline-after": "always-multi-line",
        
    // 在声明块的分号之前要求禁止有空白
    "declaration-block-semicolon-newline-before": "never-multi-line",
        
    // 在声明块的分号之后前要求禁止有空白
    "declaration-block-semicolon-space-before": "never", 
        
    // 要求在声明块中使用拖尾分号
    "declaration-block-trailing-semicolon": "always",
        
    // 在冒号之后要求有一个空格
    "declaration-colon-space-after": "always",
        
    // 在冒号之前要求禁止有空白
    "declaration-colon-space-before": "never",
        
    // 禁止在声明语句之前有空行
    "declaration-empty-line-before": "never",
        
    // 禁止使用重复的字体名称
    "font-family-no-duplicate-names": true,
        
    // 在函数的逗号之后要求有一个空格
    "function-comma-space-after": "always",
        
    // 在函数的逗号之前要求禁止有空白
    "function-comma-space-before": "never",
        
    // 禁止行尾空格
    "no-eol-whitespace": true,
        
    // 禁止多余的分号
    "no-extra-semicolons": true,
        
    // 禁止使用未知属性
    "property-no-unknown": true,
  },
  "ignoreFiles": ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}