import React, { memo, useEffect, useState } from 'react'
import ztRequest from '@/services'
import AppHeader from '@/components/app-header/AppHeader'

const Home = memo(() => {

	const [highscore, setHighscore] = useState({})


	useEffect(() => {
		ztRequest.get({ url: '/home/highscore' }).then(res => {
			console.log('res:', res);
			setHighscore(res)
		})
	}, [])

	return (
		<div>
			<AppHeader />
			<h1>Home Page</h1>
			{
				highscore.list?.map(item => (
					<li key={item.id}>{item.name}</li>
				))
			}
		</div>
	)
})

export default Home