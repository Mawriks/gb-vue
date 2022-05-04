<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/add/payment/Transport?value=200"
        >Add to Transport Category payment with 200$</router-link
      >
    </nav>
    <router-view />
    <transition name="fade">
      <ModalWindow :settings="settings" v-if="modalShow" />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalShow: false,
      settings: {},
    };
  },
  components: {
    ModalWindow: () => import("@/components/ModalWindow.vue"),
  },
  methods: {
    onShow(data) {
      this.modalShow = true;
      this.settings = data;
    },
    onHide() {
      this.modalShow = false;
      this.settings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
