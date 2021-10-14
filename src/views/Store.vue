<template>
  <div class="container">
    <div class="row">
      <div class="card bg-dark text-white">
        <img src="" class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center" id="topSection">
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
        "
      >
        <SaleOff></SaleOff>
      </div>
    </div>
    <div class="row align-items-center" id="topSection">
      <div class="col-xxl-3 col-xl-3 col-lg-3">
        
      </div>
      <div class="col-xxl-7 col-xl-7 col-lg-7">

      </div>
    </div>
  </div>
</template>

<script>
import SaleOff from "@/components/SaleOff.vue";
export default {
  name: "Store",
  components: {
    SaleOff,
  },
};
</script>
