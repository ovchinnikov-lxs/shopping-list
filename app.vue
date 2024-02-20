<script setup lang="ts">

const user = useSupabaseUser();
const i18n = useI18n();

const i18nHead = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
});

useHead({
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs!.lang,
    },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])],
});


useSeoMeta({
    themeColor: '#201658',
    titleTemplate: titleChunk => titleChunk ? `${titleChunk} - ${i18n.t('app.title')}` : i18n.t('app.title'),
    description: () => i18n.t('app.description'),
    keywords: () => i18n.t('app.keywords'),
    author: 'Alexander Ovchinnikov',
    ogTitle: () => i18n.t('app.title'),
    ogDescription: () => i18n.t('app.description'),
    ogType: 'website',
    ogUrl: () => location.href,
    twitterCard: 'app',
    twitterTitle: () => i18n.t('app.title'),
    twitterDescription: () => i18n.t('app.description'),
});

watch(user, userVal => {
    const localePath = useLocalePath();
    const route = useRoute();

    const AUTH_PAGES = [
        localePath(`/list/${route.params.id}`),
        localePath('/'),
    ];

    const PUBLIC_PAGES = [
        localePath('/confirm'),
        localePath('/login'),
    ];

    if (!userVal && AUTH_PAGES.includes(String(route.path))) {
        return navigateTo(localePath('/login'), { replace: true });
    } else if (userVal && PUBLIC_PAGES.includes(String(route.path))) {
        if (route.redirectedFrom) {
            return navigateTo(route.redirectedFrom);
        }

        return navigateTo(localePath('/'), { replace: true });
    }
}, { immediate: true });
</script>


<template>
    <div>
        <NuxtPwaManifest/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>
