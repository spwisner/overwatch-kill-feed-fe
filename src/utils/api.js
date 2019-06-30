import axios from 'axios'
import { toast } from 'react-toastify'

function handleError(e) {
	if (e.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx

		toast(`Error: ${e.response.data.message}. The feed will automatically refresh in 5 seconds.`)
		return {
			status: 'error',
			message: e.response.data.message,
		}
	} else if (e.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js

		toast(
			`Error: Network error. Please check your connection and try again. The feed will automatically refresh in 5 seconds.`
		)

		return {
			status: 'error',
			message: 'Network error. Please check your connection and try again.',
		}
	} else {
		// Something happened in setting up the request that triggered an Error

		toast(`An unknown error has occurred. The feed will automatically refresh in 5 seconds.`)

		return {
			status: 'error',
			message: 'An unknown error has occurred. Please try again.',
		}
	}
}

export async function getFeed() {
	try {
		const response = await axios({
			method: 'get',
			url: 'http://localhost:9898/api/killfeed',
		})

		return response
	} catch (e) {
		return handleError(e)
	}
}
