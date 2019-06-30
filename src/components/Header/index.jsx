// external dependencies
import React from 'react'
import styled from '@emotion/styled'

// utils
import { COLORS } from '../../utils/styledHelpers'

// components
import OverwatchLogo from '../svgs/OverwatchLogo'

// styled components
const HeaderContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-start;
	padding: 0 30px;
`

const LogoContainer = styled.div`
	background-color: ${COLORS.DARK_GRAY};
	width: 40px;
`

const BrandTitle = styled.div`
	color: ${COLORS.TEXT_GRAY};
	font-size: 24px;
	padding-left: 10px;
`

function Header() {
	return (
		<HeaderContainer>
			<LogoContainer>
				<OverwatchLogo innerFill="#fff" />
			</LogoContainer>
			<BrandTitle>Overwatch Kill Feed</BrandTitle>
		</HeaderContainer>
	)
}

export default Header
