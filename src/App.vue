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
      downUrl: ""
    };
  },
  created() {
    this.initAction();
  },
  beforeDestroy() {
    sessionStorage.removeItem("action");
  },
  methods: {
    initAction() {
      let action = sessionStorage.getItem("action") || "";
      let urlParamsStrs = location.search.replace("?", "");
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
