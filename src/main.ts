import './assets/main.css'
import './assets/typography.css'
import './assets/swiper.css'

// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
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
	({ app, router, initialState }) => {
		const pinia = createPinia()
		app.use(createPinia())
		// app.use(VueYandexMetrika, {
		// 	id: 96439362,
		// 	router: router,
		// 	env: 'production'
		// })

		// if (import.meta.env.SSR) initialState.pinia = pinia.state.value
		// else pinia.state.value = initialState.pinia || {}

		// router.beforeEach((to, from, next) => {
		// 	const store = useRootStore(pinia)
		// 	if (!store.ready)
		// 		// perform the (user-implemented) store action to fill the store's state
		// 		store.initialize()
		// 	next()
		// })
	}
)
