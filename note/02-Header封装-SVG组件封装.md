# 一、Header 封装思路

两种思路

思路一：3个页面（Detail / Entire / Home），分别引用三个 Header 实例。

思路二：3个页面（Detail / Entire / Home），全部引用一个 Header 实例，在该实例中做控制。

项目中采用思路二

# 二、AppHeader 页面

使用 CSS IN JS 的方式来编写样式。

安装 `style-component`

```shell
npm install styled-components
```

在 `AppHeader.jsx` 中。设置样式。

`<Left>`、`<Right>` 设置 `flex: 1`，

`<Center>` 由内容撑开，这样保证 center 居中。

src\components\app-header\style.js



## 1.Left 组件

SVG 的使用：

svg 可用于做优化，通过链接获取图片，使得网站加载的静态资源变小。

引入 svg 的2种方式。
1. 在项目中引入 .svg 文件，如在 `<img>`、`backgroud-img: url()` 中引用。
2. 将 `<svg>` 标签放入到 html 代码中。
   - 好处是，加载静态页面时，会将 `<svg>` 一同加载下来，无需发送多余的请求加载图片。

项目中采用第二种方式，将 `<svg>` 嵌入到网页中，即把 `<svg>` 封装成一个 jsx 组件，

注意：要修改 `<svg>` 标签上的 `style` 属性

- 使用对象写法。将其中的字符串转对象。
- 去网上找一个封装好的工具，放在 `src\assets\svg\utils\index.js` 中

`<svg>` 放入 jsx 中，有些属性，如 `style` 使用连字符的，需要改成驼峰形式。

`<svg>` 内部使用了 `currentColor`，会引用离它最近的父元素的 `color`

src\components\app-header\cpns\left\Left.jsx

```jsx
<LeftWrapper>
  <Link className="logo" to='/home'>
  {/* <div className="logo" onClick={onLogoClick}> */}
    <IconLogo  />
  {/* </div> */}
  </Link>
</LeftWrapper>
```

src\assets\svg\IconLogo.jsx

## 2.项目主题管理方案（补充）

管理项目中主题色的2种方案：

方案一：使用 CSS 特性管理，

- 如在全局定义 CSS 变量`:root { --primary-color: #ff385c; }`
- 使用时 `color: var(--primary-color);`

方案二：利用 *styled-components* 的 ALL IN JS 的特性，使用 JS 进行管理。
- 使用 `<ThemeProvider>` 管理主题样式。
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

## 3.Right 组件

在 `AppHeader.jsx` 中，使用封装好的 `<Right>` 组件。

src\components\app-header\cpns\right\Right.jsx

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

### 1.Panel 区域

在 `Right.tsx` 中编写 Profile 的 Panel 区域。

弹出框 popover 一般会加蒙版，监听蒙版点击，弹出框消失。

而项目中，是监听的 window 窗口点击，Profile 的 Panel 区域消失。

src\components\app-header\cpns\right\Right.jsx

```jsx
const Right = memo(() => {
	const [showPanel, setShowPanel] = useState(false)

	useEffect(() => {
		function windowClickHandle() {
			setShowPanel(false)
		}
		window.addEventListener('click', windowClickHandle, true) // 使用捕获
		return () => {
			window.removeEventListener('click', windowClickHandle, true)
		}
	}, [])

	const onProfileClick = () => {
		setShowPanel(true)
	}

	return (
		<RightWrapper>
      {/*...*/}

      { showPanel && (
        <div className="panel">
          <div className="top">
            <div className="item register">注册</div>
            <div className="item">登录</div>
          </div>
          <div className="bottom">
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        </div>
      ) }
		</RightWrapper>
	)
})
```

## 4.Center 组件

在 `AppHeader.jsx` 中，使用封装好的 `<Center>` 组件。

src\components\app-header\cpns\center\Center.jsx

定义全局的字体大小样式。

src\assets\css\common.less

```less
body {
	font-size: 14px;
	font-family: "Circular", "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
	color: #484848;
}
```



# 三、home 页面

## 1.Banners 区域

在 `Home.jsx` 中，编写 `<Banner>` 区域，调整它的样式。

webpack 项目环境下，

编写 jsx 时 `<img src="">` 中动态的引入一张本地图片写法。

```jsx
import coverImg from '@/assets/img/cover_01.jpeg'

<img src={coverImg} />
```

编写样式时，`backgroud: url()` 中动态的引入一张本地图片写法

src\views\home\cpns\style.js

```jsx
import styled from "styled-components";
import coverImg from '@/assets/img/cover_01.jpeg'

const BannersWrapper = styled.div`
	height: 529px;
	background: url(${coverImg}) center/cover;
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

