import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsideView from '../views/InsideView.vue'
import ProceduresView from '../views/ProceduresView.vue'
import TechView from '../views/TechView.vue'
import PricesView from '@/views/PricesView.vue'
import NavView from '@/views/NavView.vue'
import DevicesView from '@/views/DevicesView.vue'
import MediaView from '@/views/MediaView.vue'
import FaqView from '@/views/FaqView.vue'
import MastersView from '@/views/MastersView.vue'
import MasterView from '@/views/MasterView.vue'
import ReviewView from '@/views/ReviewView.vue'
import ReviewInsideView from '@/views/ReviewInsideView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'
import BranchesView from '@/views/BranchesView.vue'
import MediaPostView from '@/views/MediaPostView.vue'
import PolicyView from '@/views/PolicyView.vue'
import ConceptsView from '@/views/ConceptsView.vue'

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
		},
		{
			path: '/prices',
			name: 'prices',
			component: PricesView
		},
		{
			path: '/nav',
			name: 'nav',
			component: NavView
		},
		{
			path: '/devices',
			name: 'devices',
			component: DevicesView
		},
		{
			path: '/media',
			name: 'media',
			component: MediaView
		},
		{
			path: '/faq',
			name: 'faq',
			component: FaqView
		},
		{
			path: '/masters',
			name: 'masters',
			component: MastersView
		},
		{
			path: '/master',
			name: 'master',
			component: MasterView
		},
		{
			path: '/review',
			name: 'review',
			component: ReviewView
		},
		{
			path: '/review-inside',
			name: 'review-inside',
			component: ReviewInsideView
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsView
		},
		{
			path: '/branches',
			name: 'branches',
			component: BranchesView
		},
		{
			path: '/media/1',
			name: 'media-post',
			component: MediaPostView
		},
		{
			path: '/policy',
			name: 'policy',
			component: PolicyView
		},
		{
			path: '/concepts',
			name: 'concepts',
			component: ConceptsView
		}
	]
})

export default router
