import React, { memo } from 'react'
import { number, string } from 'prop-types'

const propTypes = {
	height: number,
	width: number,
	fill: string,
}

const RightArrow = ({ width = 100, height = 45, fill = '#000' }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width={width} height={height}>
		<path
			d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"
			transform="matrix(1 0 0 -1 0 1008)"
		/>
	</svg>
)

RightArrow.propTypes = propTypes

export default memo(RightArrow)
