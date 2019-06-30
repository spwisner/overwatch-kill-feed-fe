import { useState, useEffect } from 'react'
import { getFeed } from '../utils/api'
import { toast } from 'react-toastify'

async function fetchData({ setHasError, setErrorStatus, setHasFetchedSuccessfully, setData, hasFetchedSuccessfully }) {
	const response = await getFeed()

	if (response && response.data && response.data.status === 'failed') {
		toast(`Failed: ${response.data.reason}.  Page will refresh automatically in 5 seconds.`)
		setHasError(true)
		return
	}

	if (response.status === 'error') {
		setHasError(true)
		return
	}

	if (response && response.data && response.data.status === 'successful') {
		setHasFetchedSuccessfully(true)
		setData(response)
	}
}

function useFeed() {
	const [feedData, setFeedData] = useState([])
	const [feedDataQueue, setFeedDataQueue] = useState([])
	const [hasError, setHasError] = useState(false)
	const [hasFetchedSuccessfully, setHasFetchedSuccessfully] = useState(false)

	useEffect(() => {
		const handleInitSet = response => {
			setHasFetchedSuccessfully(true)
			setFeedData(response.data.payload)
		}

		fetchData({ setHasError, setHasFetchedSuccessfully, setData: handleInitSet, hasFetchedSuccessfully })
	}, [hasFetchedSuccessfully, setFeedData])

	useEffect(() => {
		const handleRefreshDataSet = response => {
			if (!hasFetchedSuccessfully) {
				setFeedData([...feedDataQueue, ...response.data.payload])
			} else {
				setFeedDataQueue([...feedDataQueue, ...response.data.payload])
			}

			setHasFetchedSuccessfully(true)
		}

		const timer = setInterval(() => {
			fetchData({ setHasError, setHasFetchedSuccessfully, setData: handleRefreshDataSet, hasFetchedSuccessfully })
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
		feedDataQueue,
		handleViewMore,
		hasFetchedSuccessfully,
	}
}

export default useFeed
