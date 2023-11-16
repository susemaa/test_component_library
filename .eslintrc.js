module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json',
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      "import/extensions": 0,
      "import/no-extraneous-dependencies": 0,
    }
}
