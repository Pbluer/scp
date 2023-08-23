import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vMask from '@devindex/vue-mask'
import "animate.css"
import "./style.css"
import "./assets/css/all.css"

createApp(App).use(store).use(router).use(vMask).mount('#app')
