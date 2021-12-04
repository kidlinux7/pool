import vuex from 'vuex'
import axios from 'axios'

let baseUrl = 'http://127.0.0.1:8000/'
let cartItems = window.localStorage.getItem('cartItems')
let cartItemCount = window.localStorage.getItem('cartItemCount')

export default new vuex.Store({
    state: {

        loader: false,
        sideLoader: false,

        //Fetched Product Category ID
        id: 1,

        productcategories:[],
        productcategory:[],
        latestproducts: [],
        featuredproducts: [],
        bestsellingproducts: [],
        weeklydiscountproducts: [],
        blogsnippest: [],
        blogcards: [],
        storeproducts: [],
        sidestoreproductslatest: [],
        sidestoreproductsbestselling: [],
        sidestoreproductsdiscount: [],

        cartItems: cartItems ? JSON.parse(cartItems) : [],
    },
    mutations: {

        // Fetching Product Categories
        SET_PRODUCT_CATEGORIES(state,productcategories){
            state.productcategories = productcategories
        },

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

        //Fetching Main Store Products
        SET_STORE_PRODUCTS(state, storeproducts) {
            state.storeproducts = storeproducts
        },

        //Fetching Blog Cards
        SET_BLOG_CARDS(state, blogcards) {
            state.blogcards = blogcards
        },


        //Fetching Side Store Best Selling Products
        SET_SIDE_STORE_BEST_SELLING_PRODUCTS(state, sidestoreproductsbestselling) {
            state.sidestoreproductsbestselling = sidestoreproductsbestselling
        },


        //Fetching Side Store Best Selling Products
        SET_SIDE_STORE_LATEST_PRODUCTS(state, sidestoreproductslatest) {
            state.sidestoreproductslatest = sidestoreproductslatest
        },

        //Loading Indicator
        SET_LOADER_STATE(state, newloader) {
            state.loader = newloader
        },

        //Side Loading Indicator
        SET_SIDE_LOADER_STATE(state, newsideLoader) {
            state.sideLoader = newsideLoader
        },


        //Fetch Specific Product Category
        SET_PRODUCT_CATEGORY(state,id){
            state.id = id
        },

        //Adding Products To Cart
        SET_ADD_TO_CART(state, { title, price, image, quantity }) {
            let productInCart = state.cartItems.find(item => {
                return item.title === title
            });

            if (productInCart) {
                productInCart.quantity += quantity;
                return;
            }
            state.cartItems.push({
                title,
                price,
                image,
                quantity
            })
        },

        //Removing Product Cart
        SET_REMOVE_FROM_CART(state, { title, price, image, quantity }) {
            state.cartItems = state.cartItems.filter(item => {
                return item.title !== title
            });
        },


        //Increasing Product Quantity Inside the Cart
        SET_ADD_QUANTITY_TO_CART(state, { title, quantity }) {
            let productInCart = state.cartItems.find(item => {
                return item.title === title
            });

            if (productInCart) {
                productInCart.quantity++;
                return;
            }
        },

        //Decreasing Product Quantity Inside the Cart
        SET_REMOVE_QUANTITY_TO_CART(state, { title, quantity }) {
            let productInCart = state.cartItems.find(item => {
                return item.title === title
            });

            if (productInCart) {
                if (productInCart.quantity == 1) {
                    return productInCart.quantity == 1;

                }
                productInCart.quantity--;
                return;
            }
            state.cartItems.push({
                title,
                price,
                image,
                quantity
            })
        },


        saveCart(state) {
            window.localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            window.localStorage.setItem('cartItemCount', getters.cartItemCount)
        }

    },
    actions: {
        addProductToCart({ commit }, { title, price, image, quantity }) {
            commit('SET_ADD_TO_CART', { title, price, image, quantity })
            this.commit('saveCart')
        },

        removeProductFromCart({ commit }, { title, price, image, quantity }) {
            commit('SET_REMOVE_FROM_CART', { title, price, image, quantity })
            this.commit('saveCart')

        },

        addQuantityToCart({ commit }, { title, quantity }) {
            commit('SET_ADD_QUANTITY_TO_CART', { title, quantity })
            this.commit('saveCart')

        },

        removeQuantityToCart({ commit }, { title, quantity }) {
            commit('SET_REMOVE_QUANTITY_TO_CART', { title, quantity })
            this.commit('saveCart')

        },

        
        loadProductCategories({commit}){
            commit('SET_LOADER_STATE',true)
            axios
            .get(baseUrl + 'inventory/api/list/product/categories')
            .then(data => {
                // console.log(data.data)
                let productcategories = data.data
                commit('SET_PRODUCT_CATEGORIES', productcategories)
                commit('SET_LOADER_STATE', false)
            })
            .catch(error => {
                console.log(error)
            })
        },

        
        fetchProductCategory({commit},{id}){
            commit('SET_LOADER_STATE',true)
            axios
            .get(baseUrl + 'inventory/api/list/product/categories/' + id)
            .then(data => {
                // console.log(data.data)
                let storeproducts = data.data
                commit('SET_PRODUCT_CATEGORY', storeproducts)
                commit('SET_LOADER_STATE', false)
            })
            .catch(error => {
                console.log(error)
            })
        },


        loadBlogCards({commit}){
            commit('SET_LOADER_STATE',true)
            axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                // console.log(data.data)
                let blogcards = data.data
                commit('SET_BLOG_CARDS', blogcards)
                commit('SET_LOADER_STATE', false)
            })
            .catch(error => {
                console.log(error)
            })
        },

        loadLatestProducts({ commit }) {
            //Converting Loading State to True so it can disappear
            commit('SET_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/products')
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
                .get(baseUrl + 'inventory/api/list/products')
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
                .get(baseUrl + 'inventory/api/list/products')
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
                .get(baseUrl + 'inventory/api/list/products')
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
        },

        loadStoreProducts({ commit }) {
            commit('SET_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/products')
                .then(data => {
                    //  console.log(data.data)
                    let storeproducts = data.data
                    commit('SET_STORE_PRODUCTS', storeproducts)
                    commit('SET_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        },

        loadStoreProductsWaterPump({ commit }) {
            commit('SET_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/products')
                .then(data => {
                    //  console.log(data.data)
                    let storeproducts = data.data
                    commit('SET_STORE_PRODUCTS', storeproducts)
                    commit('SET_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        },

        loadSideStoreBestSellingProducts({ commit }) {
            commit('SET_SIDE_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/products')
                .then(data => {
                    //  console.log(data.data)
                    let sidestoreproductsbestselling = data.data
                    commit('SET_SIDE_STORE_BEST_SELLING_PRODUCTS', sidestoreproductsbestselling)
                    commit('SET_SIDE_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        },

        loadSideStoreLatestProducts({ commit }) {
            commit('SET_SIDE_LOADER_STATE', true)
            axios
                .get(baseUrl + 'inventory/api/list/products')
                .then(data => {
                    //  console.log(data.data)
                    let sidestoreproductslatest = data.data
                    commit('SET_SIDE_STORE_LATEST_PRODUCTS', sidestoreproductslatest)
                    commit('SET_SIDE_LOADER_STATE', false)

                })
                .catch(error => {
                    console.log(error)
                })

        },



    },
    getters: {
        cartItemCount(state) {
            return state.cartItems.length;
        },
        cartTotalPrice(state) {
            let total = 0;
            state.cartItems.forEach(item => {
                total += item.price * item.quantity
            })
            return total;
        },
        sidestoreproductslatest(state) {
            return state.sidestoreproductslatest
        },
        sidestoreproductsbestselling(state) {
            return state.sidestoreproductsbestselling
        },

        productcategories(state){
            return state.productcategories
        },

        storeproducts(state) {
            return state.storeproducts
        },

        blogcards(state){
            return state.blogcards
        },

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
        // cartItemInfo(state) {
        //     return state.cartItemInfo
        // },
        baseUrl(state) {
            return state.baseUrl
        },
        loader(state) {
            return state.loader
        },
        sideLoader(state) {
            return state.sideLoader
        }
    }
})
