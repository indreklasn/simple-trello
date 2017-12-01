module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "document": true,
        "window": true
    },
    "plugins": ["react"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaversion": 7,
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
            "spread": true
        },
    },
    "rules": {
        "require-jsdoc": 0,
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": 0,
        "react/jsx-uses-react": "error", "react/jsx-uses-vars": "error",
        "react/prop-types": 0,
        "no-console": 0,
        "react/no-find-dom-node": 0,
        "no-unused-vars": 0
    }
};
