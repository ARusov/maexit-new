import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Main.vue';
import Registration from '../components/Users/Registration.vue';
import Login from '../components/Users/Login.vue';
import BusinessOwner from '../components/Businessowner/BusinessOwner.vue';
import Questionnaire from '../components/questionnaire/Questionnaire.vue';
import QuestionnaireRoot from '../components/questionnaire/QuestionnaireRoot.vue';
import QuestionnaireThanks from '../components/questionnaire/QuestionnaireThanks.vue';

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
      name: 'QuestionnaireRoot',
      component: QuestionnaireRoot,
    },{
      path: '/questions',
      name: 'Questionnaire',
      component: Questionnaire,
    }
    ,{
      path: '/questions/thanks',
      name: 'QuestionnaireThanks',
      component: QuestionnaireThanks,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/businessowner',
      name: 'BusinessOwner',
      component: BusinessOwner,
    },
  ],
});
