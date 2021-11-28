<template>
  <div class="container">
    <!-- <div class="row mx-auto mt-5"> -->
    <h3 class="midSectionHeading">Featured Products</h3>
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
    <div v-else >
      <Carousel
        :breakpoints="breakpoints"
        :settings="settings"
        :autoplay="2400"
        :wrap-around="false"
      >
        <Slide
          v-for="featuredproduct in featuredproducts"
          v-bind:key="featuredproduct.id" 
        >
          <router-link id="routeLink" v-bind:to="'/productdetails/' + featuredproduct.id">
            <!-- <a :href="`/productdetails/${latestproduct.id}`" > -->
            <div
              class="card mx-auto featuredProduct carousel__item"
              style="width: 18rem"
            >
              <img :src="this.baseUrl + featuredproduct.cover_image" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="featuredProduct_card_category">
                  {{ featuredproduct.category }}
                </h5>
                <h5 class="card-title ">
                  <p>{{featuredproduct.name}}</p>
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
                  <p class="featuredProduct_card_info">
                  Tsh {{ featuredproduct.sell_price }}
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
      baseUrl : 'https://0768-169-239-3-230.ngrok.io',
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
    this.$store.dispatch("loadFeaturedProducts");
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    featuredproducts() {
      return this.$store.getters.featuredproducts;
    },
  },
};
</script>

<style>
/* Fonts */
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.card {
  border-color: transparent;
}

.card-title{
    color: rgb(68, 68, 68);
  text-decoration: none !important;
  font-weight: bold;
}

.btn{
  font-family: "Poppins", sans;
}

/* Featured Product Card */
.featuredProduct_card_category{
  color: rgb(173, 173, 173);
  text-align: left;
  margin-left: 20px;
  font-family: "Poppins", sans;
  font-size: 0.9em;
}
.featuredProduct_card_ratingStars {
  float: left;
  margin-left: 20px;

}
.featuredProduct_card_image {
  height: 190px;
  padding: 20px;
}
.featuredProduct_card_info {
  text-align: left;
  font-family: "Poppins", sans;
  margin-left: 20px;

}

.blueNameTag {
  font-weight: 900;
  background-color: rgb(231, 231, 250);
  color: rgb(66, 66, 255);
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  font-family: "Poppins", sans;
  padding: 4px;
}
.greyShade {
  background-color: #f9f8ff;
}
.featuredProduct_card {
  height: 370px;
  width: 100;
}

.midSectionHeading {
  font-weight: bold;
  justify-content: center;
  margin-top: 5vh;
  font-family: "Poppins", sans;
}
.topSpacer {
  margin-top: 4vh;
}
</style>