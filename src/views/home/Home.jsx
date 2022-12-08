import React, { memo, useEffect } from 'react'
import AppHeader from '@/components/app-header/AppHeader'
import HomeWrapper from './style'
import Banners from './cpns/Banners'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/features/home'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRooms from '@/components/section-rooms/SectionRooms'

const Home = memo(() => {

	const { goodPriceInfo } = useSelector(state => ({
		goodPriceInfo: state.home.goodPriceInfo
	}), shallowEqual)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeDataAction())
	}, [dispatch])

	return (
		<HomeWrapper>
			<AppHeader />
			<Banners />
			<div className="content">
				<div className="good-price">
					<SectionHeader title={goodPriceInfo.title} />
					<SectionRooms roomList={goodPriceInfo.list} />
				</div>
			</div>
		</HomeWrapper>
	)
})

export default Home