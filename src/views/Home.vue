<template>
  <div class="container">
    <div class="row align-items-center" id="topSection">
      <div
        class="
          col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12
          order-sm-1
        "
      >
        <img
          src="../assets/gumboots.png"
          class="img-fluid"
          alt="product Image"
        />
      </div>
      <div
        class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
        <h1 class="landingHeader">Orange Gum Boots</h1>
        <p class="landingDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, at
          laboriosam sint eaque, enim ratione sapiente cum optio, quisquam
          veritatis numquam. Atque qui, nemo esse laboriosam nesciunt eum
          repellat eveniet
        </p>
        <div class="d-grid gap-2 col-6 mb-5">
          <button class="btn btn-primary getStarted" type="button">
            Get Started
          </button>
        </div>
        
      </div>
    </div>

    <FeaturedProduct></FeaturedProduct>
    <WeeklyDiscount></WeeklyDiscount>
    <LatestProduct></LatestProduct>
    <WeeklySale></WeeklySale>
    <BestSellingProduct></BestSellingProduct>
    <NewsLetter></NewsLetter>
    <BlogCards></BlogCards>
    
  </div>
  <Footer></Footer>
</template>

<script>
import FeaturedProduct from "@/components/FeaturedProduct.vue";
import WeeklyDiscount from "@/components/WeeklyDiscount.vue";
import LatestProduct from "@/components/LatestProduct.vue";
import BestSellingProduct from "@/components/BestSellingProduct.vue";
import WeeklySale from "@/components/WeeklySale.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import BlogCards from "@/components/BlogCards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    FeaturedProduct,
    WeeklyDiscount,
    LatestProduct,
    BestSellingProduct,
    WeeklySale,
    NewsLetter,
    BlogCards,
    Footer,
  },
};
</script>

<style>
/* Get Started Button */

/* Top Section */
#topSection {
  margin-top: 10vh;
}

/* Landing Heading Text */
.landingHeader {
  font-weight: bolder;
  text-align: left;
  font-family: "Poppins", sans;
}
.landingDescription {
  text-align: left;
  font-family: "Poppins", sans;
}
.landingButton {
  text-align: left;
  padding: 7px;
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 7px;
  float: left;
  font-family: "Poppins", sans;
}
</style>