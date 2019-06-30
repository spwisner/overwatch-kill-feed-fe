// external dependencies
import React from 'react'
import { number, node } from 'prop-types'
import styled from '@emotion/styled'

// utils
import { MQ } from '../../utils/styledHelpers'

// components
import RightArrow from '../svgs/RightArrow'

// styled components
const ActionContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	height: 75px;
	justify-content: center;
	width: 200px;

	${MQ.S} {
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
	}
`

const DamageNumber = styled.span`
	color: ${({ damage }) => (damage > 65 ? 'red' : damage > 30 ? 'orange' : 'green')};
`

const ArrowContainer = styled.div`
	transform: rotate(90deg);

	${MQ.S} {
		transform: rotate(0deg);
	}
`

const propTypes = {
	children: node.isRequired,
	damage: number.isRequired,
}

function ActionIndicator({ damage, children }) {
	return (
		<ActionContainer>
			<DamageNumber damage={damage}>{damage}</DamageNumber>
			<ArrowContainer>
				<RightArrow height={40} />
			</ArrowContainer>
			{children}
		</ActionContainer>
	)
}

ActionIndicator.propTypes = propTypes

export default ActionIndicator
