/* eslint-disable linebreak-style */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', "plugin:i18next/recommended"],
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
	],
	rules: {
		'react/jsx-indent': [2, 4],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'react/jsx-indent-props': [2, 4],
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
        'react/no-deprecated': 'off',
		// 'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': ['error', {markupOnly: true}],
		'max-len': ['error', { ignoreComments: true, code: 100 }],
	},
	globals: {
		IS_DEV: true,
	},
};