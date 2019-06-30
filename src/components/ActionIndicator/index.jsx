// external dependencies
import React from 'react'
import { string, number, node } from 'prop-types'
import styled from '@emotion/styled'

// components
import RightArrow from '../svgs/RightArrow'

// styled components
const ActionContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 75px;
	justify-content: space-around;
	width: 200px;
`

const DamageNumber = styled.span`
	color: ${({ damage }) => (damage > 65 ? 'red' : damage > 30 ? 'orange' : 'green')};
`

const propTypes = {
	children: node.isRequired,
	damage: number.isRequired,
}

function ActionIndicator({ damage, children }) {
	return (
		<ActionContainer>
			<DamageNumber damage={damage}>{damage}</DamageNumber>
			<RightArrow height={40} />
			{children}
		</ActionContainer>
	)
}

ActionIndicator.propTypes = propTypes

export default ActionIndicator
