<template>
  <section class="hero">


    <div v-if="isKVD">
      <div class="box">
        <p><strong>MAEXIT GESAMTSCORE</strong></p>
        <p>
          IHRE SCORECARD BASIERT AUF 8 KEY-VALUE-DRIVER, DIE IM AKTUELLEN BUSINESS- UND LEADERSHIP-UMFELD BEWERTET SIND.</p>
        </br>
        <progress class="progress is-warning is-small" :value='bokvd.index' max="100"></progress>
        <a :href='Util.API_URL+"/api/getpdfreport/" + bokvd.id'>Download your report</a>
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
                    Wie gut sind Wissen und Prozesse im Unternehmen organisiert? Für den Investor ist es entscheidend, wie schnell sind unternehmensfremde Personen arbeitsfähig bzw. wie gut können die Prozesse mit anderen Unternehmen verbunden werden.
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
                    Ist Ihr Unternehmen ein Cashflow Verbrenner oder eine Cashflow Maschine? Je weniger Geld der Käufer in Ihr Unternehmen einzahlen muss, desto höher der Preis, den er bezahlen wird. Wie Cashflow effektiv arbeiten Sie?
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
                    Wie stellen Sie sicher, daß auch die nächsten Jahre ein entsprechend hoher Umsatz erzielt wird bzw. dass Konjunkturschwankungen die Liquidität des Unternehmens nicht gefährden?
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
                    Die Verkaufsfähigkeit eines Unternehmens erlaubt keine allzu große Abhängigkeit von Kunden, Mitarbeitern oder Lieferanten. Wie gut haben Sie Ihr Unternehmen darauf vorbereitet?
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
                    Einer der wichtigsten Faktoren, um Ihr Unternehmen verkaufbar zu machen, ist Ihr Wachstumspotenzial, besonders die Skalierbarkeit und Flexibilität Ihrer Geschäftsmodelle. Wie dynamisch sind Sie aufgestellt?
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
                    Haben Sie ein gutes Innovations- und Lifecyclemanagement? Wie fördern und pflegen Sie eine aktive Innovationskultur? Innovationen sind der Grundstein für Wachstum und Beständigkeit in der Zukunft. Wie leben Sie Innovation?
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
                    Dieser Faktor misst das Ausmaß, in dem Ihr Geschäft ohne Sie erfolgreich sein kann. Nur, wenn Ihr Unternehmen auch ohne Sie gut läuft und in der Lage ist, Wachstum zu generieren, besitzt es Attraktivität für potentielle Investoren. Wie gut läuft es ohne Sie?
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
                    Der X-Faktor, der viele Unternehmenskäufe rein aus finanzmathematischen Gesichtspunkten nur schwer nachvollziehen lässt, sind immaterielle Mehrwert, die das Unternehmen für den Käufer alternativlos machen. Was macht Sie besonders?
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
          if (this.bokvd == null) {
            this.isKVD = false
          }
        });
    },
    methods: {},
    data(){
      return {
        userEmail: localStorage.getItem(Util.USER_EMAIL),
        bokvd: Object,
        isKVD: true,
      }
    }
  })

</script>
