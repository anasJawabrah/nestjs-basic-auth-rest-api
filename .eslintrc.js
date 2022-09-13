module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier','nestjs'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:nestjs/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
		"@typescript-eslint/no-unused-vars": "off",

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    "quotes": [
			"error",
			"double",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": false
			}
		],
		"semi": ["error", "always"],
    
  },
};
