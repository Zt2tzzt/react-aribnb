import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeaderWrrapper from './style'

const SectionHeader = memo((props) => {
	const { title, subtitle } = props

	return (
		<SectionHeaderWrrapper>
			<h2 className='title'>{title}</h2>
			{subtitle && (
				<div className="subtitle">{subtitle}</div>
			)}
		</SectionHeaderWrrapper>
	)
})

SectionHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}

export default SectionHeader