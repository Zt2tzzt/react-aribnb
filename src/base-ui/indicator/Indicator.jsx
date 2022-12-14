import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import IndecatorWrapper from './style'

const Indicator = memo((props) => {
	const { selectIndex = 0 } = props
	const contentRef = useRef()

	useEffect(() => {
		// 1.获取 selectIndex 对应的 item
		const selectItemEl = contentRef.current.children[selectIndex]
		const itemLeft = selectItemEl.offsetLeft
		const itemWidth = selectItemEl.clientWidth

		// 2.content 的宽度
		const contentWidth = contentRef.current.clientWidth
		const contentScroll = contentRef.current.scrollWidth

		// 3.获取 selectIndex 要滚动的距离
		let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

		// 特殊情况处理
		// 左边的特殊情况处理
		if (distance < 0) distance = 0

		// 右边的特殊情况处理
		const totalDistance = contentScroll - contentWidth
		if (distance > totalDistance) distance = totalDistance

		// 改变位置即可
		contentRef.current.style.transform = `translate(${-distance}px)`
	}, [selectIndex])

	return (
		<IndecatorWrapper>
			<div className="indicator-content" ref={contentRef}>
				{props.children}
			</div>
		</IndecatorWrapper>
	)
})

Indicator.propTypes = {
	selectIndex: PropTypes.number
}

export default Indicator