<template>
  <div class="header-container">
    <div class="reference-container">
      <div v-on:click="scrollToAbout">About</div>
      <div v-on:click="scrollToProjects">Projects</div>
      <div v-on:click="scrollToContact">Contact</div>
    </div>
    <div class="link-container">
      <div>
        <a class="header-link" href="https://github.com/jeromyschultz">
          <font-awesome-icon :icon="['fab', 'gitlab']" size="lg"
        /></a>
      </div>
      <div>
        <a class="header-link" href="https://gitlab.com/schultzjf"
          ><font-awesome-icon :icon="['fab', 'github']" size="lg"
        /></a>
      </div>
      <div>
        <a
          class="header-link"
          href="https://www.linkedin.com/in/jeromy-schultz-6263971ab/"
          ><font-awesome-icon :icon="['fab', 'linkedin']" size="lg"
        /></a>
      </div>
      <div>
        <a class="header-link" href="https://www.instagram.com/jeromyschultz/">
          <font-awesome-icon :icon="['fab', 'instagram']" size="lg"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Header",
  methods: {
    scrollToAbout: function() {
      $("html, body").animate(
        {
          scrollTop: $("#about").offset().top - 200,
        },
        500
      );
    },
    scrollToProjects: function() {
      $("html, body").animate(
        {
          scrollTop: $("#projects").offset().top - 200,
        },
        500
      );
    },
    scrollToContact: function() {
      $("html, body").animate(
        {
          scrollTop: $("#contact").offset().top - 200,
        },
        500
      );
    },
  },
};
</script>

<style>
.header-link,
.header-link:hover,
.header_link:active {
  color: white;
}

.header-container {
  transform: translateY(-100%);
  width: 100vw;
  display: flex;
  position: fixed;
  justify-content: center;
  text-align: center;
  z-index: 999;
  padding: 1rem 0;
  background: #212121;
}

.reference-container {
  justify-content: center;
  display: flex;
  width: 50%;
}

.link-container {
  justify-content: center;
  display: flex;
  width: 50%;
}

.reference-container > div {
  margin: 20px;
}

.reference-container > div:hover {
  color: #eaecee;
  cursor: pointer;
}

.link-container > div {
  margin: 20px;
}

@media screen and (max-width: 640px) {
  .header-container {
    display: block;
  }

  .reference-container,
  .link-container {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
