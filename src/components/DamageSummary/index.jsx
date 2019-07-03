// external dependencies
import React from 'react'
import styled from '@emotion/styled'
import { number } from 'prop-types'

import { DAMAGE_THRESHOLD } from '../../utils/maps'

const propTypes = {
	damage: number.isRequired,
}

const SummaryText = styled.div`
	font-size: 14px;
`

function DamageSummary({ damage }) {
	const calculateSummary = damage => {
		if (damage < DAMAGE_THRESHOLD.MEDIUM) {
			return 'Light'
		} else if (damage < DAMAGE_THRESHOLD.HEAVY) {
			return 'Medium'
		} else {
			return 'Heavy'
		}
	}

	return <SummaryText>{calculateSummary(damage)} Damage</SummaryText>
}

DamageSummary.propTypes = propTypes

export default DamageSummary
