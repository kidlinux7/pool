<template>
  <div class="container">
    <div class="row mx-auto">
      <h3 style="font-weight: bold; margin-bottom: 30px">Latest Products</h3>

      <div
        class="
          col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-6 col-xs-12 col-12
          mt-4
          mb-4
          mx-auto
        "
        v-for="storecard in storecards"
        v-bind:key="storecard.id"
      >
        <div class="card mx-auto storeCard" style="width: 18rem">
          <img src="../assets/gumboots.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="storeCard_card_category">
              {{ storecard.category }}
            </h5>
            <h5 class="card-title blueNameTag">{{ storecard.name }}</h5>
            <div>
              <p class="storeCard_card_ratingStars">⭐⭐⭐⭐⭐</p>
              <br />
            </div>
            <div>
              <p class="storeCard_card_info">
                {{ storecard.price }}
              </p>
            </div>
            <a href="#" class="btn btn-primary addToCartBtn"
              ><i class="fa-solid fa-cart-plus px-2"> </i>Add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StoreCard",
  data() {
    return {
      storecards: [
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
          category: "Not Fixing",
          name: "Yellow Boots",
          price: "Tsh 21,700",
        },
      ],
    };
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
  .card {
    width: 14 rem !important;
  }
  .storeCard {
    width: 14 rem !important;
  }

}

/* TABLET SIZED DEVICES */
@media only screen and (max-width: 768px) {
  .card {
    width: 14 rem !important;
  }
  .storeCard {
    width: 14 rem !important;
  }
}
</style>