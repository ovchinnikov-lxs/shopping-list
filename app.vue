<script setup lang="ts">
import { useListStore } from '~/stores/listStore';

const { fetchInitial } = useListStore();

fetchInitial();
</script>

<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
