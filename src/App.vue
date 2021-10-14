<template>
  <Navbar></Navbar>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="fade-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components:{
    Navbar
  }
}
</script>
<style>
#app {
  font-family: 'Poppins';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Route Transition Styles */
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.3s ease-in;
}
</style>
