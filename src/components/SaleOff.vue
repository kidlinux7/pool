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
        class="card mx-auto saleOffProduct mt-5 carousel__item"
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
};
</script>
<style scoped>
.saleOffProduct:hover {
  /* border-color: whitesmoke; */
  padding: 3px;
  transition: 0.3s ease-in-out;
  box-shadow: 10px 10px 20px 5px rgb(235, 233, 233);
}
.saleOffProduct_card_category {
  color: rgb(173, 173, 173);
  text-align: left;
  margin-left: 20px;
  font-family: "Poppins", sans;
  font-size: 0.9em;
}
.cartIcon {
  margin-right: 20px;
}
.saleOffProduct_card_addtocart_text {
  font-size: 1.7em;
}
.saleOffProduct_card_addtocart {
  padding: 7px;
  background-color: rgb(41, 41, 255);
  color: white;
  font-weight: bold;
  border-radius: 7px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Poppins", sans;
}
.saleOffProduct_card_price {
  font-family: "Poppins";
  font-size: 2.1em;
  font-weight: 900;
  color: #696969;
}
.saleOffProduct_card {
  height: 300px;
  width: 100;
}
.saleOffProduct_card_image {
  height: 290px;
  padding: 20px;
  width: auto;
}
.saleOffProduct_card_ratingStars {
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
.saleOffProduct_card_info {
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