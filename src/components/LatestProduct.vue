<template>
  <div class="container">
    <!-- <div class="row mx-auto mt-5"> -->
    <h3 class="midSectionHeading">Latest Products</h3>
    <div v-if="loader">
      <div class="container">
        <div class="row mx-auto">
          <div
            class="
              col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12
            "
          >
            <div
              class="skeleton skeleton-rect mx-auto"
              style="--rect-h: 400px; --lines: 2; --t: 0.6s"
            ></div>
          </div>

          <div
            class="
              col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12
            "
          >
            <div
              class="skeleton skeleton-rect mx-auto"
              style="--rect-h: 400px; --lines: 2; --t: 0.6s"
            ></div>
          </div>
          <div
            class="
              col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12
            "
          >
            <div
              class="skeleton skeleton-rect mx-auto"
              style="--rect-h: 400px; --lines: 2; --t: 0.6s"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else data-aos="fade-in">
      <Carousel
        :breakpoints="breakpoints"
        :settings="settings"
        :autoplay="2200"
        :wrap-around="false"
      >
        <Slide
          v-for="latestproduct in latestproducts"
          v-bind:key="latestproduct.id" 
        >
          <!-- <router-link id="routeLink" v-bind:to="'/productdetails/' + latestproduct.id"> -->
            <!-- <a :href="`/productdetails/${latestproduct.id}`" > -->
            <div
              class="card mx-auto latestProduct carousel__item"
              style="width: 18rem"
            >
              <img :src="latestproduct.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="latestProduct_card_category">
                  {{ latestproduct.category }}
                </h5>
                <h5 class="card-title ">
                  <p>{{latestproduct.title}}</p>
                  <!-- <a href=""
                    ><router-link to="/ProductDetails">{{
                      
                    }}</router-link></a
                  > -->
                </h5>
                <!-- <div>
                  <p class="latestProduct_card_ratingStars">⭐⭐⭐⭐⭐</p>
                  <br />
                </div> -->
                <div>
                  <p class="latestProduct_card_info">
                   Tsh {{ latestproduct.price }}
                  </p>
                </div>
                <div class="btn btn-primary addToCartBtn" @click="addToCart([latestproduct.title,latestproduct.price,latestproduct.image])">
                  <i class="fa-solid fa-cart-plus px-2"> </i>Add to cart
                </div>
              </div>
            </div>
            <!-- </a> -->
          <!-- </router-link> -->
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import "css-skeletons";
export default {
  name: "LatestProduct",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      baseUrl : 'https://b796-41-75-220-253.ngrok.io',
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpoints: {
        // 700px and up
        768: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "center",
        },
      },
    };
  },

methods:{
  addToCart(data){
    console.log(data)
    this.$store.dispatch('addProductToCart', {
      title: data[0],
      price:data[1],
      image:data[2],
      quantity: 1
      });
  }
},

  mounted() {
    this.$store.dispatch("loadLatestProducts");
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    latestproducts() {
      return this.$store.getters.latestproducts;
    },

  },
};
</script>
<style scoped>
#routeLink{
  text-decoration: none;
}

.latestProduct_card_category {
  color: rgb(173, 173, 173);
  text-align: left;
  margin-left: 20px;
  font-family: "Poppins", sans;
  font-size: 0.9em;
}
.cartIcon {
  margin-right: 20px;
}
.latestProduct_card_addtocart_text {
  font-size: 1.7em;
}
.latestProduct_card_addtocart {
  padding: 7px;
  background-color: rgb(41, 41, 255);
  color: white;
  font-weight: bold;
  border-radius: 7px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Poppins", sans;
}
.latestProduct_card_price {
  font-family: "Poppins";
  font-size: 2.1em;
  font-weight: 900;
  color: #696969;
}
.latestProduct_card {
  height: 300px;
  width: 100;
}
.latestProduct_card_image {
  height: 290px;
  padding: 20px;
  width: auto;
}
.latestProduct_card_ratingStars {
  height: 10px;
  margin-left: 70px;
  margin-right: 50px;
  opacity: 0.7;
  float: left;
  text-align: center;
}
.greyNameTag {
  font-weight: 900;
  background-color: #e6e6e67a;
  color: #888888;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 1.3em;
  font-family: "Poppins", sans;
  padding: 7px;
}
.latestProduct_card_info {
  text-align: center;
  font-family: "Poppins", sans;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 10px;
  color: #0000ff;
  font-size: 1.3em;
  font-weight: 900;
}
.skeleton-rect {
  border-radius: 35px !important;
}
</style>