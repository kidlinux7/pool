<template>
  <div class="container">
    <div class="row mx-auto">
      <!-- <h3 style="font-weight: bold; margin-bottom: 30px">Latest Products</h3> -->
      <div v-if="loader">
        <div class="container-fluid">
          <div class="row mx-auto">
            <div
              class="
                col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12
              "
              v-for="index in 10" :key="index"  
            >
              <div
                class="skeleton skeleton-rect mx-auto"
                style="--rect-h: 270px; --lines: 2; --t: 0.6s"
              ></div>
            </div>


          </div>
        </div>
      </div>

      <div v-else data-aos="fade-in">
<div class="container-fluid">
  <div class="row">
        <div
          class="
            col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-6 col-xs-12 col-12
            mt-4
            mb-4
            mx-auto
          "
          v-for="storeproduct in storeproducts"
          v-bind:key="storeproduct.id"
        >
          <router-link
            id="routeLink"
            v-bind:to="'/productdetails/' + storeproduct.id"
          >
            <!-- <a :href="`/productdetails/${latestproduct.id}`" > -->
            <div
              class="card mx-auto storeCard carousel__item"
              style="width: 18rem"
            >
              <img :src="storeproduct.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="storeCard_card_category">
                  {{ storeproduct.category }}
                </h5>
                <h5 class="card-title">
                  <p>{{ storeproduct.title }}</p>
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
                  <p class="storeCard_card_info">
                    {{ storeproduct.price }}
                  </p>
                </div>
                <!-- <div class="btn btn-primary addToCartBtn">
                  <i class="fa-solid fa-cart-plus px-2"> </i>Add to cart
                </div> -->
              </div>
            </div>
            <!-- </a> -->
          </router-link>
        </div>
  </div>
</div>

      </div>
    </div>
  </div>
</template>
<script>
import "css-skeletons";
export default {
  name: "StoreCard",
  data() {
    return {
      data: 9,
    };
  },
      mounted() {
    this.$store.dispatch("loadStoreProducts");
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    storeproducts() {
      return this.$store.getters.storeproducts;
    },
  },
};
</script>
<style scoped>
.storeCard:hover {
  /* border-color: whitesmoke; */
  padding: 3px;
  transition: 0.3s ease-in-out;
  box-shadow: 10px 10px 20px 5px rgb(235, 233, 233);
}
.storeCard_card_category {
  color: rgb(173, 173, 173);
  text-align: left;
  margin-left: 20px;
  font-family: "Poppins", sans;
  font-size: 0.9em;
}
.cartIcon {
  margin-right: 20px;
}
.storeCard_card_addtocart_text {
  font-size: 1.7em;
}
.storeCard_card_addtocart {
  padding: 7px;
  background-color: rgb(41, 41, 255);
  color: white;
  font-weight: bold;
  border-radius: 7px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Poppins", sans;
}
.storeCard_card_price {
  font-family: "Poppins";
  font-size: 2.1em;
  font-weight: 900;
  color: #696969;
}
.storeCard_card {
  height: 300px;
  width: 100;
}
.storeCard_card_image {
  height: 290px;
  padding: 20px;
  width: auto;
}
.storeCard_card_ratingStars {
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
.storeCard_card_info {
  text-align: center;
  font-family: "Poppins", sans;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 10px;
  color: #0000ff;
  font-size: 1.3em;
  font-weight: 900;
}

/* SUPER SMALL SIZED DEVICES */
@media only screen and (max-width: 320px) {
}

/* TABLET SIZED DEVICES */
@media only screen and (max-width: 768px) {
}
</style>