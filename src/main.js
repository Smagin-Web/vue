import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
// import VueYandexMetrika from 'vue3-yandex-metrika'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)
// app.use(VueYandexMetrika, {
// 	id: 96439362,
// 	router: router,
// 	env: 'production'
// })

// app.mount('#app')

export const createApp = ViteSSG(
	App,
	{
		routes: setupLayouts(routes),
		base: import.meta.env.BASE_URL
	},

	ctx => {
		Object.values(import.meta.glob('./modules/*.js', { eager: true })).forEach(
			i => i.install?.(ctx)
		)
	}
)
