<template>
  <div class="container">
    <div class="row mt-3">
      <h3 class="midSectionHeading">From Our Blog</h3>
      <div
        class="
          col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12
          mb-4
          mt-5
        "
        v-for="blogarticle in blogarticles"
        v-bind:key="blogarticle.id"
      >
        <div class="card mb-3">
          <img
            :src="blogarticle.image"
            class="card-img-top"
            style="border-radius: 12px"
            alt="..."
          />
          <div class="card-body blogCardTitle" style="text-align:left;">
            <h5 class="card-title  blogSectionTitle">
              {{ blogarticle.title }}
            </h5>
            <p class="card-text blogSectionDescr" style="text-decoration:none;">
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
</template>
<script>
export default {
  name: "BlogCardSnippet",
  data() {
    return {
      blogarticles: [
        {
          id: 1,
          title: "Course Section",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "http://source.unsplash.com/random/200×200",
          date: "May 4, 2021",
        },
        {
          id: 2,
          title: "Cleaning Section",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "http://source.unsplash.com/random/200×200",
          date: "May 5, 2021",
        },
        {
          id: 3,
          title: "Salt Cleaning",
          description:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          image: "http://source.unsplash.com/random/200×200",
          date: "May 7, 2021",
        },
      ],
    };
  },
  // mounted(){
  //   this.$store.dispatch("loadBlogSnippest");
    
  // },
  // computed:{
  //       loader() {
  //     return this.$store.getters.loader;
  //   },
  //       blogsnippests() {
  //     return this.$store.getters.blogsnippest;
  //   },
  // }
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