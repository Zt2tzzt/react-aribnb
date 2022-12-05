import React, { memo } from 'react'
import LeftWrapper from './style'
import IconLogo from '@/assets/svg/IconLogo'

const left = memo(() => {
	return (
		<LeftWrapper>
			<div className="logo">
				<IconLogo />
			</div>
		</LeftWrapper>
	)
})

export default left