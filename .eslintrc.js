module.exports = {
    env: {
        node: true,
    },
    extends: [
        // 'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
        'prettier',
    ],
    rules: {
        // override/add rules/settings here
        semi: ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
    },
    parser: 'vue-eslint-parser',
};
