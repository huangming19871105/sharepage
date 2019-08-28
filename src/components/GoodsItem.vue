<template>
  <div class="m-tab-item">
    <ul class="m-obj-lists">
      <li class="m-obj-item" v-for="(item,index) in datas" :key="index">
        <div class="m-item-media">
            <div class="m-item-img m-img-bg">
              <img :src="item.iconUrl" />
            </div>
        </div>
        <div class="m-item-body">
            <div class="m-item-head">{{item.productName}}</div>
            <div class="m-item-foot">{{item.pdtIntro}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "goodsItem",
  props: {
    datas: {
      default: ()=>[],
      type: Array
    }
  },
  created() {
    if(this.datas.length > 4) {
      this.datas.length = 4;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-tab-item{
  padding: 0;
}
.m-item-img img{
  width: 100%;
  height: 100%;
}
</style>
