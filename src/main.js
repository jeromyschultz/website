import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

 
library.add(faGithub, faGitlab, faInstagram, faLinkedin, faHandPointRight, faArrowRight, faHandPointDown, faMapPin);
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
