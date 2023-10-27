<script setup lang="ts">
import { useListStore } from '~/stores/listStore';
import { useModalStore } from '~/stores/modalStore';

const listStore = useListStore();

const onOpenModal = () => {
    const modal = useModalStore();
    modal.changeState();
};
</script>

<template>
    <header class="TheHeader">
        <div :class="$style.wrapper">
            <main :class="$style.container" class="container">
                <h1>Shopping list</h1>

                <LazyUiButton
                    v-if="listStore.hasCurrent"
                    size="small"
                    @click="onOpenModal"
                >
                    Поделиться
                </LazyUiButton>

                <LazyUiButton
                    v-if="listStore.hasCurrent"
                    size="small"
                    :class="$style.clear"
                    @click="listStore.clearList"
                >
                    Отчистить список
                </LazyUiButton>
            </main>
        </div>
    </header>
</template>


<style lang="scss" module>
.wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: calc(var(--ui-unit) * 13);
    padding: calc(var(--ui-unit) * 3) 0;
    background-color: var(--ui-primary-color);
    color: var(--ui-white-color);

    @include respond-to(tablet) {
        h1 {
            font-size: 14px;
        }
    }
}

.container {
    display: flex;
    align-items: center;
    column-gap: calc(var(--ui-unit) * 3);
}

.clear {
    margin-left: auto;
}
</style>
