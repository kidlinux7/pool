<template>
  <div class="container">
    <div v-if="cartTotalPrice !== 0">
      <div v-for="item in cartItems" v-bind:key="item.title.id">
        <div class="mx-auto">
          <div class="card mb-4" style="max-width: 540px">
            <div class="row g-0 justify-content-between">
              <div class="col-md-2 col-sm-2 col-xs-2 col-2">
                <img
                  :src="this.baseUrl + item.image"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-5 col-sm-5 col-xs-5 col-5">
                <div class="card-body text-left">
                  <h5 class="card-title" style="font-size: 0.6em">
                    {{ item.title }}
                  </h5>
                  <p class="card-text">Tsh {{ item.price }}</p>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-2 col-2">
                <div class="card-body text-left">
                  <div class="d-flex align-items-center">
                    <h5
                      class="card-title"
                      @click="RemoveQuantityToCart([item.title, item.quantity])"
                      style="font-size: 0.9em; color: #c9c9c9"
                    >
                      <i class="fa-solid fa-circle-minus"></i>
                    </h5>

                    <h3 class="card-title px-1" style="font-size: 0.6em">
                      {{ item.quantity }}
                    </h3>

                    <h5
                      class="card-title"
                      @click="AddQuantityToCart([item.title, item.quantity])"
                      style="font-size: 0.9em; color: blue"
                    >
                      <i class="fa-solid fa-circle-plus"></i>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-md-1 col-sm-1 col-xs-1 col-1">
                <div
                  class="card-body text-left px-2"
                  @click="
                    removeFromCart([
                      item.title,
                      item.price,
                      item.image,
                      item.quantity,
                    ])
                  "
                >
                  <h5 class="card-title" style="font-size: 0.6em">
                    <i class="fa-solid fa-trash"></i>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div style="position: fixed"> -->
      <div class="d-flex justify-content-between">
        <h6>Total(Tsh)</h6>
        <h4 style="font-weight: bold">{{ cartTotalPrice }}</h4>
      </div>
      <div class="d-grid gap-2">
        <router-link to="/checkout">
          <button
            class="btn btn-primary"
            data-bs-dismiss="offcanvas"
            type="button"
          >
            Proceed to Checkout
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <div v-else>
      <div style="margin-top: 30vh">
        <h1 style="font-size: 5em">🛒</h1>
        <h3>Empty Cart</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data(){
    return {
      baseUrl: "https://0768-169-239-3-230.ngrok.io",
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeFromCart(data) {
      this.$store.dispatch("removeProductFromCart", {
        title: data[0],
        price: data[1],
        image: data[2],
        quantity: data[3],
      });
    },
    AddQuantityToCart(data) {
      this.$store.dispatch("addQuantityToCart", {
        title: data[0],
        quantity: data[1],
      });
    },
    RemoveQuantityToCart(data) {
      this.$store.dispatch("removeQuantityToCart", {
        title: data[0],
        quantity: data[1],
      });
    },
  },
};
</script>

<style>
</style>