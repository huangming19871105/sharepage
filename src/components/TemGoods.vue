<template>
  <div class="p-wrap">
    <div v-if="JSON.stringify(data) != '{}' && init">
      <div class="p-head-media" v-if="data.videoUrl || data.icon">
        <div class="h-media">
          <i
            class="m-icon m-icon-play"
            @click="videoPlay"
            v-if="bannerAction == 'video' && data.videoUrl && !videoStauts"
          ></i>
          <video
            @click="videoPlay"
            loop="loop"
            :src="data.videoUrl"
            x5-video-player-type="h5"
            ref="v"
            v-if="bannerAction == 'video' && data.videoUrl"
            :poster="data.previewImageUrl"
          ></video>
          <img v-if="bannerAction == 'image' && data.icon" :src="data.icon.split(',')[0]" />
        </div>
        <div class="h-tags">
          <span
            class="m-tag"
            :class="{'m-tag-danger': bannerAction == 'video'}"
            @click="changeBannerAction('video')"
            v-if="data.videoUrl && data.icon"
          >
            <i class="m-icon m-icon-triangle-right"></i>视频
          </span>
          <span
            class="m-tag"
            :class="{'m-tag-danger': bannerAction == 'image'}"
            @click="changeBannerAction('image')"
            v-if="data.videoUrl && data.icon"
          >图片</span>
        </div>
      </div>
      <div class="p-section">
        <div class="t-head-t">{{data.pdtName || ''}}</div>
        <div class="t-head-tag" v-if="data.pdtBrand">
          <i class="m-icon m-icon-R"></i>
          <span>{{data.pdtBrand}}</span>
        </div>
        <div class="t-head-f" v-if="data.productPv">
          <span class="m-tag m-tag-d m-tag-radius-m">人气：{{data.productPv}}</span>
        </div>
      </div>
      <div class="p-section m-m15">
        <ul class="m-table-lists">
          <li class="m-table-item">
            <label class="m-table-label m-minWidth170">展品类型：</label>
            <div class="m-table-body">{{data.pdtKey || '暂无'}}</div>
          </li>
          <li class="m-table-item">
            <label class="m-table-label m-minWidth170">展品标识：</label>
            <div class="m-table-body">{{data.productIdentification || '暂无'}}</div>
          </li>
          <li class="m-table-item">
            <label class="m-table-label m-minWidth170">定制服务：</label>
            <div class="m-table-body">{{data.customizationServices ? "是" : "否"}}</div>
          </li>
          <li class="m-table-item">
            <label class="m-table-label m-minWidth170">最小订货量：</label>
            <div class="m-table-body">{{data.minOrderQuantity || 0}}</div>
          </li>
          <li class="m-table-item">
            <label class="m-table-label m-minWidth170">是否有现货：</label>
            <div class="m-table-body">{{data.spotTrading ? '有' : "没有"}}</div>
          </li>
        </ul>
      </div>
      <div class="p-section m-m15 p-section-content" v-if="data.pdtIntro">
        <p>{{data.pdtIntro}}</p>
      </div>
      <button-link v-on="$listeners"></button-link>
    </div>
    <error-code v-if="JSON.stringify(data) == '{}' && init"></error-code>
  </div>
</template>

<script>
const ButtonLink = () => import("./ButtonLink");
const ErrorCode = () => import("./Error");
import { publicProductDetail } from "../api/index";

export default {
  name: "temGoods",
  props: {
    params: Object
  },
  data() {
    return {
      videoStauts: false,
      init: false,
      bannerAction: "video",
      data: {}
    };
  },
  components: {
    ButtonLink,
    ErrorCode
  },
  created() {
    publicProductDetail(this.params)
      .then(res => {
        if (res.code === 1000) {
          this.data = res.data || {};
          this.data.pdtName && this.$setTitle(this.data.pdtName);
          if(this.data.videoUrl == "") {
            this.bannerAction = "image"
          }
        }
      })
      .catch(() => {})
      .finally(() => {
        this.init = true;
        this.$hideLoading();
      });
  },
  methods: {
    videoPlay() {
      if (!this.videoStauts) {
        this.$refs.v.play();
      } else {
        this.$refs.v.pause();
      }
      this.videoStauts = !this.videoStauts;
    },
    changeBannerAction(actioin) {
      this.bannerAction = actioin;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-wrap {
  padding-bottom: 125px;
}
.h-media {
  position: relative;
  width: 100%;
  height: 748px;
  background: #f0f0f0 url("../assets/img-defualt.png") no-repeat center;
  background-size: 40% auto;
  z-index: 10;
  overflow: hidden;
}
.h-media img,
.h-media video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.h-media .m-icon-play {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -62px;
  margin-top: -62px;
  z-index: 100;
}
.h-tags {
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 20px;
  height: 40px;
  transform: translateX(-50%);
  z-index: 100;
}
.h-tags .m-tag {
  margin: 0 20px;
}
.p-section-content {
  padding: 25px 70px;
  font-size: 30px;
  line-height: 1.7;
}
</style>
