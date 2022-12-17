import React, { memo } from 'react'
import HeaderWrapper from './style';
import Left from './cpns/left/Left'
import Center from './cpns/center/Center'
import Right from './cpns/right/Right'
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import classNames from 'classnames';

const AppHeader = memo(() => {
	const { headerConfig } = useSelector(state => ({
		headerConfig: state.main.headerConfig
	}), shallowEqual)

	const { isFixed } = headerConfig;

	return (
		<HeaderWrapper className={classNames({fixed: isFixed})} >
			<Left />
			<Center />
			<Right />
		</HeaderWrapper>
	)
})

export default AppHeader