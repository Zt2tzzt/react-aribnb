import { getEntireRoomList } from '@/services/features/entire'
import * as actionType from './constants';

export const changeRoomListAction = roomList => ({
	type: actionType.CHANGE_ROOM_LIST,
	roomList
})
export const changeCurrentPageAction = currentPage => ({
	type: actionType.CHANGE_CURRENT_PAGE,
	currentPage
})
export const changeTotalCountAction = totalCount => ({
	type: actionType.CHANGE_TOTAL_COUNT,
	totalCount
})
export const changeIsLoadingAction = isLoading => ({
	type: actionType.CHANGE_IS_LOADING,
	isLoading
})

export const fetchRoomListAction = (page = 0) => (dispatch, getState) => {
	dispatch(changeCurrentPageAction(page))

	dispatch(changeIsLoadingAction(true)) // 改 Loading 状态

	getEntireRoomList(page * 20).then(res => {
		console.log('EntireRooms res:', res)

		dispatch(changeRoomListAction(res.list))
		dispatch(changeTotalCountAction(res.totalCount))

		dispatch(changeIsLoadingAction(false)) // 改 Loading 状态
	})
}