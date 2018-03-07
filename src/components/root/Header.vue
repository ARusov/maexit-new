<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://maexit.net">
        <img src="http://maexit.net/public/assets/logo.png" alt="Maexit Greate value | Greate deals" width="112"
             height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="https://bulma.io/">Home</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/documentation/overview/start/">Docs</a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/documentation/overview/start/">Overview</a>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
              Form
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Elements
            </a>
            <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-danger" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
                <span>Jetzt zur Strategie-Session anmelden!</span>
              </a>
            </p>
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                 data-social-target="http://localhost:4000" target="_blank"
                 href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
                <span>
                Registration
              </span>
              </a>
            </p>
            <p class="control">
              <a class="button" @click="openLoginModal()">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="login" class="modal" v-bind:class="{'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </nav>
</template>


<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({

    methods: {
      openLoginModal() {
        this.isActive = !this.isActive;
      }
    },
    data() {
      return {
        isActive: false
      };
    },
  })

</script>

<style lang="scss" scoped>

</style>
