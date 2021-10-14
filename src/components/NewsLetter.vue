<template>
  <div class="blueCover">
    <div class="container-fluid mt-5 p-5">
      <div class="row">
        <div class="d-flex flex-column">
          <h6 class="blueTitle">JOIN OUR NEWSLETTER</h6>
          <h4 class="blackHeader">Subscribe to get updated with new offers</h4>

          <form class="row g-0">
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
</style>