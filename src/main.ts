import './assets/main.css'
import './assets/typography.css'
import './assets/swiper.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueYandexMetrika from 'vue3-yandex-metrika'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueYandexMetrika, {
	id: 96439362,
	router: router,
	env: 'production'
})

app.mount('#app')
