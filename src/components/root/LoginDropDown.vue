<template>
  <div class="column has-text-centered">
    <div class="box">
      <span>Have an account?</span>
      <div class="field">
        <div class="control">
          <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="password" placeholder="Password" v-model="pwd">
        </div>
      </div>
      <div class="field">
        <a href="#">Forgot password?</a>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link is-fullwidth" @click="login()">Login</button>
        </div>
      </div>
      <div class="field">
        <span>New to Maexit?</span>
      </div>
      <div class="field ">
        <div class="control">
          <router-link to="registration" class="button is-link is-fullwidth">Create new account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  export default Vue.extend({
    created() {
    },
    methods: {
      login(){
        Util.login(this.email, this.pwd)
      }
    },
    data(){
      return {
        email: '',
        pwd: '',
      }

    }
  });
</script>



