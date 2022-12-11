import React, { memo, useEffect } from 'react'
import AppHeader from '@/components/app-header/AppHeader'
import HomeWrapper from './style'
import Banners from './cpns/banner/Banners'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/features/home'
import SectionV1 from './cpns/section-v1/SectionV1'
import SectionV2 from './cpns/section-v2/SectionV2'
import { isNotEmptyO } from '@/utils'
import Longfor from './cpns/longfor/Longfor'


const Home = memo(() => {

	const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo } = useSelector(state => ({
		goodPriceInfo: state.home.goodPriceInfo,
		highScoreInfo: state.home.highScoreInfo,
		discountInfo: state.home.discountInfo,
		recommendInfo: state.home.recommendInfo,
		longforInfo: state.home.longforInfo
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
				{isNotEmptyO(discountInfo) && <SectionV2 infoData={discountInfo} />}
				{isNotEmptyO(recommendInfo) && <SectionV2 infoData={recommendInfo} />}
				{isNotEmptyO(longforInfo) && <Longfor infoData={longforInfo} /> }
				{isNotEmptyO(goodPriceInfo) && <SectionV1 infoData={goodPriceInfo} />}
				{isNotEmptyO(highScoreInfo) && <SectionV1 infoData={highScoreInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home