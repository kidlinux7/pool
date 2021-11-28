<template>
  <div class="container">
    <div v-if="loader" data-aos="fade-in">
      <div class="row mx-auto align-items-center productDetails" >
        <div
          class="
            col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div class="d-flex flex-column mx-auto">
            <div
              class="skeleton skeleton-rect mt-1 mx-auto"
              style="--rect-h: 40vh; --c-w: 90%; --lines: 0; --t: 0.6s"
            ></div>
            <div class="d-flex justify-content-around">
              <!-- <div class="imgView1">
                <div
                  class="skeleton skeleton-rect "
                  style="--rect-h: 100px;  --lines: 0; --t: 0.6s;"
                ></div>
              </div> -->

              <div class="">
                <div
                  class="skeleton skeleton-rect "
                  style="--rect-h: 110px; --c-w:100px; --lines: 0; --t: 0.6s"
                ></div>
              </div> 

              <div class="">
                <div
                  class="skeleton skeleton-rect "
                  style="--rect-h: 110px; --c-w:100px; --lines: 0; --t: 0.6s"
                ></div>
              </div>

              <div class="">
                <div
                  class="skeleton skeleton-rect "
                  style="--rect-h: 110px; --c-w:100px; --lines: 0; --t: 0.6s"
                ></div>
              </div>


            </div>
          </div>
        </div>
        <div
          class="
            col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div class="card detailsCard ">
            <div class="card-body text-left">
              <h5 class="card-title productHead">
                <div 
                    class="skeleton skeleton-line" 
                    style="
                      --lines: 2;
                      --c-w: 100%;
                      --l-h: 30px
                    "
                  ></div>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted producer ">
                <div class="skeleton skeleton-line" style="--l-h: 20px;
                      --c-w: 100px;
                
                "></div>
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">
                               <div 
                  class="skeleton skeleton-line" 
                  style="--l-h: 20px;
                  --c-w: 100px;
                  "
                ></div>
              </h6>
              <h6 class="card-subtitle mb-0 text-muted productPrice mt-0">
                <div 
                 class="skeleton skeleton-line" 
            style="--l-h: 30px;
            --c-w: 200px;
            
            "
                ></div>
              </h6>
              <!-- <p class="card-text mt-0 productDescription"> -->
              <div 
                class="skeleton skeleton-line" 
                style="
                  --lines: 4;
                  --c-w: 100%;
                  
                "
              ></div>
              <!-- </p> -->
              <h6 class="card-subtitle mb-0 text-muted"><div 
                  class="skeleton skeleton-line" 
                  style="--l-h: 20px;
                  --c-w:150px"
                ></div></h6>

              <div class="d-flex align-items-start">
                <a href="#" class="card-link"><div 
                            class="skeleton skeleton-line" 
                            style="--l-h: 40px;--c-w:110px;"
                          ></div></a>
                          <div 
                            class="skeleton skeleton-line" 
                            style="--l-h: 40px;--c-w:110px;"
                          ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 mx-auto" >
        <div
          class="
            col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div class="d-flex flex-row mx-auto">
            <h4 style="font-weight: bold"><div 
                  class="skeleton skeleton-line" 
                  style="--l-h: 30px;"
                ></div></h4>
          </div>
          <div class="d-flex flex-row-reverse">
            <p style="text-align: left">
                <div 
                  class="skeleton skeleton-line" 
                  style="
                    --lines: 5;
                    --c-w: 100%;
                  "
                ></div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else data-aos="fade-out">
      <div class="row align-items-start productDetails">
        <div
          class="
            col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div class="d-flex flex-column">
            <img
              :src="baseUrl + productprofile.cover_image"
              class="img-fluid mainImage m-5"
              alt="product Image"
            />
            <div class="d-flex flex-row" >
              <div class="imgView1"  v-on:click="updateImage(image)" v-for="image in productprofile.product_image" v-bind:key="image">
                <img
                  :src="baseUrl + image"
                  class="img-fluid"
                  alt="product Image"
                
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div class="card detailsCard w-100">
            <div class="card-body text-left">
              <div class="d-flex flex-row mb-2">
              <span class="badge bg-secondary">{{productprofile.category}}</span>

              </div>
              <h5 class="card-title productHead">{{ productprofile.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted producer mt-0">
                {{ productprofile.brand }}
              </h6>
              <!-- <h6 class="card-subtitle mb-2 text-muted mt-3">⭐⭐⭐⭐⭐</h6> -->
              <h6 class="card-subtitle mb-2 text-muted productPrice mt-3">
                Tsh {{ productprofile.sell_price }}
              </h6>
              <p class="card-text mt-3 productDescription">
                {{ productprofile.description }}
              </p>
              <!-- <h6 class="card-subtitle mb-2 text-muted mt-3">Colors</h6>
            <div class="d-flex flex-row">
              <div class="colorSpace"></div>
              <div class="colorSpace"></div>
              <div class="colorSpace"></div>
              <div class="colorSpace"></div>
            </div> -->
              <!-- <h6 class="card-subtitle mb-2 text-muted">- 1 +</h6> -->

              <div class="d-flex align-items-center">
                <!-- <a href="#" class="card-link">checkout</a> -->
              <div
                class="btn btn-primary addToCartBtn"
                @click="
                  addToCart([
                    productprofile.name,
                    productprofile.sell_price,
                    productprofile.cover_image,
                  ])
                "
              >
                <i class="fa-solid fa-cart-plus px-2"> </i>Add to cart
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="
            col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div class="d-flex flex-row">
            <h4 style="font-weight: bold">Description</h4>
          </div>
          <div class="d-flex flex-row-reverse">
            <p style="text-align: left">
              {{ productprofile.specification }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LatestProduct></LatestProduct>
  <Footer></Footer>
</template>
<script>
import LatestProduct from "@/components/LatestProduct.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import "css-skeletons";
export default {
  name: "ProductProfile",
  components:{
    Footer,
    LatestProduct,

  },
  data() {
    return {
      baseUrl:"https://0768-169-239-3-230.ngrok.io",
      id: this.$route.params.id,
      productprofile: [],
      loader: false,
    };
  },

  mounted() {
    this.loader = true;
    axios
      .get("https://0768-169-239-3-230.ngrok.io/inventory/api/product/details?product=" + this.id)
      .then((data) => {
        // console.log(data.data);
        this.productprofile = data.data;
        this.loader = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    updateImage(Image){
       this.productprofile.cover_image  = Image 
    },
        addToCart(data) {
      // console.log(data)
      this.$store.dispatch("addProductToCart", {
        title: data[0],
        price: data[1],
        image: data[2],
        quantity: 1,
      });
    },
  },

  computed:{
      loader() {
      return this.$store.getters.loader;
    },

  }
};
</script>
<style scoped>
.productPrice {
  font-size: 2em;
  font-weight: 900;
  color: blue;
}
.productDetails {
  margin-top: 7vh;
}
.producer {
  font-size: 1.4em;
}
.productHead {
  font-size: 2.1em;
  font-weight: bolder;
}
.detailsCard {
  margin-top: 5vh;
}
.greyNameTag {
  font-weight: 1000;
  background-color: #e6e6e67a;
  color: #888888;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 1.9em;
  font-family: "Poppins", sans;
  padding: 7px;
  margin-top: 7vh;
}
.card-title,
.card-subtitle,
.card-text,
.card-link {
  text-align: left;
}
.colorSpace {
  height: 40px;
  width: 40px;
  background-color: red;
  border-radius: 20px;
  margin: 10px;
  margin-left: 0px;
}
.imgView1 {
  width: 250px;
  height: 250px;
  border-color: blue;
  border-width: 10px;
  padding: 15px;
}
.imgView2 {
  width: 250px;
  height: 250px;
  padding: 15px;
}

/* SUPER SMALL SIZED DEVICES */

@media only screen and (max-width: 425px) {
  .detailsCard {
    margin-top: 2vh;
  }
  .imgView1,
  .imgView2 {
    height: 100px;
    width: 200px;
  }
}

/* TABLET SIZED DEVICES */
/* @media only screen and (min-width: 320px) and (max-width: 768px) {
  .detailsCard{
    margin-top: 2vh;
  }
} */
</style>