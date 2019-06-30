import React, { memo } from 'react'
import { number, string } from 'prop-types'

const propTypes = {
	width: number,
	height: number,
	innerFill: string,
}

const OverwatchLogo = ({ width = '100%', height = '100%', innerFill = '#3B464A' }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.5 279.4" width={width} height={height}>
		<g id="logo--overwatch">
			<path
				fill="#F79D19"
				d="M79,61.1c36.5-27.8,87.1-27.8,123.6,0l25.2-31C176.6-9.8,104.9-9.8,53.7,30L79,61.1z"
			/>
			<path
				fill={innerFill}
				d="M235.6,36.6l-25.2,31.1c33.6,31.4,41.1,81.9,17.9,121.7l-55.5-53.3l-25.9-58.3v88.6l54.9,52.8 c-36.1,26.9-85.7,26.9-121.8,0l54.9-52.7V77.7L108.9,136l-55.5,53.3C30.2,149.6,37.6,99.1,71.2,67.7L45.9,36.6 c-29.3,26.3-46,63.8-46,103.1c0,77,63.1,139.5,140.8,139.5c77.7,0,140.8-62.5,140.7-139.5C281.5,100.4,264.8,62.9,235.6,36.6z"
			/>
			<path
				fill="#fff"
				d="M271.2,217.6h1.4c0.5,0,1.1,0,1.6,0.1c0.3,0,0.6,0.2,0.8,0.4c0.4,0.4,0.7,0.9,0.6,1.5c0.1,0.9-0.5,1.8-1.5,1.9 l2,2.7h-1.8l-1.6-2.5v2.5h-1.5L271.2,217.6z M272.6,218.8v1.7h0.1c0.3,0,0.6,0,0.9-0.1c0.2-0.2,0.4-0.4,0.4-0.7 c0-0.3-0.1-0.5-0.3-0.7c-0.3-0.2-0.6-0.2-0.9-0.2L272.6,218.8z M273.3,226.7c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8 c3.2,0,5.8,2.6,5.8,5.8C279.1,224.2,276.5,226.7,273.3,226.7L273.3,226.7z M278.1,221c0-2.6-2.1-4.8-4.8-4.8 c-2.6,0-4.8,2.1-4.8,4.8c0,2.6,2.1,4.8,4.8,4.8C276,225.7,278.1,223.6,278.1,221C278.1,221,278.1,221,278.1,221L278.1,221z"
			/>
		</g>
	</svg>
)

OverwatchLogo.propTypes = propTypes

export default memo(OverwatchLogo)
