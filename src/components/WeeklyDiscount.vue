<template>
  <div class="container">
    <!-- <div class="row mx-auto mt-5"> -->
    <h3 class="midSectionHeading">Weekly Discount Products</h3>
    <div v-if="loader">
      <div class="container">
        <div class="row mx-auto">
          <div
            class="
              col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12
            "
            id="shimmer"
            v-for="index in 3"
            :key="index"
          >
            <div
              class="skeleton skeleton-rect mx-auto"
              style="--rect-h: 400px; --lines: 2; --t: 0.6s"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Carousel
        :breakpoints="breakpoints"
        :settings="settings"
        :autoplay="2700"
        :wrap-around="false"
      >
        <Slide
          v-for="weeklydiscountproduct in weeklydiscountproducts"
          v-bind:key="weeklydiscountproduct.id"
        >
          <router-link
            id="routeLink"
            v-bind:to="'/productdetails/' + weeklydiscountproduct.id"
          >
            <!-- <a :href="`/productdetails/${latestproduct.id}`" > -->
            <div
              class="card mx-auto weeklyDiscountProduct carousel__item"
              style="width: 18rem"
            >
              <img
                :src="innerBaseUrl + weeklydiscountproduct.cover_image"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="weeklyDiscountProduct_card_category">
                  {{ weeklydiscountproduct.category }}
                </h5>
                <h5 class="card-title">
                  <div v-if="weeklydiscountproduct.name.length < 15">
                    <p>{{ weeklydiscountproduct.name }}</p>
                  </div>
                  <div v-else>
                    <p>{{ weeklydiscountproduct.name.slice(0, 15) }}..</p>
                  </div>

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
                  <p class="weeklyDiscountProduct_card_info">
                    Tsh {{ weeklydiscountproduct.sell_price }}
                  </p>
                </div>
                <!-- <div class="btn btn-primary addToCartBtn">
                  <i class="fa-solid fa-cart-plus px-2"> </i>Add to cart
                </div> -->
              </div>
            </div>
            <!-- </a> -->
          </router-link>
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
      baseUrl: "https://3c47-41-222-181-223.ngrok.io",
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
  mounted() {
    this.$store.dispatch("loadWeeklyDiscountProducts");
    this.$store.state.innerBaseUrl;
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    weeklydiscountproducts() {
      return this.$store.getters.weeklydiscountproducts;
    },
    innerBaseUrl() {
      return this.$store.getters.innerBaseUrl;
    },
  },
};
</script>

<style scoped>
#routeLink {
  text-decoration: none;
}
.weeklyDiscountProduct:hover {
  /* border-color: whitesmoke; */
  padding: 3px;
  transition: 0.3s ease-in-out;
  box-shadow: 10px 10px 20px 5px rgb(235, 233, 233);
}
.weeklyDiscountProduct_card_category {
  color: rgb(173, 173, 173);
  text-align: left;
  margin-left: 20px;
  font-family: "Poppins", sans;
  font-size: 0.9em;
}
.cartIcon {
  margin-right: 20px;
}
.weeklyDiscountProduct_card_addtocart_text {
  font-size: 1.7em;
}
.weeklyDiscountProduct_card_addtocart {
  padding: 7px;
  background-color: rgb(41, 41, 255);
  color: white;
  font-weight: bold;
  border-radius: 7px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Poppins", sans;
}
.weeklyDiscountProduct_card_price {
  font-family: "Poppins";
  font-size: 2.1em;
  font-weight: 900;
  color: #696969;
}
.weeklyDiscountProduct_card {
  height: 300px;
  width: 100;
}
.weeklyDiscountProduct_card_image {
  height: 290px;
  padding: 20px;
  width: auto;
}
.weeklyDiscountProduct_card_ratingStars {
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
.weeklyDiscountProduct_card_info {
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