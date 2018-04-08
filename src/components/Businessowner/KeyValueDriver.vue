<template>
  <section class="hero">


    <div v-if="isKVD">
      <div class="box">
        <div class="columns">
          <div class="column is-2">
            <el-progress type="circle" :percentage='getOverallindex()' color="#d83737"></el-progress>
          </div>
          <div class="column">
            <p><strong>MAEXIT GESAMTSCORE</strong></p>
            <p>
              IHRE SCORECARD BASIERT AUF 8 KEY-VALUE-DRIVER, DIE IM AKTUELLEN BUSINESS- UND LEADERSHIP-UMFELD BEWERTET SIND.
            </p>
            </br>
          </div>

        </div>

        <!--<progress class="progress is-warning is-small" :value='bokvd.index' max="100"></progress>-->
        <!--<a :href='"https://maexit-api.herokuapp.com//api/getpdfreport/" + bokvd.id'>Download your report</a>-->
      </div>
      <div class="section is-small">
        <h3 class="subtitle has-text-grey">Key-Value-Driver Details</h3>
      </div>

      <div class="box">
        <div v-for="kvd in kvds" class="box is-width-half is-inline-block" @click='tableVisible(kvd.id)'>
          <div class="columns">
            <div class="column is-one-quarter">
              <el-progress type="circle" :percentage='getKVDindex(kvd.id)' color="#d83737"></el-progress>
            </div>
            <div class="column ">
              <p><strong>{{kvd.name}}</strong></p>
              <p>{{kvd.text}}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <QuestionnaireRoot/>
    </div>
    <el-button type="text">open a Table nested Dialog</el-button>

    <el-dialog width="80%" :visible.sync="dialogTableVisible">
      <div class="box">
        <div v-for="question in getQuestions(currentKvdId)" class="box is-width-half is-inline-block">
          <div class="columns">
            <div class="column is-one-quarter">
              <el-progress type="circle" :percentage='question.value'></el-progress>
            </div>
            <div class="column">{{question.text}}</div>
          </div>
          <el-slider v-model='question.value'></el-slider>
        </div>
      </div>
    </el-dialog>


  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  import {SET_ANSWER} from '../../store/mutation-types';
  import {IAnswer} from '../../store';
  export default Vue.extend({
    created(){
      this.initKVD();
      Util.getHTTP('').get('answer/' + this.userEmail, {})
        .then(response => {
          this.$store.commit(SET_ANSWER, response.data);
          if (this.$store.state.answer == null) {
            this.isKVD = false

          } else {
            this.init()
          }

        });

    },
    methods: {

      initKVD(){
        Util.getHTTP('').get('/kvd', {})
          .then(response => {
            this.kvds = response.data

          });
      },

      getOverallindex(){
        let index: number = 0
        let count: number = 0


        for (let question of this.$store.state.answer.questions) {
            count++;
            index = index + question.value
        }
        return Math.round(index / count);
      },

      getKVDindex(kvdId: number){

        let index: number = 0
        let count: number = 0


        for (let question of this.$store.state.answer.questions) {

          if (kvdId == question.kvdId) {
            count++;
            index = index + question.value
          }
        }
        return Math.round(index / count);

      },
      getQuestions(kvdId: number){

        let list: Array<Object> = [];

        for (let question of this.$store.state.answer.questions) {


          if (kvdId == question.kvdId) {
            console.log(question)
            list.push(question)
          }
        }
        return list;
      },

      init(){

      },
      tableVisible(kvdId: number){
        this.dialogTableVisible = true;
        this.currentKvdId = kvdId;
      }
    },
    data(){
      return {
        userEmail: localStorage.getItem(Util.USER_EMAIL),
        kvds: [],
        isKVD: true,
        dialogTableVisible: false,
        currentKvdId: 0,
      }
    }
  })

</script>

<style scoped>
  .is-width-half {
    width: calc(50% - 5px);
    margin-right: 5px;
    vertical-align: top;
    /*height: 175px;*/
  }
</style>
