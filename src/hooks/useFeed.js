import { useState, useEffect } from 'react'
import { getFeed } from '../utils/api'
import axios from 'axios'

function useFeed() {
	const [feedData, setFeedData] = useState([])
	const [hasError, setHasError] = useState(false)
	const [errorStatus, setErrorStatus] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			const response = await getFeed()

			if (response.status === 'error') {
				setHasError(true)
				setErrorStatus(response.status)
				setErrorMessage(response.message)
				return
			}

			if (response.data && response.data.status === 'failed') {
				setHasError(true)
				setErrorStatus(response.data.status)
				setErrorMessage(response.data.reason)
				return
			}

			if (response.data && response.data.status === 'successful') {
				setFeedData(response.data.payload)
			}
		}

		fetchData()
	}, [setFeedData])

	return {
		feedData,
		hasError,
		errorStatus,
		errorMessage,
	}
}

export default useFeed
