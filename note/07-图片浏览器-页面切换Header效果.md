# 一、Detail 页面

## 1.Pictrues 组件

创建 `<Pictures>` 组件，在 `Detail.jsx` 中引入。

src\views\detail\Detail.jsx

```jsx
const Detail = memo(() => {
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
	}, [dispatch])

	return (
		<DetailWrapper>
			<Pictures />
		</DetailWrapper>
	)
})
```

### 1.PictureBrowser 组件

在 `Pictures.jsx` 中创建 `<PictureBrowser>` 组件。

当图片浏览器展示时，页面右测滚动条消失。编写如下 js 代码。

src\base-ui\picture-browser\PictureBrowser.jsx

```js
useEffect(() => {
	document.body.style.overFlow = 'hidden'
	return () => {
		document.body.style.overflow = 'auto'
	}
}, [])
```

在 `PictureBrowser.jsx` 中，编写右上方关闭按钮。

src\base-ui\picture-browser\PictureBrowser.jsx

```jsx
<div className="top">
	<div className="close-btn" onClick={onCloseBtnClick}>
		<IconClose />
	</div>
</div>
```

使用 flex 布局，上下固定宽度，中间使用 `flex: 1`。

```less
import styled from 'styled-components'

const PictureBrowsderWrapper = styled.section`
	display: flex;
	flex-direction: column;

	.top {
		height: 86px;
	}

	.slider {
		flex: 1;
	}

	.preview {
		height: 100px;
	}
`
```

在 `PictureBrowser.jsx` 中，使用 `<img>` + 动画组件，进行图片浏览。

src\base-ui\picture-browser\PictureBrowser.jsx

```jsx
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
```

src\base-ui\picture-browser\style.js

```css
img {
	user-select: none;
	object-fit: contain;
}

/* 动画的样式 */
.pic-enter {
	transform: translateX(${props => (props.isNext ? '100%' : '-100%')});
	opacity: 0;
}

.pic-enter-active {
	transform: translateX(0);
	opacity: 1;
	transition: all 100ms ease;
}

.pic-exit {
	opacity: 1;
}

.pic-exit-action {
	opacity: 0;
	transform: all 100ms ease;
}
```

> 【注意】：此处不使用轮播图，因为图片的宽高不固定。

使用 *react-group-transition* 给图片切换设置动画。

```shell
pnpm add react-group-transition
```

#### 1.预览图片区域编写

应用之前封装好的 `<Indicator>` 组件。当 `<Indicator>` 点击时，判断切换图片的动画执行的方向。

src\base-ui\picture-browser\PictureBrowser.jsx

```js
const onBottomItemClick = index => {
	setIsNext(index > currentIndex)
	setCurrentIndex(index)
}
```

```jsx
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
```

编写下方预览图片区域，隐藏和显示的功能切换，并添加动画。

src\base-ui\picture-browser\PictureBrowser.jsx

```jsx
<PictureBrowsderWrapper isNext={isNext} showList={showList}>
	{/* ... */}
	<div className="toggle" onClick={e => setshowList(!showList)}>
		<span>{showList ? '隐藏' : '显示'}图片列表</span>
		{showList ? (
			<IconTriangleArrowBottom />
		) : (
			<IconTriangleArrowTop />
		)}
	</div>
	{/* ... */}
</PictureBrowsderWrapper>
```

src\base-ui\picture-browser\style.js

```css
.list {
	margin-top: 3px;
	overflow: hidden;
	transition: height 300ms ease;
	height: ${props => props.showList ? '67px' : '0'};
}
```

# 二、AppHeader 组件

在 store 中编写 main 模块，在其中维护 header 的状态。

src\store\features\main.js

```js
import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
	name: 'main',
	initialState: {
		headerConfig: {
			isFixed: false,
			topAlpha: false
		}
	},
	reducers: {
		changeHeaderConfigAction(state, { payload }) {
			state.headerConfig = payload
		}
	}
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
```

> 【注意】：路由的异步加载。在 `index.js` 中，将 `<Provider>` 放在 `<HashRouter>` 外层。

src\index.js

```jsx
//...
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<HashRouter>
				<Suspense fallback="loading...">
					<App />
				</Suspense>
			</HashRouter>
		</ThemeProvider>
	</Provider>
	// </React.StrictMode>
)
```

在三个页面中（`Home.jsx`、`Entire.jsx`、`Detail.jsx`）设置状态；

控制切换不同页面页时 `<AppHeader>` 是否 fixed。

在 `Home.jsx` 页面在，将 `<AppHeader>` 设置为 fixed 定位，派发 action。

src\views\home\Home.jsx

```js
const dispatch = useDispatch()
useEffect(() => {
	dispatch(fetchHomeDataAction())
	dispatch(changeHeaderConfigAction({ isFixed: true }))
}, [dispatch])
```

src\components\app-header\AppHeader.jsx

```jsx
const AppHeader = memo(() => {

//...
const { headerConfig } = useSelector(state => ({
	headerConfig: state.main.headerConfig
}), shallowEqual)

const { isFixed } = headerConfig;

return (
    <HeaderWrapper className={classNames({fixed: isFixed})} >
      {/* ... */}
    </HeaderWrapper>
	)
}
```

1. 当修改 main store 中的 `headerConfig` 配置时，可能会出现页面中 `useEffect` 没有监听到的情况。
2. 这是因为最外层 `<Suspense>` 组件在 `<Provider>` 外。
3. 造成状态改变后，文件才被异步加载下来，而应用状态的页面（如 `AppHeader.jsx`），本身不监听（subscribe）store 的变化。

> 【注意】：路由的异步加载，会造成父组件（如 `App.jsx`）被渲染2次。

# 三、App 页面

监听路径切换，页面滚动到最顶部。

在 `App.jsx` 中进行设置。将逻辑抽取成一个 Hook，`useScrollTop`。

src\App.jsx

```jsx
useScrollTop()
```

src\hooks\useScrollTop.js

```js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop() {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])
}
```
