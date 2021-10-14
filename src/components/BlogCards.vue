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
          <img src="../assets/gumboots.png" class="card-img-top" alt="..." />
          <div class="card-body blogCardTitle">
        <h5 class="card-title text-left">{{blogarticle.title}}</h5>
            <p class="card-text">
            {{blogarticle.description}}
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogCards",
  data() {
    return {
      blogarticles: [
        {
          id: 1,
          title: "Course Section",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date: "May 4, 2021",
        },
        {
          id: 2,
          title: "Cleaning Section",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date: "May 5, 2021",
        },
        {
          id: 3,
          title: "Salt Cleaning",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          date: "May 7, 2021",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blogCardTitle{
    font-family: 'Poppins';
}
</style>