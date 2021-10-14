<template>
  <h3 class="midSectionHeading">Sale Off</h3>

  <Carousel
    :breakpoints="breakpoints"
    :settings="settings"
    :autoplay="2500"
    :wrap-around="true"
  >
    <Slide
      v-for="saleoffproduct in saleoffproducts"
      v-bind:key="saleoffproduct.id"
    >
      <div
        class="card mx-auto saleOffProduct carousel__item"
        style="width: 18rem"
      >
        <img src="../assets/gumboots.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="saleOffProduct_card_category">
            {{ saleoffproduct.category }}
          </h5>
          <h5 class="card-title blueNameTag">{{ saleoffproduct.name }}</h5>
          <div>
            <p class="saleOffProduct_card_ratingStars">⭐⭐⭐⭐⭐</p>
            <br />
          </div>
          <div>
            <p class="saleOffProduct_card_info">
              {{ saleoffproduct.price }}
            </p>
          </div>
          <a href="#" class="btn btn-primary addToCartBtn"
            ><i class="fa-solid fa-cart-plus px-2"> </i>Add to cart</a
          >
        </div>
      </div>
    </Slide>
  </Carousel>
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "SaleOff",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      saleoffproducts: [
        {
          id: 1,
          category: "Cleaning",
          name: "Purple Boots",
          price: "Tsh 15,000",
        },
        {
          id: 2,
          category: "Cleaning",
          name: "Purple Boots",
          price: "Tsh 15,000",
        },
        {
          id: 3,
          category: "Fixing",
          name: "Orange Boots",
          price: "Tsh 12,810",
        },
        {
          id: 4,
          category: "Fixing",
          name: "Yellow Boots",
          price: "Tsh 19,810",
        },
        {
          id: 5,
          category: "Not Fixing",
          name: "Yellow Boots",
          price: "Tsh 21,700",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
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
};
</script>
<style scoped>
</style>