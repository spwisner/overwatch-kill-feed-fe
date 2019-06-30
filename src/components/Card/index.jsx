// external dependencies
import React from 'react'
import { number, string } from 'prop-types'
import styled from '@emotion/styled'

// utils
import { PLAYER_IMAGE_MAP, METHOD_COMPONENT_MAP } from '../../utils/maps'
import { COLORS } from '../../utils/styledHelpers'

// components
import ActionIndicator from '../ActionIndicator'
import CharacterColumn from '../CharacterColumn/'
import DamageSummary from '../DamageSummary/'

// styled components
const CardContainer = styled.div`
	background: #f2f1ed;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	max-width: 500px;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	width: 100%;
`

const CardHeader = styled.div`
	align-items: center;
	background: ${COLORS.YELLOW};
	color: white;
	display: flex;
	justify-content: space-between;
	padding: 0 15px;
`

const CardBody = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 20px 0;
`

const MethodText = styled.div`
	font-size: 18px;
`

const propTypes = {
	sourcePlayerId: string.isRequired,
	sourceCharacter: string.isRequired,
	targetPlayerId: string.isRequired,
	targetCharacter: string.isRequired,
	method: string.isRequired,
	damage: number.isRequired,
}

function Card({ sourcePlayerId, sourceCharacter, targetPlayerId, targetCharacter, method, damage }) {
	const targetCharacterImgSrc = PLAYER_IMAGE_MAP[targetCharacter]
	const sourceCharacterImgSrc = PLAYER_IMAGE_MAP[sourceCharacter]
	const MethodComponent = METHOD_COMPONENT_MAP[method]
	return (
		<CardContainer>
			<CardHeader>
				<MethodText>{method}</MethodText>
				<MethodComponent height={40} fill="#fff" />
			</CardHeader>
			<CardBody>
				<CharacterColumn src={sourceCharacterImgSrc} caption={sourceCharacter} player={sourcePlayerId} />
				<ActionIndicator damage={damage}>
					<DamageSummary damage={damage} />
				</ActionIndicator>
				<CharacterColumn src={targetCharacterImgSrc} caption={targetCharacter} player={targetPlayerId} />
			</CardBody>
		</CardContainer>
	)
}

Card.propTypes = propTypes

export default Card
