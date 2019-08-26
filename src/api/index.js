import axios from '../lib/ajaxRequest';

// 全部是promise
// 展商
export const publicActorDetail = (params) => axios.request({ url: '/actor/publicActorDetail', method: 'POST',  data: params });
// 展品
export const publicProductDetail = (params) => axios.request({ url: '/product/publicProductDetail', method: 'POST', data: params });

export default {};