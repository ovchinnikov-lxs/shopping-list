<script setup lang="ts">
// @ts-ignore
import { UiInput } from '@ovchinnikov-lxs-frontend/ui-kit';
</script>

<template>
    <UiInput v-bind="$attrs"/>
</template>

<style lang="scss">
.UiInput {
    border-radius: var(--ui-unit);
    border: 3px solid var(--ui-primary-color);

    &.--medium-size {
        padding: calc(var(--ui-unit) * 2) calc(var(--ui-unit) * 4);
        font-size: 24px;

        @include respond-to(tablet) {
            font-size: 16px;
        }
    }
}
</style>
