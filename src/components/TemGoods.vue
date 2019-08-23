<template>
  <div class="p-wrap">
    <div class="p-head-media">
      <div class="h-media">
        <i class="m-icon m-icon-play"></i>
      </div>
      <div class="h-tags">
        <span class="m-tag m-tag-danger">
          <i class="m-icon m-icon-triangle-right"></i>视频
        </span>
        <span class="m-tag">图片</span>
      </div>
    </div>
    <div class="p-section">
      <div class="t-head-t">鱼丝通透运动织带</div>
      <div class="t-head-b">
        <ul class="m-table-lists">
          <li class="m-table-item">
            <div class="m-table-label">展馆号：</div>
            <div>6.2号馆</div>
          </li>
          <li class="m-table-item">
            <div>展馆号：</div>
            <div>6.2号馆</div>
          </li>
        </ul>
      </div>
      <div class="t-head-tag">
        <i class="m-icon m-icon-R"></i>
        <span>金秋绳带</span>
      </div>
      <div class="t-head-f">
        <span class="m-tag m-tag-d m-tag-radius-m">人气：423</span>
      </div>
    </div>
    <div class="p-section m-m15">
      <ul class="m-table-lists">
        <li class="m-table-item">
          <label class="m-table-label m-minWidth170">展品类型：</label>
          <div class="m-table-body">辅料</div>
        </li>
        <li class="m-table-item">
          <label class="m-table-label m-minWidth170">展品标识：</label>
          <div class="m-table-body">爆款</div>
        </li>
        <li class="m-table-item">
          <label class="m-table-label m-minWidth170">定制服务：</label>
          <div class="m-table-body">是</div>
        </li>
        <li class="m-table-item">
          <label class="m-table-label m-minWidth170">最小订货量：</label>
          <div class="m-table-body">100</div>
        </li>
        <li class="m-table-item">
          <label class="m-table-label m-minWidth170">是否有现货：</label>
          <div class="m-table-body">有</div>
        </li>
      </ul>
    </div>
    <div class="p-section m-m15 p-section-content">
      <p>通透运动款织带，材质原料成分：高F尼龙 渔丝 氨纶 功能特色：透气防滑，柔软舒适，鱼丝光泽。适用于运动系列服饰。</p>
    </div>
    <div class="p-section p-section-btn-fix">
      <button class="m-btn m-btn-block m-btn-radius-lg m-btn-bg1">立即邀约</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "temGoods",
  props: {
    href: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-wrap{
  padding-bottom: 125px;
}
.h-media {
  position: relative;
  width: 100%;
  height: 748px;
  background: #f0f0f0 url("../assets/img-defualt.png") no-repeat center;
  background-size: 40% auto;
}
.h-media img {
  display: block;
  width: 100%;
  height: 100%;
}
.h-media .m-icon-play{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -62px;
  margin-top: -62px;
}
.h-tags {
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 20px;
  height: 40px;
  transform: translateX(-50%);
}
.h-tags .m-tag {
  margin: 0 20px;
}
.p-section-content{
  padding: 25px 70px;
  font-size: 30px;
  line-height: 1.7;
}
</style>
