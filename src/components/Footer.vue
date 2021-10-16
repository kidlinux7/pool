<template>
  <div class="footer container">
    <div class="row mx-auto">
      <div
        class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12"
      >
        <div class="d-flex flex-column">
          <h4 class="footerHeading">💦Pool</h4>
          <p class="footerText">Address: 60-49 Road 11378 Dar es salaam</p>
          <p class="footerText">Phone: +65 11.188.888</p>
          <p class="footerText">Email: hello@colorlib.com</p>
        </div>
      </div>
      <div
        class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12"
      >
        <div class="d-flex flex-column">
          <h4 class="footerHeading">Useful Links</h4>
          <p class="footerText">About us</p>
          <p class="footerText">About Our Store</p>
          <p class="footerText">Secure Online Shopping</p>
        </div>
      </div>
      <div
        class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12"
      >
        <div class="d-flex flex-column">
          <h4 class="footerHeading">Join Our Newsletter now</h4>
          <p class="footerText">
            Get E-mail updates about our latest special offers.
          </p>
          <form class="row g-0">
            <div class="col-auto">
              <input
                type="email"
                class="form-control emailField"
                placeholder="Email Address"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3 p-2">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row mx-auto">
      <div
        class="
          col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12
        "
      >
        <div class="d-flex justify-content-between">
          <p class="footerCopy">Copyright ©2021 All rights reserved</p>
          <div class="d-flex align-items-center socialIcons">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter-square"></i>
            <i class="fa-brands fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  padding: 10px;
  margin-bottom: 10px;
}
.emailField {
  border-color: transparent;
  padding: 10px;
  color: white;
}
.footerCopy {
  font-weight: bolder;
  font-size: 1em;
  text-align: left;
  margin-top: 15px;
}
.footerHeading {
  font-weight: bolder;
  font-size: 1.2em;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 5px;
}
.footerText {
  margin-bottom: 0.2em;
  text-align: left;
  color: rgb(168, 168, 168);
}

/* SUPER SMALL SIZED DEVICES */
@media only screen and (max-width: 320px) {
.footerText{
  font-size: 0.8em;
}
.footerHeading{
  font-size: 0.9em;
}
}

/* TABLET SIZED DEVICES */
@media only screen and (max-width: 768px) {
.footerText{
  font-size: 0.7em;
}
.footerHeading{
  font-size: 0.9em;
}
input{
  padding:5px;
  width: 140px;
  height: 35px;
  font-size: 0.7em;
  background-color: whitesmoke;
  margin-top:5px ;
}
button{
  height: 32px;
  font-size: 0.7em;
  margin-top: 6px;
}
}


</style>