import { useState, useEffect } from 'react'
import { getFeed } from '../utils/api'
import { toast } from 'react-toastify'

function useFeed() {
	const [feedData, setFeedData] = useState([])
	const [feedDataQueue, setFeedDataQueue] = useState([])
	const [hasError, setHasError] = useState(false)
	const [errorStatus, setErrorStatus] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')
	const [hasFetchedSuccessfully, setHasFetchedSuccessfully] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			const response = await getFeed()

			if (response && response.data && response.data.status === 'failed') {
				toast(`Failed: ${response.data.reason}`)
				setHasError(true)
				setErrorStatus(response.data.status)
				setErrorMessage(response.data.reason)
				return
			}

			if (response.status === 'error') {
				setHasError(true)
				setErrorStatus(response.status)
				setErrorMessage(response.message)
				return
			}

			if (response && response.data && response.data.status === 'successful') {
				setHasFetchedSuccessfully(true)
				setFeedData(response.data.payload)
			}
		}

		fetchData()
	}, [setFeedData])

	useEffect(() => {
		const fetchData = async () => {
			const response = await getFeed()

			if (response && response.data && response.data.status === 'failed') {
				toast(`Failed: ${response.data.reason}`)
				setHasError(true)
				setErrorStatus(response.data.status)
				setErrorMessage(response.data.reason)
				return
			}

			if (response.status === 'error') {
				setHasError(true)
				setErrorStatus(response.status)
				setErrorMessage(response.message)
				return
			}

			if (response && response.data && response.data.status === 'successful') {
				console.log('TCL: fetchData -> hasFetchedSuccessfully', hasFetchedSuccessfully)
				if (!hasFetchedSuccessfully) {
					setFeedData([...feedDataQueue, ...response.data.payload])
				} else {
					setFeedDataQueue([...feedDataQueue, ...response.data.payload])
				}

				setHasFetchedSuccessfully(true)
			}
		}

		const timer = setInterval(() => {
			fetchData()
		}, 5000)

		return () => clearTimeout(timer)
	}, [feedDataQueue, hasFetchedSuccessfully])

	const handleViewMore = () => {
		setFeedData([...feedDataQueue, ...feedData])
		setFeedDataQueue([])
	}

	return {
		feedData,
		hasError,
		errorStatus,
		errorMessage,
		feedDataQueue,
		handleViewMore,
		hasFetchedSuccessfully,
	}
}

export default useFeed
