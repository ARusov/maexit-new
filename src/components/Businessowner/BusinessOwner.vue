<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">Welcome to Dashboard</h1>
      <h2 class="subtitle">Dear {{userEmail}}</h2>
      <div class="columns">
        <div class="column is-1">
          <aside class="menu">
            <!--<p class="menu-label">-->
            <!--General-->
            <!--</p>-->
            <ul class="menu-list">
              <li><a @click="changeView(1)">Dashboard</a></li>
              <li><a @click="changeView(2)">Profile</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <KeyValueDriver v-if="isView==1"/>
          <BusinessProfile v-if="isView==2"/>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';


  export default Vue.extend({
    created() {
      if (!Util.isLoggedIn()) {
        this.$router.push('login')
      }
    },
    methods: {
        changeView(isView:number){
            this.isView=isView;
        }
    },
    data(){
      return {
        userEmail: localStorage.getItem(Util.USER_EMAIL),
        isView:1
//        isView:2
      }
    }
  });
</script>
