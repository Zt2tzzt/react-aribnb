import IconArrowLeft from '@/assets/svg/IconArrowLeft'
import IconArrowRight from '@/assets/svg/IconArrowRight'
import IconClose from '@/assets/svg/IconClose'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import PictureBrowsderWrapper from './style'
import IconTriangleArrowBottom from '@/assets/svg/IconTriangleArrowBottom'
import IconTriangleArrowTop from '@/assets/svg/IconTriangleArrowTop'
import Indicator from '../indicator/Indicator'
import classNames from 'classnames'

const PictureBrowser = memo(props => {
	const { pictureUrls, closeClick, selectIndex } = props

	const [currentIndex, setCurrentIndex] = useState(selectIndex)
	const [showList, setshowList] = useState(true)
	const [isNext, setIsNext] = useState(true)

	useEffect(() => {
		document.body.style.overFlow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	const onCloseBtnClick = () => {
		closeClick?.()
	}

	const onControlBtnClick = (isNext = true) => {
		let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
		if (newIndex < 0) newIndex = pictureUrls.length - 1
		if (newIndex > pictureUrls.length - 1) newIndex = 0

		setCurrentIndex(newIndex)
		setIsNext(isNext)
	}

	const onBottomItemClick = index => {
		setIsNext(index > currentIndex)
		setCurrentIndex(index)
	}

	return (
		<PictureBrowsderWrapper isNext={isNext} showList={showList}>
			<div className="top">
				<div className="close-btn" onClick={onCloseBtnClick}>
					<IconClose />
				</div>
			</div>

			<div className="slider">
				<div className="control">
					<div className="btn left" onClick={e => onControlBtnClick(false)}>
						<IconArrowLeft width="77" height="77" />
					</div>
					<div className="btn right" onClick={e => onControlBtnClick(true)}>
						<IconArrowRight width="77" height="77" />
					</div>
				</div>
				<div className="picture">
					<SwitchTransition mode="out-in">
						<CSSTransition
							key={pictureUrls[currentIndex]}
							classNames="pic"
							timeout={100}
							unmountOnExit={true}
						>
							<img src={pictureUrls[currentIndex]} alt="" />
						</CSSTransition>
					</SwitchTransition>
				</div>
			</div>
			
			<div className="preview">
				<div className="info">
					<div className="desc">
						<div className="count">
							<span>
								{currentIndex}/{pictureUrls.length}
							</span>
							<span>room apartment图片{currentIndex}</span>
						</div>
						<div className="toggle" onClick={e => setshowList(!showList)}>
							<span>{showList ? '隐藏' : '显示'}图片列表</span>
							{showList ? (
								<IconTriangleArrowBottom />
							) : (
								<IconTriangleArrowTop />
							)}
						</div>
					</div>
					<div className="list">
						<Indicator selectIndex={currentIndex}>
							{pictureUrls.map((item, index) => (
								<div
									className={classNames('item', {
										active: currentIndex === index
									})}
									key={item}
									onClick={e => onBottomItemClick(index)}
								>
									<img src={item} alt="" />
								</div>
							))}
						</Indicator>
					</div>
				</div>
			</div>
		</PictureBrowsderWrapper>
	)
})

PictureBrowser.propTypes = {
	pictureUrls: PropTypes.array,
	closeClick: PropTypes.func,
	selectIndex: PropTypes.number
}

export default PictureBrowser
