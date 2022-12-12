# SectionTabs 组件滚动效果实现（难点）。

封装一个组件 ScrollView，在其中实现左右两边按钮和滚动效果。

- 右边按钮，当内容宽度（scrollWidth）大于组件宽度（clientWidth）时。显示。（注意事项：DOM 元素的 offsetLeft 相对于谁？）
	- 使用 ref 记录可滚动的距离，和滚动 item 的索引。
- 左边按钮：只要往右边滚动了，就显示左边按钮。

滚动的内容由外界传入。

src\base-ui\scroll-view\ScrollView.jsx

# 编写 LongFor 组件。（样式难点）

在其中应用 ScrollView 组件。封装 LongForItem 组件。

src\components\longfor-item\LongforItem.jsx

# 封装 HomeSectionV3 组件，在其中展示 Home Plus 数据。

RoomItem 的 flex-shrink 为 0，才能正确展示宽度。

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

# 在 SectionFooter 中进行跳转。	

跳转到 entire 页面。

src\components\section-footer\SectionFooter.jsx

```jsx
const navigate = useNavigate()
const onMoreBtnClick = () => navigate('/entire')
```

