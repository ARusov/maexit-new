<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">Welcome to Dashboard</h1>
      <h2 class="subtitle">Dear {{userEmail}}</h2>
      <div class="columns">
        <div class="column is-1">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><a>Dashboard</a></li>
              <li><a>Customers</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <div>

            <div class="box">
              <p><strong>MAEXIT GESAMTSCORE</strong></p>
              <p>
                IHRE SCORECARD BASIERT AUF 8 KEY-VALUE-DRIVER, DIE IM AKTUELLEN BUSINESS- UND LEADERSHIP-UMFELD BEWERTET SIND.</p>
              </br>
              <progress class="progress is-warning" value="75" max="100">75%</progress>
            </div>
          </div>

          <div class="content">
            <br>
            <h3 class="subtitle has-text-grey">Key-Value-Driver Details</h3>
            <div class="columns">
              <div class="column">
                <div class="box">
                    <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="box">
                  <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="box">
                  <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="box">
                  <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="box">
                  <progress class="progress is-primary" value="15" max="100">30%</progress>
                  <p><strong>Cashflow Efficiency</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  </p>
                </div>
              </div>
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
  import {Util} from './shared/Util';


  export default Vue.extend({


    created() {
      if (!Util.isLogedIn()) {
        this.$router.push('login')
      }
    },

    methods: {},
    data(){
      return {
        userEmail: localStorage.getItem(Util.USER_EMAIL)
      }

    }


  });
</script>
