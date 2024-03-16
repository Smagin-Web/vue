import './assets/main.css'

// import { setupLayouts } from 'virtual:generated-layouts'
// import VueYandexMetrika from 'vue3-yandex-metrika'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'

import App from './App.vue'

export const createApp = ViteSSG(
	App,
	{
		routes: routes,
		base: import.meta.env.BASE_URL
	},

	ctx => {
		Object.values(import.meta.glob('./modules/*.js', { eager: true })).forEach(
			i => i.install?.(ctx)
		)
	}
)
