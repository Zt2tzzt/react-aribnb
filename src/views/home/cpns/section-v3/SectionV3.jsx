import ScrollView from '@/base-ui/scroll-view/ScrollView';
import RoomItem from '@/components/room-item/RoomItem';
import SectionFooter from '@/components/section-footer/SectionFooter';
import SectionHeader from '@/components/section-header/SectionHeader';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionV3Wrapper from './style';

const SectionV3 = memo((props) => {
	const { infoData } = props;

	return (
		<SectionV3Wrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<div className="room-list">
				<ScrollView>
					{infoData.list.map(item => (
						<RoomItem itemData={item} itemWidth="20%" key={item.id} />
					))}
				</ScrollView>
			</div>
			<SectionFooter name="plus" />
		</SectionV3Wrapper>
	)
})

SectionV3.propTypes = {
	infoData: PropTypes.object
}

export default SectionV3