<script setup lang="ts">
const props = defineProps<{
    modelValue: string;
}>();
const emit = defineEmits(['update:modelValue']);

const textareaRef = ref <HTMLTextAreaElement>();


function calcHeight() {
    if (!textareaRef.value) {
        return false;
    }
    textareaRef.value.style.height = '5px';
    textareaRef.value.style.height = (textareaRef.value.scrollHeight) + 'px';
}

function onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
    calcHeight();
}

watch(() => props.modelValue, async () => {
    await nextTick();
    calcHeight();
});

onMounted(() => {
    calcHeight();
});
</script>

<template>
    <textarea
        ref="textareaRef"
        :value="modelValue"
        cols="1"
        class="UiTextarea --medium-size"
        @input="onInput"
    />
</template>

<style lang="scss">
.UiTextarea {
    min-height: 50px;
    border-radius: var(--ui-border-radius-m);
    border: 3px solid var(--ui-primary-color);
    background-color: var(--ui-white-color);
    resize: none;

    @include respond-to(tablet) {
        min-height: 40px;
    }

    &.--medium-size {
        padding: calc(var(--ui-unit) * 2) calc(var(--ui-unit) * 4);
        font-size: 24px;

        @include respond-to(tablet) {
            font-size: 16px;
        }
    }
}
</style>
