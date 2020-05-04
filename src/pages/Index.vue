<template>
  <q-page class="">
    <!-- Images -->
    <div class="q-mt-md">
      <q-carousel
        v-model="slide"
        swipeable animated navigation padding infinite
        transition-prev="fade"
        transition-next="fade"
        control-color="primary"
        :autoplay="8000"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <div class="" >
            <q-avatar size="300px" class="cursor-pointer" @click="slide = 2">
              <img src="../statics/CasualMe.jpg">
            </q-avatar>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <div class="">
            <q-avatar size="300px" class="cursor-pointer" @click="slide = 3">
              <img src="../statics/SeriousMe.jpg">
            </q-avatar>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <div class="" >
            <q-avatar size="300px" class="cursor-pointer" @click="slide = 1">
              <img src="../statics/Me.jpg">
            </q-avatar>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <q-parallax
      :height="250" :speed="1"
      class="desktop-only"
      src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
    </q-parallax>

    <!-- About Me -->
    <div class="i-card q-pb-md" align="center">
      <div class="text-h4 q-px-sm q-py-md">
        About Me
      </div>
      <q-separator color="primary"></q-separator>

      <div align="left" class="q-px-md q-pt-sm">
        Hello all! My name is Phyo Htut, and I am currently attending San Francisco State University (SFSU) for M.S in Computer Science. As for the focus, I am focusing on web development and internet applications. I did my undergrad in Electrical Engineering & Computer Science (EECS) at University of California, Berkeley (UCB).
        <br /><br />
        In my freetime, I enjoy watching League of Legends (LoL), and playing turn-based strategy games. That being said, I am quite certain I will be re-joining the rift once Wild Rift launches. Aside from gaming, I love cats, and soccer.
        <br />
      </div>
    </div>

    <!-- Work Experiences -->
    <div class="i-card" align="center">
      <div class="text-h4 q-px-sm q-py-md">
        Work Experiences
      </div>
      <q-separator color="primary"></q-separator>

      <div class="row q-px-md q-pt-sm justify-center q-gutter-sm">
        <q-intersection
          v-for="(val, key) in work"
          :key="key.id"
          transition="flip-right"
          class="intersect-card-desktop desktop-only hoverable"
        >
          <q-card class="q-ma-sm" @click="dialogHelper(key)">
            <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
            <q-img
              contain
              class="q-mt-md"
              :ratio="4/2.5"
              :src="work[key].image"
            />

            <q-card-section>
              <div class="text-h6 text-primary">{{ work[key].company }}</div>
              <div class="text-subtitle1 text-primary">
                {{ work[key].location }}
              </div>
              <div class="text-subtitle2">{{ work[key].title }}</div>
              <div class="text-subtitle2 text-grey">
                From {{ work[key].start }} to {{ work[key].end  }}
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>

        <q-intersection
          v-for="(val, key) in work"
          :key="key.id"
          transition="flip-right"
          class="intersect-card-mobile mobile-only"
        >
          <q-card class="q-ma-sm" @click="dialogHelper(key)">
            <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
            <q-img
              contain
              class="q-mt-md"
              :ratio="4/2.5"
              :src="work[key].image"
            />

            <q-card-section>
              <div class="text-bold text-primary" style="font-size: 18px;">{{ work[key].company }}</div>
              <div class="text-subtitle1 text-primary">
                {{ work[key].location }}
              </div>
              <div class="text-subtitle2">{{ work[key].title }}</div>
              <div class="text-subtitle2 text-grey">
                From {{ work[key].start }} to {{ work[key].end  }}
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>

    <br />

    <!-- Dialog for Work -->
    <q-dialog
      v-model="dialogData.active"
      transition-show="rotate"
      transition-hide="rotate"
    >
      <q-card v-if="dialogData.active">
        <q-bar class="bg-primary">
          <q-space />

          <q-btn dense flat icon="close" v-close-popup />
        </q-bar>

        <q-toolbar class="q-pb-lg bg-primary" align="center">
          <q-toolbar-title align="center">
            <q-avatar size="120px">
              <img
                :src="dialogData.data.image" style="border: solid white 2px;"
              >
            </q-avatar>
          </q-toolbar-title>
        </q-toolbar>

        <pre
          class="q-px-md"
          style="max-width: 450px; margin-top: -8px; margin-bottom: -14px;"
        >
          {{ dialogData.description }}
        </pre>

        <q-card-actions align="right" class="">
          <q-btn outline class="bg-white" label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      dialogData: {
        active: false,
        data: null,
        description: null
      },
      slide: 1,
      work: [
        {
          company: 'Wind River Systems',
          location: 'Alameda, CA, USA',
          title: 'R&D Engineering Intern',
          start: 'Feb 2019',
          end: 'PRESENT',
          image: '../statics/WRS_logo.png'
        },
        {
          company: 'Youth Society for Eduation',
          location: 'Daly City, CA, USA',
          title: 'Fullstack Developer',
          start: 'Nov 2017',
          end: 'PRESENT',
          image: '../statics/YSE_logo.jpg'
        },
        {
          company: 'The Coder School',
          location: 'San Mateo, CA, USA',
          title: 'Code Coach',
          start: 'Aug 2017',
          end: 'PRESENT',
          image: '../statics/TCS_logo.png'
        },
        {
          company: 'US Marine Corps',
          location: 'San Jose, CA, USA',
          title: '1345: Heavy Equipment Operator',
          start: 'July 2010',
          end: 'Oct 2014',
          image: '../statics/USMC_logo.png'
        }
      ],
      workDescription: [
        {
          description: `
Wind River Systems
Alameda, CA, USA
IP Research and Development Engineering Intern
FEB 2019 - PRESENT

Innovation Tracker (Fullstack)
MAY 2019 - PRESENT
❖ Serves as end to end engineer for innovation project management software.
❖ Documents the maintenance manual and user manual for the software every 3 weeks.
❖ Containerizes the software for automation.
❖ Technologies: Vue.js, Quasar, Firebase, and Docker.

S-Parts (Blockchain: Hyperledger Sawtooth)
FEB - MAY 2019
❖ Re-factored the data nodes from comma-separated values (CSV) to Javascript object notation (JSON).
❖ Designed and implemented backend APIs, which allowed the user to reconstruct states of an object associated with the UUID at any given timestamp.
❖ Documented the user manual for the software and containerized the software for automation.
❖ Technologies: Python, Flask, and Docker.`
        },
        {
          description: `
Youth Society for Education
Fullstack Developer
Daly City, CA, USA
NOV 2017 - PRESENT

❖ Helps build a custom webportal for a non-profit organization as a voluntary developer.
❖ Designs the data model and implements components for the webportal by utilizing ReactJS and Firebase.
❖ Serves as a git master for the project repository.
❖ Technologies: React.js, Redux, Express.js, and Firebase.`
        },
        {
          description: `
The Coder School
Code Coach
San Mateo, CA, USA
AUG 2017 - PRESENT

❖ Mentors students in Python, Java, and Javascript in fundamental of programming.
❖ Challenges students with coding puzzles to further advance their skills in algorithm, control flow, and
data structuring.`
        },
        {
          description: `
US Marine Corps
Enlisted Marine
San Jose, Ca, USA
JUL 2010- OCT 2014

❖ Looked after the well-being and the readiness of each junior Marines.
❖ Performed tasks in group settings while upholding safety standards and timely completion.`
        }
      ]
    }
  },
  methods: {
    dialogHelper: function (index) {
      this.dialogData.data = this.work[index]
      this.dialogData.description = this.workDescription[index].description

      this.dialogData.active = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.intersect-card-desktop {
  height: 375px;
  width: 350px;
}

.intersect-card-mobile {
  height: 350px;
  width: 300px;
}
</style>
