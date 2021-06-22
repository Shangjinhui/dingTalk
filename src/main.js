import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueWechatTitle from 'vue-wechat-title'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入组件
import ChartTit from '@/components/chartTit'
// js 加减乘除精度问题
import {
  accDiv,
  accMul,
  accAdd,
  subtr,
  keepTwoFloat
} from '@/utils/js-arithmetic'

import './assets/css/sjhPublic.scss';

Vue.use(ElementUI);
Vue.use(router)
Vue.use(VueWechatTitle)
// 全局注册组件
Vue.component('ChartTit', ChartTit)
// vue原型挂载方法
Vue.prototype.$accDiv = accDiv // 浮点数除法
Vue.prototype.$accMul = accMul // 浮点数乘法
Vue.prototype.$accAdd = accAdd // 浮点数加法
Vue.prototype.$subtr = subtr // 浮点数减法
Vue.prototype.$keepTwoFloat = keepTwoFloat // 保留两位小数

import {getPageHeight} from './utils/untils';
Vue.prototype.$getPageHeight = getPageHeight;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
