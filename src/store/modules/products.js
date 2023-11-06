const products = {
    state: () => ({
        materials: [
            {
                id: 1,
                name: "Дерево",
            },
            {
                id: 2,
                name: "Металл",
            }
        ],

        items: [
            {
                id: "1",
                name: "Ручка дверная",
                code: "L422WH",
                price: {
                    "old_price": 400,
                    "current_price": 355
                },
                image: {
                    url: "/pic/pic1.png"
                },
                material: 1
            },
            {
                id: "2",
                name: "Ручка, нержавеющ сталь",
                code: "L423WH",
                price: {
                    old_price: 400.900,
                    current_price: 355.555
                },
                image: {
                    url: "/pic/pic2.png"
                },
                material: 2
            },
            {
                id: "3",
                name: "Стандартные петли",
                code: "P424WN",
                price: {
                    old_price: null,
                    current_price: 75
                },
                image: {
                    url: "/pic/pic3.png"
                },
                material: 2
            },
            {
                id: "4",
                name: "Петля со стопором",
                code: "PW5AC",
                price: {
                    old_price: 270,
                    current_price: 200
                },
                image: {
                    url: "/pic/pic4.png"
                },
                material: 2
            },
            {
                id: "5",
                name: "Ручка дверная",
                code: "LM352",
                price: {
                    old_price: null,
                    current_price: 720
                },
                image: {
                    url: "/pic/pic1.png"
                },
                material: 1
            },
            {
                id: "6",
                name: "Ручка, нержавеющ сталь",
                code: null,
                price: {
                    old_price: null,
                    current_price: 355.555
                },
                image: {
                    url: "/pic/pic2.png"
                },
                material: 2
            },
            {
                id: "7",
                name: "Стандартные петли",
                code: "WD14LK",
                price: {
                    old_price: null,
                    current_price: 75
                },
                image: {
                    url: "/pic/pic3.png"
                },
                material: 2
            },
            {
                id: "8",
                name: "Петля со стопором",
                code: null,
                price: {
                    old_price: 1200,
                    current_price: 900
                },
                image: {
                    url: "/pic/pic4.png"
                },
                material: 2
            }
        ]
    }),

    getters: {
        /**
         * Геттер для получения списка товаров
         * @param state
         * @return {*}
         */
        getAllItems: (state) => {
            return state.items;
        },

        /**
         * Геттер для получения одного товара из списка товаров по переданному id
         * @param state
         * @return {function(*): *}
         */
        getItem: (state) => (id) => {
            return state.items.find(item => item.id === id);
        },

        /**
         * Геттер для получения списка материалов
         * @param state
         * @return {[{name: string, id: number},{name: string, id: number}]}
         */
        getAllMaterials: (state) => {
            return state.materials;
        },

        /**
         * Геттер для получения одного вида материала из списка материалов по переданному id
         * @param state
         * @return {function(*): *}
         */
        getMaterial: (state) => (id) => {
            return state.items.find(item => item.id === id);
        },
    },

    mutations: {
        SET_ALL_ITEMS: (state, payload) => {
            state.items = payload;
        },

        SET_ALL_MATERIALS: (state, payload) => {
            state.materials = payload;
        },
    },

    actions: {
        /**
         * Запрашивает данные по текущему роуту с соответствующего обработчика на backend(е)
         * @param context
         * @param params
         * @return {Promise<void>}
         */
        fetchData: async (context, params) => {
            let data = await context.dispatch('ajaxGet', params, {root: true});
            if (data === undefined) return;

            context.commit('SET_ALL_ITEMS',     data.items);
            context.commit('SET_ALL_MATERIALS', data.materials);
        },

    },

    namespaced: true,
}

export default products;
