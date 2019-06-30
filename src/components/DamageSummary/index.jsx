// external dependencies
import React from 'react'
import styled from '@emotion/styled'
import { number } from 'prop-types'

const propTypes = {
	damage: number.isRequired,
}

const SummaryText = styled.div`
	font-size: 14px;
`

function DamageSummary({ damage }) {
	const calculateSummary = damage => {
		if (damage < 25) {
			return 'Light'
		} else if (damage < 75) {
			return 'Medium'
		} else {
			return 'Heavy'
		}
	}

	return <SummaryText>{calculateSummary(damage)} Damage</SummaryText>
}

DamageSummary.propTypes = propTypes

export default DamageSummary
