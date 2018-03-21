<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Create new account</h3>
          <p class="subtitle has-text-grey">Join Maexit right now</p>
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
              <div class="field">
                <div class="control">
                  <div class="select is-large is-fullheight">
                    <select v-model="type">
                      <option value="1">I am Business Owner</option>
                      <option value="2">I am Consultant</option>
                      <option value="3">I am Partner</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <p>Already a member?
                  <router-link to="/login" >Login</router-link>
                </p>
                <!--<p>Already a member? <a href="#">Login</a></p>-->
              </div>
              <button class="button is-block is-info is-large is-fullwidth" @click="createUser()">Create new account</button>
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
        createUser(){
          Util.getHTTP('').post('user', {
                  email:this.email,
                  pwd:this.pwd,
                  type:this.type
          })
            .then(response => {
              this.$router.push('/')
            });
        }
    },
    data(){
      return {
        email: null,
        pwd: '',
        type: 1,
      }

    }
  });
</script>
