import vuex from 'vuex'
import axios from 'axios'
// import Vue from 'vue';
// Vue.use(vuex, axios)

let baseUrl = 'https://fakestoreapi.com/'

export default new vuex.Store({
    state: {
        latestproducts: [],
        loader: false,
        productprofile:[],

    },
    mutations: {
        // Fetching Latest Products
        SET_LATEST_PRODUCTS(state, latestproducts) {
            state.latestproducts = latestproducts
        },
        SET_LOADER_STATE(state, newloader) {
            state.loader = newloader
        }
    },
    actions: {
        loadLatestProducts({ commit }) {
            //Converting Loading State to True so it can disappear
            commit('SET_LOADER_STATE', true)
            axios
                .get(baseUrl + 'products')
                .then(data => {
                    // console.log(data.data)
                    let latestproducts = data.data
                    commit('SET_LATEST_PRODUCTS', latestproducts)
                    commit('SET_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })
        }

    },
    getters:{
        latestproducts(state){
            return state.latestproducts
        },
        loader(state){
            return state.loader
        }
    }
})
