import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store'

// Global styles
import './styles/styles.scss';

import HowTo from './components/HowTo.vue';
import LoginDropDown from './components/root/LoginDropDown.vue';
Vue.component('HowTo', HowTo)
Vue.component('LoginDropDown', LoginDropDown)
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
});
