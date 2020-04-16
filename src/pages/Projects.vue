<template>
  <div class="q-pa-md">
    <div v-for="(val, key) in projects" :key="key.id" class="i-card">
      <q-card class="q-mb-md">
        <q-video
          v-if="projects[key].video"
          :ratio="4/2"
          :src="projects[key].video"
        />

        <q-img
          v-if="projects[key].image"
          :ratio="4/1"
          :src="projects[key].image"
        />

        <q-separator v-if="projects[key].video"/>

        <q-card-section class="" style="">
          <div class="text-h6">{{ projects[key].title }}</div>

          <q-separator color="primary"/>
          <q-separator/>

          <div
            v-if="projects[key].text.length > 300 && projects[key].hide"
            class="cursor-pointer q-px-sm"
            @click="projects[key].hide = false"
          >
<pre>
{{ projects[key].text.substring(0, 300) }}...

<span class="text-blue-7">Show More...</span>
</pre>
          </div>

          <div
            v-else
            class="cursor-pointer q-px-sm q-mb-md"
          >
<pre @click="projects[key].hide = true">
{{ projects[key].text }}
</pre>
            <a
              v-if="projects[key].url.link"
              :href="projects[key].url.link"
            >
              {{ projects[key].url.label }}
            </a>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          title: 'Covid Detection App',
          text: `Seeing doctors and nurses working days and nights tirelessly on the front-line of this pandemic, we thought to ourselves "surely, there has to be something we can do to help them". To help combat this pandemic, we believe it is crucial to be able to test more people for COVID-19 without overloading medical staff. So we set out to develop an application to help medical staff diagnose COVID19 faster with higher precision using Machine Learning.
    
Our web application takes X-ray or CT images of a patient's lung (PA), and it predicts whether or not a patient has been infected by COVID-19. Moreover, we use a centralized database to collect each and every single submission for farther improvement of our ML models.
    
We want to continually improve our models' accuracy when more validated data becomes available. We are exploring the idea of cooperating with new data types for better diagnosis of COVID-19, such as temperature, voice analysis for detecting dry cough, and other COVID-19 symptoms. Our ultimate goal is for our app to be able to diagnose with minimum supervising from medical staff to reduce their workload. Please check out our application by clicking on the link below:`,
          hide: true,
          video: 'https://www.youtube.com/embed/BUGDHaZMFGc',
          image: '',
          url: {
            label: 'Demo App =)',
            link: 'http://54.177.231.146/'
          }
        },
        {
          title: 'Eat Up',
          text: 'Thinking of what we can cook with what we have at home could be a hassle. What if there is a mobile application which allows us to know all the dishes we can make with the ingredients at hand? On top of that, if the user were to choose a dish he or she wants to make, it shows the preparation procedures for the specified dish. Now, we are cooking. Once the dish is made, the user can cross out all the ingredients which he or she has used up in a short survey; so, for the subsequent usage, the app knows that certain ingredients no longer exist. Also, when the user inputs the ingredient he or she has at hand, it will automatically put a freshness timer--best cooked before date--and prioritize these ingredients while considering the dishes he or she can make.',
          hide: true,
          video: '',
          image: '../statics/SFSU_logo.png',
          url: {
            label: 'Demo App =)',
            link: 'https://photowall-257b0.web.app/#/login'
          }
        },
        {
          title: 'RedditLite',
          text: 'Reddit is one of the biggest if not the biggest web forum for most Americans. Given that, there are still improvements to be made and the real-time post update is the one feature which we, as redditors, wish reddit has. What is real-time post update? Realtime post update is the ability of a post to render the comments in real-time as the users are interacting with the post. For instance, imagine “User A” is surfing through the post and the new comment was made to the post by “User B”, the new comment will appear on the post while the “User A” remains on the post. Currently, we will need to refresh the page to see the new comments made after the page is loaded on Reddit. So, our team will be building a webapp which is loosely based off of Reddit.com with the real-time post update ability for our final project.  That being said, we will try to implement all the features that reddit currently supports. However, due to the time constraint, we will most likely not maintain the tree structure that Reddit does with Parents and Childs comments. Also, we will not have the ability to create subthreads. As for the application, the user will need to log in before the user can read or create the posts. If the user does not have an account, he or she may register which will then redirect the user to dashboard upon successful register or log in. From the dashboard, the user may create a post or read the post where he or she can comment along with all the registered users.',
          hide: true,
          video: '',
          image: '../statics/SFSU_logo.png',
          url: {
            label: 'Source Code',
            link: 'https://github.com/pkthein/RedditLite'
          }
        },
        {
          title: 'DIYup',
          text: 'For most hobbyists, web-surfing for Do-It-Yourself (DIY) projects can sometimes be difficult since they are all scattered all over the internet. We believed that it would be nice if there were a large hub of DIY projects, and as a result, the idea for DIYup was born. With DIYup, guests and creators alike can browse and upload their own step-by-step DIY tutorials. Creator or not, our site makes it easy for anyone to pick up a variety of projects and follow step-by-step instructions with pictures to easily complete their project. Users can easily browse through the hottest projects on our site and sort depending on the difficulty or on the category of the project to suit their interests and level of building knowledge. Becoming a registered user comes with its own perks. As a registered user, users can become authors and upload their own projects, share their experience making a project from our site, rate, and save their favorite projects. As an author, authors can view and respond to comments to posts they’ve made as well as edit their original post in case of any typos or other errors. Any posts that are reported and found to be violating our site’s rules will be deleted by site administrators. With site administrators there will be a team looking at reported posts to ensure users follow our site’s rules and guidelines in order for our users to have the most enjoyable experience.',
          hide: true,
          video: '',
          image: '../statics/SFSU_logo.png',
          url: {
            label: 'Source Code',
            link: 'https://github.com/pkthein/DIYup'
          }
        }
      ]
    }
  }
}
</script>
