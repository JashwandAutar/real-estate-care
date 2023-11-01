import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Primevue from 'primevue/config'

createApp(App).use(router).use(Primevue).mount('#app')
