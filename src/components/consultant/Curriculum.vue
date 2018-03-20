<template>
  <div class="box">
    <h2 class="subtitle">Curriculum</h2>
    <h3>Start putting together your course by creating sections and lectures</h3>
    <hr>

    <div>

      <CourseSection v-for="section in course.sections" :key="section.id"
                     :section="section"
      >
      </CourseSection>

    </div>
    <br>
    <div>
      <button class="button is-fullwidth is-primary" @click="addSection()"><i class="fas fa-plus-circle"/> Add section
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  export default Vue.extend({
//    created(){
//      //TODO: correct URL
//      Util.getPublicHTTP('').get('initcourse/' + this.courseId, {})
//        .then(response => {
//          this.sections = response.data.sections;
//          this.$store.state.course = response.data;
//          this.course = response.data;
//          console.log(this.$store.state.course)
//        });
//      console.log(this.courseId)
//
//    },
    data(){
      return {
//        sections: [],

      }
    },
    methods: {
      addSection(){
        this.$store.state.course.sections.push({
          lectures: [],
          order: 0,
          title: 'New Section'
        })
      }
    },
    watch: {
      course:function(){

      }
    },


    props: ['course'],
  });
</script>


<style scoped>
  .is-box-dark {
    background-color: ghostwhite;
  }
</style>

