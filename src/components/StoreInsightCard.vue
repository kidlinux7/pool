<template>
  <div class="container">
    <div class="row" id="topSection">
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
        "
      >
        <!-- <Carousel
          :breakpoints="breakpoints"
          :settings="settings"
          :autoplay="4500"
          :wrap-around="false"
        >
          <Slide
            v-for="storeInsight in storeInsights"
            v-bind:key="storeInsight.id"
          >
          <img :src="storeInsight.image"  class="img-responsive" style="border-radius:20px;" alt="..."/>
          </Slide>
        </Carousel> -->
               <img
          src="../assets/poster.png"
          class="img-responsive"
          alt="product Image"
          style="width:100%;height:auto;border-radius:10px;"
        />
      </div>
    </div>
  </div>
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "StoreInsightCard",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      storeInsights: [
        {
          id: 1,
          image: "../assets/poster.png",
        },
        {
          id: 2,
          image: "../assets/poster.png",
        },
        {
          id: 3,
          image: "../assets/poster.png",
        },
        {
          id: 4,
          image: "../assets/poster.png",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpoints: {
        // 700px and up
        768: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
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