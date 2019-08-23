<template>
  <div id="app">
    <!-- <TemGoods></TemGoods> -->
    <!-- <DownLoad href="Welcome to Your Vue.js App"/> -->
    <tem-business></tem-business>
  </div>
</template>

<script>
import TemGoods from './components/TemGoods.vue'
import TemBusiness from './components/TemBusiness.vue'
import DownLoad from './components/DownLoad.vue'

export default {
  name: 'app',
  components: {
    TemGoods,
    TemBusiness,
    DownLoad
  }
}
</script>

<style>
</style>
