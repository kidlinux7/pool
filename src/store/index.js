import vuex from 'vuex'
import axios from 'axios'

// import Vue from 'vue';
// Vue.use(vuex, axios)

let baseUrl = 'https://fakestoreapi.com/'

export default new vuex.Store({
    state: {
        latestproducts: [],
        loader: false,

        //Product Details Component
        // productprofile: [],
        // id: 1,

    },
    mutations: {
        // Fetching Latest Products
        SET_LATEST_PRODUCTS(state, latestproducts) {
            state.latestproducts = latestproducts
        },

        //Fetching Individual Product
        // SET_INDIVIDUAL_PRODUCT(state, productprofile) {
        //     state.productprofile = productprofile
        // },

        //Loading Indicator
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
        },


        // loadIndividualProduct({ commit }) {
        //     commit('SET_LOADER_STATE', true)
        //     axios
        //         .get(baseUrl + 'products/' + 1)
        //         .then(data => {
        //             console.log(data.data)
        //             let productprofile = data.data
        //             commit('SET_INDIVIDUAL_PRODUCT', productprofile)
        //             commit('SET_LOADER_STATE', false)

        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })

        // }

    },
    getters: {
        latestproducts(state) {
            return state.latestproducts
        },
        // productprofile(state){
        //     return state.productprofile
        // },
        loader(state) {
            return state.loader
        }
    }
})
