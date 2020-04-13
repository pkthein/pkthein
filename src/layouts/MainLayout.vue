<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <!-- <q-toolbar>
        <q-toolbar-title>
          Welcome
        </q-toolbar-title>
      </q-toolbar> -->

      <q-tabs align="left">
        <q-route-tab no-caps to="/me" label="About Me" />

        <q-separator vertical stretch />

        <q-route-tab no-caps to="/experiences" label="Experiences" />

        <q-separator vertical stretch />

        <q-route-tab no-caps to="/resume" label="Resume" />

        <q-separator vertical stretch />
      </q-tabs>
    </q-header>

    <q-page-container style="min-height: 87.5vh;">
      <router-view />
    </q-page-container>

    <div class="bg-primary" style="min-height: 90px;" >
      <div class="row" style="width: 98%; margin: 0 auto;">
        <div class="q-pa-md">
          <!-- <div class="text-white" style="font-size: 1.5em;">
            <div v-if="layoutConfig && layoutConfig.companyName" >
              Boundless Innovation @ {{ layoutConfig.companyName }}
            </div>

            <div v-else>
              Boundless Innovation
            </div>
          </div> -->

          <!-- <i
            class="text-weight-thin text-grey-5"
            style="font-size: .9em;"
          >
            Copyright © 2019 Wind River Systems, Inc.
          </i> -->
        </div>

        <q-space />

        <!-- <div class="q-pa-md" align="center">
          <div
            class="text-white cursor-pointer"
            @click="routeTo('/notices')"
          >
            Notices
          </div>
        </div> -->

        <!-- <div class="q-pa-md" align="center">
          <div class="text-white cursor-pointer" @click="routeTo('rootAbout')">
            About Us
          </div>
        </div> -->

        <div class="q-pa-md" align="center">
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
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
