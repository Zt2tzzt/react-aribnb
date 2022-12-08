import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './App'
import store from './store'
import theme from '@/assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
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
