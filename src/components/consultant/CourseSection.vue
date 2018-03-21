<template>
  <div class="box is-section is-box-dark">

    <div class="field has-addons ">
      <!--<p class="control"><span>Section: </span></p>-->
      <div class="control is-expanded">
        <input class="input is-fullwidth"
               v-bind:class="{'input-as-bg': this.isReadonly}"
               type="text" :readonly="this.isReadonly"
               @blur="makeReadonly()"
               v-model="section.title"/>
      </div>
      <div class="control">
        <a class="is-right" @click="editName()"><i class="fas fa-edit"></i></a>
        <i class="fas fa-trash-alt"></i>
        <a class="is-right" @click="addLecture()"><i class="fas fa-plus-circle"/></a>
      </div>
    </div>

    <br/>
    <Lecture
      v-for="(lecture, index) in section.lectures" :key="lecture.id"
      :lecture="lecture"
      v-on:delete-lecture="deleteLectureIn(index)">
    </Lecture>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  export default Vue.extend({


    methods: {
      addLecture(){
        this.section.lectures.push({
          description: 'new Lecture description',
          file: "path to file",
          order: 0,
          title: "Lecture NEW",
          videoFile: "path to video file"
        });

      },
      deleteLectureIn(index: number){
        this.section.lectures.splice(index, 1)
        console.log("delete Lecture")
      },
      editName(){
        this.isReadonly = !this.isReadonly
      },
      makeReadonly(){
        this.isReadonly = true
      }

    },


    data(){
      return {
//        lectures: []
        isReadonly: true
      }
    },

    props: {
//      lectures: {
//        type: Object
//      },
      section: {
        type: Object
      }
    }
  });
</script>

<style scoped>
  .input-as-bg {
    background-color: ghostwhite;
    border: none;
  }

  a {
    color: inherit;
  }

  .box{
    border-radius: 0;
  }

</style>
