import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import StarRating from 'vue-star-rating'
import HowTo from './components/HowTo.vue';
import LoginDropDown from './components/root/LoginDropDown.vue';
import KeyValueDriver from './components/Businessowner/KeyValueDriver.vue';
import BusinessProfile from './components/Businessowner/BusinessProfile.vue';
import {  Slider  } from 'element-ui'
// Global styles
import './styles/styles.scss';
import 'element-ui/lib/theme-chalk/index.css';


Vue.component('HowTo', HowTo)
Vue.component('LoginDropDown', LoginDropDown)
Vue.component('KeyValueDriver', KeyValueDriver)
Vue.component('BusinessProfile', BusinessProfile)
Vue.component('StarRating', StarRating)
Vue.component(Slider.name, Slider)

Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
});
