module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-clean-order'],

  plugins: [
    'stylelint-order',
    'stylelint-csstree-validator'
  ],

  rules: {
    // Пустая строка перед at-правилом, кроме первого вложенного, игнорируется после комментария
    'at-rule-empty-line-before': [ 'always', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    } ],

    // Регистр имен at-правила - всегда в нижнем регистре
    'at-rule-name-case': 'lower',

    // Перенос строки после закрывающей фигурной скобки блока всегда
    'block-closing-brace-newline-after': 'always',
    // Пробел перед закрывающей фигурной скобкой блока всегда на одной строке
    'block-closing-brace-space-before': 'always-single-line',
    // Перенос строки после открывающей фигурной скобки блока всегда при многострочном блоке
    'block-opening-brace-newline-after': 'always-multi-line',

    // Регистр символов в шестнадцатеричных цветовых значениях - всегда в нижнем регистре
    'color-hex-case': 'lower',
    // Длина шестнадцатеричных цветовых значений - короткая (например, #fff)
    'color-hex-length': 'short',

    // Точка с запятой после декларации - всегда
    'declaration-block-trailing-semicolon': 'always',

    // Кавычки в именах семейств шрифтов - всегда, за исключением ключевых слов (например, sans-serif)
    'font-family-name-quotes': 'always-unless-keyword',

    // Перенос строки и пробел после запятой в списке аргументов функции - всегда при многострочной записи
    'function-comma-newline-after': 'always-multi-line',
    // Пробел после запятой в списке аргументов функции - всегда на одной строке
    'function-comma-space-after': 'always-single-line',
    // Пробел перед запятой в списке аргументов функции - никогда
    'function-comma-space-before': 'never',
    // Максимальное количество пустых строк внутри функции - 0
    'function-max-empty-lines': 0,
    // Регистр имен функций - всегда в нижнем регистре
    'function-name-case': 'lower',

    // Отступ - 2 пробела
    'indentation': 2,

    // Длина значения 0 - без единиц измерения
    'length-zero-no-unit': true,

    // Максимальное количество пустых строк - 1
    'max-empty-lines': 1,
    // Пробел после двоеточия в медиа-фиче - всегда
    'media-feature-colon-space-after': 'always',
    // Пробел перед двоеточием в медиа-фиче - никогда
    'media-feature-colon-space-before': 'never',
    // Регистр имен медиа-фичи - всегда в нижнем регистре
    'media-feature-name-case': 'lower',
    // Пробел внутри скобок в медиа-фиче - никогда
    'media-feature-parentheses-space-inside': 'never',
    // Пробел после оператора диапазона в медиа-фиче - всегда
    'media-feature-range-operator-space-after': 'always',
    // Пробел перед оператором диапазона в медиа-фиче - всегда
    'media-feature-range-operator-space-before': 'always',

    // Ноль перед десятичной дробью - всегда
    'number-leading-zero': 'always',
    // Нет нулей после десятичной дроби
    'number-no-trailing-zeros': true,

    // Регистр имен свойства - всегда в нижнем регистре
    'property-case': 'lower',

    // Пустая строка перед правилом, кроме первого вложенного, игнорируется после комментария
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],

    // Пробел внутри скобок в селекторе атрибута - никогда
    'selector-attribute-brackets-space-inside': 'never',
    // Пробел после оператора в селекторе атрибута - никогда
    'selector-attribute-operator-space-after': 'never',
    // Пробел перед оператором в селекторе атрибута - никогда
    'selector-attribute-operator-space-before': 'never',
    // Пробел после комбинатора в селекторе - всегда
    'selector-combinator-space-after': 'always',
    // Пробел перед комбинатором в селекторе - всегда
    'selector-combinator-space-before': 'always',
    // Сортировка по специфичности селектора - отбрасывать
    'selector-descending-specificity': 'discard',
    // Регистр имен псевдокласса селектора - всегда в нижнем регистре
    'selector-pseudo-class-case': 'lower',
    // Регистр имен псевдоэлемента селектора - всегда в нижнем регистре
    'selector-pseudo-element-case': 'lower',
    // Регистр имен типа селектора - всегда в нижнем регистре
    'selector-type-case': 'lower'
  }
}
