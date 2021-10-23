<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" style="font-weight: 800" href="#"
        ><router-link to="/">💦Pool</router-link></a
      >


      <div
        class="
          collapse
          navbar-collapse
          d-sm-none d-none d-md-none d-lg-block d-xl-block d-xxl-block
        "
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/">Home</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/store">Store</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/poolcare">Pool care</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/blog">Blog</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/store">About Us</router-link></a
            >
          </li>
        </ul>
      </div>

            <button
        class="btn btn-transparent d-flex"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i style="color:grey;" class="fa-solid fa-cart-shopping"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">My Cart</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">Shopping List</div>
      </div>
    </div>
  </nav>

  <div class="d-lg-none d-xl-none d-xxl-none">
    <nav class="nav_">
      <a class="nav__link" href="/"
        ><router-link to="/"></router-link>
        <i class="fa-solid fa-house"></i>
        <span class="nav__text">Home</span>
      </a>
      <a class="nav__link" href="#/store">
        <router-link to="#/store"></router-link>
        <i class="fa-solid fa-shop"></i>
        <span class="nav__text">Store</span>
      </a>
      <a href="#/poolcare" class="nav__link">
        <router-link to="#/poolcare"></router-link>
        <i class="fa-solid fa-circle-dot"></i>
        <span class="nav__text">Pool Care</span>
      </a>
      <a href="#/blog" class="nav__link">
        <router-link to="#/blog"></router-link>
        <i class="fa-solid fa-newspaper"></i>
        <span class="nav__text">Blog</span>
      </a>
      <a href="#/blog" class="nav__link">
        <router-link to="#/blog"></router-link>

        <i class="fa-solid fa-user-group"></i>
        <span class="nav__text">About us</span>
      </a>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
.router-link-active{
  color: orange;
}
.nav_ {
  position: fixed;
  bottom: 0px;
  border-radius: 0px;
  width: 100%;
  height: 65px;

  background-color: #f4f4f8;
  display: flex;
  overflow-x: auto;
  z-index: 100;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Poppins";
  font-size: 13px;

  color: #5732ffce;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: 0.1s ease-in-out;
}

.nav__link:hover {
  background-color: #eeeeee;
}

.nav__link--active {
  color: #009578;
}

.nav__icon {
  font-size: 30px;
}

.nav {
  color: rgb(184, 184, 184);
}
a {
  color: grey;
  text-decoration: grey;
}
a:active {
  color: black;
}
</style>