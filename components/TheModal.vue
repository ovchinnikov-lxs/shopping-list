<script setup lang="ts">
import { toDataURL } from 'qrcode';
import { useModalStore } from '~/stores/modalStore';

const modal = useModalStore();
const i18n = useI18n();

const buttonTitle = ref(i18n.t('modal.button.share.link.copy'));
const qrImage = ref('');

const generateQR = async (text: string) => {
    try {
        qrImage.value = await toDataURL(text, {
            type: 'image/webp',
            color: {
                light: '#0000', // Transparent background
            },
        });
    } catch (err) {
        console.error(err);
    }
};

onMounted(() => {
    generateQR(location.href);
});

const onCopy = async () => {
    await copyTextToClipboard(location.href);
    buttonTitle.value = i18n.t('modal.button.share.link.copied');

    setTimeout(() => {
        buttonTitle.value = i18n.t('modal.button.share.link.copy');
    }, 2000);
};

const tgLink = computed(() => `https://t.me/share/url?url=${location.href}`);
</script>

<template>
    <div class="TheModal">
        <div :class="$style.wrapper" @click.self="modal.changeState">
            <div :class="$style.content">
                <img
                    :src="qrImage"
                    loading="lazy"
                    alt=""
                    :class="$style.image"
                >
                <UiButton @click="onCopy">{{ buttonTitle }}</UiButton>
                <NuxtLink
                    :to="tgLink"
                    target="_blank"
                    class="UiButton --medium-size"
                >
                    {{ $t('modal.button.share.tg') }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .15);
}

.content {
    display: flex;
    flex-direction: column;
    min-width: 30%;
    row-gap: calc(var(--ui-unit) * 4);
    padding: var(--ui-col);
    border-radius: var(--ui-border-radius-m);
    background-color: var(--ui-white-color);
}

.image {
    @include aspect-ratio(1,1);

    width: 100%;
    border-radius: var(--ui-border-radius-m);
}
</style>
