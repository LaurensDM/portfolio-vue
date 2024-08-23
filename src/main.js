import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// import 'vuetify/styles'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/main.css'
import i18n from './i18n'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1fbf03',
          secondary: '#237b14',
          accent: '#237b14',
          error: '#b71c1c'
        }
      }
    }
  }
})

const app = createApp(App)

app.use(vuetify)
app.use(i18n)
app.use(router)

app.mount('#app')
