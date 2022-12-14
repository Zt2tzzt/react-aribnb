import RoomItem from '@/components/room-item/RoomItem';
import { changeDetailInfoAction } from '@/store/features/detail';
import React, { memo, useCallback } from 'react'
import { useDispatch, shallowEqual,	useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RoomsWrapper from './style';

const Rooms = memo((props) => {
	const {roomList, totalCount, isLoading} = useSelector(state => ({
		roomList: state.entire.roomList,
		totalCount: state.entire.totalCount,
		isLoading: state.entire.isLoading
	}), shallowEqual)

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleRoomItemClick = useCallback((itemData) => {
		dispatch(changeDetailInfoAction(itemData))
		navigate('/detail')
	}, [navigate, dispatch])

	return (
		<RoomsWrapper>
			<h2 className='title'>{totalCount}多处住所</h2>
			<div className="list">
				{roomList.map(item => (
					<RoomItem
						itemData={item}
						itemWidth='20%'
						key={item.id}
						handleRoomItemClick={handleRoomItemClick}
					/>
				))}
			</div>
			{isLoading && <div className='cover'></div>}
		</RoomsWrapper>
	)
})


export default Rooms