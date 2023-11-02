import './assets/main.css'
import './assets/theme.css'
import 'primevue/resources/primevue.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Primevue from 'primevue/config'

import SelectButton from 'primevue/selectbutton';

createApp(App).use(router).use(Primevue).component('SelectButton', SelectButton).mount('#app')
