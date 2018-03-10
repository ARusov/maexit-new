<template>
  <section class="hero  is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to Maexit.</p>
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model="email">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password" v-model="pwd">
                </div>
              </div>
              <div class="field ">
                <a href="#">Forgot password?</a>
              </div>
              <button class="button is-block is-info is-large is-fullwidth" @click="login()">Login</button>
            </form>
          </div>

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
