<template>
  <div class="container mt-5">
    <div class="row mx-auto justify-content-between">
      <div
        class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12"
      >
        <div class="form-floating mb-3" id="topSection">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Full name</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Country</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Town/City</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Postcode/Zip</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Card Information</label>
        </div>
        <div class="input-group">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">CVC</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Date</label>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Name on card</label>
        </div>
      </div>
      <div
        class="
          col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12
          g-5
        "
      >
        <div class="checkoutsection" id="topSection">
          <div class="d-flex flex-row">
            <h5>Your Order</h5>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <h5>Products</h5>
            <h5>Total</h5>
          </div>

          <!-- Cart Items List -->
          <div class="d-flex flex-column">
          <div v-for="item in cartItems" v-bind:key="item.title.id">
            <div class="d-flex justify-content-between" style="color:grey;">
            <p>{{ item.title }}</p>
            <p>{{ item.price }}</p>
            </div>

          </div>
          </div>


          <hr />
          <div class="d-flex justify-content-between">
            <h6>Delivery Charges</h6>
            <h6>Free</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Sub Total</h6>
            <h6>0.0</h6>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <h5>Total</h5>
            <h5>{{ cartTotalPrice }}</h5>
          </div>
          <hr />
          <div class="d-flex justify-content-start">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
            </div>
            <div class="d-flex flex-column">
              <h5 class="d-flex justify-content-start">Create an account?</h5>
              <p class="d-flex justify-content-start">
                Save your info to speedup the checkout process in the future.
              </p>
            </div>
          </div>
          <div class="d-grid gap-2">
            <!-- <router-link to="/checkout"> -->
            <button
              class="btn btn-primary"
              data-bs-dismiss="offcanvas"
              type="button"
            >
              Confirm Order
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Checkout",
  components: {
    Footer,
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
};
</script>

<style scoped>
hr {
  border-top: 1px dashed rgb(97, 97, 97);
}
h5 {
  font-weight: bold;
}
h6 {
  color: #9c9b9b;
}
#topSection {
  margin-top: 5vh;
}
input {
  color: whitesmoke;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375 rem 0.75 rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: rgb(247, 247, 247);
  background-clip: padding-box;
  border: 0px solid #ffffff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25 rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>