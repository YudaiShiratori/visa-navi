/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: null,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],

  rules: {
    "import/no-unresolved": "off",
  },

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: false,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      rules: {
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              ["parent", "sibling"],
              "index",
              "object",
              "type",
            ],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
            },
          },
        ],
        "import/no-named-as-default-member": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/no-unused-vars": "warn",
      },
    },

    // Node
    {
      files: [".eslintrc.{js,cjs}"],
      env: {
        node: true,
      },
    },
  ],
};
