<template>
  <div class="q-pa-md">
    <q-card v-for="ind in num" :key="ind" class="i-card">
      <q-video
        :ratio="4/2"
        src="https://www.youtube.com/embed/BUGDHaZMFGc"
      />

      <q-separator></q-separator>

      <q-card-section class="" style="">
        <div class="text-h6">Covid Detection App</div>
        <q-separator color="primary"></q-separator>
        <pre
          v-if="text.length > 300 && hide"
          class="cursor-pointer q-px-sm"
          @click="hide = false"
        >
{{ text.substring(0, 300) }}...

<span class="text-blue-7">Show More...</span>
        </pre>

        <pre
          v-else
          class="cursor-pointer q-px-sm"
          @click="hide = true"
        >
{{ text }}

<a href="http://54.177.231.146/">Demo App =)</a>
        </pre>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 1,
      text: `Seeing doctors and nurses working days and nights tirelessly on the front-line of this pandemic, we thought to ourselves "surely, there has to be something we can do to help them". To help combat this pandemic, we believe it is crucial to be able to test more people for COVID-19 without overloading medical staff. So we set out to develop an application to help medical staff diagnose COVID19 faster with higher precision using Machine Learning.

Our web application takes X-ray or CT images of a patient's lung (PA), and it predicts whether or not a patient has been infected by COVID-19. Moreover, we use a centralized database to collect each and every single submission for farther improvement of our ML models.

We want to continually improve our models' accuracy when more validated data becomes available. We are exploring the idea of cooperating with new data types for better diagnosis of COVID-19, such as temperature, voice analysis for detecting dry cough, and other COVID-19 symptoms. Our ultimate goal is for our app to be able to diagnose with minimum supervising from medical staff to reduce their workload. Please check out our application by clicking on the link below:`,
      hide: true
    }
  }
}
</script>
