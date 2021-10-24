const path = require('path');

module.exports = {
	extends: [
		'prettier',
		'plugin:@next/next/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		'no-shadow': 0,
		'import/extensions': 0,
		'react/jsx-filename-extension': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'no-use-before-define': 0,
		'object-curly-newline': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'ban-ts-comment': 0,
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
	plugins: ['@typescript-eslint', 'prettier', 'import', 'jsx-a11y'],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['src/*', path.resolve(__dirname, './src')],
					['pages/*', path.resolve(__dirname, './pages')],
					['containers/*', path.resolve(__dirname, './src/containers')],
					['components/*', path.resolve(__dirname, './src/components')],
					['styleguide/*', path.resolve(__dirname, './src/styleguide')],
					['svgs/*', path.resolve(__dirname, './src/svgs/*')],
				],
				extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
			},
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
};
