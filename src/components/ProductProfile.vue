<template>
  <div class="container">
    <div class="row align-items-start productDetails">
      <div
        class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12"
      >
        <div class="d-flex flex-column">
          <img
            src="../assets/gumboots.png"
            class="img-fluid m-5"
            alt="product Image"
          />
          <div class="d-flex flex-row">
            <div class="imgView1">
              <img
                src="../assets/gumboots.png"
                class="img-fluid"
                alt="product Image"
              />
            </div>
            <div class="imgView2">
              <img
                src="../assets/gumboots.png"
                class="img-fluid"
                alt="product Image"
              />
            </div>
            <div class="imgView2">
              <img
                src="../assets/gumboots.png"
                class="img-fluid"
                alt="product Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12"
      >
        <div class="card detailsCard w-100">
          <div class="card-body text-left">
            <h5 class="card-title productHead">Purple Gum Boots</h5>
            <h6 class="card-subtitle mb-2 text-muted producer mt-3">By Cello</h6>
            <h6 class="card-subtitle mb-2 text-muted mt-3">⭐⭐⭐⭐⭐</h6>
            <h6 class="card-subtitle mb-2 text-muted productPrice mt-3">15,000</h6>
            <p class="card-text mt-3 productDescription">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vitae nesciunt magnam. Eius possimus ex explicabo quo quae. Eligendi atque eius deleniti necessitatibus magnam vero quibusdam architecto omnis veniam ipsum!
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque minus laboriosam hic beatae! Doloribus.
            </p>
            <h6 class="card-subtitle mb-2 text-muted mt-3">Colors</h6>
            <div class="d-flex flex-row">
              <div class="colorSpace"></div>
              <div class="colorSpace"></div>
              <div class="colorSpace"></div>
              <div class="colorSpace"></div>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">- 1 +</h6>

            <div class="d-flex align-items-center">
              <a href="#" class="card-link">checkout</a>
              <a href="#" class="btn btn-primary mx-4 addToCartBtn"
                ><i class="fa-solid fa-cart-plus px-2"> </i>Add to cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
        <div class="d-flex flex-row">
          <h4 style="font-weight:bold;">Description</h4>
        </div>
        <div class="d-flex flex-row-reverse">
          
          <p style="text-align:left;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum voluptas ipsam, perspiciatis neque tempore id quas quisquam natus, atque distinctio in non consequuntur delectus repellat et totam amet sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, sunt. Aut ea sequi, vitae veniam non laudantium fugit distinctio doloribus nostrum eligendi architecto vel, sint inventore? Nemo iure dolorum sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta pariatur totam ab earum assumenda asperiores? A, dicta quas error, pariatur est excepturi nisi corporis perspiciatis quam, hic quasi commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nostrum vitae tempora molestiae et a optio eveniet voluptate expedita sit aperiam molestias quae, itaque sed? Eveniet iure eaque aut a.</p>

        </div>
      </div>
    </div>
  </div>
  <LatestProduct></LatestProduct>
</template>
<script>
import LatestProduct from "@/components/LatestProduct.vue";
export default {
  name: "ProductProfile",
  data(){
    return{
      id:this.$route.params.id,
    }
  },
  
  components: {
    LatestProduct,
  },
};
</script>
<style scoped>
.productPrice{
  font-size: 2em;
  font-weight: 900;
  color: blue;
}
.productDetails{
  margin-top: 7vh;
}
.producer{
  font-size: 1.4em;
}
.productHead{
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

@media only screen  and (max-width: 425px) {
  .detailsCard{
    margin-top: 2vh;
  }
  .imgView1,.imgView2{
    height: auto;
  }
}


/* TABLET SIZED DEVICES */
/* @media only screen and (min-width: 320px) and (max-width: 768px) {
  .detailsCard{
    margin-top: 2vh;
  }
} */
</style>