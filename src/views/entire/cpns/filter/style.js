import styled from 'styled-components'

const FilterWrapper = styled.section`
	position: fixed;
	top: 80px;
	left: 0;
	right: 0;
	z-index: 99;
	display: flex;
	align-items: center;
	height: 48px;
	padding-left: 16px;
	border-bottom: 1px #f2f2f2 solid;
	background-color: #fff;

	.item {
		margin: 0 4px 0 8px;
		padding: 6px 12px;
		border: 1px #dce0e0 solid;
		border-radius: 4px;
		color: #484848;
		cursor: pointer;

		&.active {
			background: #008489;
			border: 1px #008489 solid;
			color: #fff;
		}
	}
`

export default FilterWrapper
