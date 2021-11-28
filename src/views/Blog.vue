<template>
  <div class="container">
    <div class="row align-items-center">
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
        "
      >
        <StoreInsightCard></StoreInsightCard>
      </div>
    </div>

    <div v-if="loader">
      <div class="container-fluid">
        <div class="row mx-auto">
          <h3 class="midSectionHeading">Latest News</h3>

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
              style="--rect-h: 270px; --lines: 2; --t: 0.6s"
            ></div>
          </div>
        </div>
      </div>
    </div>


<div v-else data-aos="fade-in">
    <div class="row mt-3">
      <div
        class="
          col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12
          mb-4
          mt-5
        "
        v-for="blogcard in blogcards"
        v-bind:key="blogcard.id"
      >
        <div class="card mb-3">
          <img
            :src="blogarticle.image_url"
            class="card-img-top"
            style="border-radius: 12px"
            alt="..."
          />
          <div class="card-body blogCardTitle">
            <h5 class="card-title text-left blogSectionTitle">
              {{ blogarticle.title }}
            </h5>
            <p class="card-text blogSectionDescr">
              {{ blogarticle.description }}
            </p>
            <p class="card-text">
              <small class="text-muted blogSectionTime"
                >Last updated 3 mins ago</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import StoreInsightCard from "@/components/StoreInsightCard.vue";
export default {
  name: "Blog",
  components: {
    StoreInsightCard,
  },
  //     data() {
  //     return {
  //       blogarticles: [
  //         {
  //           id: 1,
  //           title: "Course Section",
  //           description:
  //             "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //           image: "http://source.unsplash.com/random/200×200",
  //           date: "May 4, 2021",
  //         },
  //         {
  //           id: 2,
  //           title: "Cleaning Section",
  //           description:
  //             "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //           image: "http://source.unsplash.com/random/200×200",
  //           date: "May 5, 2021",
  //         },
  //         {
  //           id: 3,
  //           title: "Salt Cleaning",
  //           description:
  //             "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //           image: "http://source.unsplash.com/random/200×200",
  //           date: "May 7, 2021",
  //         },
  //       ],
  //     };
  //   },

  mounted() {
    this.$store.dispatch("loadBlogCards");
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    storeproducts() {
      return this.$store.getters.blogcards;
    },
  },
};
</script>
<style scoped>
.blogCardTitle {
  font-family: "Poppins";
}
/* SUPER SMALL SIZED DEVICES */
@media only screen and (max-width: 320px) {
  .blogSectionTitle {
    font-size: 0.8em;
  }
  .blogSectionDescr {
    font-size: 1em;
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