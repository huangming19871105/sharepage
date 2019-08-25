import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './style/index.css'

Vue.prototype.$hideLoading = function(){
  const load = document.querySelectorAll(".j-loading");
  for(let i=0,l=load.length;i<l;i++){
    load[i].parentNode.removeChild(load[i]);
  }
}

Vue.prototype.$showLoading = function(){
  this.$hideLoading();
  const load = document.createElement("div");
  const loadIcon = document.createElement("i");
  load.classList.add("m-toast-loading");
  load.classList.add("j-loading");
  loadIcon.classList.add("m-loading-icon");
  load.appendChild(loadIcon);
  document.body.appendChild(load);
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')