<script setup lang="ts">
const supabase = useSupabaseClient();
const config = useRuntimeConfig();
const style = useCssModule();
const i18n = useI18n();

interface IInfo {
    status: 'success' | 'error' | string;
    details: string;
}

useSeoMeta({
    title: () => i18n.t('pages.login.title'),
});

const email = ref('');
const info: IInfo = reactive({
    status: '',
    details: '',
});

const infoMessage = computed(() => i18n.t(`pages.login.info.${info.status}`));

async function onSubmit() {
    info.details = '';
    info.status = '';

    try {
        const { error } = await supabase.auth.signInWithOtp({
            email: email.value,
            options: {
                emailRedirectTo: location.origin + config.app.baseURL + 'confirm',
            },
        });

        if (error) {
            info.details = error.message;
            info.status = 'error';
        } else {
            info.status = 'success';
        }
    } catch (e) {
        info.status = 'undefinedError';
        console.error('LOGIN_PAGE:ON_SUBMIT:', e);
    }
}

const infoClassList = computed(() => [
    [style[`--${info.status}-status`]],
]);

const user = useSupabaseUser();
const localePath = useLocalePath();

watch(user, async val => {
    if (val) {
        await nextTick();
        await navigateTo(localePath('/'), {
            replace: true,
        });
    }
}, { immediate: true });
</script>

<template>
    <div class="LoginPage">
        <form :class="$style.wrapper" @submit.prevent="onSubmit">
            <h3>
                {{ $t('pages.login.subtitle') }}
            </h3>

            <UiInput
                id="login-email"
                v-model="email"
                maxlength="255"
                autocomplete="email"
                required
                type="email"
                :placeholder="$t('pages.login.input.placeholder')"
                :title="$t('pages.login.input.title')"
            />

            <UiButton :disabled="!email?.length">
                {{ $t('pages.login.button.submit') }}
            </UiButton>

            <Transition name="bottom" mode="out-in">
                <div v-if="info.status" :class="[$style.info, infoClassList]">
                    {{ infoMessage }} {{ info.details }}
                </div>
            </Transition>
        </form>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    row-gap: 16px;
}

.info {
    padding: calc(var(--ui-unit) * 3);

    &.--success-status {
        color: var(--ui-secondary-color);
    }

    &.--error-status {
        color: var(--ui-error-color);
    }
}
</style>
