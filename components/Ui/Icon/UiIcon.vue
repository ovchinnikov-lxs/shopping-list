<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    size: {
        type: String,
        default: 'medium',
        validator: (v: string): boolean => [
            'xx-small',
            'x-small',
            'small',
            'medium',
            'large',
            'x-large',
            'xx-large',
            'custom',
        ].includes(v),
    },
});

const classList = computed(() => [
    [`--${props.size}-size`],
]);
</script>

<template>
    <div :class="classList" class="UiIcon">
        <SvgIcon
            :name="name"
            class="UiIcon__el"
        />
    </div>
</template>

<style lang="scss">
.UiIcon {
    display: inline-block;
    fill: currentColor;

    &.--medium-size {
        width: calc(var(--ui-unit) * 6);
        height: calc(var(--ui-unit) * 6);
    }

    &__el {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
