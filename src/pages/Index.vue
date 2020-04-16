<template>
  <q-page class="">
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

    <div class="i-card q-pb-md" align="center">
      <div class="text-h4 q-px-sm">
        About Me
        <q-separator color="primary"></q-separator>
      </div>

      <div align="left" class="q-px-md q-pt-sm">
        Hello all! My name is Phyo Htut, and I am currently attending San Francisco State University (SFSU) for M.S in Computer Science. As for the focus, I am focusing on web development and internet applications. I did my undergrad in Electrical Engineering & Computer Science (EECS) at University of California, Berkeley (UCB).
        <br /><br />
        In my freetime, I enjoy watching League of Legends (LoL), and playing turn-based strategy games. That being said, I am quite certain I will be re-joining the rift once Wild Rift launches. Aside from gaming, I love cats, and soccer.
        <br />
      </div>
    </div>

    <br />

    <div class="i-card" align="center">
      <div class="text-h4 q-px-sm">
        Work Experiences
        <q-separator color="primary"></q-separator>
      </div>

      <div class="row q-px-md q-pt-sm justify-center q-gutter-sm">
        <q-intersection
          v-for="(val, key) in work"
          :key="key.id"
          transition="flip-right"
          class="intersect-card-desktop desktop-only hoverable"
        >
          <q-card class="q-ma-sm">
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
          <q-card class="q-ma-sm">
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
    </div><br />
  </q-page>
</template>

<script>
export default {
  data () {
    return {
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
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.intersect-card-desktop {
  height: 400px;
  width: 400px;
}

.intersect-card-mobile {
  height: 350px;
  width: 300px;
}
</style>
