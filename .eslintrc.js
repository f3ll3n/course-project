/* eslint-disable i18next/no-literal-string */
module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:i18next/recommended',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'i18next'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'i18next/no-literal-string': 'off',
		'react/no-deprecated': 'off'
	}
};