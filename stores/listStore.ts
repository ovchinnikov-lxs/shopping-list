import { IProduct } from '~/types/product';
import { PRODUCT_CURRENT_LIST_KEY, PRODUCT_DATA_LIST_KEY } from 'assets/ts/constants/product';

interface IListState {
    current: IProduct[];
    data: IProduct[][];
}

export const useListStore = defineStore('list', {
    state: (): IListState => ({
        current: [],
        data: [],
    }),

    actions: {
        fetchInitial() {
            this.fetchData();
            this.fetchCurrent();
        },

        fetchCurrent() {
            const { query } = useRoute();
            const local = localStorage.getItem(PRODUCT_CURRENT_LIST_KEY);

            if (query.current) {
                this.current = JSON.parse(String(query.current));
                this.saveCurrent();

                const currentUrl = new URL(window.location.href);
                const newSearchParams = new URLSearchParams();
                currentUrl.search = newSearchParams.toString();
                window.history.replaceState({}, document.title, currentUrl);
            } else if (local) {
                this.current = JSON.parse(local);
            } else {
                this.saveCurrent();
            }
        },

        fetchData() {
            const data = localStorage.getItem(PRODUCT_DATA_LIST_KEY);

            if (data) {
                this.data = JSON.parse(data);
            } else {
                this.saveData();
            }
        },

        saveCurrent() {
            localStorage.setItem(PRODUCT_CURRENT_LIST_KEY, JSON.stringify(this.current));
        },

        saveData() {
            localStorage.setItem(PRODUCT_DATA_LIST_KEY, JSON.stringify(this.data));
        },

        addProduct(payload: IProduct) {
            this.current.push(payload);
            this.saveCurrent();
        },

        removeProduct(id: string) {
            this.current = this.current.filter((p: IProduct) => p.id !== id);
            this.saveCurrent();
        },

        changeProduct(id: string, payload: IProduct) {
            this.current = this.current.map((p: IProduct): IProduct => {
                if (p.id === id) {
                    return {
                        ...p,
                        ...payload,
                    };
                }

                return p;
            });
        },

        clearList() {
            this.current = [];
            this.saveCurrent();
        },
    },
});
