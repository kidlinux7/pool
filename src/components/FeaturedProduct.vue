<template>
  <div class="container">
    <div class="row mx-auto">
      <h3 class="midSectionHeading">Featured Products</h3>
    </div>
    <div class="row topSpacer mx-auto">
      <div
        class="
          col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12
          mb-5
        "
        v-for="featuredproduct in featuredproducts"
        v-bind:key="featuredproduct.id"
      >

        <div class="card mx-auto" style="width: 16rem">
          <img src="../assets/gumboots.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="featuredProduct_card_category">{{featuredproduct.category}}</h5>
            <h5 class="card-title blueNameTag">{{ featuredproduct.name }}</h5>
            <!-- <p class="featuredProduct_card_ratingStars">⭐⭐⭐⭐⭐</p><br> -->
            
            <p class="featuredProduct_card_info">
              {{ featuredproduct.info }}
            </p>
            <!-- <a href="#" class="btn btn-primary"
              ><i class="fa-solid fa-cart-plus px-2"> </i>Add to cart</a
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FeaturedProduct",
  components: {

  },
  data() {
    return {
      featuredproducts: [
        {
          id: 1,
          name: "Duct Tape",
          category:"Cleaning",
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quia beatae rem incidunt.",
        },
        {
          id: 2,
          name: "Purple Boots",
          category:"Fixing",
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quia beatae rem incidunt.",
        },
        {
          id: 3,
          name: "More Duct Tape",
          category:"Cleaning",
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quia beatae rem incidunt.",
        },
        {
          id: 4,
          name: "ductTape",
          category:"Cleaning",
          info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quia beatae rem incidunt.",
        },
      ],
    };
  },
};
</script>

<style>
/* Fonts */
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

.card {
  border-color: transparent;
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