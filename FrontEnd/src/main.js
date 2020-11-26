import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import axios from 'axios'
import router from './router/index'


import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faUserCircle,faAddressBook,faUser,faSignOutAlt,faPlusCircle,faTrash,faComments,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faUserCircle,faAddressBook,faUser,faSignOutAlt,faPlusCircle,faTrash,faComments,faPaperPlane);
Vue.component('vue-fontawesome', FontAwesomeIcon);
import Chat from 'vue-beautiful-chat'


import responsive from 'vue-responsive'
Vue.use(responsive)
import vuetify from '@/plugins/vuetify.js' // path to vuetify export


Vue.use(vuetify)

Vue.use(Chat)
// ...

axios.defaults.baseURL="http://localhost:8080/usuarios"
// internal icons


// ...
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
 
});



Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')