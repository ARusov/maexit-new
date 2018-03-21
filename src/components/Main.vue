<template>
  <section>
    <div class="hero is-medium has-bg-img">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Maexit
          </h1>
          <h2 class="subtitle">
            Greate value | Greate deals
          </h2>
          <router-link to="questionnaire" class="button is-danger">
            <span>ZUM FRAGEBOGEN</span>
          </router-link>
        </div>
      </div>
    </div>
    <HowTo/>
  </section>
</template>


<style lang="scss" scoped>

  .has-bg-img {
    background: url('./assets/banner.png') center center;
    background-size: cover;
  }


</style>
