import React, { memo, useState } from 'react'
import FilterWrapper from './style';
import filterData from '@/assets/data/filter_data'

const Filter = memo((props) => {
	const [selectItems, setSelectItems] = useState([]) // 选中的过滤条件

	const onItemClick = item => {
		const newItems = [...selectItems]

		if (newItems.includes(item)) {
			const index = newItems.findIndex(ele => ele === item )
			newItems.splice(index, 1)
		} else {
			newItems.push(item)
		}

		setSelectItems(newItems)
	}

	return (
		<FilterWrapper>
			{filterData.map(item => (
				<div
					className={`item ${selectItems.includes(item) ? 'active' : ''}`}
					key={item}
					onClick={e => onItemClick(item)}
				>
					{item}
				</div>
			))}
		</FilterWrapper>
	)
})


export default Filter