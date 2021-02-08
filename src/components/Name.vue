<template>
    <div class="yosemite-container"> 
        <div class="bio-container">
            <h1 class="name">I'm Jeromy Schultz</h1> 
            <p class="bio">Software Engineering Major</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Name'
}
</script>

<style scoped>


h1, p { 
    text-align: center;
    position: relative;
}

.yosemite-container {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-image:url("../Media/yosemite.jpg");
    width: 100%;
    height: 600px;
    
}

.name {
    font-size: 40px;
}

.bio-container {
    width: 500px;
    position: relative;
    top:calc(40% - 50px);
    left:calc(50% - 250px);
    height: 150px;
    background: inherit;
    overflow: hidden;
} 

.bio-container:before{
    content: '';
    width: 550px;
    height: 200px;
    background: inherit; 
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: inset 0 0 0 100px rgba(255,255,255,0.1);
    filter: blur(5px);
} 

@media screen and (max-width: 640px) {
    .bio-container {
        width: 300px;
        min-width: 280px;
        height: 120px;
        position: relative;
        top:calc(40% - 60px);
        left:calc(50% - 150px);
        background: inherit;
        overflow: hidden;
    }

    .name {
        font-size: 26px;
    }

    .bio {
        font-size: 15px;
    }
    
}

</style>