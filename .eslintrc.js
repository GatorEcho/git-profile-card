module.exports = {
    "extends": ["google",
                "prettier",
                "prettier/react"
            ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "prettier/prettier":[
        "error", {
            "trailingComma": "es6",
            "singleQuote": true,
            "printWidth": 80

        }
    ]
};