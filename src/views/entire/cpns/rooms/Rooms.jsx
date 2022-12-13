import RoomItem from '@/components/room-item/RoomItem';
import React, { memo } from 'react'
import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux';
import RoomsWrapper from './style';

const Rooms = memo((props) => {
	const {roomList, totalCount, isLoading} = useSelector(state => ({
		roomList: state.entire.roomList,
		totalCount: state.entire.totalCount,
		isLoading: state.entire.isLoading
	}), shallowEqual)

	return (
		<RoomsWrapper>
			<h2 className='title'>{totalCount}多处住所</h2>
			<div className="list">
				{roomList.map(item => (
					<RoomItem
						itemData={item}
						itemWidth='20%'
						key={item.id}
					/>
				))}
			</div>
			{isLoading && <div className='cover'></div>}
		</RoomsWrapper>
	)
})


export default Rooms