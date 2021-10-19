import vuex from 'vuex'
import axios from 'axios'
// import Vue from 'vue';

// Vue.use(vuex, axios)

let baseUrl = 'https://fakestoreapi.com/'

export default new vuex.Store({
    state:{
        latestproducts:[]
    },
    actions:{
        loadLatestProducts({commit}){
            axios
            .get(baseUrl + 'products')
            .then(data => {
                // console.log(data.data)
                let latestproducts = data.data
                commit('SET_LATEST_PRODUCTS',latestproducts)
            } )
            .catch(error =>{
                console.log(error)
            })
        }

    },
    mutations:{
        SET_LATEST_PRODUCTS (state, latestproducts){
            state.latestproducts = latestproducts
        }
    }
})
