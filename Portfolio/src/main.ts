// import './assets/main.css'
import '../node_modules/bootstrap/scss/bootstrap.scss' //Import Bootstrap scss

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js' //Import Bootstrap JS

import '../node_modules/material-symbols/index.css' //Import Material symbols

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
