import React, { memo } from 'react'
import HeaderWrapper from './style';
import Left from './cpns/left/Left'
import Center from './cpns/center/Center'
import Right from './cpns/right/Right'

const AppHeader = memo(() => {
	return (
		<HeaderWrapper>
			<Left />
			<Center />
			<Right />
		</HeaderWrapper>
	)
})

export default AppHeader