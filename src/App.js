import React from 'react'
import './App.css'
import Header from './components/Header/index'
import Feed from './components/Feed/index'
import { COLORS } from './utils/styledHelpers'
import styled from '@emotion/styled'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
			<ToastContainer />
			<Feed />
		</div>
	)
}

export default App
