<script setup lang="ts">
import { nanoid } from 'nanoid';
import debounce from 'lodash/debounce';
import type { Database } from '~/types/supabase';
import type { IProduct } from '~/types/product';

const client = useSupabaseClient<Database>();
const i18n = useI18n();

const currentList = ref<IProduct[]>([]);

const { data, pending } = await useLazyAsyncData(async () => {
    try {
        const route = useRoute();

        const { data } = await client.from('Lists')
            .select()
            .eq('id', route.params.id);

        if (!data?.length) {
            return null;
        }

        // @ts-ignore
        currentList.value = data[0].list || [];

        return data[0];
    } catch (e) {
        console.error('LIST_DETAIL_PAGE:USE_LAZY_ASYNC_DATA', e);
        return null;
    }
});

watch(pending, val => {
    if (!val && !data.value) {
        throw showError({
            statusCode: 404,
            statusMessage: i18n.t('pages.listDetail.notFound.message'),
            fatal: true,
        });
    }
}, {
    immediate: true,
});

useSeoMeta({
    title: () => {
        if (!data.value) {
            return '';
        }

        const date = new Date(data.value.created_at).toLocaleDateString(i18n.locale.value, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        return `${i18n.t('pages.listDetail.title')} - ${date}`;
    },
});

const isLoading = ref(false);

watch(() => currentList.value, (list, oldValue) => {
    const updateList = debounce(async () => {
        if (!data.value?.id) {
            return false;
        }

        if (oldValue === undefined) {
            return false;
        }

        isLoading.value = true;
        await client.from('Lists')
            .update({
                // @ts-ignore
                list,
            })
            .eq('id', data.value.id);
        isLoading.value = false;
    }, 300);

    updateList();
}, {
    deep: true,
});

function useForm() {
    const actualValue = ref('');

    const onSubmit = async () => {
        if (!actualValue.value) {
            return false;
        }

        actualValue.value.split('\n').forEach(item => {
            const [name, count] = item.split(/,\s*|,/);

            currentList.value.push({
                id: nanoid(4),
                name,
                count: Number(count || 1),
            });
        });

        actualValue.value = '';

        setTimeout(() => {
            const input = document.querySelector<HTMLInputElement>('#product-input');
            input?.focus();
        }, 100);
    };

    async function onRemove(id: string) {
        currentList.value = currentList.value.filter(item => item.id !== id);
    }

    async function onChange(id: string, value: IProduct) {
        currentList.value = currentList.value.map(item => {
            if (item.id === id) {
                return value;
            }

            return item;
        });
    }

    return {
        actualValue,
        onSubmit,
        onRemove,
        onChange,
    };
}

const { onSubmit, actualValue, onChange, onRemove } = useForm();

const style = useCssModule();

const classList = computed(() => [{
    [style['--is-loading']]: isLoading.value,
}]);
</script>

<template>
    <div class="ListDetailPage">
        <div :class="[$style.wrapper, classList]">
            <TheLoader v-if="pending" :class="$style.loader"/>

            <template v-else>
                <form :class="$style.header" @submit.prevent="onSubmit">

                    <UiTextarea
                        id="product-input"
                        v-model="actualValue"
                        :placeholder="$t('pages.listDetail.input.placeholder')"
                        :class="$style.input"
                    />

                    <UiButton :disabled="!actualValue" :class="$style.button">
                        {{ $t('pages.listDetail.button.add') }}
                    </UiButton>
                </form>

                <ul v-if="currentList.length" :class="$style.list">
                    <li v-for="item in currentList" :key="item.id">
                        <LazyListItem
                            :name="item.name"
                            :count="item.count"
                            @remove="onRemove(item.id)"
                            @change="val => onChange(item.id, {...item, ...val})"
                        />
                    </li>
                </ul>
            </template>

        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: calc(var(--ui-unit) * 8);

    @include respond-to(tablet) {
        flex-direction: column-reverse;
    }
}

.loader {
    margin: auto;
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
        padding: 16px 0 32px;
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
