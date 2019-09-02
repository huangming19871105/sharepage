<template>
  <div class="p-wrap">
    <div v-if="!isFalse(data)">
      <div class="p-section p-head">
        <div class="p-head-title">{{data.actorRes.atrName}}</div>
      </div>
      <div class="p-section m-m15">
        <div class="t-head-t">{{data.actorRes.atrName}}</div>
        <div class="t-head-b">
          <ul class="m-table-lists">
            <li class="m-table-item" v-if="data.actorRes.pavilionCode">
              <div class="m-table-label">展馆号：</div>
              <div>{{data.actorRes.pavilionCode}}</div>
            </li>
            <li class="m-table-item" v-if="data.actorRes.bthCode">
              <div>展位号：</div>
              <div>{{data.actorRes.bthCode}}</div>
            </li>
          </ul>
          <div class="t-obj-head m-img-bg">
            <img :src="data.actorRes.atrLogo" />
          </div>
        </div>
        <div class="t-head-f" v-if="data.actorRes.actorPv">
          <span class="m-tag m-tag-d m-tag-radius-m">关注度：{{data.actorRes.actorPv}}</span>
        </div>
      </div>
      <div
        class="p-section m-m15"
        v-if="!isFalse(data.actorRes.imUserName) || !isFalse(data.actorRes.atrVideoUrl)"
      >
        <div class="m-outer">
          <div class="m-inner">
            <div class="content" v-if="!isFalse(data.actorRes.atrVideoUrl)">
              <i class="m-icon m-icon-play" @click="videoPlay" v-if="!videoStatus"></i>
              <video ref="v" loop="loop" @click="videoPlay" :src="data.actorRes.atrVideoUrl" :poster="data.actorRes.previewImageUrl"></video>
            </div>
            <template v-if="!isFalse(data.actorRes.atrImageUrl)">
              <div
                class="content"
                v-for="(item, index) in data.actorRes.atrImageUrl.split(',')"
                :key="index"
              >
                <img :src="item" />
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="m-m15 m-tab">
        <ul class="m-tab-menu">
          <li
            class="m-tab-menu-item"
            :class="{'menu-active': tabActive === 0}"
            @click="tabChange"
            id="tab0"
          >基本信息</li>
          <li
            class="m-tab-menu-item"
            :class="{'menu-active': tabActive === 1}"
            @click="tabChange"
            id="tab1"
          >展商标签</li>
          <li
            class="m-tab-menu-item"
            :class="{'menu-active': tabActive === 2}"
            @click="tabChange"
            id="tab2"
          >展商产品</li>
        </ul>
        <div class="m-tab-body">
          <div class="m-tab-item" v-if="tabActive === 0">
            <ul class="m-table-lists">
              <li class="m-table-item">
                <label class="m-table-label m-minWidth170">公司名称：</label>
                <div class="m-table-body">{{data.details.atrName || "暂无"}}</div>
              </li>
              <li class="m-table-item">
                <label class="m-table-label m-minWidth170">展位号：</label>
                <div class="m-table-body">{{data.details.bthCode || "暂无"}}</div>
              </li>
              <li class="m-table-item">
                <label class="m-table-label m-minWidth170">公司地区：</label>
                <div class="m-table-body">{{data.details.atrAddress || "暂无"}}</div>
              </li>
              <li class="m-table-item">
                <label class="m-table-label m-minWidth170">公司介绍：</label>
                <div class="m-table-body">{{data.details.atrIntro || "暂无"}}</div>
              </li>
              <li class="m-table-item">
                <label class="m-table-label m-minWidth170">客服电话：</label>
                <div class="m-table-body m-red">
                  <a :href="'tel:' + data.details.atrTel">{{data.details.atrTel || "暂无"}}</a>
                </div>
              </li>
              <li class="m-table-item">
                <label class="m-table-label m-minWidth170">邮箱：</label>
                <div class="m-table-body m-red">{{data.details.atrEmail || "暂无"}}</div>
              </li>
            </ul>
          </div>
          <div class="m-tab-item" v-if="tabActive === 1">
            <ul class="m-table-lists" v-if="!isFalse(data.questionList)">
              <li class="m-table-item" v-for="(item) in data.questionList" :Key="item.id">
                <label class="m-table-label m-maxWidth170">{{item.aliasName}}</label>
                <span class="icon-fh">：</span>
                <div class="m-table-body">
                  <template v-for="(item2, index) in item.answerList">
                      <span
                      class="m-tag m-tag-default m-tag-radius-m"
                      :key="index"
                      v-if="item2.aliasName != ''"
                    >{{item2.aliasName}}</span>
                  </template>
                  
                </div>
              </li>
            </ul>
            <div v-else class="m-empty m-empty-text">暂无展商标签</div>
          </div>
          <goods-item v-show="tabActive === 2" :datas="data.products"></goods-item>
        </div>
      </div>
      <button-link v-on="$listeners"></button-link>
    </div>
    <error-code v-if="JSON.stringify(data) == '{}' && init"></error-code>
  </div>
</template>

<script>
const GoodsItem = () => import("./GoodsItem");
const ButtonLink = () => import("./ButtonLink");
const ErrorCode = () => import("./Error");
import { publicActorDetail } from "../api/index";

export default {
  name: "temBusiness",
  components: {
    GoodsItem,
    ButtonLink,
    ErrorCode
  },
  props: {
    params: Object
  },
  data() {
    return {
      init: false,
      videoStatus: false,
      tabActive: 0,
      data: {}
    };
  },
  created() {
    publicActorDetail(this.params)
      .then(res => {
        if (res.code === 1000) {
          this.data = res.data;
          this.$setTitle(this.data.actorRes.atrName);
        }
      })
      .catch(() => {})
      .finally(() => {
        this.init = true;
        this.$hideLoading();
      });
  },
  methods: {
    tabChange(e) {
      let k = e.target.id.match(/\d/)[0];
      if (k === null) return;
      k = parseInt(k);
      if (this.tabActive === k) return;
      this.tabActive = k;
    },
    isFalse(s) {
      if (!s) return true;
      if (s.constructor == Array && s.length == 0) return true;
      if (s.constructor == Object && JSON.stringify(s) === "{}") return true;
      return false;
    },
    videoPlay() {
      if (!this.videoStatus) {
        this.$refs.v.play();
        this.videoStatus = true;
      } else {
        this.$refs.v.pause();
        this.videoStatus = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-wrap {
  padding-bottom: 125px;
}
.content .m-icon-play {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-top: -40px;
  width: 80px;
  height: 80px;
  background-size: auto 80px;
}
.p-section-content {
  padding: 25px 70px;
  font-size: 30px;
  line-height: 1.7;
}
.m-tag-default {
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 26px;
}
</style>
