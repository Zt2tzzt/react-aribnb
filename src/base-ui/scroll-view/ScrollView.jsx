import IconArrowLeft from '@/assets/svg/IconArrowLeft'
import IconArrowRight from '@/assets/svg/IconArrowRight'
import React, { memo, useEffect, useRef, useState } from 'react'
import ScrollViewWrapper from './style'

const ScrollView = memo((props) => {
	const { children } = props

	const [showLeft, setShowLeft] = useState(false)
	const [showRight, setShowRight] = useState(false)

	const posIndex = useRef(0) // 滚动到左侧对齐哪个 item 的索引
	const totalDistanceRef = useRef() // 用于记录可滚动的距离
	
	const scrollContentRef = useRef()

	/** 组件渲染完成，判断是否显示右侧按钮 */
	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
		const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
		const totalDistance = scrollWidth - clientWidth

		totalDistanceRef.current = totalDistance
		setShowRight(totalDistance > 0)
	}, [children])

	const onControlBtnClick = isRight => {
		const newIndex = isRight ? ++posIndex.current : --posIndex.current
		const newEl = scrollContentRef.current.children[newIndex]
		const newOffsetLeft = newEl.offsetLeft // offsetLeft 相对于最近的定位元素
		scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`

		setShowRight(totalDistanceRef.current > newOffsetLeft)
		setShowLeft(newOffsetLeft > 0)
	}


	return (
		<ScrollViewWrapper>

			{showLeft && (
				<div className="control left" onClick={e => onControlBtnClick(false)}>
					<IconArrowLeft />
				</div>
			)}
			{showRight && (
				<div className="control right" onClick={e => onControlBtnClick(true)}>
					<IconArrowRight />
				</div>
			)}

			<div className="scroll">
				<div className="scroll-content" ref={scrollContentRef}>
					{children}
				</div>
			</div>
		</ScrollViewWrapper>
	)
})


export default ScrollView