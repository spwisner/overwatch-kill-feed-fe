// external dependencies
import React from 'react'
import styled from '@emotion/styled'
import { ToastContainer } from 'react-toastify'

// stylesheets
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

// components
import Header from './components/Header/index'
import Feed from './components/Feed/index'

// utils
import { COLORS } from './utils/styledHelpers'

const HeaderWrap = styled.header`
	background: ${COLORS.LIGHT_GRAY};
	border-bottom: 1px solid ${COLORS.BORDER_GRAY};
	min-height: 50px;
	padding: 10px 0;
`

function App() {
	return (
		<>
			<HeaderWrap>
				<Header />
			</HeaderWrap>
			<ToastContainer />
			<Feed />
		</>
	)
}

export default App
