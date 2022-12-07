import IconSearchBar from '@/assets/svg/IconSearchBar'
import React, { memo } from 'react'
import CenterWrapper from './style'

const Center = memo(() => {
	return (
		<CenterWrapper>
			<div className="search-bar">
				<div className="text">
					搜索房源和体验
				</div>
				<div className="icon">
					<IconSearchBar />
				</div>
			</div>
		</CenterWrapper>
	)
})

export default Center