* Header 封装，两种思路
	- 3个页面，分别引用3个 Header 实例。
	- 3个页面，全部应用1个 Header 实例，在该实例中做控制。

* 使用 CSS IN JS 的方式来编写样式。
	- 安装 style-component
	- Left、right 设置 flex: 1，center 由内容撑开，这样保证 center 居中。

* 搭建 Left 页面
	- svg 可用于做优化，通过链接获取图片，使得网站加载的静态资源变小。
	- 引入 svg 的2种方式。
		1. 将 svg 单独拿出来，作为一个图片.svg文件，在项目中引入（在 `<img>`、`backgroud-img: url()` 中引入）
		2. 直接在将 svg 标签放入到 html 中，好处是加载静态页面时，会将 svg 一同加载下来。