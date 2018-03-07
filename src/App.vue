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

  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      Footer,
      HowTo
    }
  });
</script>

<style lang="scss" scoped>

</style>
