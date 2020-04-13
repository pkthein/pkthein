<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script >
export default {
  name: 'App'
}
</script>

<style lang="stylus">
.i-card {
  max-width: 1000px;
  min-width: 300px;
  width: 90vw;
  min-height: 300px;
  margin: 0 auto;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
</style>
