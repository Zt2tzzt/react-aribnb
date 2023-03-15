import React, { Fragment, memo, useCallback } from 'react'
import MuiPagination from '@mui/material/Pagination'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import PaginationWrapper from './style'
import { fetchRoomListAction } from '@/store/features/entire'

const Pagination = memo(() => {
	const { roomList, totalCount, currentPage } = useSelector(
		state => ({
			roomList: state.entire.roomList,
			totalCount: state.entire.totalCount,
			currentPage: state.entire.currentPage
		}),
		shallowEqual
	)

	/** 根据总数（totalCount）和当前页（currenPage），计算出总页数（totalPage），开始计数和结束计数。*/
	const totalPage = Math.ceil(totalCount / 20)
	const startCount = currentPage * 20 + 1
	const endCount = (currentPage + 1) * 20

	const dispatch = useDispatch()
	const onPageChange = useCallback((e, pageCount) => {
		window.scrollTo(0, 0) // 回到顶部
		dispatch(fetchRoomListAction(pageCount - 1))
	}, [dispatch])

	return (
		<PaginationWrapper>
			{!!roomList.length && (
				<Fragment>
					<MuiPagination count={totalPage} onChange={onPageChange} />
					<div className="desc">
						第 {startCount} - {endCount} 个房源，共超过 {totalCount}
					</div>
				</Fragment>
			)}
		</PaginationWrapper>
	)
})

export default Pagination
