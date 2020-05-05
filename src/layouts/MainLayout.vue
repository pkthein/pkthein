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

    <div class="q-gutter-md q-mb-lg" align="center">
      <div>
        <q-btn
          flat style="min-width: 280px; border: black solid 1px;"
          @click="contactHelper"
          class="text-primary"
        >
          Contact Me
        </q-btn>
      </div>

      <!-- <div>
        <q-btn outline style="min-width: 280px;">Projects</q-btn>
      </div>

      <div>
        <q-btn outline style="min-width: 280px;">Resume</q-btn>
      </div> -->
    </div>

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

    <!-- Dialog for Contact Me -->
    <q-dialog
      persistent
      v-model="contactDialog.active"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card
        v-if="contactDialog.active"
        style="min-width: 280px; max-width: 500px; width: 98vw;"
      >
        <q-form @submit="onSubmit">
          <q-bar class="bg-primary">
            <span class="text-white" style="font-size: 16px;">Contact Me</span>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup />
          </q-bar>

          <div class="q-px-sm q-pt-md q-gutter-sm">
            <q-input
              dense outlined required
              v-model="contactDialog.subject"
              label="Subject" type="text"
            />

            <q-input
              dense outlined required
              v-model="contactDialog.email"
              label="Return Email" type="email"
            />

            <div>
              <q-input
                dense outlined required
                v-model="contactDialog.body"
                label="Description" type="textarea"
              />
            </div>
          </div>

          <q-card-actions align="right" class="">
            <q-btn
              :disable="
                !contactDialog.email || !contactDialog.subject ||
                !contactDialog.body
              "
              :color="
                !contactDialog.email || !contactDialog.subject ||
                !contactDialog.body ? 'negative' : 'positive'
              "
              outline type="submit" label="Send"
            />
            <q-btn outline class="bg-white" label="Close" v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { cloudStore } from '../firebase/init'

export default {
  data () {
    return {
      contactDialog: {
        active: false,
        subject: null,
        email: null,
        body: null
      }
    }
  },
  methods: {
    goTo: function (path) {
      window.open(path, '_blank', 'noopener')
    },
    routeTo: function (path) {
      this.$router.push(path).catch(() => false)
    },
    contactHelper: function () {
      this.contactDialog.subject = ''
      this.contactDialog.email = ''
      this.contactDialog.body = ''

      this.contactDialog.active = true
    },
    onSubmit: async function () {
      try {
        await cloudStore.collection('personal_website').doc('general').set({
          [this.contactDialog.email]: {
            subject: this.contactDialog.subject,
            body: this.contactDialog.body
          }
        }, { merge: true })

        this.$q.notify({
          message: 'I will get back to you as soon as possible.',
          position: 'bottom',
          timeout: 2000,
          color: 'positive',
          textColor: 'white',
          icon: 'check',
          actions: [
            {
              icon: 'close',
              color: 'white'
            }
          ]
        })

        this.contactDialog.active = false
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
