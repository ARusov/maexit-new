<template>
  <section class="hero">
    <div class="hero-body">
      <h1> Hello questionnaire {{allPages}}</h1>
      <!--<h1> Hello questionnaire {{this.$store.state.questions.length}}</h1>-->
      <!--<h1> Hello questionnaire {{currentPage}}</h1>-->

      <div class="container">
        <div class="box" v-for="question in getQuestions(this.currentPage)"
             :key="question.id">
          <div class="columns">
            <div class="column">
              <p class="has-text-centered">
                {{question.text }}</p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div>
                <p>
                  {{question.min}}
                </p>
              </div>
            </div>
            <div class="column">

              <div class="block">
                <p class="demonstration has-text-centered"> {{question.value}}%</p>
                <div class="block">
                  <el-slider
                    v-model="question.value"
                    :step="10"
                    show-stop>
                  </el-slider>
                </div>
              </div>


            </div>
            <div class="column">
              <div>
                <p>
                  {{question.max}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column"></div>
          <div class="column">
            <nav class="pagination " role="navigation" aria-label="pagination">
              <a
                v-if="this.currentPage>0"
                class="pagination-previous is-left"
                @click="previousPage()">Previous page</a>
              <a class="pagination-next is-right"
                 v-if="this.currentPage<this.allPages-1"
                 @click="nextPage()">Next page</a>
              <a class="pagination-next is-right"
                 v-if="this.currentPage==this.allPages-1"
                 @click="finishQuestionnaire()">Finish Questionnaire</a>
            </nav>
          </div>
          <div class="column"></div>
          <div class="column"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';

  import {SET_QUESTIONS} from '../../store/mutation-types';
  import {IQuestion} from '../../store';

  export default Vue.extend({

    created() {

      //TODO: remove hardcoded URLs
      axios.get('http://localhost:8090/test/question')
        .then(response => {
          this.$store.commit(SET_QUESTIONS, response.data);
          this.allPages = Math.round(this.$store.state.questions.length / this.itemsPerPage);
        });


    },

    data(){
      return {
        currentPage: 0,
        itemsPerPage: 5,
        allPages: 0,
        resultCount: this.$store.state.questions.length,
        returnQuestion: [],
      }
    },

    methods: {
      getQuestions(page: number){
        var q: IQuestion[] = new Array()
        var from = this.currentPage * this.itemsPerPage
        var to = from + this.itemsPerPage
        var j = 0;
        for (var i = from; i < to; i++) {
          if (i < this.$store.state.questions.length) {
            q[j] = this.$store.state.questions[i];
            j++
          }
        }
        return q;
      },


      computed: {
        projects(): IQuestion[] {
          return this.$store.state.questions;
        }
      },
      previousPage(){
        this.currentPage--;
      },
      nextPage(){
        this.currentPage++;
      },
      finishQuestionnaire(){

        for (let item of this.$store.state.questions) {
          console.log(item.value)
        }
      }


    }
  })

</script>

