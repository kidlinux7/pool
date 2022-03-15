<template>
  <div v-if="loader" class="mt-5">
    <div class="container" >
          <div class="d-flex justify-content-center">

      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3" style="margin-top:5vh;">
            <p style="text-align: center">
                <div 
                  class="skeleton skeleton-line" 
                  style="
                    --lines: 1;
                    --c-w: 100%;
                  "
                ></div>
            </p>
          </div>
</div>


          <div class="d-flex justify-content-center">

      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12" style="margin-top:1vh;">
            <p style="text-align: center">
                <div 
                  class="skeleton skeleton-line" 
                  style="
                    --lines: 3;
                    --c-w: 100%;
                  "
                ></div>
            </p>
          </div>
</div>


      <div class="row">
        <div
          class="
            col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div
            class="skeleton skeleton-rect mx-auto"
            style="--rect-h: 20vh; --c-w: 80%; --lines: 0; --t: 0.6s"
          ></div>
        </div>
      </div>



      <div class="row">
          <div class="d-flex justify-content-center">

        <div
          class="
            col-xxl-8 col-xl-8 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
            <p style="text-align: center">
                <div 
                  class="skeleton skeleton-line" 
                  style="
                    --lines: 6;
                    --c-w: 100%;
                  "
                ></div>
            </p>
          </div>
        </div>
      </div>

          <div class="d-flex justify-content-center">

      <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3" style="margin-top:5vh;">
            <p style="text-align: center">
                <div 
                  class="skeleton skeleton-line" 
                  style="
                    --lines: 1;
                    --c-w: 100%;
                  "
                ></div>
            </p>
          </div>
</div>

        <div class="row mx-auto">
          <div
            class="
              col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12
              mx-auto
            "
            id="shimmer"
            v-for="index in 3"
            :key="index"
          >
            <div
              class="skeleton skeleton-rect mx-auto"
              style="--rect-h: 270px; --lines: 2; --t: 0.6s"
            ></div>
          </div>
        </div>

    </div>
  </div>
  <div v-else class="topSpace">
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <h6
      style="
        text-align: center;
        font-weight: 400;
        color: grey;
        margin-bottom: 20px;
        font-size:1em;
        margin-top:5vh;
      "
      class="px-5"
    >
     Published November 29, 2021
    </h6>
        </div>

      </div>

<div class="d-flex justify-content-center">
  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <h1 style="text-align: center; font-weight: 700;" class="px-5">
      {{ blogprofile.title }}
    </h1>
  </div>
</div>

      <div class="d-flex justify-content-center">
  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <div class="img">
        <img
          src="../assets/poster.png"
          class="img-responsive"
          alt="product Image"
          style="width: 100%; height: auto; border-radius: 10px;margin-bottom:50px;"
        />
          <!-- <img :src="imagelink" height="200px" width="100%" /> -->
        </div>
  </div>
      </div>

<div class="d-flex justify-content-center">
  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
 <p style="text-align: left;" class="px-5">
   
      <div v-if="!readMoreActivated">
        {{description.slice(0,700)}}

      <span id="link" @click="View()"> Read more</span>

      </div>
            <div v-if="readMoreActivated">
        {{description}}
      <span id="link" @click="View()"> Show less</span> 

      </div>
    </p>
  </div>
     
</div>

    </div>



    <BlogCardSnippet></BlogCardSnippet>
  </div>
  <Footer></Footer>
</template>

<script>
import axios from "axios";
import "css-skeletons";
import BlogCardSnippet from "@/components/BlogCardSnippet.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "BlogProfile",
  components: {
    BlogCardSnippet,
    Footer,
  },
  data() {
    return {
      id: this.$route.params.id,
      blogprofile: [],
      readMoreActivated: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Morbi tristique senectus et netus et malesuada. Vivamus at augue eget arcu dictum varius. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Duis tristique sollicitudin nibh sit amet commodo nulla. Ut consequat semper viverra nam libero justo. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Sapien et ligula ullamcorper malesuada proin libero nunc. Amet  massa vitae tortor condimentum lacinia. Vivamus arcu felis bibendum ut tristique et egestas. Purus in mollis nunc sed. Tortor posuere ac ut consequat semper viverra nam. Viverra orci sagittis eu volutpat odio Vivamus at augue eget arcu dictum varius. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Duis tristique sollicitudin nibh sit amet commodo nulla. Ut consequat semper viverra nam libero justo. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Sapien et ligula ullamcorper malesuada proin libero nunc. Amet massa vitae tortor condimentum lacinia. Vivamus arcu felis bibendum ut tristique et egestas. Purus in mollis nunc sed. Tortor posuere ac ut consequat semper viverra nam. Viverra orci sagittis eu volutpat odio",
      loader: false,
      imagelink: "http://source.unsplash.com/random/200×200",
    };
  },
  methods: {
    View() {
      if (this.readMoreActivated == false) {
        this.readMoreActivated = true;
      } else if (this.readMoreActivated == true) {
        this.readMoreActivated = false;
      }
      console.log(this.readMoreActivated);
    },
  },
  mounted() {
    this.loader = true;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((data) => {
        // console.log(data.data);
        this.blogprofile = data.data;
        this.loader = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#link {
  cursor: pointer;
  color: blue;
  font-weight: bold;
}
.topSpace {
  margin-top: 7vh;
}
.img {
  margin-top: 5vh;
}
</style>