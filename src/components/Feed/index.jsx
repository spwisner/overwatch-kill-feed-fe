// external dependencies
import React from 'react'
import styled from '@emotion/styled'

// utils
import { COLORS } from '../../utils/styledHelpers'

// components
import Card from '../Card'
import FilterMenu from '../FilterMenu'

// hooks
import useFeed from '../../hooks/useFeed'

// styled components
const CardsContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`

const ErrorMessage = styled.div`
	color: red;
	text-align: center;
	margin-top: 20px;
`

const EmptyQueue = styled.div`
	color: green;
	text-align: center;
	margin-top: 10px;
	font-size: 16px;
`

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`

const LoadMoreButton = styled.button`
	background-color: ${COLORS.YELLOW};
	color: ${COLORS.WHITE};
	padding: 12px 24px;
	font-size: 18px;
	margin: 10px 0;

	&:hover {
		cursor: pointer;
		background-color: ${COLORS.YELLOW_HOVER};
	}
`

function Feed() {
	const {
		feedData,
		feedDataQueue,
		filterData,
		filterValue,
		handleFilter,
		handleViewMore,
		hasError,
		hasFetchedSuccessfully,
	} = useFeed()

	// if data filtered, use filterData instead of feedData
	const displayData = filterData.length > 0 ? filterData : feedData

	const feed = displayData.map((item, i) => {
		const { source_player_id, source_character, target_player_id, target_character, method, damage } = item
		return (
			<Card
				key={i}
				sourcePlayerId={source_player_id}
				sourceCharacter={source_character}
				targetPlayerId={target_player_id}
				targetCharacter={target_character}
				method={method}
				damage={damage}
			/>
		)
	})

	return (
		<>
			{/* if initial fetch successful and nothing in feed queue...  */}
			{hasFetchedSuccessfully && feedDataQueue.length === 0 && (
				<EmptyQueue>Congrats! Your feed is all up to date. Will attempt to update in 5 seconds.</EmptyQueue>
			)}

			{feedData && feedData.length > 0 && (
				<FilterMenu feedData={feedData} handleFilter={handleFilter} filterValue={filterValue} />
			)}

			{feedDataQueue.length > 0 && (
				<ButtonContainer>
					<LoadMoreButton onClick={() => handleViewMore()}>
						View {feedDataQueue.length} More {feedDataQueue.length === 1 ? 'Post' : 'Posts'}
					</LoadMoreButton>
				</ButtonContainer>
			)}

			{hasError && !hasFetchedSuccessfully && feedData.length === 0 ? (
				<ErrorMessage>
					An error has occurred on the initial load. The feed will automatically refresh in 5 seconds.
				</ErrorMessage>
			) : (
				<CardsContainer>{feed}</CardsContainer>
			)}
		</>
	)
}

export default Feed
