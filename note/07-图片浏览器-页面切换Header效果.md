* 编写图片浏览器 PictureBrowser 组件。
	- 当图片浏览器展示时，滚动条消失。使用 `hidden: overflow`。
	- 编写右上方关闭按钮。
	- 使用 flex 布局，上下固定宽度，中间使用 `flex: 1`。
	- 使用 `<img>` + 动画，进行图片浏览。
	> 不使用轮播图，因为图片的宽高不固定。

* 使用 react-group-transition 给图片切换设置动画。

* 编写下方预览图片的区域。
	- 应用之前封装好的 Indicator 组件。
	- 编写隐藏和显示的功能，并添加动画。
	- 当 Indicator 点击时，判断动画执行的方向。

* 在 store 中编写 main 模块，在其中维护 header 的状态。
	1. 当修改 homeConfig 配置时，可能会出现页面中 useEffect 没有监听到的情况。
	2. 这是因为最外层 `<Suspense>` 组件在 `<Provider>` 外。
	> 路由的异步加载，会在成组件被渲染2次。
	- 设置状态，控制不同页面 Header 是否 fixed。

* 监听路径切换，页面滚动到最顶部。
	- 在 App 中进行设置。
	- 将逻辑抽取成一个 Hook，useScrollTop。


