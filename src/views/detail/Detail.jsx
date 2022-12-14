import React, { memo } from 'react'
import Pictures from './cpns/Pictures';
import DetailWrapper from './style';

const Detail = memo(() => {
	return (
		<DetailWrapper>
			<Pictures />
		</DetailWrapper>
	)
})

export default Detail