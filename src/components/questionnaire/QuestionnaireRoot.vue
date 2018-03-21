<template>
  <section class="hero">
    <div class="hero-body">
    </div>

    <div class="section is-small has-text-centered">
      <h3 class="title has-text-grey">Welcome to Maexit questionnaire</h3>
      <p class="subtitle has-text-grey">Please proceed.</p>
    </div>

    <div class="section is-small is-widescreen">
      <div class="hero is-dark">
        <div class="columns is-centered">
          <div class="column is-6 is-vcentered ">
            <h2 class="title is-spaced has-text-centered">
              Wie attraktiv ist Ihr Unternehmen? Nehmen Sie sich 8 Minuten Zeit, und finden Sie es
              heraus!</h2>
            <ul class="is-centered ">
              <li class="subtitle is-6">
                Erfahren Sie die Marktfähigkeit (strategische Attraktivität für
                Investoren) Ihres Unternehmens
              </li>
              <li class="subtitle  is-6">
                Entdecken Sie die Stärken und Schwächen, die Ihren strategischen
                Marktwert beeinflussen
              </li>
              <li class="subtitle  is-6">
                Entwickeln Sie eine klare Entscheidungsgrundlage, ob, wann, wie und
                für wieviel Sie Ihr Unternehmen verkaufen
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <div v-if="isUserExists" class="notification is-danger has-text-centered">
      <button class="delete" @click="closeErrorUser()"></button>
      User with provided email has already passed questionnaire. Please check you email or login
    </div>

    <div class="columns is-centered">
      <div class="column is-4">
        <div class="field">
          <div class="control">
            <input class="input" v-bind:class="{ 'is-danger':isEmailError}"
                   type="email"
                   placeholder="Your Email"
                   autofocus="" v-model="email">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <div class="select field is-narrow is-fullwidth ">
              <select v-model="industryId">
                <option v-for="industry in this.industries" :value="industry.id">{{industry.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control is-fullwidth">
            <button class="is-danger button is-fullwidth" @click="goToQuestions()"> ZUM FRAGEBOGEN </button>
          </div>
        </div>
      </div>
    </div>


    <br>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  import store from '../../store';
  export default Vue.extend({

    methods: {
      closeErrorUser(){
        this.isUserExists = false;
      },

      goToQuestions(){
        var flag = true
        if (this.email == "") {
          this.isEmailError = true
          flag = false
        }
        if (this.industryId == 0) {
          this.isIndustryError = true
          flag = false
        }
        Util.getPublicHTTP('').post('user/check', {
          email: this.email,
        })
          .then(response => {
            if (response.data) {
              flag = false;
              this.isUserExists = true;
            }
            if (flag) {
              this.$store.state.questionEmail = this.email
              this.$store.state.questionIndustryId = this.industryId
              this.$router.push({
                path: "questions"
              })
              ;

            }
          });

      }

    },

    created(){
      Util.getPublicHTTP('').get('industry', {})
        .then(response => {
          this.industries = response.data;
        });

    },

    data(){
      return ({
        email: '',
        industryId: 0,
        industries: [],
        isEmailError: false,
        isIndustryError: false,
        isUserExists: false
      })
    }

  });
</script>

<style lang="scss" scoped>

  $box-background-color: blue/*.box-background-color {*/
  /*background: url('http://maexit.net/public/assets/banner.png') center center;*/
  /*background-size: cover;*/
  /*}*/


</style>
