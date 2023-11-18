import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsideView from '../views/InsideView.vue'

const baseUrl = import.meta.env.BASE_URL
const history = import.meta.env.SSR
	? createMemoryHistory(baseUrl)
	: createWebHistory(baseUrl)

const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/inside',
			name: 'inside',
			component: InsideView
		}
	]
})

export default router
