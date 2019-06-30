import React from 'react'
import './App.css'
import Header from './components/Header'
import { COLORS } from './utils/styledHelpers'
import styled from '@emotion/styled'

const HeaderWrap = styled.header`
	background: ${COLORS.LIGHT_GRAY};
	border-bottom: 1px solid ${COLORS.BORDER_GRAY};
	min-height: 50px;
	padding: 10px 0;
`

function App() {
	return (
		<div>
			<HeaderWrap>
				<Header />
			</HeaderWrap>
		</div>
	)
}

export default App
