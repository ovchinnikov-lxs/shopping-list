<script setup lang="ts">
import { useListStore } from '~/stores/listStore';

const { fetchInitial } = useListStore();

fetchInitial();
</script>

<template>
    <div>
        <VitePwaManifest/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>
