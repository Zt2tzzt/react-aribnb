import SectionFooter from '@/components/section-footer/SectionFooter'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRooms from '@/components/section-rooms/SectionRooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionV1Wrapper from './style'

const SectionV1 = memo((props) => {
	const { infoData } = props

	return (
		<SectionV1Wrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<SectionRooms roomList={infoData.list} />
			<SectionFooter />
		</SectionV1Wrapper>
	)
})

SectionV1.propTypes = {
	infoData: PropTypes.object
}

export default SectionV1
