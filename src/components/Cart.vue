<template>
  <div class="container">
    <div v-if="cartItems">
      <div v-for="item in cartItems" v-bind:key="item.title.id">
        <div class="mx-auto">
          <div class="card mb-4" style="max-width: 540px">
            <div class="row g-0 justify-content-between">
              <div class="col-md-2 col-sm-2 col-xs-2 col-2">
                <img
                  :src="item.image"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-5 col-sm-5 col-xs-5 col-5">
                <div class="card-body text-left">
                  <h5 class="card-title" style="font-size: 0.6em">
                    {{ item.title }}
                  </h5>
                  <p class="card-text" >Tsh {{ item.price }}</p>
                </div>
              </div>
              <div class="col-md-1 col-sm-1 col-xs-1 col-1">
                <div class="card-body text-left">
                  <h5 class="card-title" style="font-size: 0.6em">
                    {{ item.quantity }}
                  </h5>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 col-2">
                <div class="card-body text-left">
                  <h5 class="card-title" style="font-size: 0.6em">
                    <i class="fa-solid fa-trash"></i>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <h6>Total(Tsh)</h6>
        <h4 style="font-weight:bold;">{{cartTotalPrice}}</h4>
      </div>
    </div>
    <div v-else>
      <h3>Empty Cart</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    cartTotalPrice(){
      return this.$store.getters.cartTotalPrice;
    }
  },
};
</script>

<style>
</style>