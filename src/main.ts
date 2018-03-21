import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import StarRating from 'vue-star-rating'
import HowTo from './components/HowTo.vue';
import LoginDropDown from './components/root/LoginDropDown.vue';
import KeyValueDriver from './components/Businessowner/KeyValueDriver.vue';
import BusinessProfile from './components/Businessowner/BusinessProfile.vue';
import CourseInfo from './components/consultant/CourseInfo.vue';
import Curriculum from './components/consultant/Curriculum.vue';
import Lecture from './components/consultant/Lecture.vue';
import CourseSection from './components/consultant/CourseSection.vue';
import QuestionnaireRoot from './components/questionnaire/QuestionnaireRoot.vue';
import {  Slider  } from 'element-ui'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
import Vuetify from 'vuetify'


// Global styles
import './styles/styles.scss';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'vuetify/dist/vuetify.min.css'

fontawesome.library.add(brands, faSpinner)


Vue.component('HowTo', HowTo)
Vue.component('LoginDropDown', LoginDropDown)
Vue.component('KeyValueDriver', KeyValueDriver)
Vue.component('BusinessProfile', BusinessProfile)
Vue.component('StarRating', StarRating)
Vue.component('CourseInfo', CourseInfo)
Vue.component('Curriculum', Curriculum)
Vue.component('Lecture', Lecture)
Vue.component('CourseSection', CourseSection)
Vue.component('QuestionnaireRoot', QuestionnaireRoot)
Vue.component(Slider.name, Slider)
Vue.use(Vuetify)


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
});
