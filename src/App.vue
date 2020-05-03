<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script >
// import { cloudStore } from './firebase/init'

export default {
  name: 'App',
  async created () {
    // try {
    //   const doc = await cloudStore.collection('personal_website').doc('general')
    //     .get()

    //   if (doc.exists) {
    //     const data = doc.data()

    //     await cloudStore.collection('personal_website').doc('general').set({
    //       visits: data.visits + 1
    //     }, { merge: true })
    //   } else {
    //     throw new Error('Not Found!')
    //   }
    // } catch (error) {
    //   throw new Error(error)
    // }
  }
}
</script>

<style lang="stylus">
.i-card {
  max-width: 800px;
  min-width: 300px;
  width: 90vw;
  margin: 0 auto;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}

// https://tobiasahlin.com/blog/how-to-animate-box-shadow/
.hoverable {
  cursor: pointer;
  position: relative;
  display: inline-block;
  background-color: #fff;
  border-radius: 5px;
  // box-shadow: 0 0px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hoverable::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // box-shadow: 0 0px 0px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.hoverable:hover {
  -webkit-transform: scale(1.02, 1.02);
  transform: scale(1.02, 1.02);
}

.hoverable:hover::after {
  opacity: 1;
}
// -----------------------------------------------------------------------------

// Scrollbar width for horizontal and vertical scrollbars
div::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

// Scrollbar track's color and width
div::-webkit-scrollbar-track {
  background: #ddd;
  border-radius: 2px;
}

// Scrollbar color
div::-webkit-scrollbar-thumb {
  background: $grey-6;
  border-radius: 3px;
}

textarea {
  cursor: auto;
}

textarea::-webkit-scrollbar {
  width: 6px;
}

// Scrollbar track's color and width
textarea::-webkit-scrollbar-track {
  background: #ddd;
  border-radius: 2px;
}

// Scrollbar color
textarea::-webkit-scrollbar-thumb {
  background: $grey-6;
  border-radius: 3px;
}
</style>
