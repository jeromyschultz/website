<template>
  <div>
    <Header />
    <Name />
    <div
      id="bottom-content"
      style="background: #212121; position: relative; z-index: 998"
    >
      <About />
      <ProjectSeperator />
      <Project v-bind:projects="projectData" />
      <EmailForm />
    </div>
  </div>
</template>

<script>
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header.vue";
import Name from "../components/Name.vue";
import About from "../components/About.vue";
import ProjectSeperator from "../components/ProjectSeperator.vue";
import Project from "../components/Project.vue";
import EmailForm from "../components/EmailForm.vue";

export default {
  name: "Home",
  components: {
    Header,
    Name,
    About,
    ProjectSeperator,
    Project,
    EmailForm,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const headers = gsap.utils.toArray(".section-header > h2");
    const bottomContent = gsap.utils.toArray("#bottom-content");
    tl.to(bottomContent, {
      opacity: 1,
      duration: 1,
      ease: Power4.easeOut,
      delay: -1,
    });
    headers.forEach((header) => {
      gsap.to(header, {
        y: 0,
        duration: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: header,
          once: true,
        },
      });
    });

    const headerLines = gsap.utils.toArray(".line-seperator");
    headerLines.forEach((line) => {
      gsap.to(line, {
        scale: 1,
        duration: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: line,
          once: true,
        },
      });
    });
  },

  data() {
    return {
      projectData: [
        {
          name: "Spotify Clone",
          icon: require("../Media/Icons/Project/spotify.svg"),
          description:
            "My latest side project is a clone of Spotify using technologies that I've never had experience with in school or industry. I wanted to clone Spotify because I use it everyday, and the web API is incredibly robust. Any informaiton on the native app can be found using the API plus additional metadata - like who your recent most listened to songs and artists are. The full technology stack for this project includes React and MaterialUI for the frontend, Redux for managing global state, GraphQL to contact the Spotify API, and deployed using Heroku.",
          img: require("../Media/spotifyclone.jpeg"),
          imageContainerClass: "left-aligned-image-container",
          captionContainerClass: "right-aligned-caption-container",
          technologies: [
            {
              name: "React",
              img: require("../Media/Icons/Technologies/react.svg"),
            },
            {
              name: "MaterialUI",
              img: require("../Media/Icons/Technologies/materialui.svg"),
            },
            {
              name: "Redux",
              img: require("../Media/Icons/Technologies/redux.svg"),
            },
            {
              name: "GraphQL",
              img: require("../Media/Icons/Technologies/graphql.svg"),
            },
            {
              name: "Heroku",
              img: require("../Media/Icons/Technologies/heroku.svg"),
            },
          ],
          repo: "https://github.com/jeromys23/spotify-clone",
          website: "https://jfs-spotify-clone.herokuapp.com/",
        },
        {
          name: "AI 4 12K",
          icon: require("../Media/Icons/Project/msoe.svg"),
          description:
            "For MSOE's Senior Design course, 4 classmates and I built AI 4 12K. AI 4 12K is a website made with the intention to get younger kids more involved in computer science. The inspiration behind this idea was that everyone in our group didn't come into college knowing SE/CS would be our chosen career paths. This decision wasn't apparent to us due in big part to the lack of exposure to computer science in highschool. We wanted to make younger kids more aware about computer science and software as a whole, so we created a website where they can learn about the fundamentals of computer science at a high level. It is developed using React and MaterialUI for the frontend, Flask as the Python backend, and it is deployed in Azure. ",
          img: require("../Media/seniordesign.png"),
          imageContainerClass: "left-aligned-image-container",
          captionContainerClass: "right-aligned-caption-container",
          technologies: [
            {
              name: "React",
              img: require("../Media/Icons/Technologies/react.svg"),
            },
            {
              name: "MaterialUI",
              img: require("../Media/Icons/Technologies/materialui.svg"),
            },
            {
              name: "Flask",
              img: require("../Media/Icons/Technologies/python.svg"),
            },
            {
              name: "Azure",
              img: require("../Media/Icons/Technologies/azure.svg"),
            },
          ],
          repo: "",
          website: "",
        },
        {
          name: "Giftly",
          icon: require("../Media/Icons/Project/giftly.svg"),
          description:
            "MSOE has a course called 'Software Development Lab', which is a Senior Design-esque course, but for juniors. Our team of 4 worked with a product owner to create a gift sharing application designed to make exchanging gifts easier. The high-level requirements were simple: allow users to post gifts, have others contribute to them, then allow the creators to purchase them. With those requirements we made Giftly, a React application that we coined as a social media for gift sharing. Users can create profiles, add friends, and post gifts to their page using an Amazon URL. For frontend styling we used Bootstrap, MySQL to handle data fetching and storage, and deployed using NGINX.",
          img: require("../Media/swisstek.jpeg"),
          imageContainerClass: "left-aligned-image-container",
          captionContainerClass: "right-aligned-caption-container",
          technologies: [
            {
              name: "React",
              img: require("../Media/Icons/Technologies/react.svg"),
            },
            {
              name: "Bootstrap",
              img: require("../Media/Icons/Technologies/bootstrap.svg"),
            },
            {
              name: "MySQL",
              img: require("../Media/Icons/Technologies/mysql.svg"),
            },
            {
              name: "NGINX",
              img: require("../Media/Icons/Technologies/nginx.svg"),
            },
          ],
          repo:
            "https://gitlab.com/msoe.edu/sdl/sdl/old/old-versions/giftex-group_y21sdl/giftex",
          website: "",
        },
        {
          name: "Swiss Tek Website",
          icon: require("../Media/Icons/Project/swisstek.svg"),
          description:
            "Back in 2017 when I decided that I was interested in web development, the Swiss Tek website was the first full project I had built. Swiss Tek is a company based out of Pewaukee, Wisconsin specializing in metal coating. I built a website for them using React, as their existing website needed some modernization.",
          img: require("../Media/swisstek.jpeg"),
          imageContainerClass: "left-aligned-image-container",
          captionContainerClass: "right-aligned-caption-container",
          technologies: [
            {
              name: "React",
              img: require("../Media/Icons/Technologies/react.svg"),
            },
            {
              name: "Bootstrap",
              img: require("../Media/Icons/Technologies/bootstrap.svg"),
            },
          ],
          repo: "https://gitlab.com/schultzjf/swiss-tek",
          website: "",
        },
      ],
    };
  },
};
</script>
