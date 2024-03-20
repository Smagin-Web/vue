import axios from 'axios'
import { BASE_URL } from './base_url'

export async function getProcedureForName(name) {
	try {
		const response = await axios.get(BASE_URL + '/procedure/' + name)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
