<template>
    <div class="content-container"> 
        <div class="section-header" id="about">
            <h2>About Me</h2>
            <div class="line-seperator"></div>
        </div>
        <div class="about-container">
            <div class="bio-container"> 
                <p>Hello, I'm Jeromy Schultz. I'm a Software Engineering student from Milwaukee interested in 
                    full stack web development. I'm most familiar with Javascript, ReactJS,
                    and VueJS on the frontend and MySQL and MongoDB on the backend, but I'm always open
                    to learning new technologies.<br><br>Aside from coding, I enjoy hiking, climbing, and
                    visiting Mother Nature's most beautiful places, like this one 
                    <font-awesome-icon class="hand-right" icon="hand-point-right" />
                    <font-awesome-icon class="hand-down" icon="hand-point-down"/>  </p>
            </div>   
            <div class="jasper-container"> 
                <div>
                    <div class="jasper-caption">Jasper<br> Alberta, CA</div>
                    <img class="jasper-image" src="..//Media/jasper.jpg"/>
                    <div class="jasper-location">
                        <font-awesome-icon class="map-pin" icon="map-pin"/>
                        Jasper, Alberta, CA
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>




export default {
    name: 'About'
}
</script>

<style scoped>
.about-container {
    display: flex;
    margin-top: 20px;
}

.jasper-location {
    display: none;
}

.jasper-caption {
    position: absolute;
    width: 150px;
    text-align: center;
    height: 45px;
    border-radius: 10px;
    background-color: #5D6D7E;
    top: -20px;
    right: -20px;
    z-index: 1000;
}

.bio-container {
    width: 90%;
    margin-right: 20px;
}

.jasper-container {
    width: 100%;
    height: 100%;
}


.jasper-image {
    width: 480px;
    height: 320px;
    border-radius: 10px;
}

.jasper-container > div {
    position: relative;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.hand-down {
    display: none;
}

@media screen and (max-width: 1060px) {
     .about-container {
         display: block;
     }

     .hand-down {
         display: inline;
     }

     .hand-right {
         display: none;
     }

     .jasper-container {
         margin-top: 50px;
     }

     .jasper-image {
         display: block;
         margin-left: auto;
         margin-right: auto;
     }

     .bio-container {
         margin: 0;
         width: 100%;
     }

     .map-pin {
         margin-right: 10px;
     }

}

@media screen and (max-width: 640px) {
    .jasper-image{
        margin: none;
        width: 90%;
        height: 100%;
    }

    .jasper-caption {
        display: none;
    }

    .jasper-container > div {
        width: 100%;
        display: static;
    }

    .jasper-location {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;
        padding-top: 40px;
        transform: translateY(-30px);
        z-index: -1000;
        border-radius: 10px;
        display: flex;
        background-color: #17202A;
        font-size: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
    }


}






</style>