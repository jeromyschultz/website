<template>
    <div>
        <Header />
        <Name />
        <About />
        <ProjectSeperator />
        <Project v-bind:projects='projectData'/>
        <EmailForm/>
    </div>
</template>

<script>

import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '../components/Header.vue'
import Name from '../components/Name.vue'
import About from '../components/About.vue'
import ProjectSeperator from '../components/ProjectSeperator.vue'
import Project from '../components/Project.vue'
import EmailForm from '../components/EmailForm.vue'


export default {
    name: 'Home',
    components: {
        Header,
        Name,
        About,
        ProjectSeperator,
        Project,
        EmailForm
    },
    mounted(){
        gsap.registerPlugin(ScrollTrigger)
        const headers = gsap.utils.toArray('.section-header > h2')
        headers.forEach(header => {
            gsap.to(header, {
                y: 0,
                duration: 1,
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: header,
                    toggleActions: 'play none none reverse',
                    start: 'top bottom',
                    end: 'top bottom'
                }
            })
        })
        const headerLines = gsap.utils.toArray('.line-seperator')
        headerLines.forEach(line => {
            gsap.to(line, {
                x: 0,
                duration: 1,
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: line,
                    toggleActions: 'play none none reverse',
                    start: 'top bottom',
                    end: 'top bottom'
                }
            })
        })

    },

    data() {
        return {
            projectData : [
                {
                    name: 'Swiss Tek Website',
                    description: 'A website built for a coating company based in Pewaukee, WI. Uses ReactJS to render pages along with third party API\'s like Google Maps to enhance user experience ',
                    img: require('../Media/swisstek.jpeg'),
                    imageContainerClass: 'left-aligned-image-container',
                    captionContainerClass: 'right-aligned-caption-container',
                    repo: 'https://gitlab.com/schultzjf/swiss-tek'
                },
                {
                    name: 'Trivia App',
                    description: 'A trivia Web Application using ASP.NET MVC. Trivia question data supplied by kaggle.com and maintained with MongoDB',
                    img: require('../Media/quizapp.jpg'),
                    imageContainerClass: 'right-aligned-image-container',
                    captionContainerClass: 'left-aligned-caption-container',
                    repo: 'https://github.com/jeromyschultz/TriviaApp.git'
                },
                {
                    name: 'Snake',
                    description: 'A simple snake game made with vanilla javascript, html, and css',
                    img: require('../Media/snake.gif'),
                    imageContainerClass: 'left-aligned-image-container',
                    captionContainerClass: 'right-aligned-caption-container',
                    repo: 'https://gitlab.com/schultzjf/swiss-tek'
                },
                {
                    name: 'Giftly (In Progress)',
                    description: 'A web application that gives users the ability to exchange gifts online. Front end rendering done with ReactJS and user and gift data maintained with MySQL',
                    img: require('../Media/giftly.jpg'),
                    imageContainerClass: 'right-aligned-image-container',
                    captionContainerClass: 'left-aligned-caption-container',
                    repo: 'https://gitlab.com/msoe.edu/sdl/y21sdl/group-giftex/giftex.git'
                } 
            ]
        }
    }
}
</script>

