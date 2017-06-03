import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

// Vue.config.productionTip = false;

let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});

router.start(app, '#app');
// 让router一开始就条转的指定页面
router.go('/goods');

/* 以下是一条让{eslint}跳过的语句 */
/* eslint-disable no-new */
/* new Vue({
 el: '#app',
 template: '<App/>',
 components: { App }
 }); */
