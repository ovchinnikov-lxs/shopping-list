// https://nuxt.com/docs/api/configuration/nuxt-config
import stylelint from 'vite-plugin-stylelint';

export default defineNuxtConfig({
    ssr: false,

    app: {
        baseURL: '/shopping-list/',
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'description', content: 'Nuxt 3 template' },
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
