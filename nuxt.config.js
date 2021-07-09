export default {
    server: {
        host: '0.0.0.0',
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Frontend Mentor - REST Countries API with color theme switcher solution by Neven Đuranec',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Frontend Mentor - REST Countries API with color theme switcher solution by Neven Đuranec',
            },
            {
                name: 'format-detection',
                content: 'telephone=no',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                'postcss-nested': {},
                'postcss-pxtorem': {},
                autoprefixer: {},
            },
        },
    },

    googleFonts: {
        families: {
            'Nunito+Sans': { wght: [300, 600, 800] },
        },
    },
}
