<template>
  <div class="blueCover">
    <div class="container-fluid mt-5">
      <div class="row align-items-center mx-auto">
        <div
          class="
            col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12
          "
        >
          <img
            src="../assets/gumboots.png"
            class="img-fluid p-5"
            alt="product Image"
          />
        </div>
        <div
          class="
            col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
          <h1 class="landingHeader">Weekly Sales on 70%</h1>
          <h1 class="landingHeader">for all products</h1>

          <div class="countDown">
            <div class="d-flex flex-row">
              <div class="d-flex flex-column">
                <span class="timeUnit">DAYS</span>
                <p class="timeValue">-19</p>
              </div>
              <div class="d-flex flex-column">
                <span class="timeUnit">HOURS</span>
                <p class="timeValue">01</p>
              </div>
              <div class="d-flex flex-column">
                <span class="timeUnit">MINUTES</span>
                <p class="timeValue">20</p>
              </div>
              <div class="d-flex flex-column">
                <span class="timeUnit">SECONDS</span>
                <p class="timeValue">11</p>
              </div>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-auto">
              <input
                type="email"
                class="form-control"
                id="emailField"
                placeholder="Email Address"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                Send
              </button>
            </div>
          </div>
          <!-- <span class="landingButton">Get Started</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeeklySale",
};
</script>
<style scoped>
#emailField{
  padding: 9px;
  border-color: transparent;
  font-family: 'Poppins';
  
}
.timeUnit {
  padding: 10px;
  font-weight: bold;
}
.timeValue {
  padding: 10px;
  font-weight: 900;
  font-size: 2em;
}
.countDown {
  font-family: "Poppins";
}
.blueCover {
  background-color: rgb(246, 246, 255);
  width: 100%;
}

@media only screen and (max-width: 320px) {
  .timeUnit {
    padding: 7px;
    font-weight: bold;
    justify-content: center;
  }
  .timeValue {
    padding: 7px;
    font-weight: 900;
    font-size: 1.5em;
  }
}
</style>