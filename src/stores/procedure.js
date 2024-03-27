import { defineStore } from 'pinia'
import { getProcedureForName } from '../api/getProcedureForName'

export const useProcedureStore = defineStore('procedure', {
	state: () => ({
		procedureName: undefined,
		procedure: [],
		categories: [],
		badges: []
	}),
	actions: {
		async getProcedureByName(name) {
			const response = await getProcedureForName(name)
			this.procedure = response.procedure
			this.categories = response.categories

			// Логика добавления бейджиков
			const badgesArray = []

			const idConceptsBadgeArray = response.procedure.category_procedures.map(
				item => item.concept_id
			)
			response.categories.map(category => {
				idConceptsBadgeArray.map(id => {
					if (category.concept_id === id) {
						const returnItem = {
							title: category.concept.title,
							color: category.concept.color,
							link: `/concept/${category.concept.slug}`
						}
						return badgesArray.push(returnItem)
					}
				})
			})

			this.badges = badgesArray
		},
		getters: {
			procedureName: state => state.procedureName,
			procedure: state => state.procedure,
			badges: state => state.badges
		}
	}
})
