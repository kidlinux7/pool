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

    <div class="d-lg-none d-xl-none d-xxl-none">
      <!-- Filter Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Filter</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-flex flex-column">
                <div class="d-flex flex-row mt-4">
                  <div class="d-flex flex-column">
                    <h6 class="d-flex flex-row">Price Range</h6>
                    <div class="d-flex justify-content-between">
                      <div class="input-group input-group-sm mb-3">
                        <input
                          type="number"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          id="rangeField"
                        />
                        <h6 style="margin-top: 30px">to</h6>
                        <input
                          type="number"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          id="rangeField"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-grid gap-2 p-3">
              <button class="btn btn-primary" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-10 col-xs-10 col-10">
          <div class="d-flex flex-row mt-5">
            <div class="input-group mb-3">
              <input
                type="search"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-2 col-xs-2 col-2">
          <div class="d-flex flex-row mt-5">
            <button
              type="button"
              class="btn btn-primary filter"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fa-solid fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-start">
        <h6 style="font-weight: bold">Categories</h6>
      </div>

      <div class="row">
        <div class="col-sm-12 col-xs-12 col-12 categorySlide">
          <div v-if="loader">
            <div class="d-flex justify-content-start mt-1">
              <div v-for="index in 5" :key="index">
                <div
                  class="skeleton skeleton-line mx-auto"
                  style="--l-h: 30px; --c-w: 100px; --lines: 1; --t: 1.8s"
                ></div>
              </div>
            </div>
          </div>
          <div v-else>
            <div
              v-for="productcategory in productcategories"
              v-bind:key="productcategory.id"
            >
              <button
                type="button"
                class="btn btn-primary storeCategory"
                v-on:click="getProductCategoryId([productcategory.id])"
              >
                {{ productcategory.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div
        class="
          col-xxl-3 col-xl-3 col-lg-3
          d-sm-none d-none d-md-none d-lg-block d-xl-block d-xxl-block
        "
      >
        <FilterSection></FilterSection>
        <SideProductList></SideProductList>
      </div>

      <div class="col-xxl-9 col-xl-9 col-lg-9 mb-5 mx-auto">
        <StoreCard></StoreCard>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import StoreInsightCard from "@/components/StoreInsightCard.vue";
import FilterSection from "@/components/FilterSection.vue";
import StoreCard from "@/components/StoreCard.vue";
import SideProductList from "@/components/SideProductList.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Store",
  components: {
    StoreInsightCard,
    FilterSection,
    StoreCard,
    Footer,
    SideProductList,
  },
  methods: {
    getProductCategoryId(data) {
      this.$store.dispatch("fetchProductCategory", {
        id: data[0],
      });
    },
  },
  mounted() {
    this.$store.dispatch("loadProductCategories");
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    },
    productcategories() {
      return this.$store.getters.productcategories;
    },
  },
};
</script>
<style scoped>
.bigSearch {
  margin-left: 30vw;
  margin-right: 5vw;
}

#fixedSection {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
}
a {
  text-decoration: none;
}
#color {
  height: 50px;
  width: 50px;
  background-color: indigo;
  border-radius: 30px;
  margin: 10px;
}
.categorySlide {
  overflow-x: scroll;
  width: 100vw;
}
.storeImage {
  height: 400px;
  width: 100%;
  border-radius: 20px;
}
.storeCategory {
  margin: 5px;
  border-radius: 17px;
  border-color: transparent;
  background-color: #dcdcfd;
  color: rgba(43, 43, 253, 0.795);
  font-weight: bold;
  height: 40px;
}
input {
  border-color: transparent;
  background-color: whitesmoke;
  height: 50px;
  width: 50vw;
  color: blue;
}
.filter {
  height: 50px;
  width: 50px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.categorySlide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.categorySlide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#rangeField {
  height: 55px;
  margin-top: 10px;
  border-radius: 10px;
  margin: 10px;
}
</style>