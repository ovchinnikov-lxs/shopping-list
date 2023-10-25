<script setup lang="ts">
import { getRandomColor } from 'assets/ts/utils/color';

defineProps({
    icon: {
        type: String,
        default: 'custom',
    },

    name: {
        type: String,
        required: true,
    },

    count: {
        type: [Number, String],
        required: true,
    },
});

defineEmits<{
    change: [value: object]
    remove: [void]
}>();

const styleList = computed(() => [{
    '--icon-color': getRandomColor(),
}]);
</script>

<template>
    <div class="ListItem">
        <div :style="styleList" :class="$style.wrapper">
            <UiIcon name="product/custom" :class="$style.icon"/>

            <div :class="$style.name">
                {{ name }}

                <div v-if="+count > 1" :class="$style.count">
                    {{ count }}
                </div>
            </div>

            <div :class="$style.action">
                <div :class="$style.change">
                    <UiIcon
                        name="ui/plus"
                        :class="$style.plus"
                        @click="$emit('change', { count: +count + 1})"
                    />

                    <UiIcon
                        name="ui/minus"
                        :class="[$style.minus, { [$style['--is-disabled']]: +count < 2 }]"
                        @click="$emit('change', { count: +count - 1})"
                    />
                </div>

                <UiIcon
                    name="ui/remove"
                    :class="$style.remove"
                    @click="$emit('remove')"
                />
            </div>

        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: var(--ui-col);
    column-gap: calc(var(--ui-unit) * 4);
    padding: calc(var(--ui-unit) * 3) 0;
    border-bottom: 2px solid var(--ui-primary-color);
}

.icon {
    flex-shrink: 0;
    color: var(--icon-color);
}

.name {
    display: flex;
    align-items: center;
    column-gap: calc(var(--ui-unit) * 2);
    font-weight: bold;
}

.count {
    padding: var(--ui-unit) calc(var(--ui-unit) * 3);
    border-radius: calc(var(--ui-unit) * 4);
    background-color: var(--ui-primary-color);
    font-size: 12px;
    color: var(--ui-white-color);
}

.action {
    display: flex;
    column-gap: calc(var(--ui-unit) * 8);
    margin-left: auto;
}

.change {
    display: flex;
    align-items: center;
    column-gap: calc(var(--ui-unit) * 2);
}

.plus,
.minus {
    color: var(--ui-additional-color);
    transition: all .1s ease-in-out;
    cursor: pointer;

    @include hover {
        transform: scale(1.2);
    }
}

.minus {
    &.--is-disabled {
        opacity: .4;
        pointer-events: none;
    }
}

.remove {
    color: var(--ui-secondary-color);
    transition: all .1s ease-in-out;
    cursor: pointer;

    @include hover {
        transform: scale(1.2);
    }
}
</style>
