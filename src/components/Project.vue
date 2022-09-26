<template>
  <div class="content-container">
    <div
      class="project-container"
      v-bind:key="project.id"
      v-for="project in projects"
    >
      <div
        class="project-caption-container"
        v-bind:class="project.captionContainerClass"
      >
        <div class="project-name">
          {{ project.name }}
        </div>
        <div class="project-description">
          {{ project.description }}
        </div>
        <div class="visit-links-container">
          <template v-if="project.repo !== ''">
            <a class="repo-link" :href="project.repo">Repo</a>
          </template>
          <template v-if="project.website !== ''">
            <a class="site-link" :href="project.website">Visit</a>
          </template>
        </div>
        <!-- <div class="repo-link-container">
          Repo link <a class="repo-link" :href="project.repo">here</a>
        </div> -->
        <div class="technology-wrapper">
          <div
            v-bind:key="technology.id"
            v-for="technology in project.technologies"
            class="technology-list"
          >
            <div class="technology-icon-wrapper">
              <img
                class="technology-icon"
                :src="technology.img"
                :alt="technology.name"
              />
            </div>
            <div class="technology-name">{{ technology.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Header from "./Header.vue";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  //components: { Header },
  name: "Project",
  props: ["projects"],
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const projectDescriptions = gsap.utils.toArray(
      ".project-caption-container"
    );
    //const projectImages = gsap.utils.toArray(".project-image-container");

    projectDescriptions.forEach((description) => {
      gsap.to(description, {
        x: 0,
        duration: 1.5,
        ease: Power4.easeOut,
        scrollTrigger: {
          once: true,
          trigger: description,
        },
      });
    });
  },
};
</script>

<style scoped>
.project-caption-container {
  flex: 1;
  line-height: 24px;
}

.project-image-container {
  flex: 1;
}

.visit-links-container {
  display: flex;
  max-width: 500px;
  margin: 35px 0;
  margin-right: auto;
  margin-left: auto;
  background-color: #303030;
  border-radius: 5px;
}

.visit-links-container > a {
  display: block;
  transition: all 0.5s ease;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  height: 100%;
  padding: 10px;
  color: #eee;
  text-decoration: none;
  cursor: pointer;
}

.visit-links-container > a:hover:nth-child(1) {
  background-color: rgba(161, 107, 108, 0.5);
}

.visit-links-container > a:hover:nth-child(2) {
  background-color: rgba(127, 140, 196, 0.5);
}

.repo-link-container {
  margin-top: 20px;
}

.repo-link {
  color: lightblue;
}

.technology-list {
  display: flex;
}

.technology-wrapper {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.technology-icon-wrapper {
  width: 25px;
  height: 25px;
  position: relative;
}

.project-icon-wrapper {
  margin-right: 20px;
}

.technology-icon {
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  position: absolute;
}

.technology-name {
  margin-left: 10px;
}

.project-name {
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.project-description,
.repo-link-container {
  font-size: 1rem;
}

.project-container {
  display: flex;
  padding: 3rem 0;
}

.project-image {
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 1060px) {
  .left-aligned-caption-container,
  .right-aligned-caption-container {
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box;
    padding-top: 40px;
    top: 50%;
    margin-top: 50px;
  }

  .left-aligned-image-container,
  .right-aligned-image-container {
    width: 100%;
    position: relative;
    height: auto;
    min-width: auto;
    z-index: 1;
  }

  .project-container {
    flex-direction: column;
    padding: 0 0 3rem 0;
  }
}
</style>
