import { createStore } from 'vuex'
import products from "@/store/modules/products";
import axios from "axios";

export default createStore({
    modules: {
        products: products,
    },
    actions: {
        /**
         * Метод get-запроса на наш back-end
         * @param context
         * @param params
         * @return {Promise<void>}
         */
        ajaxGet: async (context, params) => {
            await axios.get(params)
                .then(response => {
                    return response
                })
                .catch(err => console.log(err))
        },

        /**
         * Метод post-запроса на наш back-end
         * @param context
         * @param params
         * @return {Promise<void>}
         */
        ajaxPost: async (context, params) => {
            await axios.post(params)
                .then(response => {
                    return response
                })
                .catch(err => console.log(err))
        }
    }
})
