<template>
  <section class="hero is-medium">
    <div class="hero-body ">
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
                  <el-slider class="is-large"
                             v-model="question.value"
                             :step="10"
                             show-stops>
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
          <div class="column has-text-right">
            <a
              v-if="this.currentPage>0"
              class="pagination-previous"
              @click="previousPage()">Previous page</a>
          </div>
          <div class="column has-text-centered">

            <a>{{this.currentPage + 1}} of {{this.allPages}}</a>

            <ul class="pagination-list has-text-centered">
              <!--<li v-for="n in this.allPages">-->
              <!--<a class="pagination-link is-current">{{n}}</a>-->
              <!--</li>-->
            </ul>


          </div>
          <div class="column has-text-left">
            <a class="pagination-next "
               v-if="this.currentPage<this.allPages-1"
               @click="nextPage()">Next page</a>
            <a class="pagination-next"
               v-if="this.currentPage==this.allPages-1"
               @click="finishQuestionnaire()">Finish Questionnaire</a>
          </div>
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
      axios.get(Util.getPublicApiUrl('questions'))
        .then(response => {
          this.$store.commit(SET_QUESTIONS, response.data);
          this.allPages = Math.round(this.$store.state.questions.length / this.itemsPerPage);

        });


    },

    data(){
      return {
        currentPage: 0,
        itemsPerPage: 8,
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
        Util.getPublicHTTP('').post('answers', {
              questions:this.$store.state.questions,
              email:this.$store.state.questionEmail,
              industryId:this.$store.state.questionIndustryId
          })
          .then(response => {

          });

        this.$router.push('/questions/thanks')
      }


    }
  })

</script>

<style lang="scss" >
  .el-slider__button {
    width: 20px;
    height: 20px;
  }

  .el-slider__runway {
    height: 10px;
  }

  .el-slider__bar {
    height: 10px;
  }

  .el-slider__stop {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
    top: -5px;
    border: 2px solid rgba(64, 158, 255, 0.19);
  }

  .el-slider__button-wrapper {
    top: -13px;
  }
</style>


