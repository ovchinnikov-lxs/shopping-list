<script setup lang="ts">
const user = useSupabaseUser();

watch(user, () => {
    if (user.value) {
        return navigateTo('/');
    }
}, { immediate: true });
</script>

<template>
    <div class="ConfirmPage">
        <div :class="$style.wrapper">
            <TheLoader/>
        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>
