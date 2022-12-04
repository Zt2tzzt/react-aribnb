import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import('@/views/home/Home'))
const Detail = React.lazy(() => import('@/views/detail/Detail'))
const Entire = React.lazy(() => import('@/views/entire/Entire'))

const routes = [
	{
		path: '/',
		element: <Navigate to='/home' />
	},
	{
		path: '/home',
		element: <Home />
	},
	{
		path: '/entire',
		element: <Entire />
	},
	{
		path: '/detail',
		element: <Detail />
	},
]

export default routes