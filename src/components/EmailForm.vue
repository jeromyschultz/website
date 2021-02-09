<template>
    <div class="content-container">
        <div class="section-header" id="contact">
            <h2>Contact</h2>
            <div class="line-seperator"></div>
        </div>
        <div class="form-container-wrapper">
            <div class="form-container">
                <form v-on:reset="formReset" id="form" class="email-form" @submit.prevent="sendEmail">
                    <label>Name</label><br/>
                    <input 
                        type="text" 
                        v-model="name"
                        name="name"
                        placeholder="Your Name"
                    ><br/><br/>
                    <label>Email</label><br/>
                    <input 
                        type="email" 
                        v-model="email"
                        name="email"
                        placeholder="Your Email"
                        ><br/><br/>
                    <label>Message</label><br/>
                    <textarea 
                        name="message"
                        v-model="message"
                        cols="30" rows="5"
                        placeholder="Message">
                    </textarea>
                    <br/><br/>
                    <input class="send-button" type="submit" value="Send">
                </form> 
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: "EmailForm",
    data() {
        return {
        name: '',
        email: '',
        message: ''
        }
    },
    methods: {
        sendEmail: (e) => {
            emailjs.sendForm('service_a3uem5b', 'template_n6qpdhv', e.target, 'user_r27YhhnGpc7L0qBnQPcVt')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    document.getElementById('form').reset();
                }, (error) => {
                    console.log('FAILED...', error);
            });
        }
    }
}
</script>

<style scoped>


.form-container-wrapper {
    padding-bottom: 10%;
}

.form-container {
    position: relative;
    background-color: #17202A;
    border-radius: 10px;
    width: 70%;
    margin: 20px auto auto auto;
    display: block;
    padding-bottom: 20px;
}

.email-form {
    padding: 40px;
    margin-top: 20px;
}

.email-form > input {
    padding-left: 5px;
    margin-top: 5px;
    height: 25px;
    border-radius: 5px;
    border: none;
    outline: none;
    width: 100%;
    background-color: #212F3C;
    color: white;
    font-family: inherit;
    /* padding-left: 10px; */

}

.email-form > textarea {
    padding: 5px;
    color: white;
    width: 100%;
    background-color: #212F3C;
    border: none;
    outline: none;
    resize: vertical;
    font-family: inherit;
    border-radius: 5px;
}

.email-form > textarea, .email-form > input {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
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
    background-color: #5D6D7E;
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