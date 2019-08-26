<template>
  <div id="app">
    <tem-goods v-if="action === 'goods'" :params="params" @changeAction="changeAction"></tem-goods>
    <tem-business v-if="action === 'business'" :params="params" @changeAction="changeAction"></tem-business>
    <down-load v-if="action === 'down'" :href="downUrl"></down-load>
  </div>
</template>

<script>
import TemGoods from "./components/TemGoods.vue";
import TemBusiness from "./components/TemBusiness.vue";
import DownLoad from "./components/DownLoad.vue";

export default {
  name: "app",
  components: {
    TemGoods,
    TemBusiness,
    DownLoad
  },
  data() {
    return {
      params: {},
      action: "",
      downUrl: "http://zhxt.eastfair.com/79814008577"
    };
  },
  created() {
    this.initAction();
  },
  mounted() {
    this.$el.classList.add("p-container");
  },
  beforeDestroy() {
    sessionStorage.removeItem("action");
  },
  methods: {
    initAction() {
      let urlStrs = location.search || location.hash;
      let urlParasm = urlStrs.split("?");
      let urlParamsStrs = urlParasm.length == 1 ? urlParasm[0] : urlParasm[1];
      let action = sessionStorage.getItem("action") || "";
      this.params = this.parser(urlParamsStrs);
      if (action !== "") {
        this.action = action;
        return false;
      }
      if (this.params.showType === "ACTOR_DETAILS") {
        this.action = "business";
      } else {
        this.action = "goods";
      }
    },
    parser(str) {
      let obj = {};
      str.replace(/([^&=]*)=([^&=]*)/g, function() {
        obj[arguments[1]] = arguments[2];
      });
      return obj;
    },
    changeAction(action) {
      this.action = action;
      sessionStorage.setItem("action", action);
    }
  }
};
</script>

<style>
</style>
