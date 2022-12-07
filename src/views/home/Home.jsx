import React, { memo } from 'react'
import AppHeader from '@/components/app-header/AppHeader'
import HomeWrapper from './style'
import Banners from './cpns/Banners'

const Home = memo(() => {

	return (
		<HomeWrapper>
			<AppHeader />
			<Banners />
			<h1>Home Page</h1>
		</HomeWrapper>
	)
})

export default Home