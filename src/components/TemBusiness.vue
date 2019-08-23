<template>
  <div class="p-wrap">
    <div class="p-section p-head">
      <div class="p-head-title">江苏金秋绳带科技有限公司</div>
    </div>
    <div class="p-section m-m15">
      <div class="t-head-t">江苏金秋绳带科技有限公司</div>
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
        <div class="t-obj-head m-img-bg">
          
        </div>
      </div>
      <div class="t-head-f">
        <span class="m-tag m-tag-d m-tag-radius-m">关注度：423</span>
      </div>
    </div>
    <div class="p-section m-m15">
      <div class="m-outer">
        <div class="m-inner">
          <div class="content">
            <i class="m-icon m-icon-play"></i>
          </div>
          <div class="content"></div>
          <div class="content"></div>
          <div class="content"></div>
          <div class="content"></div>
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
              <div class="m-table-body">江苏金秋绳带科技有限公司</div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">展位号：</label>
              <div class="m-table-body">6.2-C102</div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">公司地区：</label>
              <div class="m-table-body">南通市港闸区集美路398号</div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">公司性质：</label>
              <div class="m-table-body">制造商</div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">公司介绍：</label>
              <div
                class="m-table-body"
              >江苏金秋弹性织物有限公司是一家专业生产中高档内衣氨纶肩带、围带、包边带、电脑提花提字带、花边及其他带类产品的大型纺织制造商。 公司总投资1.2亿元，拥有进口瑞士、法国、意大利、德国及港台地区的世界先进织造生产设备，从染整、织造到测试、包装全面实现自动化和规范化。 公司致力于品质提高与环境保护，先后通过了ISO9001质量体系认证、ISO14000环境质量体系认证及瑞士生态纺织Oeko-Tex Standard 100一级国际认证。</div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">主营项目：</label>
              <div class="m-table-body">带</div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">客服电话：</label>
              <div class="m-table-body m-red">
                <a href="tel:0513-85562222">0513-85562222</a>
              </div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">邮箱：</label>
              <div class="m-table-body m-red">dcy@jqelastic.com</div>
            </li>
          </ul>
        </div>
        <div class="m-tab-item" v-if="tabActive === 1">
          <ul class="m-table-lists">
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">产品品类：</label>
              <div class="m-table-body">
                  <span class="m-tag m-tag-default m-tag-radius-m">男童卫衣</span>
                  <span class="m-tag m-tag-default m-tag-radius-m">男童外套</span>
              </div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">商贸需求：</label>
              <div class="m-table-body">
                  <span class="m-tag m-tag-default m-tag-radius-m">采购男装</span>
                  <span class="m-tag m-tag-default m-tag-radius-m">男童外套</span>
                  <span class="m-tag m-tag-default m-tag-radius-m">男童外套</span>
                  <span class="m-tag m-tag-default m-tag-radius-m">男童外套</span>
              </div>
            </li>
            <li class="m-table-item">
              <label class="m-table-label m-minWidth170">优惠政策：</label>
              <div class="m-table-body">大量采购，有优惠代理政策。也可签订长期战略合作协议</div>
            </li>
          </ul>
        </div>
        <goods-item  v-if="tabActive === 2"></goods-item>
      </div>
    </div>
    <div class="p-section p-section-btn-fix">
      <button class="m-btn m-btn-block m-btn-radius-lg m-btn-bg1">立即邀约</button>
    </div>
  </div>
</template>

<script>
const GoodsItem = () => import("./GoodsItem")
export default {
  name: "temBusiness",
  components: {
    GoodsItem
  },
  props: {
    href: String
  },
  data() {
    return {
      tabActive: 0
    };
  },
  methods: {
    tabChange(e) {
      let k = e.target.id.match(/\d/)[0];
      console.log(k);
      if (k === null) return;
      k = parseInt(k);
      if (this.tabActive === k) return;
      this.tabActive = k;
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
.m-tag-default{
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 26px;
}
</style>
