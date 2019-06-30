import React, { memo } from 'react'
import { number, string } from 'prop-types'

const propTypes = {
	height: number,
	width: number,
	fill: string,
}

const Icicle = ({ width, height, fill }) => (
	<svg className="HeroAbility-icon" viewBox="0 0 40 40" width={width} height={height} fill={fill}>
		<path
			id="_Path_13"
			data-name="&lt;Path&gt;"
			d="M32.57,21.49c.18-.68,1.88-8.08,1.88-8.08l-3-1.58-.55.35-.81,1.35c-.57,1-1.11.8-1.07.63l.71-4.94-.87-1.3H24.56l-1,.58-.73,1.62-.86,1.15-.64.1c-.08.22-1.14-2.15-1.14-2.15H15.8l-.44.52-.61,2.09c0,.22-.78-.28-.75-.46l-.13-.72L12.2,11,9,20l-1.28.93L5.66,28.66a1.55,1.55,0,0,0,1.53,2.09h7.07l2-7.66H14.24c-.48,0-.55-.55-.11-.84L21,17.67a.54.54,0,0,1,.67,0l4.43,4.56c.28.29-.09.84-.56.84H23.47l-2,7.67h6.7A3.91,3.91,0,0,0,31.66,28L33,22.81A1.59,1.59,0,0,1,32.57,21.49Z"
		/>
	</svg>
)

Icicle.propTypes = propTypes

export default memo(Icicle)
