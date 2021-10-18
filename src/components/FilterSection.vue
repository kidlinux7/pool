<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-3">
    <div class="d-flex flex-column">
      <div class="d-flex flex-column categoryGroup">
        <h4 class="storeCategory">Categories</h4>
        <h5 class="storeCategoryList">  Apparati</h5>
        <h5 class="storeCategoryList">WaterPumps</h5>
        <h5 class="storeCategoryList">Uniforms</h5>
        <h5 class="storeCategoryList">Chemicals</h5>
      </div>

      <div class="d-flex flex-column priceRange">
        <h4 class="storeCategory">PriceRange</h4>
        <input type="range" class="form-range" id="customRange1" />
        <label for="customRange1" id="priceRanger" class="form-label"
          >$10 - $890</label
        >
      </div>

      <div class="d-flex flex-column colorPicker">
        <h4 class="storeCategory">Colors</h4>
        <div class="d-flex align-items-center">
          <div class="colorCircle"></div>

          <p class="colorCircleName">Red</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterSection",
};
</script>
<style scoped>
.colorCircleName {
  font-size: 1.3em;
  margin-bottom: 0px;
  margin-left: 5px;
}
.colorCircle {
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background-color: red;
}
#priceRanger {
  font-weight: bold;
}
.priceRange {
  margin-top: 20px;
}
.storeCategory {
  font-weight: bolder;
  font-size: 1.4em;
  margin-bottom: 10px;
  padding: 0px;
  margin-top: 10px;
}
.storeCategoryList {
  margin-top: 20px;
  color: rgb(173, 173, 173);
}
</style>