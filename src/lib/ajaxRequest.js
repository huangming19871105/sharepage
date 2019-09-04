import Vue from 'vue'
import axios from 'axios';

const V = new Vue();

// 每个请求的拦截器方法可能不一样

class AjaxRequest {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://10.20.16.47:9002/visitor/v1' : 'http://115.28.80.201:9002/v1';
    this.timeout = 2000;
  }

  request(config) { // 用户请求设置的方法
    const instance = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
    });
    // 设置拦截器
    instance.interceptors.request.use((config) => {
      return config;
    }, (err) => {
      return Promise.reject(err);
    });
    // 设置响应拦截器
    instance.interceptors.response.use((res) => {
      if(res.data.code !== 1000) {
        V.$text(res.data.message)
        V.$errorText(res.data.message)
      }
      return res.data;
    }, (err) => {
      V.$errorText(err.message)
      return Promise.reject(err);
    });

    return instance(config);
  }
}

export default new AjaxRequest();
