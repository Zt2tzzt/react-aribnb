import styled from "styled-components";

const IndicatorWrapper = styled.div`
	overflow: hidden;

	.indicator-content {
		display: flex;
		position: relative;
		transition: transform 200ms ease;

		> * {
			flex-shrink: 0;
		}
	}
`

export default IndicatorWrapper