<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title
          class="text-h4 q-my-md cursor-pointer"
          align="center"
          @click="routeTo('/me')"
        >
          Phyo (Justin) Htut
        </q-toolbar-title>
      </q-toolbar>

      <q-separator></q-separator>

      <q-tabs align="center" class="bg-white text-primary">
        <q-separator vertical stretch />

        <q-route-tab no-caps to="/me" label="About Me" />

        <q-separator vertical stretch />

        <q-route-tab no-caps to="/projects" label="Projects" />

        <q-separator vertical stretch />

        <q-route-tab no-caps to="/resume" label="Resume" />

        <q-separator vertical stretch />
      </q-tabs>
    </q-header>

    <q-page-container style="min-height: 87.5vh;">
      <router-view />
    </q-page-container>

    <div class="bg-primary" style="min-height: 90px;" >
      <div class="" style="width: 98%; margin: 0 auto;">

        <div class="q-pa-md" align="center">
          <!-- Follow Me -->
          <div>
            <div class="text-white">
              Follow Me On
            </div>

            <div>
              <q-icon
                class="cursor-pointer" color="white"
                name="fab fa-github-square" size="2rem"
                @click="goTo('https://www.github.com/pkthein')"
              />

              <!-- <q-icon
                class="cursor-pointer" color="white"
                name="fab fa-facebook-square" size="2rem"
                @click="goTo('https://www.facebook.com')"
              />

              <q-icon
                class="cursor-pointer" color="white"
                name="fab fa-instagram" size="2rem"
                @click="goTo('https://www.instagram.com/')"
              />

              <q-icon
                class="cursor-pointer" color="white"
                name="fab fa-twitter-square" size="2rem"
                @click="goTo('https://twitter.com/')"
              /> -->

              <q-icon
                class="cursor-pointer" color="white"
                name="fab fa-linkedin" size="2rem"
                @click="goTo('https://linkedin.com/in/pkthein')"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goTo: function (path) {
      location.href = path
    },
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
