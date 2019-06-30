// external dependencies
import React from 'react'
import styled from '@emotion/styled'

// components
import Card from '../Card'

const TEST_DATA = [
	{
		platform: 'pc',
		region: 'us',
		source_player_id: 'Hegpetz#123',
		source_character: 'Winston',
		target_player_id: 'DietCokeIsEvil#321',
		target_character: 'Zenyatta',
		method: 'Tesla Cannon',
		damage: 15,
	},
	{
		platform: 'pc',
		region: 'us',
		source_player_id: 'Jimmy#222',
		source_character: 'Zenyatta',
		target_player_id: 'DietCokeIsEvil#321',
		target_character: 'Mei',
		method: 'Cryo-Freeze',
		damage: 50,
	},
]

// styled components
const CardsContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`

function Feed() {
	const feed = TEST_DATA.map((item, i) => {
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
			<CardsContainer>{feed}</CardsContainer>
		</>
	)
}

export default Feed
