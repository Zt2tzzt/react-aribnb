# Header 封装，两种思路

思路一：3个页面（Detail/Entire/Home），分别引用3个 Header 实例。

思路二：3个页面（Detail/Entire/Home），全部应用1个 Header 实例，在该实例中做控制。

项目中采用思路二

# 使用 CSS IN JS 的方式来编写样式。

安装 style-component

Left、right 设置 flex: 1，center 由内容撑开，这样保证 center 居中。

# 搭建 Left 页面（SVG 的使用）

svg 可用于做优化，通过链接获取图片，使得网站加载的静态资源变小。

- 引入 svg 的2种方式。
	1. 将 svg 单独拿出来，作为一个 .svg 文件，在项目中引入（如在 `<img>`、`backgroud-img: url()` 中引入）
	2. 直接将 svg 标签放入到 html 中，好处是加载静态页面时，会将 svg 一同加载下来，无需发送多余的请求加载图片。
- 项目中采用第二种方式，将 svg 嵌入到网页中，即把 svg 封装成一个 jsx 组件，
	- 注意：要修改 svg 标签上的 style 属性，使用对象写法。为 style 字符串转对象，去网上找一个封装好的工具。(src\assets\svg\utils\index.js)
	- svg 放入 jsx 中，有些属性使用“-”的，需要改成驼峰形式。
	- svg 内部使用了 currentColor，会引用离它最近的父元素的 color

# 管理项目中主题色的2种方案：

方案一：使用 CSS 特性管理，如 `:root { --primary-color: #ff385c; }`，使用时 `color: var(--primary-color);` 这样使用。

方案二：利用 styled-components 的 ALL IN JS 的特性，使用 JS 进行管理。
- 使用 ThemeProvider 管理主题样式。(src\assets\theme\index.js)
- 参考 AntDesign 有哪些样式能设置为主题。

src\assets\theme\index.js

```js
const theme = {
	color: {
		primary: '#ff385c',
		secondary: '#00848a'
	},
	text: {
		primary: '#484848',
		secondary: '#222'
	}
}

export default theme

```



# 编写 header right 区域，

将阴影动画效果抽取并混入，实现复用的效果。

src\assets\theme\index.js

```js
const theme = {
	color: {
		primary: '#ff385c',
		secondary: '#00848a'
	},
	text: {
		primary: '#484848',
		secondary: '#222'
	},
	mixin: {
		boxShadow: `
			transition: box-shadow 200ms ease;
			&:hover {
				box-shadow: 0 2px 4px rgba(0,0,0,.18);
			}
		`
	}
}

export default theme

```



# 编写 header center 区域

定义全局的字体大小样式。(src\assets\css\common.less)

# 编写 header right 中 Profile 里的 Pannel 组件，

弹出框 popover 一般会加蒙版，监听蒙版点击，弹出框消失。

而项目中，是监听的 window 窗口点击，Profile 消失。

src\components\app-header\cpns\right\Right.jsx

```js
useEffect(() => {
  function windowClickHandle() {
    setShowPanel(false)
  }
  window.addEventListener('click', windowClickHandle, true) // 使用捕获
  return () => {
    window.removeEventListener('click', windowClickHandle, true)
  }
}, [])
```



# Home Banner 区域编写

webpack 项目环境下，编写样式时，`backgroud: url()` 和编写 jsx 时 `<img src="">` 中动态的引入一张本地图片，路径应该如何写。

```jsx
import coverImg from '@/assets/img/cover_01.jpeg'

<img src={coverImg} />
```

src\views\home\cpns\style.js

```jsx
import styled from "styled-components";
import coverImg from '@/assets/img/cover_01.jpeg'

const BannersWrapper = styled.div`
	height: 529px;
	background: url(${coverImage}) center/cover;
`
```

或者

```js
import styled from "styled-components";

const BannersWrapper = styled.div`
	height: 529px;
	background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`
export default BannersWrapper
```

