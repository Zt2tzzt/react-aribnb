# 一、高评分房源区域编写

封装获取高分房源（hight score）的请求。

在 store 中管理数据。

src\views\home\Home.jsx

```jsx
<div className="high-score">
	<SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle} />
	<SectionRooms roomList={highScoreInfo.list} />
</div>
```

> 【注意】：在 React 中可以方便的动态决定组件排列顺序，Vue 中很麻烦。

# 二、HomeSectionV1 组件抽取

src\views\home\cpns\section-v1\SectionV1.jsx

src\views\home\Home.jsx

```jsx
<div className="content">
	<SectionV1 infoData={goodPriceInfo} />
	<SectionV1 infoData={highScoreInfo} />
</div>
```

# 三、折扣房源区域编写

封装获取折扣（discount）房源的请求。

一行3个 `<RoomItem>`。动态决定该组件的宽度。

src\components\room-item\RoomItem.jsx

```jsx
const { itemData, itemWidth } = props

return (
	<RoomItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'} itemWidth={itemWidth}>
		{/* ... */}
	</RoomItemWrapper>
)
```

src\components\room-item\style.js

```less
const RoomItemWrapper = styled.div`
	box-sizing: border-box;
	width: ${props => props.itemWidth}%;
	padding: 8px;

	/* ... */
`
```

封装一个可以横向滚动的选项卡区域 `<SectionTabs>`。监听选项卡中的 item 点击，改变样式。

src\components\section-tabs\SectionTabs.jsx

```jsx
{tabNames.map((item, index) => (
	<button
		className={`item ${index === currentIndex ? 'active' : ''}`}
		onClick={e => onTabClick(index, item)}
		key={index}
	>
		{item}
	</button>
))}
```

# 四、HomeSectionV2 组件抽取（性能优化）

`HomeSectionV2.jsx` 中有 `<SectionTabs>` 组件，在选项卡中，选中的 tab item，初始化值如何设置？

思路一：取出对象中第一个 key，并设置。

- 错误的做法，第一次渲染对象为空对象，`useState` 初始化了空值。

思路二：使用 `useEffect` 监听 `infoData` 是否改变，并设置新值。

- 这样会造成组件渲染3次。

思路三：当传入的 `infoData` 有值时，再渲染 `<HomeSectionV2>` 组件。（最佳实践）

- 项目中采用。

src\views\home\Home.jsx

```jsx
{isNotEmptyO(discountInfo) && <SectionV2 infoData={discountInfo} />}
```

src\views\home\cpns\section-v2\SectionV2.jsx

```jsx
// 经过 Home 中的校验，传递过来的 infoData 必定为有效值。
const { infoData } = props

// 思路三
const initialName = Object.keys(infoData.dest_list)[0]
const [name, setName] = useState(initialName)
const tabNames = infoData.dest_address.map(item => item.name)

// 思路二
/* useEffect(() => {
	setName("xxxxx")
}, [infoData]) */

const handleTabClick = useCallback((index, name) => {
	setName(name)
}, [])
```

# 五、热门推荐区域编写

 封装获取热门推荐（hotRecommentdist）的网络请求。

 src\views\home\Home.jsx

 ```jsx
{isNotEmptyO(recommendInfo) && <SectionV2 infoData={recommendInfo} />}
 ```

# 六、SectionFooter 组件编写

编写 `<SectionFooter>` 组件，在 `<SectionV2>` 和 `<SectionV1>` 中使用。

展示“显示更多 xxx 房源”

src\components\section-footer\SectionFooter.jsx
