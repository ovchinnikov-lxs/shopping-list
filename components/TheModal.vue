<script setup lang="ts">
import { stringify } from 'qs';
import { toDataURL } from 'qrcode';
import { useModalStore } from '~/stores/modalStore';
import { copyTextToClipboard } from 'assets/ts/utils/html';
import { PRODUCT_CURRENT_LIST_KEY } from 'assets/ts/constants/product';

const modal = useModalStore();

const buttonTitle = ref('Скопировать ссылку');
const qrImage = ref('');
const shareUrl = ref('');

const generateQR = async (text: string) => {
    try {
        qrImage.value = await toDataURL(text);
    } catch (err) {
        console.error(err);
    }
};

onMounted(() => {
    const current = JSON.parse(localStorage.getItem(PRODUCT_CURRENT_LIST_KEY) || '{}');
    shareUrl.value = `${location.href}?${stringify(current)}`;
    generateQR(shareUrl.value);
});

const onCopy = async () => {
    await copyTextToClipboard(shareUrl.value);
    buttonTitle.value = 'Ссылка скопирована';

    setTimeout(() => {
        buttonTitle.value = 'Скопировать ссылку';
    }, 2000);
};
</script>

<template>
    <div class="TheModal">
        <div :class="$style.wrapper" @click.self="modal.changeState">
            <div :class="$style.content">
                <img
                    :src="qrImage"
                    alt=""
                    :class="$style.image"
                >
                <UiButton @click="onCopy">{{ buttonTitle }}</UiButton>
                <NuxtLink class="UiButton --medium-size" :to="`https://t.me/share/url?url=${shareUrl}`">
                    Поделиться в TG
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
    row-gap: calc(var(--ui-unit) * 4);
    padding: var(--ui-col);
    background-color: var(--ui-white-color);
}

.image {
    @include aspect-ratio(1,1);

    width: 100%;
}
</style>
