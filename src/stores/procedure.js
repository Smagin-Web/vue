import { defineStore } from 'pinia'
import { getProcedureForName } from '../api/getProcedureForName'

export const useProcedureStore = defineStore('procedure', {
	state: () => ({
		procedureName: undefined,
		procedure: []
	}),
	actions: {
		async getProcedureByName(name) {
			this.procedure = await getProcedureForName(name)
			console.log(this.procedure)
		}
	}
})
