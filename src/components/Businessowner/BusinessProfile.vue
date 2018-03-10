<template>
  <section>
    <div class="modal" v-bind:class="{'is-active': isMessageActive}">
      <div class="notification is-primary" >
        <button class="delete" @click="closeMessage()"></button>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
    </div>
    <div class="box">
      <h1 class="title">Business Owner profile</h1>
      <div class="box">
        <div class="columns">
          <div class="column">
            <div class="field">
              <div class="control">
                <input class="input " type="text" placeholder="Full Name" autofocus="" v-model="fullName">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input " type="password" placeholder="Old Password" v-model="pwd">
              </div>
            </div>

          </div>
          <div class="column">
            <div class="field">
              <div class="control">
                <input class="input " type="email" disabled placeholder="Email" v-model="email">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input " type="password" placeholder="New Password" v-model="newPwd">
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column"></div>
          <div class="column"></div>
          <div class="column">
            <button class="button is-block is-info  is-fullwidth" @click="updateProfile()">Update Profile</button>
          </div>
        </div>
      </div>
      <div class="box">
        <h1 class="title">Company Info </h1>
        <div class="columns">
          <div class="column">
            <div class="field">
              <div class="control">
                <input class="input " type="text" placeholder="Company Name" v-model="companyName">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <div class="control">
                <label class="is-vcentered">Indastry: </label>
                <div class="select">
                  <select v-model="indastry">
                    <option disabled selected>Indastry</option>
                    <option value="1">I am Business Owner</option>
                    <option value="2">I am Consultant</option>
                    <option value="3">I am Partner</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="subtitle"> Address:</span>
        <div class="columns">
            <div class="column">
              <div class="field">
                <div class="control">
                  <input class="input " type="text" placeholder="Street" v-model="street">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <div class="control">
                  <input class="input " type="number" min="0" placeholder="House number" v-model="houseNumber">
                </div>
              </div>
            </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input " type="number" min="0" placeholder="Additional Address" v-model="additionalAddress">
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field">
              <div class="control">
                <input class="input " type="number" min="0" placeholder="Postcode" v-model="postcode">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="is-vcentered">Country: </label>
                <div class="select">
                  <select v-model="country">
                    <option value="de">Deutschland</option>
                    <option value="at">Österreich</option>
                    <option value="ch">Schweiz</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <div class="control">
                <input class="input " type="number" min="0" placeholder="Place" v-model="place">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input " type="number" min="0" placeholder="Web Site" v-model="site">
              </div>
            </div>
          </div>
        </div>
        <span>Company description:</span>
        <div class="field">
          <div class="control">
            <textarea class="textarea" placeholder="Some words about company" rows="10"></textarea>
          </div>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column"></div>
          <div class="column"></div>
          <div class="column">
            <button class="button is-block is-info  is-fullwidth" @click="updateCompany()">Update Company Profile</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import {Util} from '../shared/Util';


  export default Vue.extend({
    created() {
      if (!Util.isLogedIn()) {
        this.$router.push('login')
      }
    },
    methods: {
      closeMessage(){
          this.isMessageActive=false;
      }
    },
    data(){
      return {
          isMessageActive:false,
          isMessageType:'is-primary'
      }
    }
  });
</script>
