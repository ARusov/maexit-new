import Vue from 'vue';
import Router from 'vue-router';
import ButtonTest from '../components/example/ButtonTest.vue';
import Main from '../components/Main.vue';
import Questionnaire from '../components/Questionnaire.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire,
    },
  ],
});
