import Vue from 'vue'
import HelloWorld from "@/components/HelloWorld";


import 'bootstrap/dist/css/bootstrap.css'
import VueCookies from 'vue-cookies'
import axios from "axios";
import VueAxios from "vue-axios";
import MessagingApp from "./components/MessagingApp";

import './store';
import './mixin';
Vue.use(VueCookies);
Vue.use(VueAxios, axios);
Vue.config.productionTip = true


const Components = {
    HelloWorld,
    MessagingApp,
}
Object.keys(Components).forEach(name => {
    // console.info('name: '+ name);
    Vue.component(name,Components[name])
})
export default Components

// new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app')
