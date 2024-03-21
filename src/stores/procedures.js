import { defineStore } from 'pinia'
import { getProcedures } from '../api/getProcedures'

export const useProceduresStore = defineStore('procedures', {
	state: () => ({
		proceduresApiId: '0',
		procedures: [],
		categories: []
	}),
	actions: {
		async getCategories() {
			const data = await getProcedures(this.proceduresApiId)
			data.categories.splice(0, 0, { id: '0', title: 'Все' })
			this.categories = data.categories
		},
		async getProcedures() {
			const data = await getProcedures(this.proceduresApiId)
			this.procedures = data.procedures
		},
		changeProceduresApiId(id) {
			this.proceduresApiId = id
			this.getProcedures()
		}
	}
})

useProceduresStore().getCategories()
useProceduresStore().getProcedures()
