<template>
  <div v-if="loader" class="mt-5">
    <div class="container-fluid">
      <div class="row">
        <div
          class="
            col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
          "
        >
          <div
            class="skeleton skeleton-rect mx-auto"
            style="--rect-h: 40vh; --c-w: 100%; --lines: 0; --t: 0.6s"
          ></div>
        </div>
      </div>

<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
          <div class="d-flex flex-row-reverse">
            <p style="text-align: left">
                <div 
                  class="skeleton skeleton-line" 
                  style="
                    --lines: 2;
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
          <div class="d-flex flex-row-reverse">
            <p style="text-align: left">
                <div 
                  class="skeleton skeleton-line" 
                  style="
                    --lines: 10;
                    --c-w: 100%;
                  "
                ></div>
            </p>
          </div>
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Semper risus in
      hendrerit gravida rutrum quisque non tellus orci. Morbi tristique senectus
      et netus et malesuada. Vivamus at augue eget arcu dictum varius. A iaculis
      at erat pellentesque adipiscing commodo elit at imperdiet. Duis tristique
      sollicitudin nibh sit amet commodo nulla. Ut consequat semper viverra nam
      libero justo. Quis risus sed vulputate odio ut enim blandit volutpat
      maecenas. Sapien et ligula ullamcorper malesuada proin libero nunc. Amet
      massa vitae tortor condimentum lacinia. Vivamus arcu felis bibendum ut
      tristique et egestas. Purus in mollis nunc sed. Tortor posuere ac ut
      consequat semper viverra nam. Viverra orci sagittis eu volutpat odio
      facilisis mauris. Suscipit tellus mauris a diam maecenas sed enim ut sem.
      Enim tortor at auctor urna nunc id cursus metus. Ut diam quam nulla
      porttitor massa. Cursus euismod quis viverra nibh cras pulvinar mattis.
      Mauris pharetra et ultrices neque ornare. Enim eu turpis egestas pretium
      aenean pharetra magna ac. Condimentum vitae sapien pellentesque habitant
      morbi tristique. Et malesuada fames ac turpis. Odio eu feugiat pretium
      nibh ipsum consequat nisl vel pretium. Quam nulla porttitor massa id neque
      aliquam vestibulum morbi blandit. Sed faucibus turpis in eu mi. Pretium
      fusce id velit ut tortor pretium viverra.
      <br />
      Massa vitae tortor condimentum lacinia quis. Nibh mauris cursus mattis
      molestie. Nascetur ridiculus mus mauris vitae ultricies leo integer
      malesuada nunc. At quis risus sed vulputate. Duis ultricies lacus sed
      turpis. Morbi tristique senectus et netus et malesuada fames. Dolor sed
      viverra ipsum nunc aliquet bibendum enim. Duis tristique sollicitudin nibh
      sit. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien.
      Tincidunt dui ut ornare lectus. Commodo quis imperdiet massa tincidunt
      nunc pulvinar sapien et. Vel quam elementum pulvinar etiam non quam lacus
      suspendisse. Faucibus vitae aliquet nec ullamcorper. Blandit turpis cursus
      in hac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
      Viverra justo nec ultrices dui sapien eget mi proin. Blandit massa enim
      nec dui nunc mattis enim ut. Vel pretium lectus quam id leo in vitae
      turpis massa. Turpis egestas pretium aenean pharetra magna ac placerat. Et
      netus et malesuada fames ac turpis egestas maecenas. Tempus quam
      pellentesque nec nam aliquam sem et. Sit amet nisl suscipit adipiscing.
      Sit amet mauris commodo quis imperdiet massa tincidunt nunc. At tempor
      commodo ullamcorper a lacus vestibulum sed. Et netus et malesuada fames.
      Ut tortor pretium viverra suspendisse potenti nullam ac tortor.
      Condimentum mattis pellentesque id nibh tortor. Id neque aliquam
      vestibulum morbi blandit cursus risus. Proin libero nunc consequat
      interdum varius sit amet mattis vulputate.
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
      loader: false,
      imagelink: "http://source.unsplash.com/random/200×200",
    };
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
.topSpace {
  margin-top: 10vh;
}
.img {
  margin-top: 5vh;
}
</style>