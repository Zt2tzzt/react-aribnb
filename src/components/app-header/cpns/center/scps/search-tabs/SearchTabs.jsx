import classNames from 'classnames';
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import SearchTabsWrapper from './style';

const SearchTabs = memo((props) => {
	const { titles, tabClick } = props
	const [currentIndex, setCurrentIndex] = useState(0);

	const onItemClick = index => {
		setCurrentIndex(index)
		tabClick?.(index)
	}

	return (
		<SearchTabsWrapper>
			{titles.map((item, index) => (
				<div
					className={classNames('item', {active: currentIndex === index})}
					key={item}
					onClick={e => onItemClick(index)}
				>
					<span className="text">{item}</span>
					<span className="bottom"></span>
				</div>
			))}
		</SearchTabsWrapper>
	)
})

SearchTabs.propTypes = {
	titles: PropTypes.array,
	tabClick: PropTypes.func
}

export default SearchTabs