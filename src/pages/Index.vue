<template>
  <q-page class="">
    <div class="q-mt-md">
      <!-- <q-avatar size="300px">
        <img src="../statics/Me.jpg">
      </q-avatar> -->
      <q-carousel
        v-model="slide"
        swipeable animated
        navigation padding arrows
        infinite
        :autoplay="5000"
        transition-prev="fade"
        transition-next="fade"
        control-color="primary"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <div class="" >
            <q-avatar size="300px">
              <img src="../statics/CasualMe.jpg">
            </q-avatar>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <div class="">
            <q-avatar size="300px">
              <img src="../statics/SeriousMe.jpg">
            </q-avatar>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <div class="" >
            <q-avatar size="300px">
              <img src="../statics/Me.jpg">
            </q-avatar>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">

      <q-parallax
        :height="250" :speed="1"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <!-- <h1 class="text-white">Basic</h1> -->
      </q-parallax>

      </div>
    </div>

    <div class="" align="center">
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
    </div><br />
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
