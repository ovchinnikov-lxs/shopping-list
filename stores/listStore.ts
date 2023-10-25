import { parse } from 'qs';
import { IProduct } from '~/types/product';
import { PRODUCT_CURRENT_LIST_KEY, PRODUCT_DATA_LIST_KEY } from 'assets/ts/constants/product';

type TypeCurrent = {
    [key: string]: IProduct
}

interface IListState {
    current: TypeCurrent;
    data: {
        [key: string]: TypeCurrent
    };
}

export const useListStore = defineStore('list', {
    state: (): IListState => ({
        current: {},
        data: {},
    }),

    getters: {
        hasCurrent(): boolean {
            return Boolean(Object.keys(this.current)?.length);
        },
    },

    actions: {
        fetchInitial() {
            this.fetchData();
            this.fetchCurrent();
        },

        fetchCurrent() {
            const { query } = useRoute();
            const local = localStorage.getItem(PRODUCT_CURRENT_LIST_KEY);

            if (query) {
                this.current = parse(query);
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

        addProduct({ id, product }: {id: string, product: IProduct}) {
            this.current[id] = product;
            this.saveCurrent();
        },

        removeProduct(id: string) {
            delete this.current[id];
            this.saveCurrent();
        },

        changeProduct(id: string, payload: IProduct) {
            this.current[id] = payload;
        },

        clearList() {
            this.current = {};
            this.saveCurrent();
        },
    },
});
