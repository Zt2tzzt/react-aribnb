import React, { memo, useRef, useState } from 'react'
import HeaderWrapper, { SearchAreaWrapper } from './style'
import Left from './cpns/left/Left'
import Center from './cpns/center/Center'
import Right from './cpns/right/Right'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
	const [isSearch, setIsSearch] = useState(false) // 是否呈现搜索状态

	const { headerConfig } = useSelector(
		state => ({
			headerConfig: state.main.headerConfig
		}),
		shallowEqual
	)

	const { isFixed, topAlpha } = headerConfig

	const { scrollY } = useScrollPosition()
	const prevY = useRef(0) // 记录滚动的位置

	if (!isSearch) prevY.current = scrollY
	if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

	const isAlpha = topAlpha && scrollY === 0

	return (
		<ThemeProvider theme={{ isAlpha }}>
			<HeaderWrapper className={classNames({ fixed: isFixed })}>
				<div className="content">
					<div className="top">
						<Left></Left>
						<Center
							isSearch={isAlpha || isSearch}
							handleSearchBarClick={e => setIsSearch(true)}
						></Center>
						<Right></Right>
					</div>
					<SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
				</div>
				{isSearch && (
					<div className="cover" onClick={e => setIsSearch(false)}></div>
				)}
			</HeaderWrapper>
		</ThemeProvider>
	)
})

export default AppHeader
