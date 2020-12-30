module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		browser: true
	},
	extends: [
		"eslint:recommended",
		"plugin:unicorn/recommended",
		"plugin:prettier/recommended",
		"@vue/prettier",
		"prettier/unicorn",
		"plugin:vue/vue3-essential",
		"@vue/typescript/recommended",
		"@vue/prettier/@typescript-eslint"
	],
	parserOptions: { ecmaVersion: 2020 },
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/filename-case": [ "error", {
			cases: {
				camelCase: true,
				pascalCase: true,
				kebabCase: true
			}
		}],
		"unicorn/explicit-length-check": "off"
	}
};
