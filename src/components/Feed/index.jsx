// external dependencies
import React from 'react'
import styled from '@emotion/styled'

// components
import Card from '../Card'

// hooks
import useFeed from '../../hooks/useFeed'

// styled components
const CardsContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`

function Feed() {
	const { feedData, hasError, errorStatus, errorMessage } = useFeed()

	const feed = feedData.map((item, i) => {
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
			{hasError ? (
				<div>
					{errorStatus}: {errorMessage}
				</div>
			) : (
				<CardsContainer>{feed}</CardsContainer>
			)}
		</>
	)
}

export default Feed
