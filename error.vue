<script setup lang="ts">
import type { NuxtError } from '#app';

const localePath = useLocalePath();

defineProps<{
    error: NuxtError
}>();
</script>

<template>
    <div class="ErrorPage">
        <NuxtLayout name="default">
            <div :class="$style.wrapper">
                <h1 :class="$style.status">{{ error.statusCode }}</h1>
                <p>
                    {{ error.message }}
                </p>

                <NuxtLink :to="localePath('/')" :class="$style.link">
                    {{ $t('pages.error.link.home') }}
                </NuxtLink>
            </div>
        </NuxtLayout>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    row-gap: 16px;
}

.status {
    font-size: 70px;
    color: var(--ui-primary-color);
}

.link {
    color: var(--ui-additional-color);

    @include hover {
        text-decoration: underline;
        color: var(--ui-primary-color);
    }
}
</style>
