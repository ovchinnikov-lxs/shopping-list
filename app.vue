<script setup lang="ts">

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
</script>


<template>
    <div class="AppInstance">
        <NuxtPwaManifest/>
        <NuxtLayout>
            <div :class="$style.page">
                <NuxtPage/>
            </div>
        </NuxtLayout>
    </div>
</template>


<style lang="scss" module>
.page {
    width: 100%;

    & > div {
        width: 100%;
    }
}
</style>
