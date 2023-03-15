import IconArrowLeft from '@/assets/svg/IconArrowLeft'
import IconArrowRight from '@/assets/svg/IconArrowRight'
import Indicator from '@/base-ui/indicator/Indicator'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import RoomItemWrapper from './style'

const RoomItem = memo(props => {
	const { itemData, itemWidth = '25%', handleRoomItemClick } = props
	const [selectIndex, setSelectIndex] = useState(0)

	const sliderRef = useRef()

	const onControlClick = (e, isRight = true) => {
		// 轮播图切换
		isRight ? sliderRef.current.next() : sliderRef.current.prev()
		// 计算最新索引
		let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
		const picsLength = itemData.picture_urls.length
		if (newIndex < 0) newIndex = picsLength - 1
		if (newIndex > picsLength - 1) newIndex = 0
		setSelectIndex(newIndex)

		e.stopPropagation()
	}

	const onRoomItemClick = () => {
		handleRoomItemClick?.(itemData)
	}

	return (
		<RoomItemWrapper
			verifyColor={itemData?.verify_info?.text_color || '#39576a'}
			itemWidth={itemWidth}
			onClick={onRoomItemClick}
		>
			<div className="inner">
				{!itemData.picture_urls ? (
					<div className="cover">
						<img src={itemData.picture_url} alt="" />
					</div>
				) : (
					<div className="slider">
						<div className="control">
							<div className="btn left" onClick={e => onControlClick(e, false)}>
								<IconArrowLeft width="30" height="30" />
							</div>
							<div className="btn right" onClick={e => onControlClick(e, true)}>
								<IconArrowRight width="30" height="30" />
							</div>
						</div>
						<div className="indicator">
							<Indicator selectIndex={selectIndex}>
								{itemData?.picture_urls?.map((item, index) => (
									<div className="item" key={item}>
										<span
											className={`dot ${selectIndex === index ? 'active' : ''}`}
										></span>
									</div>
								))}
							</Indicator>
						</div>
						<Carousel dots={false} ref={sliderRef}>
							{itemData?.picture_urls?.map(item => (
								<div className="cover" key={item}>
									<img src={item} alt="" />
								</div>
							))}
						</Carousel>
					</div>
				)}
				<div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
				<div className="name">{itemData.name}</div>
				<div className="price">￥{itemData.price}/晚</div>
				<div className="bottom">
					<Rating
						value={itemData.star_rating ?? 5}
						precision={0.1}
						readOnly
						sx={{ fontSize: '12px', color: '#00848a', marginRight: '-1px' }}
					/>
					<span className="count">{itemData.reviews_count}</span>
					{itemData.bottom_info && (
						<span className="extra">·{itemData.bottom_info?.content}</span>
					)}
				</div>
			</div>
		</RoomItemWrapper>
	)
})

RoomItem.propTypes = {
	itemData: PropTypes.object,
	itemWidth: PropTypes.string
}
RoomItem.defaultProps = {
	itemWidth: '25%'
}

export default RoomItem
