import React, { memo, useEffect } from 'react'
import HomeWrapper from './style'
import Banners from './cpns/banner/Banners'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/features/home'
import SectionV1 from './cpns/section-v1/SectionV1'
import SectionV2 from './cpns/section-v2/SectionV2'
import { isNotEmptyO } from '@/utils'
import Longfor from './cpns/longfor/Longfor'
import SectionV3 from './cpns/section-v3/SectionV3'
import { changeHeaderConfigAction } from '@/store/features/main'


const Home = memo(() => {

	const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector(state => ({
		goodPriceInfo: state.home.goodPriceInfo,
		highScoreInfo: state.home.highScoreInfo,
		discountInfo: state.home.discountInfo,
		recommendInfo: state.home.recommendInfo,
		longforInfo: state.home.longforInfo,
		plusInfo: state.home.plusInfo
	}), shallowEqual)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeDataAction())
		dispatch(changeHeaderConfigAction({ isFixed: true }))
	}, [dispatch])


	return (
		<HomeWrapper>
			<Banners />
			<div className="content">
				{isNotEmptyO(discountInfo) && <SectionV2 infoData={discountInfo} />}
				{isNotEmptyO(recommendInfo) && <SectionV2 infoData={recommendInfo} />}
				{isNotEmptyO(longforInfo) && <Longfor infoData={longforInfo} /> }
				{isNotEmptyO(goodPriceInfo) && <SectionV1 infoData={goodPriceInfo} />}
				{isNotEmptyO(highScoreInfo) && <SectionV1 infoData={highScoreInfo} />}
				{isNotEmptyO(plusInfo) && <SectionV3 infoData={plusInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home