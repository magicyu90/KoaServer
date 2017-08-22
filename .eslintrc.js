module.exports = {
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017
    },
    "rules": {
        "indent": [2, 2],
        "linebreak-style": [2, "unix"],
        "quotes": [2, "single"],
        "semi": [2, "never"],
        "array-bracket-spacing": [2, "never"],
        "no-console": 0 //允许使用console
    }
};