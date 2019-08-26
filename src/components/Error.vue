<template>
  <div  class="m-error">
      <div class="m-error-text">{{errorText}}</div>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {
    errorText: {
      default: sessionStorage.getItem("errorMessage") + ", 请重新刷新页面",
      type: String
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
