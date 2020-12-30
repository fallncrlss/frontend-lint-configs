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
		"prettier/unicorn"
	],
	parserOptions: { ecmaVersion: 2020 },
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/explicit-length-check": "off"
	}
};
