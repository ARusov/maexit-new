<template>
  <section class="hero ">
    <div class="hero-body">
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <ul class="menu-list">
              <li><a @click="setCourseInfo()">Course Info</a></li>
              <li><a @click="setLectures()">Lectures</a></li>
              <li><a @click="setKVD()">KVD / Branchen</a></li>
              <hr/>
              <li><a class="button is-danger" @click="saveCourse()">Save</a></li>

              <li>
                <router-link to="/consultant/dashboard"> Back to dashboard</router-link>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <CourseInfo :course="course" v-if="view==1"></CourseInfo>
          <Curriculum :course="this.course" v-if="view==2"></Curriculum>

        </div>
      </div>
    </div>
    <br/>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  export default Vue.extend({

    props: ["courseId"],

    created(){
      //TODO: correct URL
      Util.getPublicHTTP('').get('initcourse/' + this.courseId, {})
        .then(response => {
//          this.sections = response.data.sections;
          this.$store.state.course = response.data;
          this.course = response.data;
          console.log(this.$store.state.course)
        });
      console.log(this.courseId)

    },
    data(){
      return {
        course: null,
        view: 1
      }
    },
    watch: {
      course: {
        handler: function (newValue) {
          this.saveCourse()
        },
        deep: true
      }
    },

    methods: {
      saveCourse(){
        Util.getPublicHTTP('').post('/initcourse/update', {
          id: this.$store.state.course.id,
          name: this.$store.state.course.name,
          sections: this.$store.state.course.sections,
          userId: 0
        })
          .then(response => {
            if (response.status == 200) {
              console.log(response.data)
//              this.$router.push('/course/update/'+response.data.id);
              ///course/create/dsdew33

            }
          });
      },
      setCourseInfo(){
        this.view = 1
      },
      setLectures(){
        this.view = 2
      },
      setKVD(){
        this.view = 3
      }

    }
  })
</script>
