<template>
  <h6 class="storeCategory">Best Selling</h6>
  <div v-if="sideLoader">
      <div class="column" v-for="index in 5" :key="index">
        <div class="d-flex justify-content-start" >
          <div
            class="skeleton skeleton-rect"
            style="--rect-h: 100px; --c-w: 300px; --lines: 0; --t: 0.6s"
          ></div>
          <div class="skeleton skeleton-line mt-2" style="--l-h: 19px; --lines:3;"></div>
        </div>
      </div>

  </div>

  <div v-else data-aos="fade-in">
    <div id="sideBestSelling" class="mx-auto">
      <div
        class="card mb-3 position-relative"
        style="max-width: 540px"
        v-for="sideBestSelling in sidestoreproductsbestselling"
        v-bind:key="sideBestSelling.id"
      >
        <span
          class="
            position-absolute
            top-0
            start-0
            translate-middle
            badge
            bg-danger
          "
          >DISCOUNT <span class="visually-hidden">unread messages</span></span
        >

        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="sideBestSelling.image"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body text-left">
              <h5 class="card-title">{{ sideBestSelling.title }}</h5>
              <p class="card-text">Tsh {{ sideBestSelling.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideProductList",
  mounted() {
    this.$store.dispatch("loadSideStoreBestSellingProducts");
  },
  computed: {
    sideLoader() {
      return this.$store.getters.sideLoader;
    },

    sidestoreproductsbestselling() {
      return this.$store.getters.sidestoreproductsbestselling;
    },
  },
};
</script>

<style scoped>
.storeCategory {
  font-weight: bolder;
  font-size: 1.4em;
  margin-bottom: 10px;
  padding: 0px;
  margin-top: 10px;
  text-align: start;
}
.card-text {
  color: rgb(150, 150, 150);
}
.card-title,
.card-text {
  text-align: start;
  font-size: 1em;
}
.card-title {
  color: rgb(36, 36, 36);
  font-weight: bold;
}

/* Best Selling */
#sideBestSelling {
  margin-top: 20px;
  padding-right: 20px;
}
</style>