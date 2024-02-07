<script setup lang="ts">
import { nanoid } from 'nanoid';
import { useListStore } from '~/stores/listStore';

const listStore = useListStore();

function useForm() {
    const actualValue = ref('');

    const onSubmit = async () => {
        if (!actualValue.value) {
            return false;
        }

        actualValue.value.split('\n').forEach(item => {
            const [name, count] = item.split(/,\s*|,/);

            listStore.addProduct({
                id: nanoid(4),
                product: {
                    name,
                    count: Number(count || 1),
                },
            });
        });

        actualValue.value = '';

        setTimeout(() => {
            const input = document.querySelector<HTMLInputElement>('#product-input');
            input?.focus();
        }, 100);
    };

    return {
        actualValue,
        onSubmit,
    };
}

const { onSubmit, actualValue } = useForm();
</script>

<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <form :class="$style.header" @submit.prevent="onSubmit">

                <UiTextarea
                    id="product-input"
                    v-model="actualValue"
                    placeholder="Введите название"
                    :class="$style.input"
                />

                <UiButton :disabled="!actualValue" :class="$style.button">
                    Добавить
                </UiButton>
            </form>

            <ul v-if="listStore.hasCurrent" :class="$style.list">
                <li v-for="(item, id) in listStore.current" :key="id">
                    <LazyListItem
                        :name="item.name"
                        :count="item.count"
                        @remove="listStore.removeProduct(id as string)"
                        @change="val => listStore.changeProduct(id as string,{...item, ...val})"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: calc(var(--ui-unit) * 8);
    background-color: var(--ui-white-color);

    @include respond-to(tablet) {
        flex-direction: column-reverse;
    }
}

.header {
    display: flex;
    align-items: flex-end;
    column-gap: calc(var(--ui-unit) * 3);

    @include respond-to(tablet) {
        position: sticky;
        bottom: 0;
        left: 0;
        z-index: 2;
        padding: 16px 0;
        background-color: var(--ui-white-color);
    }
}

.input {
    width: 100%;

    @include respond-to(tablet) {
        margin-top: auto;
    }
}

.button {
    flex-shrink: 0;
}

.list {
    @include reset-list;

    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 3);
}
</style>
