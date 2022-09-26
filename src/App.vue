<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
:root {
  --rufus-pink: #a16b6c;
  --rufus-blue: #7f8cc4;
}
#app {
  width: 100vw;
  height: 100vh;
  color: white;
}

body {
  margin: 0 !important;
  padding: 0;
  overflow-x: hidden;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  background-color: #212121;
}

.content-container {
  margin-left: 10%;
  margin-right: 10%;
}

.line-seperator {
  transform: scale(1%);
}

.section-header {
  text-align: center;
  overflow: hidden;
  font-size: 1.2rem;
}

.section-header > h2 {
  transform: translateY(300%);
}

.line-seperator {
  background-color: #e5e7e9;
  height: 3px;
  max-width: 350px;
  min-width: 200px;
  border-radius: 1px;
  margin-left: auto;
  margin-right: auto;
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
