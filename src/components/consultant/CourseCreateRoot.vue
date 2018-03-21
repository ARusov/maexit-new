<template>
  <section class="hero is-medium ">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <h3 class="title has-text-grey">Let's create new course</h3>
          <div class="box">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Course title" autofocus="" v-model="courseTitle">
              </div>
            </div>
            <div class="has-text-right ">
              <button class="button is-info is-right" @click="next()">Create new course</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
//  import {Util} from '../shared/Util';
  export default Vue.extend({
    methods:{
        next(){
        }

    }
  })
</script>
