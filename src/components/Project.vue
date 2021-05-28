<template>
    <div class="content-container">
        <div class="project-container" v-bind:key='project.id' v-for='project in projects'>
            <div v-bind:class="project.imageContainerClass" class="project-image-container">
                <img class="project-image" :src='project.img'>
            </div>
            <div class="project-caption-container" v-bind:class='project.captionContainerClass'>
                <div class="project-name">
                    {{project.name}}
                </div>
                <div class="project-description">
                    {{project.description}}
                </div>
                <div class="repo-link-container"> 
                    Repo link <a class="repo-link" :href="project.repo">here</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default {
    name: 'Project',
    props: ['projects'],
    mounted(){
        gsap.registerPlugin(ScrollTrigger);

        const projectDescriptions = gsap.utils.toArray('.project-caption-container');
        const projectImages = gsap.utils.toArray('.project-image-container');

        projectDescriptions.forEach(description => {
            gsap.to(description, {
                x: 0,
                duration: 1.5,
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: description,
                    start: 'center 80%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none reverse',
                }
            })
        });
        projectImages.forEach(image => {
            gsap.to(image, {
                x: 0,
                duration: 1.5,
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: image,
                    start: 'center 80%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none reverse',
                }
            })
        })
    }
}
</script>

<style scoped>
.project-image-container {
    width: 80%;
    height: 100%;
    display: inline-block;
}

.project-caption-container {
    padding: 10px
}

.right-aligned-image-container {
    position: absolute;
    right: 0;
    transform: translateX(200%);
} 

.left-aligned-image-container {
    transform: translateX(-200%);
}

.repo-link-container {
    margin-top: 20px;
}

.repo-link {
    color: lightblue;
}

.project-name {
    font-size: 1.7vw;
    font-weight: bold;
    margin-bottom: 20px;
}

.project-description, .repo-link-container {
    font-weight: lighter;
    font-size: 1.3vw;
}

.project-caption-container {
    background-color: #17202A;
    position: absolute;
    border-radius: 10px;
    padding-bottom: 20px;
    top: 50%;
    width: 30%;
}

.right-aligned-caption-container {
    transform: translate(200%, -50%);
    right: 0;
} 

.left-aligned-caption-container {
    transform: translate(-200%, -50%);
    left: 0;
} 

.project-container {
    height: 32vw;
    position: relative;
    margin-bottom: 100px;
    margin-top: 20px;
}

.project-image {
    border-radius: 10px;
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 1060px) {

     
     .left-aligned-caption-container, .right-aligned-caption-container{
         position: relative;
         width: 100%;
         -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
         -moz-box-sizing: border-box;    /* Firefox, other Gecko */
         box-sizing: border-box;
         padding-top: 40px;
         top: 50%;
         margin-top: 50px;
     }

     .left-aligned-image-container, .right-aligned-image-container {
         width: 100%;
         position: relative;
         height: auto;
         min-width: auto;
         z-index: 1;
     }


     .project-container {
         margin-bottom: 50px;
         position: static;
         height: auto;
     } 

    .project-name {
        font-size: 15px;
    }

    .project-description {
        font-size: 10px;
    }

    .repo-link-container {
        font-size: 10px;
    }
}

</style>