import { useState, useEffect, useCallback } from 'react'
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

export const filterUniqueObjVals = (feedData, keyVal) => {
	return feedData.reduce((accumulator, currentItem) => {
		const currentMethod = currentItem[keyVal]
		return accumulator.indexOf(currentMethod) === -1 ? [...accumulator, currentMethod] : accumulator
	}, [])
}

export const filterUniqueUsers = feedData => {
	const sourceUsers = filterUniqueObjVals(feedData, 'source_player_id')
	const targetUsers = filterUniqueObjVals(feedData, 'target_player_id')

	return [...sourceUsers, ...targetUsers].filter((x, i, a) => a.indexOf(x) == i)
}

export const filterDataByUser = (feedData, filterVal) => {
	return feedData.filter(item => {
		return item.source_player_id === filterVal || item.target_player_id === filterVal
	})
}

function useFeed() {
	const [filterData, setFilterData] = useState([])
	const [filterValue, setFilterValue] = useState('all')
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

	const handleFilter = useCallback(
		val => {
			if (val === 'all') {
				setFilterData([])
			} else {
				const dataFiltered = filterDataByUser(feedData, val)
				setFilterData(dataFiltered)
			}

			setFilterValue(val)
		},
		[feedData]
	)

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
	}, [feedDataQueue, filterValue, hasFetchedSuccessfully])

	const handleViewMore = () => {
		setFeedData([...feedDataQueue, ...feedData])
		handleFilter(filterValue)
		setFeedDataQueue([])
	}

	return {
		feedData,
		feedDataQueue,
		filterData,
		filterValue,
		handleFilter,
		handleViewMore,
		hasError,
		hasFetchedSuccessfully,
	}
}

export default useFeed
