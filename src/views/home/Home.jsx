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
		dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
	}, [dispatch])


	return (
		<HomeWrapper>
			<Banners />
			<div className="content">
				{/* 折扣 */}
				{isNotEmptyO(discountInfo) && <SectionV2 infoData={discountInfo} />}
				{/* 推荐 */}
				{isNotEmptyO(recommendInfo) && <SectionV2 infoData={recommendInfo} />}
				{/* 可能想去 */}
				{isNotEmptyO(longforInfo) && <Longfor infoData={longforInfo} /> }
				{/* 高性价比 */}
				{isNotEmptyO(goodPriceInfo) && <SectionV1 infoData={goodPriceInfo} />}
				{/* 高分房源 */}
				{isNotEmptyO(highScoreInfo) && <SectionV1 infoData={highScoreInfo} />}
				{/* Plus 房源 */}
				{isNotEmptyO(plusInfo) && <SectionV3 infoData={plusInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home