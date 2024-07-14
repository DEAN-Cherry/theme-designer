import js from '@eslint/js';
import ts from 'typescript-eslint';
import vue from 'eslint-plugin-vue';

import stylisticJs from '@stylistic/eslint-plugin-js';

export default ts.config(
    {
        ignores: ['dist', 'node_modules']
    },
    js.configs.recommended,
    {
        // js options
        plugins: {
            '@stylistic/js': stylisticJs
        },
        rules: {
            '@stylistic/js/semi': ['error', 'always'],
            '@stylistic/js/indent': ['warn', 4, { 'SwitchCase': 1 }]
        }
    },
    ...ts.configs.recommended,
    {
        // ts options
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    'args': 'all',
                    'argsIgnorePattern': '^_',
                    'caughtErrors': 'all',
                    'caughtErrorsIgnorePattern': '^_',
                    'destructuredArrayIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'ignoreRestSiblings': true
                }
            ]
        }
    },
    ...vue.configs['flat/recommended'],
    {
        // vue sfc options
        files: ['src/**/*.vue'],
        languageOptions: {
            parser: vue.parser,
            parserOptions: {
                parser: ts.parser,
                sourceType: 'module'
            }
        },
        rules: {
            'vue/html-indent': ['warn', 4],
            'vue/max-attributes-per-line': ['error', {
                'singleline': 128,
                'multiline': 128
            }],
            'vue/html-self-closing': ['warn', {
                'html': { 'normal': 'never' },
                'svg': 'never',
                'math': 'never'
            }],
            'vue/singleline-html-element-content-newline': ['off']
        }
    }
);
