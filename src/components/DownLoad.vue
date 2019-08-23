<template>
  <div class="p-download">
    <div class="p-content"></div>
    <div class="p-foot">
      <a :href="href" class="btn-download">立即下载</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "download",
  props: {
    href: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-content {
  position: relative;
  width: 100%;
  height: 1212px;
  background: url("../assets/f-img-1.jpg") no-repeat center top;
  background-size: 100% auto;
}
.p-foot {
  position: relative;
  width: 100%;
  height: 588px;
  background: url("../assets/f-img-2.jpg") no-repeat center top;
  background-size: auto 100%;
}
.btn-download {
  display: block;
  position: absolute;
  right: 40px;
  bottom: 186px;
  width: 315px;
  height: 100px;
  opacity: 0;
  line-height: 100px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
</style>
