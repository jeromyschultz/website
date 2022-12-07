<template>
  <div class="content-container about-content">
    <div class="section-header" id="about">
      <h2>About Me</h2>
      <div class="line-seperator"></div>
    </div>
    <div class="about-container">
      <div class="bio-container">
        <p>
          I am currently a Software Engineer at Xorbix Technologies Inc. located
          in Milwaukee, WI. I've been in this role since June 2021 where I've
          been able to contribute to custom software solutions, managed
          services, and internal software improvements.
          <br /><br />
          Before my industry experience, I graduated from the Milwaukee School
          of Engineering with a degree in Software Engineering. I found my
          passion for software here shortly after I transferred from UW-Madison
          in 2018.
          <br /><br />
          My software knowledge is rooted in object-oriented programming
          languages such as C# and Java. In addition, I have experience working
          on full-stack applications, creating robust backends using Node and
          SQL, and user-friendly frontends using JavaScript and React.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-container {
  display: flex;
  margin-top: 20px;
}

.about-content {
  padding: 4rem 0;
}

.bio-container {
  width: 90%;
  margin-right: 20px;
  color: #e0e0e0;
}

@media screen and (max-width: 1060px) {
  .about-container {
    display: block;
  }

  .bio-container {
    margin: 0;
    width: 100%;
  }

  .map-pin {
    margin-right: 10px;
  }
}
</style>
