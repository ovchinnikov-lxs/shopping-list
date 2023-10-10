<script setup lang="ts">
import { useModalStore } from '~/stores/modalStore';

const modal = useModalStore();

</script>
<template>
    <div :class="$style.DefaultLayout">
        <TheHeader :class="$style.header" />

        <div class="container" :class="$style.container">
            <slot />
        </div>

        <transition name="fade">
            <TheModal v-if="modal.isOpened" :class="$style.modal"/>
        </transition>

        <TheFooter :class="$style.footer" />
    </div>
</template>

<style lang="scss" module>
.DefaultLayout {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
}

.header,
.footer {
    flex-shrink: 0;
}

.container {
    flex-grow: 1;
    padding-top: calc(var(--ui-unit) * 4);
    padding-bottom: calc(var(--ui-unit) * 4);
}

.modal {
    position: fixed;
    z-index: 99;
    inset: 0;
}
</style>
