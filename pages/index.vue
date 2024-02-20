<script setup lang="ts">
import type { Database, Tables } from '~/types/supabase';
const client = useSupabaseClient<Database>();
const user = useSupabaseUser();
const i18n = useI18n();
const localePath = useLocalePath();

useSeoMeta({
    title: () => i18n.t('pages.index.title'),
});

const { data, pending, refresh } = await useLazyAsyncData(async () => {
    try {
        if (!user?.value?.id) {
            return [];
        }

        const { data } = await client.from('Lists')
            .select()
            .eq('user_id', user.value.id);

        return data;
    } catch (e) {
        console.error('INDEX_PAGE:USE_LAZY_ASYNC_DATA', e);
        return [];
    }
});

const lists = computed<Tables<'Lists'>[]>(() => data.value || []);

async function onCreate() {
    try {
        if (!user.value?.id) {
            return false;
        }

        const res = await client.from('Lists')
            .insert({
                user_id: user.value.id,
            })
            .select('id');

        if (res.data) {
            await navigateTo(localePath(`/list/${res.data[0].id}`));
        }
    } catch (e) {
        console.error('INDEX_PAGE:ON_CREATE:', e);
    }
}

async function onDelete(id: string) {
    await client.from('Lists')
        .delete()
        .eq('id', id);
    await refresh();
}

const listTitle = computed(() => (item: Tables<'Lists'>) => {
    const date = new Date(item.created_at).toLocaleDateString(i18n.locale.value, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    return `${i18n.t('pages.index.list.item.title')} - ${date}`;
});
</script>

<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <header :class="$style.header">
                <h3>{{ $t('pages.index.subtitle') }}</h3>

                <UiButton @click="onCreate">{{ $t('pages.index.button.add') }}</UiButton>
            </header>


            <div :class="$style.list">
                <LazyTheLoader v-if="pending" :class="$style.loader"/>

                <template v-else-if="lists.length">
                    <div
                        v-for="item in lists"
                        :key="item.id"
                        :class="$style.item"
                    >
                        <NuxtLinkLocale :to="`/list/${item.id}`" :class="$style.link">
                            {{ listTitle(item) }}
                        </NuxtLinkLocale>

                        <div :class="$style.delete" @click="onDelete(item.id)">
                            ❌
                        </div>
                    </div>
                </template>

                <template v-else>
                    {{ $t('pages.index.list.empty') }}
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    row-gap: 48px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.list {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    row-gap: 24px;
}

.item {
    display: flex;
    align-items: center;
}

.loader {
    margin: auto;
}

.link {
    color: var(--ui-primary-color);

    @include hover {
        text-decoration: underline;
    }
}

.delete {
    margin-left: auto;
    cursor: pointer;

    @include hover {
        transform: scale(1.1);
    }
}
</style>
