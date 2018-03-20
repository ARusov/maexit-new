<template>
  <nav class="navbar" v-bind:class="{'is-fixed-top':!isMobileView}">
    <div class="navbar-brand">

      <router-link to="/" class="navbar-item">
        <img src="http://maexit.net/public/assets/logo.png" alt="Maexit Greate value | Greate deals" width="112"
             height="28">
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" @click="openMobileView()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{'is-active':isMobileView}">
      <div class="navbar-end ">
        <a class="navbar-item" href="#">About us</a>
        <a class="navbar-item" href="#">Contacts</a>
        <div class="navbar-item">
          <a class="button is-danger" @click="modalView()">
            Jetzt zur Strategie-Session anmelden!
          </a>
        </div>

        <div v-if="this.$store.state.isLoggedIn" class="navbar-item">
          <a class="navbar-item" @click="routToProfile()">Dashboard</a>
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


    <div id="m-call" class="modal" v-bind:class="{'is-active':isModalView}" role="dialog" >
      <div class="modal-background"></div>
      <!--<div class="modal-dialog box">-->
      <!-- Modal content-->
      <div class="modal-content">
        <div class="box" @blur="modalView()">
          <div class="modal-body">
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=14643758" width="100%" height="800"
                    frameBorder="0"></iframe>
            <!--<script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>-->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Abbrechen</button>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="modalView()"></button>
        </div>
      </div>
    </div>

    <!--</div>-->

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
        this.$store.state.isLoggedIn = true;
        this.loggedIn = true;
        this.userEmail = localStorage.getItem(Util.USER_EMAIL);
      }
    },

    methods: {
      openMobileView(){
        this.isMobileView = !this.isMobileView
      },
      logout(){
        Util.logout()
        this.$router.push("login")
      },
      routToProfile(){
        Util.routToProfile();
      },
      modalView(){
        this.isModalView = !this.isModalView;
      }
    },
    data(){
      return ({
        userEmail: localStorage.getItem(Util.USER_EMAIL),
        loggedIn: false,
        isMobileView: false,
        isModalView: false
      })
    }
  })
</script>

<style lang="scss" scoped>

</style>
