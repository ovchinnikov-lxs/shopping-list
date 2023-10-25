<script setup lang="ts">
import { nanoid } from 'nanoid';
import { useListStore } from '~/stores/listStore';
import ListItem from '~/components/List/ListItem.vue';

const listStore = useListStore();

function useForm() {
    const actualValue = ref('');

    const onSubmit = async () => {
        const [name, count] = actualValue.value.split(/,\s*|,/);

        listStore.addProduct({
            id: nanoid(4),
            product: {
                name,
                count: Number(count || 1),
                icon: 'custom',
            },
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

                <UiFormCell :class="$style.cell">
                    <template #default>
                        <UiInput
                            id="product-input"
                            v-model="actualValue"
                            placeholder="Введите название"
                            :class="$style.input"
                        />
                    </template>
                    <template #info>
                        Если нужно кол-во, укажите через запятую
                    </template>
                </UiFormCell>

                <UiButton :disabled="!actualValue" :class="$style.button">
                    Добавить
                </UiButton>

            </form>

            <ul v-if="listStore.hasCurrent" :class="$style.list">
                <li v-for="(item, id) in listStore.current" :key="id">
                    <ListItem
                        :icon="item.icon"
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: calc(var(--ui-unit) * 8);
}

.header {
    display: flex;
    align-items: flex-start;
    column-gap: calc(var(--ui-unit) * 3);
}

.cell {
    width: 100%;
}

.input {
    width: 100%;
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
