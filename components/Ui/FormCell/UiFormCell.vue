<script setup lang="ts">
// @ts-ignore
import { UiFormCell } from '@ovchinnikov-lxs-frontend/ui-kit';
</script>

<template>
    <UiFormCell>
        <template #default>
            <slot></slot>
        </template>

        <template #info>
            <slot name="info"></slot>
        </template>
    </UiFormCell>
</template>

<style lang="scss">
.UiFormCell {
    &__wrapper {
        display: flex;
        flex-direction: column;
        row-gap: var(--ui-unit);
    }

    &__info {
        font-size: 12px;
        opacity: .4;
    }
}
</style>
