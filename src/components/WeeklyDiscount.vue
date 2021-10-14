<template>
  <div class="container">
    <h3 class="midSectionHeading">Weekly Discounts</h3>
    <div class="row">
      <div
        class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12"
      >
        <div
          class="card mb-3 weeklyDiscount_card weeklyDiscount_card_circle"
          style="max-width: 540px"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/gumboots.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title blueNameTag">Purple Gum Boots</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12"
      >
        <div
          class="card mb-3 weeklyDiscount_card weeklyDiscount_card_circle"
          style="max-width: 540px"
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/gumboots.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title blueNameTag">Purple Gum Boots</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeeklyDiscount",
};
</script>

<style scoped>
.card-text {
  font-family: "Poppins", sans;
}
/* Weekly Discount Card */
.weeklydiscount_card_info {
  text-align: left;
  font-family: "Poppins", sans;
  padding-right: 20px;
  margin-bottom: 50px;
}

.weeklyDiscount_card {
  background-color: rgb(246, 246, 255);
  border-radius: 7px;
  padding: 20px;
}
.weeklyDiscount_card_circle {
  background-image: url("../assets/circle.png");

  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 50px;
}

.weeklyDiscount_card_product_image {
  height: 150px;
}
</style>