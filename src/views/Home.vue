<template>
  <div class="container">
    <div class="row align-items-center " id="topSection" >
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
          order-sm-1
        "
      >
        <img
          src="../assets/poster.png"
          class="img-responsive"
          alt="product Image"
          style="width:100%;height:auto;border-radius:10px;"
        />
      </div>
    </div>

    <FeaturedProduct></FeaturedProduct>
    <WeeklyDiscount></WeeklyDiscount>
    <LatestProduct></LatestProduct>
    <WeeklySale></WeeklySale>
    <BestSellingProduct></BestSellingProduct>
    <NewsLetter></NewsLetter>
    <BlogCardSnippet></BlogCardSnippet>
    
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
import BlogCardSnippet from "@/components/BlogCardSnippet.vue";
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
    BlogCardSnippet,
    Footer,
  },
};
</script>

<style>
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