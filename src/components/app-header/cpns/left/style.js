import styled from 'styled-components';

const LeftWrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	color: ${props => props.theme.color.primary};
	
	.logo {
		margin-left: 24px;
		cursor: pointer;
	}
`

export default LeftWrapper