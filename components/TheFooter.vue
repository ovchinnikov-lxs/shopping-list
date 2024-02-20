<script setup lang="ts">
const i18n = useI18n();

function onChangeLocale(e: Event) {
    const target = e.target as HTMLSelectElement;

    const switchLocalePath = useSwitchLocalePath();

    try {
        navigateTo(switchLocalePath(target.value));
    } catch (err) {
        console.log(err);
    }
}
</script>

<template>
    <div class="TheFooter">
        <div :class="$style.wrapper">
            <main :class="$style.container" class="container">
                {{ $t('app.version') }}: 2.0.0
                |
                <NuxtLink
                    to="https://github.com/ovchinnikov-lxs"
                    title="ME"
                    :class="$style.link"
                >
                    ME
                </NuxtLink>
                |
                <NuxtLink
                    to="https://github.com/ovchinnikov-lxs/shopping-list"
                    title="REPO"
                    :class="$style.link"
                >
                    REPO
                </NuxtLink>

                <select
                    v-model="i18n.locale.value"
                    :class="$style.locale"
                    @change="onChangeLocale"
                >
                    <option
                        v-for="item in i18n.availableLocales"
                        :key="item"
                        :selected="Boolean(i18n.locale.value === item)"
                        :value="item"
                    >
                        {{ item }}
                    </option>
                </select>
            </main>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    width: 100%;
    height: 100%;
    column-gap: calc(var(--ui-unit) * 12);
    padding: calc(var(--ui-unit) * 4) 0;
    background-color: var(--ui-primary-color);
    border-top-left-radius: var(--ui-border-radius-m);
    border-top-right-radius: var(--ui-border-radius-m);
    font-weight: bold;
    color: var(--ui-white-color);
}

.container {
    display: flex;
    align-items: center;
}

.link {
    color: var(--ui-additional-color);
}

.locale {
    margin-left: auto;
    border: none;
    background-color: var(--ui-primary-color);
    outline: none;
    color: var(--ui-white-color);
}
</style>
