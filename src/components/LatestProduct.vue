<template>
  <div class="container">
    <!-- <div class="row mx-auto mt-5"> -->
    <h3 class="midSectionHeading">Latest Products</h3>
    <Carousel
      :breakpoints="breakpoints"
      :settings="settings"
      :autoplay="2500"
      :wrap-around="true"
    >
      <Slide
        v-for="latestproduct in latestproducts"
        v-bind:key="latestproduct.id"
      >
        <div
          class="card mx-auto latestProduct carousel__item"
          style="width: 18rem"
        >
          <img :src="latestproduct.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="latestProduct_card_category">
              {{ latestproduct.category }}
            </h5>
            <h5 class="card-title blueNameTag"><a href=""><router-link to="/ProductDetails">{{ latestproduct.title }}</router-link></a></h5>
            <div>
              <p class="latestProduct_card_ratingStars">⭐⭐⭐⭐⭐</p>
              <br />
            </div>
            <div>
              <p class="latestProduct_card_info">
                {{ latestproduct.price }}
              </p>
            </div>
            <a href="#" class="btn btn-primary addToCartBtn"
              ><i class="fa-solid fa-cart-plus px-2"> </i>Add to cart</a
            >
          </div>
        </div>
      </Slide>
    </Carousel>
    <!-- </div> -->
  </div>
</template>
<script>
import {mapState} from 'vuex'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "LatestProduct",
  components: {
    Carousel,
    Slide,
    // Pagination,
    // Navigation,
  },
    data() {
    return {
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
  mounted(){
    this.$store.dispatch('loadLatestProducts')
  },
  computed:{
    ...mapState([
      'latestproducts'
    ])
  }

};
</script>
<style scoped>
.latestProduct:hover {
  /* border-color: whitesmoke; */
  padding: 3px;
  transition: 0.3s ease-in-out;
  box-shadow: 10px 10px 20px 5px rgb(235, 233, 233);
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
</style>