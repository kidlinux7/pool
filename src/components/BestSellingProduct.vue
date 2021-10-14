<template>
  <div class="container">
    <!-- <div class="row mt-3"> -->
      <h3 class="midSectionHeading">Best Selling Products</h3>
    <Carousel
      :breakpoints="breakpoints"
      :settings="settings"
      :autoplay="2900"
      :wrap-around="true"
    >
          <Slide
           v-for="bestsellingproduct in bestsellingproducts"
        v-bind:key="bestsellingproduct.id"
      >


        <div class="card mx-auto bestSellingProduct  carousel__item" style="width: 18rem">
          <img src="../assets/gumboots.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="bestSellingProduct_card_category">
              {{ bestsellingproduct.category }}
            </h5>
            <h5 class="card-title blueNameTag">{{ bestsellingproduct.name }}</h5>
            <p class="bestSellingProduct_card_ratingStars">⭐⭐⭐⭐⭐</p>
            <br />
            <p class="bestSellingProduct_card_info">
              {{ bestsellingproduct.price }}
            </p>
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
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "BestSellingProduct",
  components: {
    Carousel,
    Slide,
    // Pagination,
    // Navigation,
  },
  data() {
    return {
      bestsellingproducts: [
        {
          id: 1,
          category: "Cleaning",
          name: "Purple Boots",
          price: "Tsh 15,000",
        },
        {
          id: 2,
          category: "Repairing",
          name: "Green Boots",
          price: "Tsh 17,900",
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
          category: "Fixing",
          name: "Red Boots",
          price: "Tsh 22,190",
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
.bestSellingProduct:hover {
  /* border-color: whitesmoke; */
  padding: 3px;
  transition: 0.3s ease-in-out;
  box-shadow: 10px 10px 20px 5px rgb(235, 233, 233);
}
.bestSellingProduct_card_category {
  color: rgb(173, 173, 173);
  text-align: left;
  margin-left: 20px;
  font-family: "Poppins", sans;
  font-size: 0.9em;
}
.cartIcon {
  margin-right: 20px;
}
.bestSellingProduct_card_addtocart_text {
  font-size: 1.7em;
}
.bestSellingProduct_card_addtocart {
  padding: 7px;
  background-color: rgb(41, 41, 255);
  color: white;
  font-weight: bold;
  border-radius: 7px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Poppins", sans;
}
.bestSellingProduct_card_price {
  font-family: "Poppins";
  font-size: 2.1em;
  font-weight: 900;
  color: #696969;
}
.bestSellingProduct_card {
  height: 300px;
  width: 100;
}
.bestSellingProduct_card_image {
  height: 290px;
  padding: 20px;
  width: auto;
}
.bestSellingProduct_card_ratingStars {
  height: 10px;
  margin-left: 70px;
  margin-right: 50px;
  opacity: 0.7;
  float: left;
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
.bestSellingProduct_card_info {
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