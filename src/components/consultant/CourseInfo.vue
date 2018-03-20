<template>
  <div class="box">
    <div class="">
      <h2 class="subtitle">Course information</h2>
      <hr>
      <div class="control">
        <span>Course title:</span>
        <input class="input" type="text" placeholder="Course title" v-model="course.name"/>
      </div>
      <div class="control">
        <span>Course description:</span>
        <textarea class="textarea" placeholder="Course description" v-model="course.description"></textarea>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  export default Vue.extend({
    props:['course']
  });
</script>
