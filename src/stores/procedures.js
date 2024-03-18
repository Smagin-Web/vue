import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getProcedures } from '../api/getProcedures'

export const useProceduresStore = defineStore('procedures', {
	state: () => ({
		proceduresApiId: '0',
		procedures: [],
		categories: []
	}),
	actions: {
		async getProcedures() {
			const data = await getProcedures(this.proceduresApiId)
			this.procedures = data.procedures
			this.categories = data.categories
		},
		changeProceduresApiId(id) {
			this.state.proceduresApiId = id
		}
	}
})

useProceduresStore().getProcedures()
