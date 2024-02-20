<template>
    <div class="ConfirmPage">
        <div :class="$style.wrapper">
            {{ $t('pages.confirm.subtitle') }}
            <TheLoader/>
        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    row-gap: 32px;
}
</style>
