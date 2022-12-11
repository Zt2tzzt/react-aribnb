import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionRoomsWrapper from './style'
import RoomItem from '../room-item/RoomItem';

const SectionRooms = memo((props) => {
	const { roomList, itemWidth } = props

	return (
		<SectionRoomsWrapper>
			{roomList?.slice(0, 8).map(item => (
				<RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
			))}
		</SectionRoomsWrapper>
	)
})

SectionRooms.propTypes = {
	roomList: PropTypes.array,
	itemWidth: PropTypes.string
}
SectionRooms.defaultProps = {
	roomList: [],
}

export default SectionRooms