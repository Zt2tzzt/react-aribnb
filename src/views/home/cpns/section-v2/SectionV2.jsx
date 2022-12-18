import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SectionV2Wrapper from './style';
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRooms from '@/components/section-rooms/SectionRooms'
import SectionTabs from '@/components/section-tabs/SectionTabs'
import SectionFooter from '@/components/section-footer/SectionFooter';

const SectionV2 = memo((props) => {
	const { infoData } = props
	
	// 思路三
	const initialName = Object.keys(infoData.dest_list)[0]
	const [name, setName] = useState(initialName)
	const tabNames = infoData.dest_address.map(item => item.name)

	// 思路二
	/* useEffect(() => {
    setName("xxxxx")
  }, [infoData]) */

	const handleTabClick = useCallback((index, name) => {
		setName(name)
	}, [])


	return (
		<SectionV2Wrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<SectionTabs tabNames={tabNames} handleTabClick={handleTabClick} />
			<SectionRooms roomList={infoData.dest_list[name]} itemWidth='33.33%' />
			<SectionFooter name={name} />
		</SectionV2Wrapper>
	)
})

SectionV2.propTypes = {
	infoData: PropTypes.object
}

export default SectionV2