<script setup lang="ts">
defineProps({
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
</script>

<template>
    <div class="ListItem">
        <div :class="$style.wrapper">
            <img
                :src="`https://cataas.com/cat?width=48&height=48&v=${name}`"
                alt=""
                loading="lazy"
                :class="$style.icon"
            />

            <div :class="$style.name">
                {{ name }}

                <div v-if="+count > 1" :class="$style.count">
                    {{ count }}
                </div>
            </div>

            <div :class="$style.action">
                <div :class="$style.change">
                    <div
                        :class="$style.plus"
                        @click="$emit('change', { count: +count + 1})"
                    />

                    <div
                        :class="[$style.minus, { [$style['--is-disabled']]: +count < 2 }]"
                        @click="$emit('change', { count: +count - 1})"
                    />
                </div>

                <div
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
    width: 28px;
    height: 28px;
    object-fit: cover;
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
.minus,
.remove {
    position: relative;
    width: 24px;
    height: 24px;

    &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
}

.plus,
.minus {
    transition: all .1s ease-in-out;
    cursor: pointer;

    @include hover {
        transform: scale(1.2);
    }
}

.plus {
    &:before {
        content: '➕';
    }
}

.minus {
    &:before {
        content: '➖';
    }

    &.--is-disabled {
        opacity: .4;
        pointer-events: none;
    }
}

.remove {
    transition: all .1s ease-in-out;
    cursor: pointer;

    &:before {
        content: '❌';
    }

    @include hover {
        transform: scale(1.2);
    }
}
</style>
