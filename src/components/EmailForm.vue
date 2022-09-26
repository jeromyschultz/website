<template>
  <div class="content-container">
    <div class="section-header" id="contact">
      <h2>Contact</h2>
      <div class="line-seperator"></div>
    </div>
    <div class="send-success" id="sendSuccess" style="display: none">
      Message Sent Successfully
    </div>
    <div class="form-container-wrapper">
      <form id="form" class="email-form" @submit.prevent="sendEmail">
        <label>Name</label><br />
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
        /><br /><br />
        <label>Email</label><br />
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
        /><br /><br />
        <label>Message</label><br />
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Message"
        >
        </textarea>
        <br /><br />
        <input class="send-button" type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "EmailForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_x1hrffj",
          "template_n6qpdhv",
          e.target,
          "user_r27YhhnGpc7L0qBnQPcVt"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            document.getElementById("sendSuccess");
            document.getElementById("form").reset();
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped>
.form-container-wrapper {
  padding-bottom: 10%;
}

.form-container {
  position: relative;
  background: linear-gradient(
    225deg,
    rgba(161, 107, 108, 0.3) 0%,
    rgba(127, 140, 196, 0.3) 100%
  );
  border-radius: 10px;
  margin: 20px auto auto auto;
  display: block;
  padding-bottom: 20px;
}

.email-form {
  margin-top: 20px;
}

.send-success {
  border-radius: 5px;
  margin: 20px 0;
  background: #198754;
  padding: 10px;
}

.email-form > input {
  padding-left: 5px;
  margin-top: 10px;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100%;
  background: rgba(48, 48, 48);
  color: white;
  font-family: inherit;
  /* padding-left: 10px; */
}

.email-form > textarea {
  padding: 5px;
  color: white;
  width: 100%;
  background: rgba(48, 48, 48);
  margin-top: 10px;
  border: none;
  outline: none;
  resize: vertical;
  font-family: inherit;
  border-radius: 5px;
}

.email-form > textarea,
.email-form > input {
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
}

.send-button {
  transition: 0.5s ease;
  height: 30px;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
}

.send-button:hover {
  background-color: rgba(161, 107, 108, 0.5);
}

-webkit-autofill::first-line,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  transition: background-color 5000s ease-in-out 0s;
  font-family: inherit;
}

@media screen and (max-width: 640px) {
  .form-container {
    width: 100%;
  }
}
</style>
