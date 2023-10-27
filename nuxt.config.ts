// https://nuxt.com/docs/api/configuration/nuxt-config
import stylelint from 'vite-plugin-stylelint';

export default defineNuxtConfig({
    ssr: false,

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
                { name: 'description', content: 'Welcome to our web application for shopping lists! Here, you will find a convenient way to create and manage your shopping lists. Create lists for grocery shopping, plan your culinary experiments, or even organize your tasks.' },
                { name: 'keywords', content: 'Shopping list, share list' },
                { name: 'author', content: 'Alexander Ovchinnikov' },
                { property: 'og:title', content: 'Shopping List' },
                { property: 'og:description', content: 'Welcome to our web application for shopping lists! Here, you will find a convenient way to create and manage your shopping lists. Create lists for grocery shopping, plan your culinary experiments, or even organize your tasks.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://ovchinnikov-lxs.github.io/shopping-list/' },
                { name: 'twitter:card', content: 'app' },
                { name: 'twitter:title', content: 'Shopping List - create and share' },
                { name: 'twitter:description', content: 'Welcome to our web application for shopping lists! Here, you will find a convenient way to create and manage your shopping lists. Create lists for grocery shopping, plan your culinary experiments, or even organize your tasks.' },
            ],
        },
    },

    css: ['~/assets/scss/common/_bundle.scss'],

    devtools: { enabled: true },

    modules: [
        '@nuxtjs/svg-sprite',
        '@pinia/nuxt',
    ],

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
