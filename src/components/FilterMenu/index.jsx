import React from 'react'
import styled from '@emotion/styled'

// components
import Dropdown from '../Dropdown'

// hooks
import { filterUniqueUsers } from '../../hooks/useFeed'

const DropdownWrap = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
`

const DropdownTitle = styled.span`
	padding-right: 5px;
`

function FilterMenu({ feedData, feedOptions, handleFilter }) {
	const uniqueUsers = filterUniqueUsers(feedData)

	return (
		<>
			<DropdownWrap>
				<DropdownTitle>Filter By User: </DropdownTitle>
				<Dropdown feedData={feedData} handleChange={handleFilter}>
					{uniqueUsers.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Dropdown>
			</DropdownWrap>
		</>
	)
}

export default FilterMenu
