import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta';

Vue.use(Meta);

import './assets/css/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
