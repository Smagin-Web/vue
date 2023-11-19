import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsideView from '../views/InsideView.vue'
import ProceduresView from '../views/ProceduresView.vue'
import TechView from '../views/TechView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
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
		},
		{
			path: '/procedures',
			name: 'procedures',
			component: ProceduresView
		},

		{
			path: '/tech',
			name: 'tech',
			component: TechView
		}
	]
})

export default router
