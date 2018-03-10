<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">

      <router-link to="/" class="navbar-item">
        <img src="http://maexit.net/public/assets/logo.png" alt="Maexit Greate value | Greate deals" width="112"
             height="28">
      </router-link>
      <!--<a class="navbar-item" href="http://maexit.net">-->
      <!---->
      <!--</a>-->
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">

      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="#">About us</a>
        <a class="navbar-item" href="#">Contacts</a>
        <div class="navbar-item">
          <div class="field">
            <p class="control">
              <a class="button is-danger" href="#">
                <span>ZUM FRAGEBOGEN</span>
              </a>
            </p>
          </div>
        </div>

        <div v-if="this.$store.state.isLoggedIn" class="navbar-item">
          <a class="navbar-item" @click="routToProfile()">{{userEmail}}</a>
          <!--<router-link class="navbar-item" to="businessowner" >{{userEmail}}</router-link>-->
          <span>|</span>
          <a class="navbar-item" @click="logout()">Logout</a>

        </div>

        <div v-else class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="#">
            <span>Have an account? <span class="has-text-weight-bold">Login</span></span>
          </a>
          <div class="navbar-dropdown is-boxed">
            <LoginDropDown/>
          </div>
        </div>


      </div>
    </div>

  </nav>
</template>


<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  import store from '../../store';
  export default Vue.extend({
    created(){
      if (Util.isLoggedIn()) {
        this.$store.state.isLoggedIn=true;
        this.loggedIn = true;
        this.userEmail = localStorage.getItem(Util.USER_EMAIL);
      }
    },

    methods:{
      logout(){
        Util.logout()
        this.$router.push("login")
      },
      routToProfile(){
          Util.routToProfile();
      }
    },
    data(){
      return ({
        userEmail: localStorage.getItem(Util.USER_EMAIL),
        loggedIn : false
      })
    }
  })
</script>

<style lang="scss" scoped>

</style>
