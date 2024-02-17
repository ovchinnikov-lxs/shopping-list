<script setup lang="ts">
import type { Database, Tables } from '~/types/supabase';
const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

watch(user, () => {
    if (!user.value) {
        return navigateTo('/login');
    }
}, { immediate: true });

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
            await navigateTo(`/list/${res.data[0].id}`);
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
</script>

<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <header :class="$style.header">
                <h3>Ваши списки</h3>

                <UiButton @click="onCreate">Добавить</UiButton>
            </header>


            <div :class="$style.list">
                <TheLoader v-if="pending" :class="$style.loader"/>

                <template v-else-if="lists.length">
                    <div
                        v-for="item in lists"
                        :key="item.id"
                        :class="$style.item"
                    >
                        <NuxtLink :to="`/list/${item.id}`" :class="$style.link">
                            Список от {{ new Date(item.created_at).toString() }}
                        </NuxtLink>

                        <div :class="$style.delete" @click="onDelete(item.id)">
                            ❌
                        </div>
                    </div>
                </template>

                <template v-else>
                    У вас еще нет ни одного списка
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
    row-gap: 24px;
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
