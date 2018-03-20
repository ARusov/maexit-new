<template>
  <section class="hero">


    <div v-if="isKVD">
      <div class="box">
        <p><strong>MAEXIT GESAMTSCORE</strong></p>
        <p>
          IHRE SCORECARD BASIERT AUF 8 KEY-VALUE-DRIVER, DIE IM AKTUELLEN BUSINESS- UND LEADERSHIP-UMFELD BEWERTET SIND.</p>
        </br>



        <progress class="progress is-warning is-small" :value='bokvd.index' max="100"></progress>
      </div>
      <div class="section is-small">
        <h3 class="subtitle has-text-grey">Key-Value-Driver Details</h3>

        <div class="columns">
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[0].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[0].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[0].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->
            </div>

          </div>
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[1].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[1].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[1].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->

            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[2].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[2].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[2].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->

            </div>
          </div>
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[3].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[3].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[3].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->

            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[4].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[4].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[4].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->

            </div>
          </div>
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[5].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[5].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[5].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->

            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[6].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[6].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[6].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->

            </div>
          </div>
          <div class="column ">
            <div class="box">
              <div class="columns">
                <div class="column is-one-quarter">
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="bokvd.kvds[7].kvdIndex"
                    color="teal">
                    {{ bokvd.kvds[7].kvdIndex }}
                  </v-progress-circular>
                </div>
                <div class="column ">
                  <p><strong>{{bokvd.kvds[7].kvdName}}</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <!--<progress class="progress is-primary is-small" :value='bokvd.kvds[0].kvdIndex' max="100"></progress>-->

            </div>
          </div>
        </div>


      </div>
    </div>
    <div v-else>
      <QuestionnaireRoot/>
    </div>

  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';
  export default Vue.extend({
    created(){
      Util.getHTTP('').get('answer/' + this.userEmail, {})
        .then(response => {
          this.bokvd = response.data
          if(this.bokvd==null){
            this.isKVD=false
          }
        });
    },
    methods:{
    },
    data(){
      return {
        userEmail: localStorage.getItem(Util.USER_EMAIL),
        bokvd: Object,
        isKVD: true,
      }
    }
  })

</script>
