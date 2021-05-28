<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>



#app {
  width: 100vw;
  height: 100vh;
  color: white;
  font-family: 'Fira Code', monospace;  
}


body {
  margin: 0 !important;
  padding: 0;
  overflow-x: hidden;
  background-color: #212F3C;
  }

.content-container {
    margin-left: 10%;
    margin-right: 10%;
}

.line-seperator {
  transform: translateX(-200%);
}

.section-header {
  margin-top: 10%;
  overflow: hidden;
}

.section-header > h2 {
    transform: translateY(300%);
}

.line-seperator {
  background-color: #E5E7E9;
  height: 3px;
  max-width: 350px;
  min-width: 200px;
  border-radius: 1px;

}

@media screen and (max-width: 1060px) {
  .content-container {
    margin-left: 10%;
    margin-right: 10%;
  }
}

@media screen and (max-width: 640px) {
  .content-container {
    margin-left: 5%;
    margin-right: 5%;
  }
}


</style>
