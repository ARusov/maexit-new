<template>
  <div id="app">
    <Header/>
    <div class="view">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from './components/root/Header.vue';
  import Footer from './components/root/Footer.vue';
  import HowTo from './components/HowTo.vue';
  import LoginDropDown from './components/root/LoginDropDown.vue';
  import KeyValueDriver from './components/Businessowner/KeyValueDriver.vue';
  import BusinessProfile from './components/Businessowner/BusinessProfile.vue';
  import StarRating from 'vue-star-rating'
  import CourseInfo from './components/consultant/CourseInfo.vue'
  import Curriculum from './components/consultant/Curriculum.vue'
  import Lecture from './components/consultant/Lecture.vue'
  import CourseSection from './components/consultant/CourseSection.vue'
  import {Slider} from 'element-ui'
  import fontawesome from '@fortawesome/fontawesome'
  import brands from '@fortawesome/fontawesome-free-brands'
  import { faSpinner } from '@fortawesome/fontawesome-free-solid'
  import CircleKVD from './components/Businessowner/CircleKVD.vue';






  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      Footer,
      HowTo,
      LoginDropDown,
      KeyValueDriver,
      BusinessProfile,
      StarRating,
      Slider,
      CourseInfo,
      Curriculum,
      Lecture,
      CourseSection,
      CircleKVD

//      Icon
    }
  });
</script>

<style lang="scss" scoped>

</style>
