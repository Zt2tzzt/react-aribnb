import { changeHeaderConfigAction } from '@/store/features/main';
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Pictures from './cpns/Pictures';
import DetailWrapper from './style';

const Detail = memo(() => {
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
	}, [dispatch])

	return (
		<DetailWrapper>
			<Pictures />
		</DetailWrapper>
	)
})

export default Detail