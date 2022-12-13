import React, { memo } from 'react'
import LeftWrapper from './style'
import IconLogo from '@/assets/svg/IconLogo'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const left = memo(() => {

	// const navigate = useNavigate()
	// const onLogoClick = () =>  navigate('/home')

	return (
		<LeftWrapper>
			<Link className="logo" to='/home'>
			{/* <div className="logo" onClick={onLogoClick}> */}
				<IconLogo  />
			{/* </div> */}
			</Link>
		</LeftWrapper>
	)
})

export default left