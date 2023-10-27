<template>
    <div class="TheFooter">
        <div :class="$style.wrapper">
            <main class="container">
                VERSION: 1.1.0
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
            </main>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    column-gap: calc(var(--ui-unit) * 12);
    padding: calc(var(--ui-unit) * 4);
    background-color: var(--ui-primary-color);
    font-weight: bold;
    color: var(--ui-white-color);
}

.link {
    color: var(--ui-additional-color);
}
</style>
