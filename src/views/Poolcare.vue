<template>
  <div class="container mt-5">
    <div class="row align-items-center" id="topSection">
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
        "
      >
        <img
          src="../assets/poster.png"
          class="img-responsive"
          alt="product Image"
          style="width: 100%; height: auto; border-radius: 10px"
        />
      </div>
    </div>
    <h3 class="midSectionHeading">Our Services</h3>

    <div class="row align-items-center">
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <img
          src="../assets/cleaning.jpg"
          class="img-fluid poolcareImage p-5"
          alt="product Image"
        />
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="d-flex flex-column">
          <h5 class="d-flex justify-content-start" style="font-weight: bold">
            Pool cleaning & Treatment
          </h5>
          <p class="d-flex justify-content-start text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nisi
            purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            magna magna, congue quis mattis nec, auctor vel ipsum. Etiam ac
            finibus metus, non tincidunt ipsum. Donec ante sapien, varius at
            Etiam pulvinar ante eros, ut hendrerit lectus laoreet vel. Nunc non
            nisl aliquet.
          </p>
        </div>
      </div>
    </div>

    <div class="row align-items-center">
      <div
        class="
          col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
          order-sm-1
        "
      >
        <img
          src="../assets/construction.jpeg"
          class="img-fluid poolcareImage p-5"
          alt="product Image"
        />
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="d-flex flex-column">
          <h5 class="d-flex justify-content-start" style="font-weight: bold">
            Pool construction & Design
          </h5>
          <p class="d-flex justify-content-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id nisi
            purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            magna magna, congue quis mattis nec, auctor vel ipsum. Etiam ac
            finibus metus, non tincidunt ipsum. Donec ante sapien, varius at
            Etiam pulvinar ante eros, ut hendrerit lectus
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="blueCover mb-5">
    <div class="container-fluid mt-5">
      <div class="row align-items-center mx-auto">
        <div
          class="
            col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12
          "
        >
          <div class="blueBox mx-auto" style="position: relative">
            <div class="p-3" style="position: absolute; bottom: 0; right: 0">
              <a
                class="btn btn-primary whatsAppButton pulse"
                href="https://wa.me/716241549"
              >
                <i
                  class="fa-brands fa-whatsapp"
                  style="margin: 7px; font-size: 2em"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="
            col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12
            mt-5
            mb-5
          "
        >
          <h5 class="d-flex flex-row mb-3">Book Here</h5>
          <div class="column g-3">
            <form class="form-floating" @submit="serviceRequest" method="POST">
              <div class="form-floating mb-3">
                <input
                  v-model="customer.name"
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="yourname"
                  required
                />
                <label for="floatingInput">Fullname</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  v-model="customer.email"
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  v-model="customer.phone"
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Phone number</label>
              </div>

              <h5 class="d-flex flex-row mb-3">Select your services</h5>

              <div class="form-check d-flex justify-content-start mb-2">
                <input
                  v-model="services"
                  class="form-check-input"
                  type="checkbox"
                  value="Pool Design & Construction"
                  id="flexCheckDefault"
                />
                <label class="form-check-label px-2" for="flexCheckDefault">
                  Pool Design & Construction
                </label>
              </div>

              <div class="form-check d-flex justify-content-start">
                <input
                  v-model="services"
                  class="form-check-input"
                  type="checkbox"
                  value="Pool Cleaning & Treatment"
                  id="flexCheckDefault"
                />
                <label class="form-check-label px-2" for="flexCheckDefault">
                  Pool Cleaning & Treatment
                </label>
              </div>

              <div class="d-flex flex-row">
                <button type="submit" class="btn btn-primary mt-4 roundedBlueButton"
                  >Book now</button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LatestProduct></LatestProduct>
  <BlogCardSnippet></BlogCardSnippet>
  <Footer></Footer>
</template>
<script>
import LatestProduct from "@/components/LatestProduct.vue";
import BlogCardSnippet from "@/components/BlogCardSnippet.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Poolcare",
  components: {
    LatestProduct,
    BlogCardSnippet,
    Footer,
  },
  data() {
    return {
      customer: {
        name: null,
        email: null,
        phone: null,
      },
      services: [],


    };
  },
  methods: {
    async serviceRequest(e) {
      e.preventDefault();
      console.log([this.customer,this.services])
      // axios
      //   .post(
      //     "http://127.0.0.1:8000/Administrator/comments",
      //     {
      //       comment: this.comment,
      //     },
      //     { headers }
      //   )
      //   .then((response) => {
      //     console.log(response.data);
      //     this.fetchedcomments.unshift(response.data);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     // this.errors.push(e)
      //   });
    },
  },
};
</script>
<style scoped>
.poolcareImage {
  border-radius: 25px;
}
.pulse {
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.877);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 255, 0.329);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.027);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.877);
    box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.877);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(0, 0, 255, 0.507);
    box-shadow: 0 0 0 10px rgba(0, 0, 255, 0.295);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.027);
    box-shadow: 0 0 0 0 rgba(0, 0, 255, 0.027);
  }
}
.fa-brands {
  font-size: 2em;
  color: white;
}
.whatsAppButton {
  /* height: 70px;
  width: 70px; */
  background-color: blue;
  border-radius: 70%;
  bottom: 80px;
  right: 80px;
}
.blueBox {
  height: 300px;
  width: 300px;
  background-image: url("../assets/poolcare.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.blueCover {
  background-color: rgb(246, 246, 255);
  width: 100%;
}
.roundedBlueButton {
  /* background-color: blue; */
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
  color: white;
  border-radius: 17px;
  border-color: transparent;
}
</style>