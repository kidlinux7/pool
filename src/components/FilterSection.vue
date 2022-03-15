<template>
  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-3">
    <div class="d-flex flex-column">
      <div class="d-flex flex-column categoryGroup">
        <h4 class="storeCategory">Categories</h4>
        <div v-if="loader">
          <div
            v-for="index in 5"
            :key="index"
            class="skeleton skeleton-line mx-auto"
            style="--l-h: 30px; --c-w: 200px; --lines: 1; --t: 1.8s"
          ></div>
        </div>
        <div v-else>
          <div
            v-for="productcategory in productcategories"
            v-bind:key="productcategory.id"
          >
            <h5
              style="cursor: pointer"
              class="storeCategoryList"
              v-on:click="getProductCategoryId([productcategory.id])"
            >
              {{ productcategory.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterSection",

  methods: {
    getProductCategoryId(data) {
      this.$store.dispatch("fetchProductCategory", {
        id: data[0],
      });
    },
  },

  mounted() {
    this.$store.dispatch("loadProductCategories");
  },

  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    productcategories() {
      return this.$store.getters.productcategories;
    },
  },
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
  font-size: 1em;
  text-align: start;
}
</style>