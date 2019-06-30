// external dependencies
import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

// styled components
const CharacterColumnWrap = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`

const CharacterImage = styled.img`
	height: 100%;
	width: 100%;
`

const ImageContainer = styled.div`
	width: 100px;
`

const Caption = styled.div`
	padding: 5px 0;
`

const Player = styled.div`
	padding: 5px 0;
`

const propTypes = {
	caption: string.isRequired,
	player: string.isRequired,
	src: string.isRequired,
}

function CharacterColumn({ src, caption, player }) {
	return (
		<CharacterColumnWrap>
			<Player>{player}</Player>
			<ImageContainer>
				<CharacterImage src={src} alt={`${caption}-icon`} />
			</ImageContainer>
			<Caption>{caption}</Caption>
		</CharacterColumnWrap>
	)
}

CharacterColumn.propTypes = propTypes

export default CharacterColumn
