<script setup lang="ts">
const supabase = useSupabaseClient();
const style = useCssModule();
const i18n = useI18n();

interface IInfo {
    status: 'success' | 'error' | string;
    details: string;
}

useSeoMeta({
    title: () => i18n.t('pages.register.title'),
});

const isLoading = ref(false);
const actualValue = reactive({
    email: '',
    password: '',
});

const info: IInfo = reactive({
    status: '',
    details: '',
});

const infoMessage = computed(() => i18n.t(`pages.register.info.${info.status}`));

async function onSubmit() {
    if (isLoading.value) {
        return false;
    }

    info.details = '';
    info.status = '';

    try {
        isLoading.value = true;
        const { error } = await supabase.auth.signUp(actualValue);

        if (error) {
            info.details = error.message;
            info.status = 'error';
        } else {
            info.status = 'success';
        }
    } catch (e) {
        info.status = 'undefinedError';
        console.error('register_PAGE:ON_SUBMIT:', e);
    } finally {
        isLoading.value = false;
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
    <div class="RegisterPage">
        <form :class="$style.wrapper" @submit.prevent="onSubmit">
            <h3>
                {{ $t('pages.register.subtitle') }}
            </h3>

            <UiInput
                id="register-email"
                v-model="actualValue.email"
                maxlength="255"
                autocomplete="email"
                required
                type="email"
                :placeholder="$t('pages.register.email.placeholder')"
                :title="$t('pages.register.email.title')"
            />

            <UiInput
                id="register-password"
                v-model="actualValue.password"
                maxlength="255"
                autocomplete="password"
                required
                type="password"
                :placeholder="$t('pages.register.password.placeholder')"
                :title="$t('pages.register.password.title')"
            />

            <NuxtLinkLocale to="/login">{{ $t('pages.register.loginLink') }}</NuxtLinkLocale>

            <UiButton :disabled="!actualValue.email?.length && !actualValue.password?.length">
                <template v-if="isLoading">
                    {{ $t('pages.register.button.loading') }}
                </template>
                <template v-else>
                    {{ $t('pages.register.button.submit') }}
                </template>
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
