import axios from 'axios'

const GET_USERS_API = 'https://admin.aivaga.store/api/procedures/'

export async function getProcedures(id) {
	try {
		const response = await axios.get(GET_USERS_API + id)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
