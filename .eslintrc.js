const path = require("path");

module.exports = {
    extends: [
        // By extending from a plugin config, we can get recommended rules without having to add them manually.
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
        // Make sure it's always the last config, so it gets the chance to override other configs.
        'eslint-config-prettier',
    ],
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use.
            version: 'detect',
        },
        // Tells eslint how to resolve imports
        'import/resolver': {
            node: {
                paths: 'src',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
                project:[
                    path.resolve(__dirname, '.tsconfig.json'), // root tsconfig
                ],
            },
    },
    rules: {
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off',
        // allow jsx syntax in js files (for next.js project)
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], //should add ".ts" if typescript project
    },
};
