module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: [],
    // add your custom rules here
    rules: { indent: ['error', 4] },
}
