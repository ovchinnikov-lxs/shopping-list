<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const onOpenModal = () => {
    const modal = useModalStore();
    modal.changeState();
};

const route = useRoute();

const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
    }
};
</script>

<template>
    <header class="TheHeader">
        <div :class="$style.wrapper">
            <main :class="$style.container" class="container">
                <NuxtLink to="/" :class="$style.logo">
                    <h1>Shopping list</h1>
                </NuxtLink>

                <LazyUiButton
                    v-if="route.params.id"
                    size="small"
                    @click="onOpenModal"
                >
                    Поделиться
                </LazyUiButton>

                <LazyUiButton
                    v-if="user"
                    size="small"
                    :class="$style.signOut"
                    @click="signOut"
                >
                    Выйти
                </LazyUiButton>
            </main>
        </div>
    </header>
</template>


<style lang="scss" module>
.wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: calc(var(--ui-unit) * 13);
    padding: calc(var(--ui-unit) * 3) 0;
    background-color: var(--ui-primary-color);

    @include respond-to(tablet) {
        h1 {
            font-size: 14px;
        }
    }
}

.container {
    display: flex;
    align-items: center;
    column-gap: calc(var(--ui-unit) * 3);
}

.logo {
    color: var(--ui-white-color);
}

.signOut {
    margin-left: auto;
}
</style>
