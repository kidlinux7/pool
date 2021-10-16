<template>
  <div class="container">
    <!-- <div class="row">
      <img src="../assets/store.jpg" class="storeImage" alt="..." />
    </div> -->
    <div class="row align-items-center" id="topSection">
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
        "
      >
        <SaleOff></SaleOff>
      </div>
    </div>


<div class="d-lg-none d-xl-none d-xxl-none" >
<!-- Filter Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Categories</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <FilterSection></FilterSection>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
            <!-- <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button> -->
          </div>
        </div>
      </div>
      <div class="col-sm-2 col-xs-2 col-2">
        <div class="d-flex flex-row mt-5">
          <button type="button" class="btn btn-primary filter" data-bs-toggle="modal" data-bs-target="#exampleModal">
           <i class="fa-solid fa-sliders"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-xs-12 col-12 categorySlide">
        <div class="d-flex justify-content-start mt-1">
          <button type="button" class="btn btn-primary storeCategory">
            Apparati
          </button>
          <button type="button" class="btn btn-primary storeCategory">
            WaterPumps
          </button>
          <button type="button" class="btn btn-primary storeCategory">
            Uniforms
          </button>
          <button type="button" class="btn btn-primary storeCategory">
            Chemicals
          </button>
        </div>
      </div>
    </div>

</div>

    <div class="row" id="topSection">
      <div
        class="
          col-xxl-2 col-xl-2 col-lg-2
          d-sm-none d-none d-md-none d-lg-block d-xl-block d-xxl-block
        "
      >
        <FilterSection></FilterSection>
      </div>

      <div class="col-xxl-10 col-xl-10 col-lg-10 mb-5">
        <StoreCard></StoreCard>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import SaleOff from "@/components/SaleOff.vue";
import FilterSection from "@/components/FilterSection.vue";
import StoreCard from "@/components/StoreCard.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Store",
  components: {
    SaleOff,
    FilterSection,
    StoreCard,
    Footer,
  },
};
</script>
<style scoped>
.categorySlide{
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
.filter{
  height: 50px;
  width:50px;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.categorySlide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.categorySlide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>