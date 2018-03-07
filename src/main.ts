import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store'

// Global styles
import './styles/styles.scss';

import Checkbox from './components/common/Checkbox.vue';
import HowTo from './components/HowTo.vue';
Vue.component('HowTo', HowTo)
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
});
