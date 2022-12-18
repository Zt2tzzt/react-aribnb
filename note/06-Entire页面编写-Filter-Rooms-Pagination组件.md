# entire 页面分为3个区域

filter，rooms 和 pagination（分页）区域。

分别创建3个组件。

src\views\entire\Entire.jsx

# 编写 Flter 组件。

点击 item，样式改变。再次点击，样式消失。

src\views\entire\cpns\filter\Filter.jsx

```jsx
const Filter = memo((props) => {
	const [selectItems, setSelectItems] = useState([]) // 选中的过滤条件

	const onItemClick = item => {
		const newItems = [...selectItems]

		if (newItems.includes(item)) {
			const index = newItems.findIndex(ele => ele === item )
			newItems.splice(index, 1)
		} else {
			newItems.push(item)
		}

		setSelectItems(newItems)
	}

	return (
		<FilterWrapper>
			{filterData.map(item => (
				<div
					className={`item ${selectItems.includes(item) ? 'active' : ''}`}
					key={item}
					onClick={e => onItemClick(item)}
				>
					{item}
				</div>
			))}
		</FilterWrapper>
	)
})
```

# Rooms 中数据管理，2种方案：

方案一：将数据放在 entire 中管理。

方案二：将数据放在 store 中管理。（项目中采用）

src\views\entire\Entire.jsx

```js
const dispatch = useDispatch()
useEffect(() => {
	dispatch(fetchRoomListAction())
}, [dispatch])
```

# 点击 Header 中的 logo，回到首页。

src\components\app-header\cpns\left\Left.jsx

```jsx
<Link className="logo" to='/home'>
	<IconLogo  />
</Link>
```

# 编写 Rooms 区域，

展示 RoomsItem。

src\components\room-item\RoomItem.jsx

为避免图片压缩，在 css 中使用 object-fit 属性。

src\components\room-item\style.js

```less
.cover {
	position: relative;
	box-sizing: border-box;
	padding: 66.66% 8px 0;
	border-radius: 3px;
	overflow: hidden;
	cursor: pointer;

	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
```


# 编写 Pagination 区域（分页设计）。

从 MUI 中引入 Pagination 组件。

在 Pagination 组件上修改主题色。两种方案：

- 方案一：为 MUI 自定义主题，参考[官方文档](https://mui.com/material-ui/customization/palette/)。
- 方案二：覆盖 MUI 的默认主题。（项目中采用）

src\views\entire\cpns\pagination\style.js

```css
.MuiPaginationItem-icon {
		font-size: 24px;
	}

.MuiPaginationItem-page {
	margin: 0 9px;

	&:hover {
		text-decoration: underline;
	}
}

.MuiPaginationItem-page.Mui-selected {
	background-color: #222;
	color: #fff;
}
```

在 Pagination 中应用分页的算法

- 根据总数（totalCount）和每页数量（PageSize），计算出总页数（totalPage），
- 根据当前页（currentPage）计算出当前页数量七时至（startCount）和数量结束值（endCount）。

并调整样式。

src\views\entire\cpns\pagination\Pagination.jsx

```js
const {roomList, totalCount, currentPage} = useSelector(state => ({
	roomList: state.entire.roomList,
	totalCount: state.entire.totalCount,
	currentPage: state.entire.currentPage
}), shallowEqual)

/** 根据总数（totalCount）和当前页（currenPage），计算出总页数（totalPage），开始计数和结束计数。*/ 
const totalPage = Math.ceil(totalCount / 20)
const startCount = currentPage * 20 + 1
const endCount = (currentPage + 1) * 20
```

点击分页器，发送网络请求，获取对应的数据。加载数据时，显示蒙板。

src\views\entire\cpns\pagination\Pagination.jsx

```js
const dispatch = useDispatch()
const onPageChange = (e, pageCount) => {
	window.scrollTo(0, 0) // 回到顶部
	dispatch(fetchRoomListAction(pageCount - 1))
}
```

src\views\entire\cpns\rooms\Rooms.jsx

```jsx
const {roomList, totalCount, isLoading} = useSelector(state => ({
  isLoading: state.entire.isLoading
}), shallowEqual)

{isLoading && <div className='cover'></div>}
```



# 在 RoomItem 上实现轮播图，并加上两个箭头（难点）。

从 AntDesign 中引入轮播图组件 `<Carousel>`。

src\components\room-item\RoomItem.jsx

```js
import { Carousel } from 'antd';
```

在箭头的 jsx 组件中，动态改变箭头大小。

src\components\room-item\RoomItem.jsx

```jsx
<IconArrowLeft width="30" height="30" />
```

为箭头设置布局，所在区域加上阴影。

src\components\room-item\style.js

```less
.slider {
	// ...
}
```

点击按钮，轮播图切换。

src\components\room-item\RoomItem.jsx

```js
const onControlClick = (e, isRight = true) => {
	// 轮播图切换
	isRight ? sliderRef.current.next() : sliderRef.current.prev()
	// 计算最新索引
	let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
  // 边界判断
	const picsLength = itemData.picture_urls.length
	if (newIndex < 0) newIndex = picsLength - 1
	if (newIndex > picsLength - 1) newIndex = 0
	setSelectIndex(newIndex)
  
  e.stopPropagation()
}
```

封装 indicator 组件，点击箭头，指示器和图片切换。

- 在单独的空白页 Demo 中封装好，再放入 RoomItem 中使用。
- 明确移动距离的计算公式。
- 明确什么时候需要移动，什么时候不需要移动。

> 在计算机中，计算乘法相比除法更快。

src\base-ui\indicator\Indicator.jsx

```js
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
```

# 点击 RoomItem，跳转到详情页。

在 Home 页中不跳转，在 Entire 页中跳转。

将详情页中要展示的数据，放在 Redux 中共享，以便传递。

src\components\room-item\RoomItem.jsx

```js
// 从 eniire 中传递过来 handleRoomItemClick
const { itemData, itemWidth = '25%', handleRoomItemClick } = props

const onRoomItemClick = () => {
	handleRoomItemClick?.(itemData)
}
```

src\views\entire\cpns\rooms\Rooms.jsx

```js
const handleRoomItemClick = useCallback((itemData) => {
	dispatch(changeDetailInfoAction(itemData))
	navigate('/detail')
}, [navigate, dispatch])
```

# 编写详情页，编写 Pictures 组件用于展示图片。

src\views\detail\cpns\Pictures.jsx

> CSS 中找选中元素前面的兄弟元素，或父元素，是比较困难的。一般利用 css 的层叠性，解决该问题。

src\views\detail\cpns\style.js

```less
&:hover {
	.cover {
		opacity: 1 !important;
	}

	.item:hover {
		.cover {
			opacity: 0 !important;
		}
	}
}
```



