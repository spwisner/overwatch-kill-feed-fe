import axios from 'axios'

function handleError(e) {
	let error = {
		hasError: true,
		status: null,
		message: null,
	}

	if (e.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(e.response)
		console.log(e.response)
		return {
			status: 'error',
			message: e.response.data.message,
		}
	} else if (e.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js

		return {
			status: 'error',
			message: 'Network error. Please check your connection and try again.',
		}
	} else {
		// Something happened in setting up the request that triggered an Error
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
