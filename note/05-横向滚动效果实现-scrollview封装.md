# 一、ScrollView 组件

【注意】：难点，为了达到 `<SectionTabs>` 组件滚动的效果；

封装一个组件 `<ScrollView>`，在其中实现左右两边按钮和滚动效果。

实现思路：

右边按钮，当内容宽度 `scrollWidth` 大于组件宽度 `clientWidth` 时。显示。

- 注意事项：DOM 元素的 `offsetLeft` 相对**最近的定位元素**。

- 使用 `ref` 记录可滚动的距离，和滚动 item 的索引。

左边按钮：只要往右边滚动了，就显示左边按钮。

滚动的内容由外界通过插槽（`children`）传入。

src\base-ui\scroll-view\ScrollView.jsx

```jsx
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
```



# 二、“可能想去”区域编写

在 `Home.jsx` 中，编写 `<LongFor>` 组件.

> 【注意】：`<Longfor>` 组件的样式是难点。

在其中使用封装好的 `<ScrollView>` 组件。用于做滚动效果。

封装 `<LongForItem>` 组件。传入 `<ScrollView>` 中。

src\views\home\cpns\longfor\Longfor.jsx

```jsx
const Longfor = memo((props) => {
	const { infoData } = props

	return (
		<LongforWrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<div className="longfor-list">
				<ScrollView>
					{infoData.list.map(item => (
						<LongforItem itemData={item} key={item.city} />
					))}
				</ScrollView>
			</div>
		</LongforWrapper>
	)
})
```

src\components\longfor-item\LongforItem.js



# 三、”Plus 房源“区域编写

在 `Home.jsx` 中，封装 `<SectionV3>` 组件，在其中展示 Plus 数据。

在 `SectionV3.jsx` 中，使用封装好的 `<RoomItem>` 组件，传入封装好的 `<ScrollView>` 组件中。

> 【注意】：RoomItem 的 flex-shrink 为 0，才能正确展示宽度。

src\views\home\cpns\section-v3\SectionV3.jsx

```jsx
<SectionV3Wrapper>
	<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
	<div className="room-list">
		<ScrollView>
			{infoData.list.map(item => (
				<RoomItem itemData={item} itemWidth="20%" key={item.id} />
			))}
		</ScrollView>
	</div>
	<SectionFooter name="plus" />
</SectionV3Wrapper>
```

# 四、SectionFooter 跳转。	

在 `SectionFooter.jsx` 中，编写”点击跳转“功能，跳转到 `/entire` 页面。

src\components\section-footer\SectionFooter.jsx

```jsx
const navigate = useNavigate()
const onMoreBtnClick = () => navigate('/entire')
```

