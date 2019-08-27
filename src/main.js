import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './style/index.css'
import promiseFinally from 'promise.prototype.finally';
promiseFinally.shim();

Vue.prototype.$hideLoading = function () {
  const load = document.querySelectorAll(".j-loading");
  const mask = document.querySelector(".j-mask-transparent");
  for (let i = 0, l = load.length; i < l; i++) {
    load[i].parentNode.removeChild(load[i]);
  }
  mask && mask.parentNode.removeChild(mask);
}

Vue.prototype.$showLoading = function () {
  this.$hideLoading();
  const load = document.createElement("div");
  const loadIcon = document.createElement("i");
  const mask = document.createElement("div");
  mask.classList.add("m-mask-transparent");
  mask.classList.add("j-mask-transparent");
  load.classList.add("m-toast-loading");
  load.classList.add("j-loading");
  loadIcon.classList.add("m-loading-icon");
  load.appendChild(loadIcon);
  document.body.appendChild(mask);
  document.body.appendChild(load);
}

Vue.prototype.$text = function (str, second = 1700) {
  let texts = document.querySelectorAll(".j-loading-text");
  let t = null;
  for (let i = 0, l = texts.length; i < l; i++) {
    t = texts[i].getAttribute("t");
    t && clearTimeout(t);
    texts[i].parentNode.removeChild(texts[i]);
  }
  const textEl = document.createElement("div");
  const textStr = document.createTextNode(str);
  textEl.classList.add("j-loading-text");
  textEl.classList.add("m-loading-text");
  textEl.appendChild(textStr);
  document.body.appendChild(textEl);
  t = setTimeout(() => {
    document.body.removeChild(textEl)
  }, second);
  textEl.setAttribute("t", t)
}

Vue.prototype.$setTitle = function(title) {
  document.title = title;
}

Vue.prototype.$errorText = function(errtext='接口请求错误',errorCode) {
  var text = "";
  if(errtext.indexOf("timeout of") > -1){
    text = "接口请求超时";
  } else if(errtext.toLowerCase().indexOf('Network Error')){
    text = "网络错误";
  } else {
    text = errtext;
  }
  sessionStorage.setItem("errorMessage", text);
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')