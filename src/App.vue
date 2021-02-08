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
  background-color: #212F3C;
  }

.content-container {
    margin-left: 150px;
    margin-right: 150px;
}

.section-header {
  margin-top: 10%;
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
