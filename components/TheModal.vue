<script setup lang="ts">
import { toDataURL } from 'qrcode';
import { useModalStore } from '~/stores/modalStore';
import { copyTextToClipboard } from 'assets/ts/utils/html';
import { PRODUCT_CURRENT_LIST_KEY } from 'assets/ts/constants/product';

const modal = useModalStore();

const buttonTitle = ref('Скопировать ссылку');
const qrImage = ref('');

const generateQR = async (text: string) => {
    try {
        qrImage.value = await toDataURL(text);
    } catch (err) {
        console.error(err);
    }
};

onMounted(() => {
    generateQR(`${location.href}?current=${localStorage.getItem(PRODUCT_CURRENT_LIST_KEY)}`);
});

const onCopy = async () => {
    await copyTextToClipboard(`${location.href}?current=${localStorage.getItem(PRODUCT_CURRENT_LIST_KEY)}`);
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
