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
</style>
