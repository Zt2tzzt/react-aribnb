import ScrollView from '@/base-ui/scroll-view/ScrollView';
import LongforItem from '@/components/longfor-item/LongforItem';
import SectionHeader from '@/components/section-header/SectionHeader';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LongforWrapper from './style';

const Longfor = memo((props) => {
	const { infoData } = props

	return (
		<LongforWrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<div className="longfor-list">
				<ScrollView>
					{infoData.list.map(item => (
						<LongforItem itemData={item} key={item.city} />
					))}
				</ScrollView>
			</div>
		</LongforWrapper>
	)
})

Longfor.propTypes = {
	infoData: PropTypes.object
}

export default Longfor