import styled from 'styled-components'

const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	height: 80px;
	border: 1px #eee solid;
	background-color: #fff;

	&.fixed {
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		right: 0;
	}
`

export default HeaderWrapper