// https://nuxt.com/docs/api/configuration/nuxt-config
import stylelint from 'vite-plugin-stylelint';

const DESCRIPTION = 'Welcome to our web application for shopping lists! Here, you will find a convenient way to create and manage your shopping lists. Create lists for grocery shopping, plan your culinary experiments, or even organize your tasks.';

export default defineNuxtConfig({
    ssr: false,

    spaLoadingTemplate: 'spa-loading-template.html',

    imports: {
        dirs: [
            'stores',
            'utils/**',
        ],
        global: true,
    },

    app: {
        baseURL: '/shopping-list/',
        head: {
            title: 'Shopping List - create and share',
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'ru',
            },
            meta: [
                { name: 'theme-color', content: '#3498db' },
                { name: 'description', content: DESCRIPTION },
                { name: 'keywords', content: 'Shopping list, share list' },
                { name: 'author', content: 'Alexander Ovchinnikov' },
                { property: 'og:title', content: 'Shopping List' },
                { property: 'og:description', content: DESCRIPTION },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://ovchinnikov-lxs.github.io/shopping-list/' },
                { name: 'twitter:card', content: 'app' },
                { name: 'twitter:title', content: 'Shopping List - create and share' },
                { name: 'twitter:description', content: DESCRIPTION },
            ],
        },
    },

    css: ['~/assets/scss/common/_bundle.scss'],

    devtools: { enabled: true },

    modules: [
        '@pinia/nuxt',
        '@vite-pwa/nuxt',
    ],

    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'Shopping List',
            short_name: 'SL',
            start_url: '/shopping-list/',
            description: DESCRIPTION,
            background_color: '#ffffff',
            theme_color: '#3498db',
            display: 'standalone',
            lang: 'ru',
            icons: [
                {
                    src: 'https://img.icons8.com/?size=72&id=bfckrEmgzrfN&format=png',
                    sizes: '72x72',
                    type: 'image/png',
                },
                {
                    src: 'https://img.icons8.com/?size=96&id=bfckrEmgzrfN&format=png',
                    sizes: '96x96',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
                {
                    src: 'https://img.icons8.com/?size=144&id=bfckrEmgzrfN&format=png',
                    sizes: '144x144',
                    type: 'image/png',
                },
                {
                    src: 'https://img.icons8.com/?size=512&id=bfckrEmgzrfN&format=png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
        workbox: {
            navigateFallbackDenylist: [/^\//],
        },
        devOptions: {
            enabled: process.env.NODE_ENV === 'development',
            suppressWarnings: true,
            navigateFallbackAllowlist: [/^\/$/],
            type: 'module',
        },
    },

    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },

    router: {
        options: {
            linkActiveClass: '--is-active-link',
            linkExactActiveClass: '--is-exact-link',
        },
    },

    typescript: {
        strict: true,
        typeCheck: true,
    },

    vite: {
        plugins: [
            stylelint(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use "~/assets/scss/shared/_functions.scss" as *;
                    @use "~/assets/scss/shared/_mixins.scss" as *;
                    `,
                },
            },
        },
    },
});
