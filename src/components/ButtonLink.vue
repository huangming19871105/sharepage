<template>
  <div class="p-section p-section-btn-fix">
    <button class="m-btn m-btn-block m-btn-radius-lg m-btn-bg1" @click="changeAction">立即邀约</button>
  </div>
</template>

<script>
export default {
  name: "buttonLink",
  methods: {
    changeAction() {
        this.$listeners.changeAction("down")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
