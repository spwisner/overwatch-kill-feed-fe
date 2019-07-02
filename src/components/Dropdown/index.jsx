import React from 'react'

function Dropdown({ filterValue, handleChange, children }) {
	return (
		<select value={filterValue} onChange={e => handleChange(e.target.value)}>
			<option value="all">All</option>
			{children}
		</select>
	)
}

export default Dropdown
