export const useModalStore = defineStore('modal', {
    state: () => ({
        isOpened: false,
    }),

    actions: {
        changeState() {
            this.isOpened = !this.isOpened;
        },
    },
});
