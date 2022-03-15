<template>
  <div class="blueCover">
    <div class="container-fluid mt-5 p-5">
      <div class="row">
        <div class="d-flex flex-column">
          <h6 class="blueTitle">JOIN OUR NEWSLETTER</h6>
          <h4 class="blackHeader">Subscribe to get updated with new offers</h4>

          <form class="row justify-content-center mt-3 g-0">
            <div class="col-auto">
              <input
                type="email"
                class="form-control"
                id="emailField"
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
  </div>
</template>
<script>
export default {
  name: "NewsLetter",
};
</script>
<style scoped>
#emailField {
  border-color: transparent;
  padding: 10px;
}
.blueTitle {
  font-family: "Poppins";
  color: blue;
  font-weight: bold;
}
.blackHeader {
  font-family: "Poppins";
}
.blueCover {
  background-color: rgb(246, 246, 255);
  width: 100%;
}
/* SUPER SMALL SIZED DEVICES */
@media only screen and (max-width: 320px) {
.blackHeader {
  font-size: 0.8em;
}
.blueTitle {
  font-family: "Poppins";
  color: blue;
  font-weight: bold;
  font-size: 0.7em;
}
}

/* TABLET SIZED DEVICES */
@media only screen and (max-width: 768px) {
.blackHeader {
  font-size: 0.7em;
}
.blueTitle {
  font-family: "Poppins";
  color: blue;
  font-weight: bold;
  font-size: 0.7em;
}

}
</style>