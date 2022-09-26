<template>
  <div class="name-container">
    <div class="name">
      <div class="name-text">
        Jeromy Schultz
        <div class="bio">Full Stack Software Engineer</div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Power4 } from "gsap";
export default {
  name: "Name",
  mounted() {
    const tl = gsap.timeline();
    let container = gsap.utils.toArray(".name-container");
    let text = gsap.utils.toArray(".name-text");
    let header = gsap.utils.toArray(".header-container");

    tl.to(container, {
      background:
        "linear-gradient(225deg,rgba(161, 107, 108, 0.4) 0%, rgba(127, 140, 196, 0.4) 100%)",
      duration: 3,
      ease: Power4.easeOut,
    });
    tl.to(header, {
      y: 0,
      duration: 1,
      ease: Power4.easeOut,
      delay: -1,
    });

    tl.to(text, {
      color: "rgba(255,255,255,1.00)",
      duration: 1,
      ease: Power4.easeOut,
      delay: -1,
    });
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
  position: relative;
}

.name-container {
  font-weight: 800;
  height: 70vh;
  white-space: nowrap;
  padding-top: 95px;
  min-height: 300px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100vw;
  color: rgba(255, 255, 255, 0);
  background: linear-gradient(
    225deg,
    rgba(161, 107, 108, 0.8) 0%,
    rgba(127, 140, 196, 0.8) 100%
  );
}

.name {
  font-size: 4rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bio {
  font-weight: 200;
  font-size: 1rem;
}
/* .bio-container:before {
  content: "";
  width: 550px;
  height: 200px;
  background: inherit;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: inset 0 0 0 100px rgba(255, 255, 255, 0.1);
  filter: blur(5px);
} */

@media screen and (max-width: 640px) {
  .bio-container {
    width: 300px;
    min-width: 280px;
    height: 120px;
    position: relative;
    top: calc(40% - 60px);
    left: calc(50% - 150px);
    background: inherit;
    overflow: hidden;
  }

  .name {
    font-size: 2.5rem;
  }
}
</style>
