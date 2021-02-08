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

