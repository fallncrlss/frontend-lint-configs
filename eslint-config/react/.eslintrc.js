module.exports = {
	root: true,
	env: {
		es6: true,
		browser: true
	},

	extends: [
		"eslint-config-airbnb",
		"plugin:unicorn/recommended",
		"plugin:prettier/recommended",
		"prettier",
		"prettier/unicorn"
	],

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},

	plugins: [
	"react-hooks",
	"prettier",
	"unicorn",
	"import",
	"jsx-a11y",
	"react"
	],

	settings: {
		"import/resolver": {
			node: {
				paths: ["src"]
			}
		}
	},

	rules: {
		"react/jsx-filename-extension": [
			1, { extensions: [".js", ".jsx"] }
		],
		"react/jsx-one-expression-per-line": [0],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"jsx-a11y/label-has-associated-control": [
			"error", { required: {
			some: [ "nesting", "id"  ]
			}
		}],
		"jsx-a11y/label-has-for": [
			"error", { required: {
			some: [ "nesting", "id"  ]
			}
		}],
		"unicorn/prevent-abbreviations": "off",
		"unicorn/filename-case": [ "error", {
			cases: {
				camelCase: true,
				pascalCase: true
			}
		}],
		"unicorn/explicit-length-check": "off"
	}
}
