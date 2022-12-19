import IconSearchBar from '@/assets/svg/IconSearchBar'
import React, { memo, useState } from 'react'
import CenterWrapper from './style'
import PropTypes from 'prop-types'
import searchTitles from '@/assets/data/search_titles' // 模拟从服务器获取搜索框中展示的内容。
import { CSSTransition } from 'react-transition-group'
import SearchTabs from './scps/search-tabs/SearchTabs'
import SearchSection from './scps/search-section/SearchSection'

const Center = memo(props => {
	const { isSearch, handleSearchBarClick } = props

	const [tabIndex, setTabIndex] = useState(0)
	const titles = searchTitles.map(item => item.title)

	const onSearchBtnClick = () => {
		handleSearchBarClick?.()
	}

	return (
		<CenterWrapper>
			<CSSTransition
				in={!isSearch}
				classNames='bar'
				timeout={250}
				unmountOnExit={true}
			>
				<div className="search-bar" onClick={onSearchBtnClick}>
					<div className="text">搜索房源和体验</div>
					<div className="icon">
						<IconSearchBar />
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={isSearch}
				classNames='detail'
				timeout={250}
				unmountOnExit={true}
			>
				<div className="search-detail">
					<SearchTabs titles={titles} tabClick={setTabIndex} />
					<div className="infos">
						<SearchSection searchInfos={searchTitles[tabIndex].searchInfos} />
					</div>
				</div>
			</CSSTransition>
		</CenterWrapper>
	)
})

Center.propTypes = {
	isSearch: PropTypes.bool,
	handleSearchBarClick: PropTypes.func
}

export default Center
