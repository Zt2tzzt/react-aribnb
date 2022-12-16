import ScrollView from '@/base-ui/scroll-view/ScrollView';
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import SectionTabsWrapper from './style';

const SectionTabs = memo((props) => {
	const { tabNames, handleTabClick } = props
	const [currentIndex, setCurrentIndex] = useState(0)

	const onTabClick = (index, item) => {
		setCurrentIndex(index)
		handleTabClick(index, item)
	}

	return (
		<SectionTabsWrapper>
			<ScrollView>
				{tabNames.map((item, index) => (
					<button
						className={`item ${index === currentIndex ? 'active' : ''}`}
						onClick={e => onTabClick(index, item)}
						key={index}
					>
						{item}
					</button>
				))}
			</ScrollView>
		</SectionTabsWrapper>
	)
})

SectionTabs.propTypes = {
	tabNames: PropTypes.array
}
SectionTabs.defaultProps = {
	tabNames: []
}

export default SectionTabs