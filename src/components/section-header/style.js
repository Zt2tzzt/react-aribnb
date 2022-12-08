import styled from "styled-components";

const SectionHeaderWrapper = styled.div`
	color: ${props => props.theme.text.secondary};

	.title {
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 16px;
	}

	.subtitle {
		font-style: 16px;
		margin-bottom: 20px;
	}
`

export default SectionHeaderWrapper