import vuex from 'vuex'
import axios from 'axios'

// import Vue from 'vue';
// Vue.use(vuex, axios)

let baseUrl = 'https://edcc-102-64-64-8.ngrok.io/'

export default new vuex.Store({
    state: {
        loader: false,
        latestproducts: [],
        featuredproducts: [],
        bestsellingproducts: [],
        weeklydiscountproducts: [],
        blogsnippest: [],

    },
    mutations: {
        // Fetching Latest Products
        SET_LATEST_PRODUCTS(state, latestproducts) {
            state.latestproducts = latestproducts
        },

        //Fetching Featured Products
        SET_FEATURED_PRODUCTS(state, featuredproducts) {
            state.featuredproducts = featuredproducts
        },

        //Fetching Best Selling Products
        SET_BEST_SELLING_PRODUCTS(state, bestsellingproducts) {
            state.bestsellingproducts = bestsellingproducts
        },

        //Fetching Weekly Discount Products
        SET_WEEKLY_DISCOUNT_PRODUCTS(state, weeklydiscountproducts) {
            state.weeklydiscountproducts = weeklydiscountproducts
        },

        //Fetching Blogcard Snippest
        SET_BLOG_SNIPPEST(state, blogsnippest) {
            state.blogsnippest = blogsnippest
        },

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
                .get(baseUrl + 'inventory/api/list/product')
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


        loadFeaturedProducts({ commit }) {
            commit('SET_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/product')
                .then(data => {
                    // console.log(data.data)
                    let featuredproducts = data.data
                    commit('SET_FEATURED_PRODUCTS', featuredproducts)
                    commit('SET_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        },

        loadBestSellingProducts({ commit }) {
            commit('SET_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/product')
                .then(data => {
                    // console.log(data.data)
                    let bestsellingproducts = data.data
                    commit('SET_BEST_SELLING_PRODUCTS', bestsellingproducts)
                    commit('SET_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        },

        loadWeeklyDiscountProducts({ commit }) {
            commit('SET_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/product')
                .then(data => {
                    // console.log(data.data)
                    let weeklydiscountproducts = data.data
                    commit('SET_WEEKLY_DISCOUNT_PRODUCTS', weeklydiscountproducts)
                    commit('SET_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        },

        loadBlogSnippest({ commit }) {
            commit('SET_LOADER_STATE', true)
            axios
                .get('https://jsonplaceholder.typicode.com/photos/1')
                .then(data => {
                    // console.log(data.data)
                    let blogsnippest = data.data
                    commit('SET_BLOG_SNIPPEST', blogsnippest)
                    commit('SET_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        }

    },
    getters: {
        latestproducts(state) {
            return state.latestproducts
        },
        featuredproducts(state) {
            return state.featuredproducts
        },
        bestsellingproducts(state) {
            return state.bestsellingproducts
        },
        weeklydiscountproducts(state) {
            return state.weeklydiscountproducts
        },
        blogsnippest(state) {
            return state.blogsnippest
        },
        loader(state) {
            return state.loader
        }
    }
})
