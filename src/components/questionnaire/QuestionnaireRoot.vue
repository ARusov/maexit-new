<template>
  <section class="hero  is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h3 class="title has-text-grey">Welcome to Maexit questionnaire</h3>
        <p class="subtitle has-text-grey">Please proceed.</p>
        <div class="box is-dark">
          <div class="section is-small">

            <div class="container ">
              <h2 class="title">Wie attraktiv ist Ihr Unternehmen?<br/>Nehmen Sie sich 8 Minuten Zeit, und finden Sie es
                heraus!</h2>
              <div class="section is-centered">
                <p class=" subtitle is-centered">
                  Erfahren Sie die Marktfähigkeit (strategische Attraktivität für
                  Investoren) Ihres Unternehmens
                </p>
                <p class=" subtitle is-centered">
                  Entdecken Sie die Stärken und Schwächen, die Ihren strategischen
                  Marktwert beeinflussen
                </p>
                <p class=" subtitle is-centered">
                  Entwickeln Sie eine klare Entscheidungsgrundlage, ob, wann, wie und
                  für wieviel Sie Ihr Unternehmen verkaufen
                </p>
              </div>
            </div>

          </div>
          <form>
            <div class="columns is-half">

              <div class="column">
                <div class="control">
                  <input class="input is-large" v-bind:class="{ 'is-danger':isEmailError}"
                         type="email"
                         placeholder="Your Email"
                         autofocus="" v-model="email">
                </div>
              </div>

              <div class="column has-text-centered">
                <div class="control">
                  <div class="select is-large field is-narrow is-fullwidth ">
                    <select v-model="industryId">
                      <option v-for="industry in this.industries" :value="industry.id">{{industry.name}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="column has-text-centered">
                <div class="control is-fullwidth">
                  <button class="is-danger button is-large " @click="goToQuestions()"> ZUM FRAGEBOGEN </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  import store from '../../store';
  export default Vue.extend({

    methods: {
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
        if (flag) {
          this.$store.state.questionEmail=this.email
          this.$store.state.questionIndustryId=this.industryId
          this.$router.push({
            path: "questions"
          })
          ;

        }
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
        isIndustryError: false
      })
    }

  });
</script>

<style lang="scss" scoped>

  $box-background-color: blue

  /*.box-background-color {*/
    /*background: url('http://maexit.net/public/assets/banner.png') center center;*/
    /*background-size: cover;*/
  /*}*/


</style>
