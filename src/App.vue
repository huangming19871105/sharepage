<template>
  <div id="app">
    <tem-goods v-if="template === 'goods'"></tem-goods>
    <down-load v-if="template === 'down'"></down-load>
    <tem-business v-if="template === 'business'"></tem-business>
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
  },
  data() {
    return {
      template: 'business'
    }
  }
}
</script>

<style>
</style>
