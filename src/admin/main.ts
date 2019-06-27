import Vue from 'vue';
import App from '@/admin/App.vue';
import router from '@/admin/route/index';
import store from '@/admin/store/index';
import '@/registerServiceWorker';
import '@/assets/css/common.less';

Vue.config.productionTip = false;

// Register global directives
// Object.keys(directives).forEach(key => {
//     Vue.directive(key, (directives as { [key: string ]: DirectiveOptions })[key])
// })

// Register global filter functions
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, (filters as { [key: string ]: Function })[key])
// })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
