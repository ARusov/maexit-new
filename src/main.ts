import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';

// Global styles
import './styles/styles.scss';

import HowTo from './components/HowTo.vue';
import LoginDropDown from './components/root/LoginDropDown.vue';
import KeyValueDriver from './components/Businessowner/KeyValueDriver.vue';
import BusinessProfile from './components/Businessowner/BusinessProfile.vue';
Vue.component('HowTo', HowTo)
Vue.component('LoginDropDown', LoginDropDown)
Vue.component('KeyValueDriver', KeyValueDriver)
Vue.component('BusinessProfile', BusinessProfile)
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
});
