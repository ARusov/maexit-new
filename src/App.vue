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
  import {  Slider  } from 'element-ui'

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
      Slider
    }
  });
</script>

<style lang="scss" scoped>

</style>
