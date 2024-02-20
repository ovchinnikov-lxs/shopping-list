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
                    <img
                        src="/img/logo.svg"
                        alt=""
                        loading="lazy"
                    >
                </NuxtLink>

                <LazyUiButton
                    v-if="route.params.id"
                    size="small"
                    @click="onOpenModal"
                >
                    {{ $t('header.button.share') }}
                </LazyUiButton>

                <div v-if="user" :class="$style.user">
                    <b>
                        {{ user.email }}
                    </b>

                    <LazyUiButton
                        size="small"
                        :class="$style.signOut"
                        @click="signOut"
                    >
                        {{ $t('button.signOut') }}
                    </LazyUiButton>
                </div>
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
    border-bottom-left-radius: var(--ui-border-radius-m);
    border-bottom-right-radius: var(--ui-border-radius-m);
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

    img {
        display: none;
        width: 32px;
        height: 32px;

        @include respond-to(tablet) {
            display: block;
        }
    }

    h1 {
        display: block;

        @include respond-to(tablet) {
            display: none;
        }
    }
}

.user {
    overflow: hidden;
    display: flex;
    align-items: center;
    column-gap: calc(var(--ui-unit) * 2);
    margin-left: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: var(--ui-white-color);

    b {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.signOut {
    flex-shrink: 0;
}
</style>
