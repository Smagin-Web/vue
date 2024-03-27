import axios from 'axios'
import { BASE_URL } from './base_url'

export async function getProcedures(id) {
	try {
		const response = await axios.get(BASE_URL + '/procedures/' + id)
		return response.data
	} catch (error) {
		console.error(error)
	}
}