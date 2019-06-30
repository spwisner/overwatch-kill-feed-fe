import React, { memo } from 'react'
import { number, string } from 'prop-types'

const propTypes = {
	height: number,
	width: number,
	fill: string,
}

const OrbOfDiscord = ({ height, width, fill }) => (
	<svg
		className="HeroAbility-icon HeroAbility-icon--hoverState"
		viewBox="0 0 40 40"
		height={height}
		width={width}
		fill={fill}
	>
		<g id="_Group_2" data-name="&lt;Group&gt;">
			<path
				id="_Compound_Path_8"
				data-name="&lt;Compound Path&gt;"
				d="M16.38,32.57c.12-.06.23,0,.38,0-.27-.07-.5-.13-.73-.18a5.81,5.81,0,0,1-1.43-.55s-.12,0-.09-.1.09,0,.13,0a6.63,6.63,0,0,0,2.11.33,8.18,8.18,0,0,0,1.85-.09,4.29,4.29,0,0,0,2.72-1.47,10.54,10.54,0,0,0,.75-1,1.62,1.62,0,0,0,.18-.39l-.07,0A6.63,6.63,0,0,1,20,30.49h0c-.06,0-.14.09-.19,0s.06-.11.11-.15a6.51,6.51,0,0,0,.76-.57,4.72,4.72,0,0,0,1.2-1.55,1.41,1.41,0,0,0,.15-.62,1.62,1.62,0,0,1,.06-.34,2.51,2.51,0,0,0-.07-1,3.29,3.29,0,0,0-1.33-2,6.51,6.51,0,0,0-3-1.33c-1-.17-2.07-.35-3.08-.61a7.83,7.83,0,0,1-4.44-2.79,6,6,0,0,1-1.27-3.27,7.79,7.79,0,0,1,1.88-5.75,6.84,6.84,0,0,1,3.06-2.07,18,18,0,0,1,2.54-.75,11.82,11.82,0,0,1,4.63,0A12.55,12.55,0,0,1,30.19,15a11.41,11.41,0,0,1,1.06,3.8,12.48,12.48,0,0,1-3.16,9.86A12.67,12.67,0,0,1,20,32.77a12.53,12.53,0,0,1-3.4-.12l-.15,0ZM19.68,14h-4c-.18,0-.26,0-.29.23-.17,1-.35,2-.53,3,0,.15,0,.2.17.2h8.15a.18.18,0,0,0,.21-.18c.18-1,.35-2,.54-3,0-.18,0-.21-.19-.21Z"
			/>
		</g>
	</svg>
)

OrbOfDiscord.propTypes = propTypes

export default memo(OrbOfDiscord)