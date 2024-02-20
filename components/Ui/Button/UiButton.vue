<script setup lang="ts">
// @ts-ignore
import { UiButton } from '@ovchinnikov-lxs-frontend/ui-kit';
</script>

<template>
    <UiButton v-bind="$attrs">
        <slot></slot>
    </UiButton>
</template>

<style lang="scss">
.UiButton {
    border-radius: var(--ui-border-radius-m);
    border: 3px solid var(--ui-secondary-color);
    background-color: var(--ui-secondary-color);
    color: var(--ui-white-color);

    &.--medium-size {
        padding: calc(var(--ui-unit) * 2) calc(var(--ui-unit) * 4);
        font-size: 24px;

        @include respond-to(tablet) {
            font-size: 16px;
        }
    }

    &.--small-size {
        padding: var(--ui-unit) calc(var(--ui-unit) * 2);
        font-size: 12px;
    }

    &.--is-disabled {
        opacity: .8;
    }

    @include hover {
        border-color: var(--ui-additional-color);
        background-color: var(--ui-additional-color);
    }
}
</style>
