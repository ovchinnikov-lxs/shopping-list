<script setup lang="ts">
const supabase = useSupabaseClient();
const config = useRuntimeConfig();

const email = ref('');
const info = ref('');

async function onSubmit() {
    try {
        const { error } = await supabase.auth.signInWithOtp({
            email: email.value,
            options: {
                emailRedirectTo: config.public.API_BASE_URL + config.app.baseURL + 'confirm',
            },
        });

        if (error) {
            info.value = 'Произошла ошибка при отправке: ' + error.message;
        } else {
            info.value = 'На вашу почту отправлена ссылка для входа';
        }
    } catch (e) {
        info.value = 'Произошла ошибка непредвиденная ошибка, попробуйте позже';
        console.error('LOGIN_PAGE:ON_SUBMIT:', e);
    }
}
</script>

<template>
    <div class="LoginPage">
        <form :class="$style.wrapper" @submit.prevent="onSubmit">
            Введите почту что бы начать

            <UiInput
                id="login-email"
                v-model="email"
                maxlength="255"
                autocomplete="email"
                required
                type="email"
                placeholder="Введите e-mail"
                title="Введите e-mail"
            />

            <UiButton :disabled="!email?.length">
                Отправить код для входа
            </UiButton>

            <div v-if="info" :class="$style.info">
                {{ info }}
            </div>
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
    padding: 8px;
    border-radius: 4px;
    border: 3px solid var(--ui-primary-color);
}
</style>
