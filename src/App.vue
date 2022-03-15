<template v-slot:actions>
  <Navbar></Navbar>
        <div
        v-if="deferredPrompt"
        color="info"
        dark
        class="text-left"
      >
        Get our free app. It won't take up space on your phone and also works offline!
        
        <div style="margin-top:7vh;">
          <button class="btn btn-default" text @click="dismiss">Dismiss</button>
          <button class="btn btn-success" text @click="install">Install</button>
        </div>
      </div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="fade-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      deferredPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    },
  },
};
</script>
<style>
.container {
  scroll-behavior: smooth;
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Route Transition Styles */
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
