import styled from 'styled-components';

const LeftWrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	
	.logo {
		display: block;
		margin-left: 24px;
		color: ${props => props.theme.isAlpha ? '#fff' : props.theme.color.primary};
		cursor: pointer;
	}
`

export default LeftWrapper