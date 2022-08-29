import { createApp } from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax3'
import { createPinia } from 'pinia'

import { createClient } from 'villus'

import './global.css'
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

const apolloClient = createClient({
    url: 'http://0.0.0.0:8000/graphql'
})

import { router } from './routes'

const app = createApp(App)

const pinia = createPinia()

app.use(Vuesax)
app.use(pinia)
app.use(router)
app.use(apolloClient)

app.mount('#app')
