<template>
  <section class="hero ">
    <div class="hero-body">
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <ul class="menu-list">
              <li><a>Consultant Info</a></li>
              <li><a>Courses</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Courser</h2>
            <h3>Here your courses</h3>
            <hr>

            <div v-for="(course, index) in courses" :key="course.id" class="box is-section is-box-dark">
              <div class="columns">
                <div class="column"><router-link :to="'/course/create/'+course.id" class="sub-tutle"> {{course.name}}</router-link></div>
                <div class="column has-text-right"><a><i class="fas fa-trash-alt"></i></a></div>
              </div>
            </div>

            <div class="box is-section is-box-dark">
              <div class="columns">
                <div class="column">
                  <div class="control">
                    <input class="input" type="text" placeholder="Course name" v-model="courseName" v-bind:class="{'is-danger':isNameError}"/>
                  </div>
                </div>
                <div class="column has-text-right is-2">
                  <button class="button" @click="creteNewCourse()">Create new course</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <br/>
  </section>
</template>

<style>
  .is-box-dark {
    background-color: ghostwhite;
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../../shared/Util';
  export default Vue.extend({

    created(){
      Util.getPublicHTTP('').get('/initcourses')
        .then(response => {
          this.courses=response.data;
          if(response.status==200){
            this.courses=response.data;
          }
        });
    },

    methods: {
      creteNewCourse(){
          if(this.courseName==''){
              this.isNameError=true;

          }
        //TODO set right user
        Util.getPublicHTTP('').post('/initcourse/create', {
          name: this.courseName,
          user: '',
        })
          .then(response => {
              if(response.status==200){
                  console.log(response.data)
                this.$router.push('/course/create/'+response.data.id);
                ///course/create/dsdew33

              }
          });
      }
    },
    data(){
        return{
          courseName:'',
          isNameError:false,
          courses:[],
        }
    }

  });
</script>


