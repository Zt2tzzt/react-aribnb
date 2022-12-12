import IconMoreArrow from '@/assets/svg/IconMoreArrow';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';
import SectionFooterwrapper from './style';

const SectionFooter = memo((props) => {
	const { name } = props

	const showMsg = name ? `显示更多${name}房源` : '显示全部'

	const navigate = useNavigate()
	const onMoreBtnClick = () => navigate('/entire')

	return (
		<SectionFooterwrapper color={name ? '#00848a' : '#000'}>
			<div className="info" onClick={onMoreBtnClick}>
				<span className="text">{showMsg}</span>
				<IconMoreArrow />
			</div>
		</SectionFooterwrapper>
	)
})

SectionFooter.propTypes = {
	name: PropTypes.string
}

export default SectionFooter