* entire 页面分为3个区域
	- filter，rooms 和 pagination（分页）区域。
	- 分别创建3个组件。

* 编写 Flter 组件。
	- 点击 item，样式改变。再次点击，样式消失。	

* Rooms 中数据管理，2种方案：
	- 方案一：将数据放在 entire 中管理。
	- 方案二：将数据放在 store 中管理。（项目中采用）

* 点击 Header 中的 logo，回到首页。

* 编写 Rooms 区域，
	- 展示 RoomsItem。
	- 为避免图片压缩，在 css 中使用 object-fit 属性。

* 编写 Pagination 区域。
	- 从 MUI 中引入 Pagination 组件。
	- 在 Pagination 组件上修改主题色。两种方案：
		- 方案一：为 MUI 自定义主题。
		- 方案二：覆盖 MUI 的默认主题。（项目中采用）
	- 在 Pagination 中应用分页的算法（）根据总数和当前页，计算出总页数，并调整样式。
	- 点击分页器，发送网络请求，获取对应的数据。加载数据时，显示蒙板。

* 在 RomItem 上实现轮播图，并加上两个箭头。
	- 从 AntDesign 中引入轮播图组件。
	- 在箭头的 jsx 组件中，动态改变箭头大小。
	- 为箭头设置布局，所在区域加上阴影。
	- 点击按钮，轮播图切换。
	- 封装 indicator 组件，点击箭头，指示器和图片切换。
		- 在单独的空白页 Demo 中封装好，再放入 RoomItem 中使用。

