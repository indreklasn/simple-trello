module.exports = {
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": ["react"],
    "env": {
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaversion": 7,
        "ecmaFeatures": {
            "jsx": true,
            "modules" true,
            "experimentalObjectRestSpread": true,
            "spread": true
        },
    },
    "rules": {
        "require-jsdoc": 0,
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": ["warning", "always"],
        "react/jsx-uses-react": "error", "react/jsx-uses-vars": "error",
    }
};
