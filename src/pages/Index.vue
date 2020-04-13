<template>
  <q-page class="">
    <div class="flex flex-center q-mt-md">
      <q-avatar size="300px">
        <img src="../statics/Me.jpg">
      </q-avatar>
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
        In my freetime, I enjoy watching League of Legends (LoL), and playing turn-based strategy games. That being said, I am quite certain I will be re-joining the rift once Wild Rift launches. The primary reason for me quiting LoL was due to the fact that LoL client is a memory hog, and it always find a way to lag out during champion selection. Aside from gaming, I love cats, and soccer.
        <br />
      </div>
    </div><br />
  </q-page>
</template>

<script>
export default {
}
</script>
