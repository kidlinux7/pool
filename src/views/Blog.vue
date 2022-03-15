<template>
  <div class="container">
    <div class="row align-items-center">
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
        "
      >
        <!-- <StoreInsightCard></StoreInsightCard> -->
      </div>
    </div>
    <div v-if="loader">
      <div class="container" style="margin-top: 10vh">
        <div class="row align-items-center">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div
              class="skeleton skeleton-rect mx-auto"
              style="--rect-h: 40vh; --c-w: 100%; --lines: 0; --t: 0.6s"
            ></div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div
              class="skeleton skeleton-rect "
              style="--rect-h: 30px; --c-w: 90%; --lines: 1; --t: 0.6s"
            ></div>
                      <div
            class="skeleton skeleton-line "
            style="--lines: 4; --c-w: 70%"
          ></div>
          </div>

        </div>

        <div class="d-flex justify-content-center m-4">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12">
                          <div 
                class="skeleton skeleton-line" 
                style="
                  --lines: 1;
                  --c-w: 100%;
                  
                "
              ></div>
          </div>
        </div>

        <div class="row mx-auto">
          <div
            class="
              col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12
              mx-auto
            "
            id="shimmer"
            v-for="index in 9"
            :key="index"
          >
            <div
              class="skeleton skeleton-rect mx-auto"
              style="--rect-h: 270px; --lines: 3; --t: 0.6s"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div
        class="d-flex justify-content-center "
        style="margin-top: 10vh"
      >
      <div class="row align-items-center">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
          <div class="img">
            <img
              src="../assets/Heat.png"
              class="img-responsive"
              alt="product Image"
              style="
                width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 50px;
              "
            />
            <!-- <img :src="imagelink" height="200px" width="100%" /> -->
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
          <h2 style="text-align: left; font-weight: 700" class="px-5">
            Crative Desing user guide,the experince and results..
          </h2>
          <p class="px-5" style="font-weight: 2em; text-align: left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis
            inventore expedita illo? Eos molestias quidem eligendi repellat.
            Tempore esse est cum unde cumque debitis atque perferendis veniam ad
            aspernatur.
          </p>
          <button
            class="btn btn-primary"
            style="float: left; margin-left: 50px"
          >
            Read Article
          </button>
        </div>

      </div>
      </div>
      <h3 class="midSectionHeading">Latest News</h3>

      <div class="row mt-3">
        <div
          class="
            col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12
            mb-4
            mt-5
          "
          v-for="blogcard in blogcards"
          v-bind:key="blogcard.id"
        >
          <router-link id="routeLink" v-bind:to="'/blogprofile/' + blogcard.id">
            <div class="card mb-3">
              <img
                src="http://source.unsplash.com/random/200×200"
                class="card-img-top"
                style="border-radius: 12px"
                alt="..."
              />
              <div class="card-body blogCardTitle" style="text-align: left">
                <h5 class="card-title text-left blogSectionTitle">
                  {{ blogcard.title }}
                </h5>
                <p class="card-text blogSectionDescr">
                  {{ blogcard.body }}
                </p>
                <p class="card-text">
                  <small class="text-muted blogSectionTime"
                    >Last updated 3 mins ago</small
                  >
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import StoreInsightCard from "@/components/StoreInsightCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Blog",
  components: {
    StoreInsightCard,
    Footer,
  },

  mounted() {
    this.$store.dispatch("loadBlogCards");
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    blogcards() {
      return this.$store.getters.blogcards;
    },
  },
};
</script>
<style scoped>
.blogCardTitle {
  font-family: "Poppins";
  text-decoration: none;
}
.blogSectionDescr {
  color: grey;
}
/* SUPER SMALL SIZED DEVICES */
@media only screen and (max-width: 320px) {
  .blogSectionTitle {
    font-size: 0.8em;
  }
  .blogSectionDescr {
    font-size: 1em;
    color: grey;
  }
}
/* TABLET SIZED DEVICES */
@media only screen and (max-width: 768px) {
  .blogSectionTitle {
    font-size: 0.9em;
  }
  .blogSectionDescr {
    font-size: 0.7em;
  }
  .blogSectionTime {
    font-size: 0.7em;
    margin-top: 10px;
  }
}
</style>

