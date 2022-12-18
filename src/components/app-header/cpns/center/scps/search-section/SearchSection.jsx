import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchSectionWrapper from './style'

const SearchSection = memo((props) => {
	const { searchInfos } = props;

	return (
		<SearchSectionWrapper>
			{searchInfos.map((item, index) => (
				<div className="item" key={index}>
					<div className="info">
						<div className="title">{item.title}</div>
						<div className="desc">{item.desc}</div>
					</div>
					{index !== searchInfos.length - 1 && <div className='divider'></div>}
				</div>
			))}
		</SearchSectionWrapper>
	)
})

SearchSection.propTypes = {
	searchInfos: PropTypes.array
}

export default SearchSection