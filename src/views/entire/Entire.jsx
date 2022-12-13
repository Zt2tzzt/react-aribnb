import { fetchRoomListAction } from '@/store/features/entire';
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Filter from './cpns/filter/Filter';
import Pagination from './cpns/pagination/Pagination';
import Rooms from './cpns/rooms/Rooms';
import EntireWrapper from './style';

const Entire = memo(() => {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchRoomListAction())
	}, [dispatch])

	return (
		<EntireWrapper>
			<Filter />
			<Rooms />
			<Pagination />
		</EntireWrapper>
	)
})

export default Entire